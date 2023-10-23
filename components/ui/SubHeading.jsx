import React from 'react';

const SubHeading = ({ children = 'Sub Heading' }) => {
	return (
		<h1 className="text-foreground my-3 text-2xl font-medium ">{children}</h1>
	);
};

export default SubHeading;
