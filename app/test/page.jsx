import Features from '@/components/Features';
import Button from '@/components/ui/Button';
import ComicCover from '@/components/ui/ComicCover';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';

const TestPage = () => {
	return (
		<>
			{/* <Container> */}
			<Button>TestPage</Button>
			{/* <Input /> */}

			<div className="main">
				<Features />
			</div>

			<main className="flex gap-4 main">
				<ComicCover />
				<ComicCover />
				<ComicCover />
			</main>
			{/* </Container> */}
		</>
	);
};

export default TestPage;
