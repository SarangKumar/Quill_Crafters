import React from 'react';

const Container = ({ children }) => {
	return (
		<main className="mx-2 md:mx-auto md:max-w-6xl">
			{children}
		</main>
	);
};

export default Container;
