function Personal({input, handleChange}) {

	return (
		<div className='card'>
			<h2>Personal Details</h2>
			<form action=''>
				<label>
					Full Name
					<input
						type='text'
						name='fullName'
						value={input.fullName || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Email
					<input
						type='email'
						name='email'
						value={input.email || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Phone Number
					<input
						type='tel'
						name='number'
						value={input.number || ''}
						onChange={handleChange}
					/>
				</label>

				<label>
					Location
					<input
						type='text'
						name='personalLocation'
						value={input.personalLocation || ''}
						onChange={handleChange}
					/>
				</label>
			</form>
		</div>
	);
}

export default Personal