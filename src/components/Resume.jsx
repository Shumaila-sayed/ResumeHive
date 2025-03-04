import callIcon from '../assets/call_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import locationIcon from '../assets/location_on_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';
import mailIcon from '../assets/mail_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg';

function Resume() {
	return (
		<div className='resume-container'>
			<div className='resume-header'>
				<h2>John Doe</h2>
				<div className='contact-info'>
					<p>
						<img
							src={mailIcon}
							alt=''
						/>
						johndoe@xyz.com
					</p>
					<p>
						<img
							src={callIcon}
							alt=''
						/>
						+44 3245 5521 5521
					</p>
					<p>
						<img
							src={locationIcon}
							alt=''
						/>
						London, UK
					</p>
				</div>
			</div>
			<div className='resume-body'>
				<div className='edu-info'>
					<h3>Education</h3>
					<div className='edu-details'>
						<p>08/2020 – present</p>
						<p>New York City, US</p>
					</div>
					<div className='edu-name'>
						<p>London City University</p>
						<p>Bachelors in Economics</p>
					</div>
				</div>

				<div className='exp-info'>
					<h3>Professional Experience</h3>
					<div className='exp-details'>
						<p>08/2020 – present</p>
						<p>New York City, US</p>
					</div>
					<div className='exp-name'>
						<p>Umbrella Inc.</p>
						<p>UX & UI Designer</p>
						<p>
							Designed and prototyped user interface patterns for various
							clients in various industries, ranging from self-service apps
							within the telecommunications-sector to mobile games for IOS and
							Android
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;
