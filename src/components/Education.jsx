import { useState } from 'react';
import schoolIcon from '../assets/school_32dp_E8EAED_FILL1_wght400_GRAD0_opsz40.svg'
import downArrowIcon from '../assets/keyboard_arrow_down_31dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import addIcon from '../assets/add_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

function Education() {
	const [input, setInputs] = useState({});
		
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	
    return (
		<div className='card'>
			<div className='edu-header'>
				
				<h2><img
					src={schoolIcon}
					alt=''
				/>Education</h2>
				<img src={downArrowIcon} alt="" />
			</div>
				
			<div className='form-container'>
				<form action=''>
					<label>
						School
						<input
							type='text'
							name='school'
							value={input.school || ''}
							onChange={handleChange}
						/>
					</label>

					<label>
						Degree
						<input
							type='text'
							name='degree'
							value={input.degree || ''}
							onChange={handleChange}
						/>
					</label>

					<label>
						Start Date
						<input
							type='text'
							name='startDate'
							value={input.startDate || ''}
							onChange={handleChange}
						/>
					</label>

					<label>
						End Date
						<input
							type='text'
							name='endDate'
							value={input.endDate || ''}
							onChange={handleChange}
						/>
					</label>
				</form>
			</div>
			  <button className='addBtn'><img src={addIcon} alt="" />Add Education</button>
			</div>
		);
}

export default Education