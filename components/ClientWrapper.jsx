// import Container from "./ui/Container";

import Container from "./ui/Container";


const ClientWrapper = ({ authorized, username, trueUsername }) => {
	return (
		<Container className="text-foreground grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			Welcome to the page of {username}. <br />
			{authorized
				? 'You are authorized to edit this page.'
				: `You are unauthorized to edit this page as you are ${trueUsername}`}
		</Container>
	);
};

export default ClientWrapper;
