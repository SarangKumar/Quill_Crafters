import React from 'react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import {  BookOpen, Ghost } from 'lucide-react';

const Hero = () => {
	return (
		<Container className="text-foreground flex justify-center items-center flex-col my-20">
			<Badge className="space-x-1">
				<Ghost
					size={16}
					className="text-primary"
				/>
				<span>Getting all the best sellers</span>
			</Badge>
			<div className="text-center space-y-2">
				<h1 className="text-foreground text-5xl font-semibold tracking-tighter">
					Think better with Quill
				</h1>
				<p className="text-foreground-secondary">
					Never miss any Best Seller
				</p>
			</div>
		</Container>
	);
};

export default Hero;
