// import Container from "./ui/Container";

import Container from "./ui/Container";


const ClientWrapper = ({ authorized, session,username, trueUsername }) => {
	// authorized: if the user can edit
	// trueUsername: the username of the user who is browsing
	// username: the username of the user whose page is being browsed
	return (
		<Container className="text-foreground relative grid md:gap-5 gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 overflow-hidden">
			{/* Welcome to the page of {username}. <br />
			{JSON.stringify(session)}
			{authorized
				? 'You are authorized to edit this page.'
				: `You are unauthorized to edit this page as you are ${trueUsername}`} */}

			<div className="bg-primary/5">Submp</div>
			<div className="bg-primary/10 sm:col-span-2 md:col-span-3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Molestie a iaculis at erat. Scelerisque in dictum non
				consectetur a erat nam. Risus quis varius quam quisque id.
				Euismod quis viverra nibh cras pulvinar. Nulla porttitor massa
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Molestie a iaculis at erat. Scelerisque in dictum non
				consectetur a erat nam. Risus quis varius quam quisque id.
				Euismod quis viverra nibh cras pulvinar. Nulla porttitor massa
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Molestie a iaculis at erat. Scelerisque in dictum non
				consectetur a erat nam. Risus quis varius quam quisque id.
				Euismod quis viverra nibh cras pulvinar. Nulla porttitor massa
				id neque aliquam vestibulum morbi blandit cursus. Sit amet
				luctus venenatis lectus magna fringilla. Maecenas sed enim ut
				sem viverra. Phasellus faucibus scelerisque eleifend donec. Nunc
				sed velit dignissim sodales ut eu sem integer vitae. At risus
				viverra adipiscing at in tellus integer. Ipsum faucibus vitae
				aliquet nec ullamcorper sit amet risus. Volutpat lacus laoreet
				non curabitur. Odio facilisis mauris sit amet. Eu volutpat odio
				facilisis mauris sit amet massa. Donec enim diam vulputate ut.
				Varius vel pharetra vel turpis nunc eget lorem dolor. In iaculis
				nunc sed augue lacus viverra. Commodo quis imperdiet massa
				tincidunt nunc pulvinar sapien et. Iaculis nunc sed augue lacus
				viverra vitae congue eu consequat. Quis eleifend quam adipiscing
				vitae proin. Orci nulla pellentesque dignissim enim. Fringilla
				ut morbi tincidunt augue interdum. Aliquet bibendum enim
				facilisis gravida neque convallis a. Aliquet enim tortor at
				auctor urna nunc id. Scelerisque viverra mauris in aliquam sem
				fringilla ut. Natoque penatibus et magnis dis parturient montes
				nascetur. Egestas erat imperdiet sed euismod nisi. Aliquam nulla
				facilisi cras fermentum. Commodo sed egestas egestas fringilla
				phasellus faucibus scelerisque. Massa tempor nec feugiat nisl
				pretium fusce id velit ut. Vitae auctor eu augue ut lectus arcu.
				Sed nisi lacus sed viverra tellus in hac. Sagittis orci a
				scelerisque purus semper. Cras sed felis eget velit. In vitae
				turpis massa sed elementum. Morbi tristique senectus et netus et
				malesuada. Est pellentesque elit ullamcorper dignissim cras
				tincidunt lobortis. Condimentum mattis pellentesque id nibh. At
				volutpat diam ut venenatis tellus in metus vulputate. Egestas
				congue quisque egestas diam. Platea dictumst quisque sagittis
				purus sit amet volutpat. Tincidunt lobortis feugiat vivamus at
				augue. Mauris rhoncus aenean vel elit scelerisque mauris
				pellentesque pulvinar pellentesque. Lorem mollis aliquam ut
				porttitor. Ac tortor dignissim convallis aenean. Laoreet sit
				amet cursus sit amet dictum sit amet justo. Aliquam vestibulum
				morbi blandit cursus risus at. Volutpat diam ut venenatis tellus
				in. Et ultrices neque ornare aenean euismod elementum nisi.
				Senectus et netus et malesuada fames ac. Id porta nibh venenatis
				cras sed felis eget velit aliquet. Massa id neque aliquam
				vestibulum morbi blandit cursus risus. Porta nibh venenatis cras
				sed felis eget.
			</div>
		</Container>
	);
};

export default ClientWrapper;
