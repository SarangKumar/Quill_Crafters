import React from 'react';
import { Atom, BellDot, Cloud, Rotate3D } from 'lucide-react';

import FeatureCard from './ui/FeatureCard';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Avatar from './ui/Avatar';
import Input from './ui/Input';

const Features = () => {
	return (
		<div className="grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			<FeatureCard>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<Cloud />
				</Badge>
			</FeatureCard>
			<FeatureCard>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<Rotate3D />
				</Badge>
			</FeatureCard>
			<FeatureCard>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<BellDot />
				</Badge>
			</FeatureCard>
			<FeatureCard>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<Atom />
				</Badge>
			</FeatureCard>
		</div>
	);
};

export default Features;
