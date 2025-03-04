import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"
import '../styles/Details.css'


function Details({input, handleChange}) {
    return (
			<div className='details'>
				<Personal
					input={input}
					handleChange={handleChange}
				/>
				<Education
					input={input}
					handleChange={handleChange}
				/>
				<Experience
					input={input}
					handleChange={handleChange}
				/>
			</div>
		);
}

export default Details