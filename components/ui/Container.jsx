import React from 'react';

const Container = ({ children }) => {
	return (
		<main className="grid place-items-center md:mx-auto mx-4 md:max-w-6xl">
			{children}
		</main>
	);
};

export default Container;
