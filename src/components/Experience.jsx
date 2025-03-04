import { useState } from "react";
import workIcon from '../assets/business_center_32dp_E8EAED_FILL1_wght400_GRAD0_opsz40.svg'
import downArrowIcon from '../assets/keyboard_arrow_down_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import addIcon from '../assets/add_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import upArrowIcon from '../assets/keyboard_arrow_up_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

function Experience() {
	const [input, setInputs] = useState({});
	const [showForm, setShowForm] = useState(false);
            
    const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const toggleForm = () => {
		setShowForm(!showForm)
	}

    return (
			<div className="card">
				<div className='edu-header'>
					
					<h2><img
						src={workIcon}
						alt=''
					/>Experience</h2>
					<img
						src={showForm ? upArrowIcon : downArrowIcon}
					alt=''
					onClick={toggleForm}
					/>
			</div>
			{showForm && <Form input={input} handleChange={handleChange} />}	
			</div>
		);
}

function Form({input, handleChange}) {
	return (
		<div className='form-container'>
			<form action=''>
				<label>
					Company Name
					<input
						type='text'
						name='company'
						value={input.company || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Position Title
					<input
						type='text'
						name='position'
						value={input.position || ''}
						onChange={handleChange}
					/>
				</label>
				<label>
					Start Date
					<input
						type='text'
						name='workStartDate'
						value={input.workStartDate || ''}
						onChange={handleChange}
					/>
				</label>
				<label>
					End Date
					<input
						type='text'
						name='workEndDate'
						value={input.workEndDate || ''}
						onChange={handleChange}
					/>
				</label>
				<label>
					Location
					<input
						type='text'
						name='exp-location'
						value={input.expLocation || ''}
						onChange={handleChange}
					/>
				</label>
				<label>
					Main Responsibilities
					<textarea
						name='responsibilities'
						value={input.responsibilities || ''}
						onChange={handleChange}
					/>
				</label>
			</form>
			<button className='addBtn'>
				<img
					src={addIcon}
					alt=''
				/>{' '}
				Add Experience
			</button>
		</div>
	);
}
export default Experience