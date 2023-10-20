import React from 'react';
import { Cloud } from 'lucide-react';

import FeatureCard from './ui/FeatureCard';
import Container from './ui/Container';
import Badge from './ui/Badge';

const Features = () => {
	return (
		<Container>
			<div className="grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<FeatureCard />
				<FeatureCard />
				<FeatureCard />
				<FeatureCard />
			</div>
			<div className="flex gap-3 m-5">
				<Badge variant="ghost">Button badge</Badge>
				<Badge variant="default">Button badge</Badge>
				<Badge variant="outline">Button badge</Badge>
				<Badge variant="subtle">Button badge</Badge>
				<Badge link="/">home</Badge>
				<Badge size="icon">
					<Cloud />
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge size="lg">Something</Badge>
				<Badge size="sm">Something</Badge>
			</div>
		</Container>
	);
};

export default Features;
