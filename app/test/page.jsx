import ComicContainer from '@/components/ComicContainer';
import Features from '@/components/Features';
import Button from '@/components/ui/Button';
import ComicCover from '@/components/ui/ComicCover';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import SubHeading from '@/components/ui/SubHeading';

const TestPage = () => {
	return (
		<>
			<Button>TestPage</Button>
			{/* <Input /> */}
			<SubHeading>Test Page</SubHeading>

			<div className="main">
				<Features />
			</div>

			<ComicContainer />

		</>
	);
};

export default TestPage;
