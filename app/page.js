import AuthorContainer from '@/components/AuthorContainer';
import ComicContainer from '@/components/ComicContainer';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import AdSence from '@/components/ui/AdSence';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import SubHeading from '@/components/ui/SubHeading';
import { allNovels } from '@/constants';
import {
	sortNovelsByChaptersAndLikes,
	sortNovelsByLikesAndChapters,
} from '@/constants/utils';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	const novelLikesChapters = sortNovelsByLikesAndChapters(allNovels);
	const novelChapterLikes = sortNovelsByChaptersAndLikes(allNovels);

	return (
		<Container className="select-none">
			<Hero />
			<div className="main">
				<SubHeading>Features</SubHeading>
				<Features />
			</div>
			<div>
				<SubHeading>Search</SubHeading>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
					<Input className="md:col-span-2" />
					<div className="flex gap-2 text-[10px] sm:text-xs text-center">
						<Button
							size="sm"
							href="#most-liked"
							className="text-[10px] md:text-xs px-2 h-7 md:h-9 sm:px-3 md:px-4"
						>
							Most Liked
						</Button>
						<Button
							size="sm"
							href="#quick-reads"
							className="text-[10px] md:text-xs px-2 h-7 md:h-9 sm:px-3 md:px-4"
						>
							Quick Reads
						</Button>
						<Button
							size="sm"
							href="#popular-authors"
							className="text-[10px] md:text-xs px-2 h-7 md:h-9 sm:px-3 md:px-4"
						>
							Popular Authors
						</Button>
					</div>
				</div>
			</div>
			<div>
				<SubHeading>
					<a
						className="scroll-pt-5"
						id="most-liked"
					></a>
					Most Liked
				</SubHeading>
				<ComicContainer novels={novelLikesChapters.slice(0, 12)} />
			</div>
			<div>
				<SubHeading>
					<a id="quick-reads"></a>
					Quick Reads
				</SubHeading>
				<ComicContainer novels={novelChapterLikes.slice(0, 12)} />
			</div>
			<div>
				<SubHeading>
					<a id="popular-authors"></a>
					Popular Authors
				</SubHeading>
				<AuthorContainer />
			</div>
			<AdSence />
		</Container>
	);
};

export default Home;
