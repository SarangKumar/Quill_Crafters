import React from 'react';
import FeatureCard from './ui/FeatureCard';
import Container from './ui/Container';

const Features = () => {
	return (
		<Container>
			<div className="grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<FeatureCard />
				<FeatureCard />
				<FeatureCard />
				<FeatureCard />
			</div>
		</Container>
	);
};

export default Features;
