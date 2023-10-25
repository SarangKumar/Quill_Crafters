'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const AdSence = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { data: session } = useSession();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log('Adsence Comp -> router cahgnes', url);

		const scriptElemet = document.querySelector(
			'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9615068362549302"]'
		);

		const handleScriptLoad = () => {
			try {
				if (window.adsbygoogle) {
					console.log('pusing ads');
					adsbygoogle.push({});
				} else {
					scriptElemet.addEventListener('load', handleScriptLoad);
					console.log('waiting for adsbygoogle to load');
				}
			} catch (error) {
				console.log('error in adsence', error);
			}
			return () => {
				if (scriptElemet) {
					scriptElemet.removeEventListener('load', handleScriptLoad);
				}
			};
		};
	}, [pathname, searchParams]);

	if (process.env.NODE_ENV !== 'production') {
		if (session?.user?.plan !== 'BASIC') {
			return <></>;
		}
	}

	return (
		<div className="overflow-hidden m-3">
			Google Ad block
			<ins
				className="adsbygoogle block"
				data-ad-client="ca-pub-9615068362549302"
				data-ad-slot="2901327677"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</div>
	);
};

export default AdSence;
