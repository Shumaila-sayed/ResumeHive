import { useState } from "react"

function Personal() {
    const [input, setInputs] = useState({});
    
    const handleChange = (event) => {
			const name = event.target.name;
			const value = event.target.value;
			setInputs((values) => ({ ...values, [name]: value }));
		};

	return (
		<div>
			<h2>Personal Details</h2>
			<form action=''>
				<label>
					Full Name:
					<input
                        type='text'
                        name='fullName'
						value={input.fullName || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Email:
					<input
                        type='email'
                        name="email"
						value={input.email || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Phone Number:
					<input
                        type='number'
                        name="number"
						value={input.number || ''}
						onChange={handleChange}
					/>
				</label>
			</form>
		</div>
	);
}

export default Personal