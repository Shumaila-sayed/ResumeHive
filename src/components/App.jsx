import Header from './Header';
import Details from './Details';
import Resume from './Resume';
import '../styles/App.css';

function App() {
	let input = {
		fullName: 'John Doe',
		email: 'johndoe@xyz.com',
		number: '+44 3245 5521 5521',
		personalLocation: 'London, UK',
		school: 'London City University',
		degree: 'Bachelors in Economics',
		startDate: '08/2020 ',
		endDate: '11/2023',
		eduLocation: 'New York City, US',
		company: 'Umbrella Inc.',
		position: 'UX & UI Designer',
		workStartDate: '05/2022 ',
		workEndDate: 'present',
		expLocation: 'New York City, US',
		responsibilities:
			'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
	};

	return (
		<>
			<Header />
			<div className='main'>
				<Details />
				<Resume input={input} />
			</div>
		</>
	);
}

export default App;