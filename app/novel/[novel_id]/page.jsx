'use client';
import { buttonVariants } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn, paraConverter, timeElasped } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';

const Novel = ({ params }) => {
	const [novel, setNovel] = useState(null);
	const [chapterIndex, setChapterIndex] = useState(0);
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
		setNovel(data);
		// console.log(data.chapter.length, 'adfadsfadfasdfsdfa')

		if (data.chapter.length !== 0) {
			console.log(data.chapter[0].chapter_number);
			setChapterIndex(data.chapter[0].chapter_number);
		}
	};
	useEffect(() => {
		fetchNovel();
	}, []);

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
				<div className="text-foreground grid grid-cols-1 w-full lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
					<div className="flex gap-5 flex-col sm:flex-row lg:flex-col">
						<Image
							src={novel.cover}
							alt={novel.title}
							width={800}
							height={1000}
							className="aspect-[2/3] rounded h-[300px] xs:w-[200px] w-full lg:w-full"
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
											<p className='text-xs'>No Chapters Found</p>
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
							<div className="text-[10px] divide-x lg:divide-x-0 w-full lg:space-y-2">
								<span className="pr-1.5 lg:pr-0 lg:block">
									Created: {timeElasped(novel.created_at)}
								</span>
								<span className="pl-1.5 lg:pl-0">
									Updated: {timeElasped(novel.updated_at)}
								</span>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3 p-4 w-full border border-primary/40 rounded space-y-2">
						{chapterIndex !== 0 ? (
							<>
								<h1 className="text-primary font-medium text-xl space-x-5">
									#{' '}
									<span className="text-primary ">
										{currentChapter.chapter_number}
									</span>
									<span className="text-foreground underline">
										{currentChapter.chapter_title}
									</span>
								</h1>

								<div className="text-sm space-y-4 mt-2">
									{/* {currentChapter.content.} */}
									{paraConverter(currentChapter.content).map(
										(para, i) => (
											<p key={i}>{para}</p>
										)
									)}
								</div>
							</>
						) : (
							<>No chapter found</>
						)}
						{/* {process.env.NODE_ENV === 'development' && (
							<p className="text-white">
								{JSON.stringify(novel)}
							</p>
						)} */}
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
