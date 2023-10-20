import React from 'react';
import Badge from './Badge';
import { Cloud } from 'lucide-react';

const FeatureCard = ({ children }) => {
	return (
		<div className="relative rounded-xl overflow-hidden border-2 border-border bg-background-secondary/20 backdrop-blu bg-gradient-to-t from-background-secondary/40 from-10% to-transparent text-sm space-y-2 p-5 pr-10 before:absolute before:bg-gradient-to-r before:from-transparent before:to-background-secondary/40 before:from-10% before:inset-0">
			<div className="mt-1 mb-3">
			{children}
			</div>
			<h2 className="text-foreground ">Time block</h2>
			<p className="text-foreground-secondary text-sm ">
				Gradients fade out to transparent by default, without requiring
			</p>
			{/* </div> */}
		</div>
	);
};

export default FeatureCard;
