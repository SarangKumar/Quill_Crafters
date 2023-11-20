import ComicContainer from '@/components/ComicContainer';
import Features from '@/components/Features';
import Button from '@/components/ui/Button';
import ComicCover from '@/components/ui/ComicCover';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import SubHeading from '@/components/ui/SubHeading';
import { allNovels } from '@/constants';
import moment from 'moment/moment';

const TestPage = () => {
	const pastTime = moment('2023-11-10T12:33:33.725Z');
	
	
	const timeElasped = (startTime) => {
		const currentTime = moment();
		const elapsedTime = moment.duration(currentTime.diff(startTime));
		return elapsedTime.humanize() + ' ago';
	}
	return (
		<>
			<p className="text-white">
				{/* {moment().format('MM Do YY, h:mm:ss a')} */}
				{/* {moment('2023-11-20T12:33:33.725Z', 'YYYYMMDD').fromNow()} */}
				{/* {moment().startOf('day').fromNow()} */}
				{/* {moment().startOf('2023-11-10T12:33:33.725Z').fromNow()} */}
				{/* {elapsedTime.humanize()} */}
				{timeElasped('2023-11-10T12:33:33.725Z')}
				{timeElasped('2023-11-20T12:33:33.725Z')}
				{timeElasped('2023-09-20T12:33:33.725Z')}
			</p>
		</>
	);
};

export default TestPage;
