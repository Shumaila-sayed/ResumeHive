import '../styles/Resume.css'
import callIcon from '../assets/call_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import locationIcon from '../assets/location_on_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import mailIcon from '../assets/mail_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';

function Resume({input}) {
	return (
		<div className='resume-container'>
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

				<div className='edu-info'>
					<div className='edu-details'>
						<p>{`${input.startDate} - ${input.endDate}`}</p>
						<p>{input.eduLocation}</p>
					</div>
					<div className='edu-name'>
						<p>{input.school}</p>
						<p>{input.degree}</p>
					</div>
				</div>

				<h3>Professional Experience</h3>
				<div className='exp-box'>
					<div className='exp-info'>
						<div className='exp-details'>
							<p>{`${input.workStartDate} - ${input.workEndDate}`}</p>
							<p>{input.expLocation}</p>
						</div>
						<div className='exp-name'>
							<p>{input.company}</p>
							<p>{input.position}</p>
						</div>
					</div>
					<p className='exp-respon'>
						{input.responsibilities}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Resume;
