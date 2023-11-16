import React from 'react';
import { Atom, BellDot, CircleDollarSignIcon, Fingerprint, LayoutList } from 'lucide-react';

import FeatureCard from './ui/FeatureCard';
import Badge from './ui/Badge';

const Features = () => {
	return (
		<div className="grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			<FeatureCard
				title="User Profiles & Author Pages"
				body="Personalized spaces for users to showcase their work and bio."
			>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<Fingerprint />
				</Badge>
			</FeatureCard>
			<FeatureCard
				title="Novel Writing Tools"
				body="Built-in writing features with prompts and organization tools."
			>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<LayoutList />
				</Badge>
			</FeatureCard>
			<FeatureCard
				title="Community Forums & Feedback"
				body="Engaging forums for discussions, feedback, and reviews."
			>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<BellDot />
				</Badge>
			</FeatureCard>
			<FeatureCard
				title="Reading Customization"
				body="Multiple reading modes and features like bookmarks and notes."
			>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<Atom />
				</Badge>
			</FeatureCard>
			<FeatureCard
				title="Publication & Monetization"
				body="Options to publish novels and monetize through subscriptions or ads."
			>
				<Badge
					variant="animate"
					size="icon-rounded-large"
				>
					<CircleDollarSignIcon />
				</Badge>
			</FeatureCard>
		</div>
	);
};

export default Features;
