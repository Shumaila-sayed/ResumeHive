import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"
import '../styles/Details.css'


function Details() {
    return (
        <div className="details">
            <Personal />
            <Education />
            <Experience />
        </div>
        
    )
}

export default Details