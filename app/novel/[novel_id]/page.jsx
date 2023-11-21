'use client';
import AuthorContainer from '@/components/AuthorContainer';
import Avatar from '@/components/ui/Avatar';
import { buttonVariants } from '@/components/ui/Button';
import CommentContainer from '@/components/ui/CommentContainer';
import Container from '@/components/ui/Container';
import { cn, paraConverter, timeElasped } from '@/lib/utils';
import { Loader2, StarIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Novel = ({ params }) => {
	const [novel, setNovel] = useState(null);
	const { data: session } = useSession();
	const [chapterIndex, setChapterIndex] = useState(0);
	const [feedback, setFeedback] = useState({
		comment: '',
		rating: '',
	});
	const [loading, setLoading] = useState({
		loadingChapterSubmit: false,
	});
	const [currentChapter, setCurrentChapter] = useState({
		chapter_id: 3,
		novel_id: 2,
		chapter_number: 2,
		chapter_title: 'I made momos',
		content: 'Momos are tasty\n',
		created_at: '2023-11-20T15:04:03.734Z',
		updated_at: '2023-11-20T15:04:03.734Z',
	});

	const fetchNovel = async () => {
		const res = await fetch('/api/novels/get-novel', {
			method: 'POST',
			body: JSON.stringify({
				novel_id: params.novel_id,
			}),
		});
		const data = await res.json();
		console.log(data);
		setNovel(data);
		// console.log(data.chapter.length, 'adfadsfadfasdfsdfa')

		if (data.chapter.length !== 0) {
			// console.log(data.chapter[0].chapter_number);
			setChapterIndex(data.chapter[0].chapter_number);
		}
	};
	useEffect(() => {
		fetchNovel();
	}, []);

	const handleCommentSubmit = async (e) => {
		e.preventDefault();
		setLoading((prev) => ({ ...prev, loadingChapterSubmit: true }));

		try {
			if (!feedback.comment && !feedback.rating) {
				setLoading((prev) => ({
					...prev,
					loadingChapterSubmit: false,
				}));
				return;
			} else if (!feedback.rating) {
				const res = await fetch('/api/comment/create', {
					method: 'POST',
					body: JSON.stringify({
						user_id: session.user.user_id,
						novel_id: novel.novel_id,
						comment: feedback.comment,
					}),
				});
			} else if (!feedback.comment) {
				const res = await fetch('/api/rating/create', {
					method: 'POST',
					body: JSON.stringify({
						user_id: session.user.user_id,
						novel_id: novel.novel_id,
						rating: feedback.rating,
					}),
				});
			} else {
				const res = await fetch('/api/comment/create', {
					method: 'POST',
					body: JSON.stringify({
						user_id: session.user.user_id,
						novel_id: novel.novel_id,
						comment: feedback.comment,
					}),
				});
				const res2 = await fetch('/api/rating/create', {
					method: 'POST',
					body: JSON.stringify({
						user_id: session.user.user_id,
						novel_id: novel.novel_id,
						rating: feedback.rating,
					}),
				});
			}
			setFeedback({ comment: '', rating: '' });
		} catch (error) {
			console.log(error);
		} finally {
			setLoading((prev) => ({ ...prev, loadingChapterSubmit: false }));
		}
	};

	useEffect(() => {
		if (novel) {
			const currentCh = novel.chapter.find(
				(ch) => ch.chapter_number === chapterIndex
			);
			setCurrentChapter(currentCh);
		}
	}, [chapterIndex]);

	if (novel) {
		return (
			<Container>
				<div className="order-b border-primary/40 py-1 mb-3 flex items-center gap-x-4">
					<h1 className="text-foreground text-3xl font-semibold">
						{novel.title}
					</h1>
				</div>
				<div className="text-foreground mb-20 grid grid-cols-1 w-full lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
					<div className="flex gap-5 flex-col sm:flex-row lg:flex-col">
						<Image
							src={novel.cover}
							alt={novel.title}
							width={800}
							height={1000}
							className="aspect-[2/3] rounded h-[300px] w-[200px] md:w-full lg:w-full"
						/>
						<div className="flex-grow space-y-4">
							<div>
								<h2 className="my-2 text-base">Summary</h2>
								<p className="text-xs">
									{novel.summary || 'No summary found'}
								</p>
							</div>
							<div>
								<h2 className="my-2 text-base">Chapters</h2>
								<div className="p-4 w-full border border-primary/40 rounded space-y-2">
									<div className="flex gap-3">
										{novel.chapter.length === 0 ? (
											<p className="text-xs">
												No Chapters Found
											</p>
										) : (
											novel.chapter.map((ch) => (
												<button
													key={ch.chapter_id}
													onClick={() =>
														setChapterIndex(
															ch.chapter_number
														)
													}
													className={cn(
														buttonVariants({
															size: 'icon',
															className: `${
																ch.chapter_number ===
																	chapterIndex &&
																'border-primary border text-primary font-semibold'
															}`,
														})
													)}
													variant="icon"
												>
													{ch.chapter_number}
												</button>
											))
										)}
									</div>
								</div>
							</div>
							<div className="flex gap-2">
								{novel.genre.split(' ').map((cate, i) => (
									<span
										className={cn(
											buttonVariants({
												variant: 'subtle',
												className:
													'text-white text-[10px] h-6 whitespace-wrap',
											})
										)}
										key={i}
									>
										{cate}
									</span>
								))}
								<span
									className={cn(
										buttonVariants({
											variant: 'subtle',
											className:
												'text-white text-[10px] h-6 space-x-1.5 whitespace-wrap',
										})
									)}
								>
									<StarIcon
										size={14}
										className="text-primary h-6 "
									/>
									<span>{novel.favourite.length}</span>
								</span>
							</div>
							<div>
								{/* {JSON.stringify(novel.author)} */}
								<h2 className="my-2 text-base">Author</h2>

								<div className="flex gap-2">
									<Avatar
										name={novel.author.username}
										plan={novel.author.plan}
										isAuthor={novel.author.isAuthor}
										className="sm:h-9 sm:w-9 md:h-10 md:w-10"
									/>
									<div>
										<h2 className="text-xs font-medium">
											{novel.author.username}
										</h2>
										<p className="text-foreground-secondary text-xs font-medium">
											{novel.author.email}
										</p>
									</div>
								</div>
							</div>
							<div className="text-[10px] divide-x lg:divide-x-0 w-full lg:space-y-2">
								<span className="pr-1.5 lg:pr-0 lg:block">
									Created: {timeElasped(novel.publication_at)}
								</span>
								<span className="pl-1.5 lg:pl-0">
									Updated: {timeElasped(novel.updated_at)}
								</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3 w-full space-y-10">
						{chapterIndex !== 0 ? (
							<div>
								<h2 className="mb-5 text-base">
									Chapter{'  '}
									<span className="text-primary font-semibold">
										#{currentChapter.chapter_number}
									</span>
								</h2>
								<div className=" p-4 border border-primary/40 rounded">
									<h1 className="text-primary font-medium text-xl space-x-5">
										<span className="text-foreground underline">
											{currentChapter.chapter_title}
										</span>
									</h1>

									<div className="text-sm  space-y-4 mt-2">
										{/* {currentChapter.content.} */}
										{paraConverter(
											currentChapter.content
										).map((para, i) => (
											<p
												key={i}
												className="leading-6"
											>
												{para}
											</p>
										))}
									</div>
								</div>
							</div>
						) : (
							<>No chapter found</>
						)}
						<div>
							<h2 className="my-2 text-base">Comments</h2>
							<div className="text-sm text-foreground space-y-4 mt-2">
								{novel.comment.length === 0 ? (
									<>
										No comments
										{novel.comment}
									</>
								) : (
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{novel.comment.map((comment) => (
											<CommentContainer
												key={comment.comment_id}
												comment={comment.comment}
												user={comment.user}
												created_at={comment.created_at}
												{...comment}
											/>
										))}
									</div>
								)}
							</div>
						</div>
						<div>
							<h2 className="my-2 text-base">
								Post Your Comment
							</h2>
							<div className="p-4 border border-primary/40 rounded">
								{session ? (
									<form
										onSubmit={handleCommentSubmit}
										className="flex flex-col gap-y-4"
									>
										<input
											type="number"
											onChange={(e) =>
												setFeedback((prev) => ({
													...prev,
													rating: e.target.value,
												}))
											}
											min={1}
											max={10}
											value={feedback.rating}
											placeholder="Rating"
											name="chapter_number"
											className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
										/>{' '}
										<textarea
											value={feedback.comment}
											placeholder="Chapter Content"
											onChange={(e) =>
												setFeedback((prev) => ({
													...prev,
													comment: e.target.value,
												}))
											}
											rows={5}
											className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
										/>
										<div className="flex justify-end">
											<button
												disabled={
													loading.loadingChapterSubmit
												}
												className={cn(
													buttonVariants({
														variant: 'subtle',
														className:
															'text-white h-6 px-3 py-1 whitespace-wrap',
													})
												)}
											>
												{loading.loadingChapterSubmit ? (
													<Loader2 className="animate-spin" />
												) : (
													'Post Comment'
												)}
											</button>
										</div>
									</form>
								) : (
									<>Sign in to create comment</>
								)}
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	} else {
		return (
			<Container>
				<div className="text-foreground">
					Loading Novel from the Page
				</div>
			</Container>
		);
	}
};

export default Novel;
