import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"
import '../styles/Details.css'


function Details({input, education, setEducation,  experience, setExperience, handleChange,}) {
    return (
			<div className='details'>
				<Personal
					input={input}
					handleChange={handleChange}
				/>
				<Education
				  education={education}
				  setEducation={setEducation}
				/>
				<Experience
					experience={experience}
					setExperience={setExperience}	
				/>
			</div>
		);
}

export default Details