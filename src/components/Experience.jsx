import { useState } from 'react';
import workIcon from '../assets/business_center_32dp_E8EAED_FILL1_wght400_GRAD0_opsz40.svg';
import downArrowIcon from '../assets/keyboard_arrow_down_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import addIcon from '../assets/add_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import upArrowIcon from '../assets/keyboard_arrow_up_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

function Experience({ experience, setExperience }) {
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	return (
		<div className='card'>
			<div className='edu-header'>
				<h2>
					<img
						src={workIcon}
						alt=''
					/>
					Experience
				</h2>
				<img
					src={showForm ? upArrowIcon : downArrowIcon}
					alt=''
					onClick={toggleForm}
				/>
			</div>
			{showForm && 
				<Form
					experience={experience}
					setExperience={setExperience}
				/>
			}
		</div>
	);
}

function Form({ experience, setExperience }) {
	const handleChange = (index, event) => {
		const { name, value } = event.target;
		const updatedExperience = experience.map((exp, i) =>
			i === index ? { ...exp, [name]: value } : exp
		);
		setExperience(updatedExperience);
	};

	const addExperience = () => {
		setExperience([
			...experience,
			{
				company: '',
				position: '',
				workStartDate: '',
				workEndDate: '',
				expLocation: '',
				responsibilities: '',
			},
		]);
	};
	console.log(experience)

	return (
		<div className='form-container'>
			{experience.map((exp, index) => (
				<form key={index}>
					<label>
						Company Name
						<input
							type='text'
							name='company'
							value={exp.company}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>
					<label>
						Position Title
						<input
							type='text'
							name='position'
							value={exp.position}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>
					<label>
						Start Date
						<input
							type='text'
							name='workStartDate'
							value={exp.workStartDate}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						End Date
						<input
							type='text'
							name='workEndDate'
							value={exp.workEndDate}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>

					<label>
						Location
						<input
							type='text'
							name='expLocation'
							value={exp.expLocation}
							onChange={(e) => handleChange(index, e)}
						/>
					</label>
					<label>
						Main Responsibilities
						<textarea
							name='responsibilities'
							value={exp.responsibilities}
							onChange={(e) => handleChange(index, e)}
							rows={8}
						/>
					</label>
				</form>
			))}

			<button
				className='addBtn'
				onClick={addExperience}
			>
				<img
					src={addIcon}
					alt='Add'
				/>
				Add Experience
			</button>
		</div>
	);
}
export default Experience;
