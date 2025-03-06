import '../styles/Resume.css'
import callIcon from '../assets/call_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import locationIcon from '../assets/location_on_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import mailIcon from '../assets/mail_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import { forwardRef } from 'react';

const Resume = forwardRef(({ input, education, experience }, ref) => {
	return (
		<div
			className='resume-container'
			ref={ref}
		>
			<div className='resume-header'>
				<h2>{input.fullName}</h2>
				<div className='contact-info'>
					<p>
						<img
							src={mailIcon}
							alt=''
						/>
						{input.email}
					</p>
					<p>
						<img
							src={callIcon}
							alt=''
						/>
						{input.number}
					</p>
					<p>
						<img
							src={locationIcon}
							alt=''
						/>
						{input.personalLocation}
					</p>
				</div>
			</div>
			<div className='resume-body'>
				<h3>Education</h3>

				{education.map((edu, index) => {
					return (
					<div className='edu-info' key={index}>
					<div className='edu-details'>
						<p>
							{edu.startDate} - {edu.endDate}
						</p>
						<p>{edu.eduLocation}</p>
					</div>
					<div className='edu-name'>
						<p>{edu.school}</p>
						<p>{edu.degree}</p>
					</div>
					</div>
					)
				})
				}
				
				<h3>Professional Experience</h3>

				{experience.map((exp, index) => {
					return (
					 <div className='exp-box' key={index}>
					   <div className='exp-info'>
						<div className='exp-details'>
							<p>
								{exp.workStartDate} - {exp.workEndDate}
							</p>
							<p>{exp.expLocation}</p>
						</div>
						<div className='exp-name'>
							<p>{exp.company}</p>
							<p>{exp.position}</p>
						</div>
					</div>
					<p className='exp-respon'>{exp.responsibilities}</p>
				</div>
					)
				})}
				
			</div>
		</div>
	);
})

export default Resume;
