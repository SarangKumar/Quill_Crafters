import React from 'react';

const Container = ({ children }) => {
	return (
		<main className="mx-4 space-y-10 sm:mx-10 md:mx-auto md:max-w-6xl">
			{children}
		</main>
	);
};

export default Container;
