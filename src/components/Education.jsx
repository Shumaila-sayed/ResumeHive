import { useState } from 'react';
import schoolIcon from '../assets/school_32dp_E8EAED_FILL1_wght400_GRAD0_opsz40.svg'
import downArrowIcon from '../assets/keyboard_arrow_down_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import addIcon from '../assets/add_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import upArrowIcon from '../assets/keyboard_arrow_up_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

function Education({education, setEducation}) {
	const [showForm, setShowForm] = useState(false);
		
	const toggleForm = () => {
	setShowForm(!showForm)
	}
	
    return (
			<div className='card'>
				<div className='edu-header'>
					<h2>
						<img
							src={schoolIcon}
							alt=''
						/>
						Education
					</h2>
					<img
						src={showForm ? upArrowIcon : downArrowIcon}
						alt=''
						onClick={toggleForm}
					/>
				</div>

				{showForm && 
					<Form
				education={education}
				setEducation={setEducation}
					/>
				}
			</div>
		);
}

function Form({ education, setEducation }) {
	const handleChange = (index, event) => {
		const { name, value } = event.target;
		const updatedEducation = education.map((edu, i) =>
			i === index ? { ...edu, [name]: value } : edu
		);
		setEducation(updatedEducation);
	};

	const addEducation = () => {
		setEducation([
			...education,
			{ school: '', degree: '', startDate: '', endDate: '', eduLocation: '' },
		]);
	};

	return (
		<div>
			{education.map((edu, index) => (
				<form key={index}>
					<label>
						School
						<input
							type='text'
							name='school'
							value={edu.school}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						Degree
						<input
							type='text'
							name='degree'
							value={edu.degree}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						Start Date
						<input
							type='text'
							name='startDate'
							value={edu.startDate}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						End Date
						<input
							type='text'
							name='endDate'
							value={edu.endDate}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						Location
						<input
							type='text'
							name='eduLocation'
							value={edu.eduLocation}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>
				</form>
			))}
			<button className='addBtn' onClick={addEducation}>
				<img
					src={addIcon}
					alt='Add'
				/>
				Add Education
			</button>
		</div>

	);
}
export default Education