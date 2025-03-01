function Education() {
    return (
			<div>
				<h2>
					Education{' '}
					<img
						src=''
						alt=''
					/>
				</h2>

				<form action=''>
					<label>
						School:
						<input
							type='text'
							name='school'
						/>
					</label>

					<label>
						Degree
						<input
							type='text'
							name='degree'
						/>
					</label>

					<label>
						Start Date
                        <input
							type='date'
							name='startDate'
						/>
					</label>

					<label>
						End Date:
						<input
							type='date'
							name='endDate'
						/>
					</label>
				</form>
			</div>
		);
}

export default Education