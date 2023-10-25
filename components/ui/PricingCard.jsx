'use client';
import { cn } from '@/lib/utils';
import axios from 'axios';
import Button, { buttonVariants, planVariant } from './Button';
import { Bird, Bot, CheckCircle2, Webhook } from 'lucide-react';

const PricingCard = ({ price }) => {
	console.log(price);

	// POST request
	const handleSubscription = async (e) => {
		console.log('button');
		e.preventDefault();
		const { data } = await axios.post(
			'/api/payment',
			{
				priceId: price.id,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		window.location.assign(data);
	};

	const dynamicSubTitle = (price) => {
		// console.log(price.nickname);
		if (price.nickname === 'Premium plan per month') {
			return <p className="text-amber-500">Premium</p>;
		} else if (price.nickname === 'Pro plan per month') {
			return <p className="text-teal-500">Pro</p>;
		} else if (price.nickname === 'Basic plan per month') {
			return <p className="text-gray-300">Basic</p>;
		}
	};

	const dynamicDescription = (price) => {
		if (price.nickname === 'Premium plan per month') {
			return (
				<div className="flex flex-col gap-2">
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Premium Features </li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Premium Features 2</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Premium Features 3</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Premium Features 4</li>
					</ul>
				</div>
			);
		} else if (price.nickname === 'Pro plan per month') {
			return (
				<div className="flex flex-col gap-2">
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Pro Features </li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Pro Features 2</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Pro Features 3</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Pro Features 4</li>
					</ul>
				</div>
			);
		} else if (price.nickname === 'Basic plan per month') {
			return (
				<div className="flex flex-col gap-2">
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Basic Features </li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Basic Features 2</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Basic Features 3</li>
					</ul>
					<ul className="flex justify-center items-start gap-x-3">
						<li>
							<CheckCircle2 className="w-5 h-5 sm:h-6 sm:w-6 md:h-5 md:w-5" />
						</li>
						<li className="flex-1 text-xs">Basic Features 4</li>
					</ul>
				</div>
			);
		}
	};

	const dynamicIcon = (price) => {
		if (price.nickname === 'Premium plan per month') {
			return (
				<div className="flex items-center justify-center">
					<div
						className={cn(
							planVariant({
								variant: 'premium',
								className: 'rounded-full w-auto',
							})
						)}
					>
						<Bot className="w-20 h-24 p-3" />
					</div>
				</div>
			);
		} else if (price.nickname === 'Pro plan per month') {
			return (
				<div className="flex items-center justify-center">
					<div
						className={cn(
							planVariant({
								variant: 'pro',
								className: 'rounded-full w-auto',
							})
						)}
					>
						<Bird className="w-20 h-24 p-3" />
					</div>
				</div>
			);
		} else if (price.nickname === 'Basic plan per month') {
			return (
				<div className="flex items-center justify-center">
					<div
						className={cn(
							planVariant({
								variant: 'basic',
								className: 'rounded-full w-auto',
							})
						)}
					>
						<Webhook className="w-20 h-24 p-3" />
					</div>
				</div>
			);
		}
	};

	return (
		<div className="border border-border py-6 rounded-lg px-4 text-foreground max-w-xs w-full">
			<div>{dynamicIcon(price)}</div>
			<div className="flex items-center flex-col my-3">
				<h3 className="text-xl md:text-3xl font-semibold">
					{dynamicSubTitle(price)}
				</h3>
				<p className="text-sm md:text-base">per month</p>
				<h1 className="text-5xl font-bold mt-6 mb-3">
					{(price.unit_amount / 100).toLocaleString('en-IN', {
						style: 'currency',
						currency: 'INR',
					})}
				</h1>
				<div className="w-[60%] sm:w-full md:w-[90%] my-4 ">
					{dynamicDescription(price)}
				</div>
				<button
					className={cn(
						buttonVariants({
							variant: 'glow',
							size: 'lg',
							className:
								'rounded-full mt-5 text-sm  bg-primary/90 text-foreground',
						})
					)}
					onClick={handleSubscription}
				>
					Get Subscription
				</button>
			</div>
		</div>
	);
};

export default PricingCard;
