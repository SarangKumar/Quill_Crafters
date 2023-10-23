import ComicContainer from '@/components/ComicContainer';
import Features from '@/components/Features';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import SubHeading from '@/components/ui/SubHeading';
import { allNovels } from '@/constants';
import React from 'react';

const Home = () => {
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
				<SubHeading>Popular Novels</SubHeading>
				<ComicContainer novels={allNovels.slice(0, 35)} />
			</div>
			<div>
				<SubHeading>Popular Authors</SubHeading>
				{/* <ComicContainer novels={allNovels.slice(0, 10)} /> */}
			</div>
		</Container>
	);
};

export default Home;
