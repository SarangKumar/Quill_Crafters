'use client';
import Container from '@/components/ui/Container';
import PricingCard from '@/components/ui/PricingCard';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';


const Pricing = () => {
	const [prices, setPrices] = useState([]);
	const {data: session} = useSession();

	useEffect(() => {
		fetchPrices();
	}, []);

	const fetchPrices = async () => {
		const { data } = await axios.get('/api/getsubscription');
		setPrices(data);
	};

	console.log(prices);
	return (
		<section className="w-full mb-20">
			<Container>
				<div className="mx-auto max-w-4xl text-center mt-10 items-center">
					<h2 className="text-3xl md:text-4xl font-semibold leading-7 text-foreground">
						Simple Plans, <span className="text-primary">Free</span>{' '}
						To Try
					</h2>
					<div className="mx-auto mt-6 max-w-2xl sm:text-center text-foreground-secondary">
						<p className="capitalize">
							No, hidden fees, no games, no surprises.
						</p>
						<p className="capitalize">free to get started</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-8">
					{prices &&
						prices.map((price) => (
							<PricingCard
								price={price}
								key={price.id}
							/>
						))}
				</div>
			</Container>
		</section>
	);
};

export default Pricing;
