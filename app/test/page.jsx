import Features from '@/components/Features';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import React from 'react';

const TestPage = () => {
	return (
		<>
			<Container>
				<Button>TestPage</Button>

				<div className="main">
					<Features />
				</div>
			</Container>
		</>
	);
};

export default TestPage;
