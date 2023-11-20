'use client';
import ChapterSection from '@/components/ChapterSection';
import { ChapterCardSkeleton } from '@/components/Skeleton';
import { buttonVariants } from '@/components/ui/Button';
import ChapterCard from '@/components/ui/ChapterCard';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ChapterPage = ({ params }) => {
	// const { data: session } = useSession();
	const [novel, setNovel] = useState({
		chapter: [],
	});
	const [newChapter, setNewChapter] = useState({
		chapter_number: null,
		chapter_title: '',
		content: '',
	});
	const [loading, setLoading] = useState({
		loadingChapterSubmit: false,
		loadingChapterCover: true,
	});

	const getChaptersAuthor = async () => {
		try {
			const data = await fetch('/api/chapters', {
				method: 'POST',
				body: JSON.stringify({
					novel_id: parseInt(params.novel_id),
				}),
			});
			const res = await data.json();
			console.log(res);
			setNovel(res.novel);
			setLoading((prev) => ({ ...prev, loadingChapterCover: false }));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// console.log('params', params);
		getChaptersAuthor();
	}, []);

	const handleChapterSubmit = async (e) => {
		e.preventDefault();
		setLoading((prev) => ({ ...prev, loadingChapterSubmit: true }));

		try {
			if (
				!newChapter.chapter_number ||
				!newChapter.chapter_title ||
				!newChapter.content
			) {
				throw new Error('Please fill in all fields');
			}

			const response = await fetch('/api/create-chapter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					novel_id: parseInt(params.novel_id),
					chapter_number: parseInt(newChapter.chapter_number),
					chapter_title: newChapter.chapter_title,
					content: newChapter.content,
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to create chapter');
			}

			const data = await response.json();
			console.log(data);

			// Assuming setNewChapter is a state update function
			setNewChapter({
				chapter_number: null,
				chapter_title: '',
				content: '',
			});

			// Provide user feedback here (e.g., success message, UI update)
		} catch (error) {
			console.error('Error creating chapter:', error.message);
			// Handle error - show user feedback, log, or other actions as needed
		} finally {
			setLoading((prev) => ({ ...prev, loadingChapterSubmit: false }));
		}
	};

	return (
		<div className="space-y-5 md:col-span-2 lg:col-span-3">
			{process.env.NODE_ENV === 'development' && (
				<div>
					{params.novel_id}
					<div className="p-4 border border-primary/40 rounded space-y-2">
						{JSON.stringify(novel)}
					</div>
				</div>
			)}

			<div>
				<h2 className="my-2 text-base">{novel.title || 'My Novels'}</h2>
				<div className="p-4 border border-primary/40 rounded grid grid-cols-1 md:grid-cols-2  gap-2 sm:gap-4 md:gap-5">
					{loading.loadingChapterCover ? (
						new Array(3)
							.fill(0)
							.map((_, i) => <ChapterCardSkeleton key={i} />)
					) : novel.chapter.length !== 0 ? (
						novel.chapter.map((ch) => (
							<ChapterCard
								key={ch.chapter_id}
								title={novel.title}
								chapter_number={ch.chapter_number}
								chapter_title={ch.chapter_title}
							/>
						))
					) : (
						<>No chapters available</>
					)}
				</div>
			</div>

			<div>
				<h2 className="my-2 text-base mt-2">Create a New Chapter</h2>
				<div className="p-4 border border-primary/40 rounded space-y-2">
					<form
						onSubmit={handleChapterSubmit}
						// onSubmit={handleGet}
						className="flex flex-col gap-y-4"
					>
						<input
							type="number"
							onChange={(e) =>
								setNewChapter((prev) => ({
									...prev,
									chapter_number: e.target.value,
								}))
							}
							value={newChapter.chapter_number || ''}
							placeholder="Chapter Number"
							name="chapter_number"
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						<input
							maxLength={100}
							onChange={(e) =>
								setNewChapter((prev) => ({
									...prev,
									chapter_title: e.target.value,
								}))
							}
							value={newChapter.chapter_title}
							placeholder="Chapter Title"
							autoCorrect="false"
							name="chapter_title"
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>

						<textarea
							placeholder="Chapter Content"
							onChange={(e) =>
								setNewChapter((prev) => ({
									...prev,
									content: e.target.value,
								}))
							}
							rows={50}
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						<button
							disabled={loading.loadingChapterSubmit}
							className={cn(
								buttonVariants({ className: 'rounded py-3' })
							)}
						>
							{loading.loadingChapterSubmit ? (
								<Loader2 className="animate-spin" />
							) : (
								<>Add Chapter</>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChapterPage;
