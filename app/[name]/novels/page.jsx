'use client';
import { ComicCardSkeleton } from '@/components/Skeleton';
import { buttonVariants } from '@/components/ui/Button';
import ComicCover from '@/components/ui/ComicCover';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ManageNovelsPage = () => {
	// const [userOverview, setUserOverview] = useState({});
	const [novelDetail, setNovelDetail] = useState([]);
	const { data: session } = useSession();
	const [loading, setLoading] = useState({
		loadingNovelSubmit: false,
		loadingNovelCover: true,
	});
	const [newNovel, setNewNovel] = useState({
		title: '',
		genre: '',
		summary: '',
		cover: '',
	});

	// const [file, setFile] = useState(null);

	useEffect(() => {
		fetchUserNovels();
	}, []);

	const fetchUserNovels = async () => {
		try {
			const data = await fetch('/api/novels/self-novels', {
				method: 'POST',
				body: JSON.stringify({
					user_id: session.user.user_id,
					email: session.user.email,
					type: 'manage-novels',
				}),
			});
			const res = await data.json();
			// console.log(res);
			setLoading((prev) => ({ ...prev, loadingNovelCover: false }));
			setNovelDetail(res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCreateNovel = async (e) => {
		e.preventDefault();
		setLoading((prev) => ({ ...prev, loadingNovelSubmit: true }));

		// console.log(newNovel);
		if (
			!newNovel.genre ||
			!newNovel.title ||
			!newNovel.summary ||
			!newNovel.cover
		) {
			console.log('all fields are required');
			setLoading((prev) => ({ ...prev, loadingNovelSubmit: false }));
			return;
		}

		// console.log('hellooo', newNovel)
		try {
			const res = await fetch('/api/novels/create-novel', {
				method: 'POST',
				body: JSON.stringify({
					newNovel,
					user_id: session.user.user_id,
				}),
			});

			// console.log(res.data);
			setNewNovel({
				title: '',
				genre: '',
				summary: '',
				cover: '',
			});
		} catch (error) {
			console.log(error);
		} finally {
			setLoading((prev) => ({ ...prev, loadingNovelSubmit: false }));
		}
	};

	if (session) {
	}
	const username = session?.user?.username.split(' ').join('_').toLowerCase();
	return (
		<>
			<div>
				<h2 className="my-2 text-base mt-2">My Novels</h2>
				<div className="p-4 border border-primary/40 rounded space-y-2 grid grid-cols-cards gap-3 sm:gap-4 md:gap-5">
					{loading.loadingNovelCover ? (
						new Array(3)
							.fill(0)
							.map((_, i) => <ComicCardSkeleton key={i} />)
					) : novelDetail.length === 0 ? (
						<p>No novels</p>
					) : (
						novelDetail?.map((novel) => (
							<Link
								href={`/${username}/novels/${novel.novel_id}`}
								key={novel.novel_id}
							>
								<ComicCover
									novel_id={novel.novel_id}
									name={novel.title}
									likes={novel.favourite.length}
									chapters={novel.chapter.length}
									author={session.user.username}
									coverUrl={novel.cover}
									category={novel.genre}
								/>
							</Link>
						))
					)}
				</div>
			</div>

			<div>
				<h2 className="my-2 text-base mt-2">Start a New Novel</h2>
				<div className="p-4 border border-primary/40 rounded space-y-2">
					<form
						className="flex flex-col gap-y-4"
						onSubmit={handleCreateNovel}
					>
						<input
							maxLength={100}
							onChange={(e) =>
								setNewNovel((prev) => ({
									...prev,
									title: e.target.value,
								}))
							}
							value={newNovel.title}
							placeholder="Novel Name"
							autoCorrect="false"
							name="title"
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						<input
							maxLength={100}
							placeholder="Genre"
							onChange={(e) =>
								setNewNovel((prev) => ({
									...prev,
									genre: e.target.value,
								}))
							}
							name="genre"
							autoCorrect="false"
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						<textarea
							placeholder="Summary"
							onChange={(e) =>
								setNewNovel((prev) => ({
									...prev,
									summary: e.target.value,
								}))
							}
							name="summary"
							rows={3}
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						{/* <label
						htmlFor="cover"
						className="cursor-pointer flex justify-center rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none flex-1 w-full py-5 flex-grow"
					>
						<div className="flex items-center flex-col gap-2 text-foreground">
							<UploadCloud size={50} />
							{['', null, undefined].includes(file)
								? 'Upload Cover'
								: file.name}
						</div>
						<input
							id="cover"
							onChange={(e) => setFile(e.target.files?.[0])}
							type="file"
							name="cover"
							className="hidden"
							accept="image/png, image/jpeg"
						/>
					</label> */}
						<input
							placeholder="Cover"
							onChange={(e) =>
								setNewNovel((prev) => ({
									...prev,
									cover: e.target.value,
								}))
							}
							name="cover"
							type="url"
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-2 flex-grow"
						/>
						<button
							disabled={loading.loadingNovelSubmit}
							className={cn(
								buttonVariants({ className: 'rounded py-3' })
							)}
						>
							{loading.loadingNovelSubmit ? (
								<Loader2 className="animate-spin" />
							) : (
								<>Save Novel</>
							)}
						</button>
					</form>
				</div>
			</div>
			{process.env.NODE_ENV === 'development' && (
				<div>
					{JSON.stringify(novelDetail)}
					<br />
					{JSON.stringify(newNovel)}
					<br />
					{JSON.stringify(session?.user?.user_id)}
				</div>
			)}
		</>
	);
};

export default ManageNovelsPage;
