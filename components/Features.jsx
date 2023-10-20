import React from 'react';
import { Cloud, Rotate3D } from 'lucide-react';

import FeatureCard from './ui/FeatureCard';
import Container from './ui/Container';
import Badge from './ui/Badge';

const Features = () => {
	return (
		<Container>
			<div className="grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<FeatureCard>
					<Badge variant="animate" size="icon-rounded-large">
						<Cloud />
					</Badge>
				</FeatureCard>
				<FeatureCard>
					<Badge variant="animate" size="icon-rounded-large">
						<Cloud />
					</Badge>
				</FeatureCard>
				<FeatureCard>
					<Badge variant="animate" size="icon-rounded-large">
						<Cloud />
					</Badge>
				</FeatureCard>
				<FeatureCard>
					<Badge variant="animate" size="icon-rounded-large">
						<Cloud />
					</Badge>
				</FeatureCard>
			</div>
		
			{/* <Badge variant="animate">
				<Cloud />
			</Badge>
			<div className="flex gap-4">
				<Badge
					size="icon-rounded"
					variant="animate"
				>
					<Rotate3D />
				</Badge>
				<Badge
					size="icon-rounded-large"
					variant="animate"
				>
					<Rotate3D />
				</Badge>
			</div>
			<div className="flex gap-4 ">
				<Badge size="lg">Something</Badge>
				<Badge
					size="lg"
					variant="outline"
				>
					Something
				</Badge>
				<Badge
					variant="ghost"
					size="lg"
				>
					Button badge
				</Badge>
				<Badge size="sm">Something</Badge>
			</div> */}
		</Container>
	);
};

export default Features;

//  before:bg-[conic-gradient(#04b011_20deg)]
