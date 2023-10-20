import React from 'react';

const FeatureCard = () => {
	return (
		<div className="card-container grid relative rounded-xl overflow-hidden border-2 border-border bg-background-secondary/20 backdrop-blur-md bg-gradient-to-t from-background-secondary/40 from-10% to-transparent text-sm space-y-2 p-5 pr-10 before:absolute before:bg-gradient-to-r before:from-transparent before:to-background-secondary/40 before:from-10% before:inset-0">
			{/* <div className="absolute bg-green-600 top-0 right-0 bottom-0 left-0 w-full h-full"> */}
			<h2 className="text-foreground">Time block</h2>
			<p className="text-foreground-secondary text-sm">
				Gradients fade out to transparent by default, without requiring
			</p>
			{/* </div> */}
		</div>
	);
};

export default FeatureCard;
