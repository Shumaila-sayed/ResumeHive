import { useRef, useState } from 'react';
import Header from './Header';
import Details from './Details';
import Resume from './Resume';
import '../styles/App.css';


function App() {
  const resumeRef = useRef();
  const [input, setInputs] = useState({
		fullName: 'John Doe',
		email: 'johndoe@xyz.com',
		number: '+44 3245 5521 5521',
		personalLocation: 'London, UK',
  });
	
	const [education, setEducation] = useState([
		{
			school: 'London City University',
			degree: 'Bachelors in Economics',
			startDate: '08/2020 ',
			endDate: '11/2023',
			eduLocation: 'New York City, US',
		},
		
	]);

	const [experience, setExperience] = useState([
		{
		company: 'Umbrella Inc.',
		position: 'UX & UI Designer',
		workStartDate: '05/2022 ',
		workEndDate: 'present',
		expLocation: 'New York City, US',
		responsibilities:
			'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
		}
	]);
  
  const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
  };


	return (
		<>
			<Header resumeRef={resumeRef} />
			<div className='main'>
				<Details
					input={input}
					education={education}
					setEducation={setEducation}
					experience={experience}
					setExperience={setExperience}
					handleChange={handleChange}
					
				/>
				{Object.keys(input).length > 0 ? (
					<Resume
						ref={resumeRef}
						input={input}
						education={education}
						experience={experience}
					/>
				) : (
					<p>Start filling in your details...</p>
				)}
			</div>
		</>
	);
}




	// let input = {
	// 	fullName: 'John Doe',
	// 	email: 'johndoe@xyz.com',
	// 	number: '+44 3245 5521 5521',
	// 	personalLocation: 'London, UK',
	// 	school: 'London City University',
	// 	degree: 'Bachelors in Economics',
	// 	startDate: '08/2020 ',
	// 	endDate: '11/2023',
	// 	eduLocation: 'New York City, US',
	// 	company: 'Umbrella Inc.',
	// 	position: 'UX & UI Designer',
	// 	workStartDate: '05/2022 ',
	// 	workEndDate: 'present',
	// 	expLocation: 'New York City, US',
	// 	responsibilities:
	// 		'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
	// };

export default App;