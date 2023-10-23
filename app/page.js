import ComicContainer from '@/components/ComicContainer';
import Features from '@/components/Features';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import SubHeading from '@/components/ui/SubHeading';
import { allNovels } from '@/constants';
import { sortNovelsByChaptersAndLikes, sortNovelsByLikesAndChapters } from '@/constants/utils';
import React from 'react';

const Home = () => {
	const novelLikesChapters = sortNovelsByLikesAndChapters(allNovels);
	const novelChapterLikes = sortNovelsByChaptersAndLikes(allNovels);
	
	return (
		<Container>
			<div className="main">
				<SubHeading>Features</SubHeading>
				<Features />
			</div>
			<div>
				<SubHeading>Search</SubHeading>
				<div className="grid grid-cols-1 md:grid-cols-3">
					<Input className="md:col-span-2" />
				</div>
			</div>
			<div>
				<SubHeading>Most Liked</SubHeading>
				<ComicContainer novels={novelLikesChapters.slice(0, 12)} />
			</div>
			<div>
				<SubHeading>Quick Reads</SubHeading>
				<ComicContainer novels={novelChapterLikes.slice(0, 12)} />
			</div>
			<div>
				<SubHeading>Popular Authors</SubHeading>
				{/* <ComicContainer novels={allNovels.slice(0, 10)} /> */}
			</div>
		</Container>
	);
};

export default Home;
