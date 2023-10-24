import React from 'react';

const FeatureCard = ({ children }) => {
	return (
		<div className="relative rounded-xl overflow-hidden border-2 border-border bg-gradient-to-t from-background-secondary/40 from-10% to-transparent text-sm space-y-2 p-8 lg:p-10 lg:pr-12 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:inset-0">
			<div className="mb-5">{children}</div>
			<h2 className="text-white">Time block</h2>
			<p className="text-foreground text-xs md:text-sm">
				Gradients fade out to transparent by default, without requiring
			</p>
		</div>
	);
};

export default FeatureCard;
