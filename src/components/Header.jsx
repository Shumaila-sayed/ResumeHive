import '../styles/Header.css'
import downloadIcon from '../assets/download_32dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg';

function Header() {
    return (
			<div className='header'>
				<h1>ResumeHive</h1>
				<div className='header-info'>
					<button>
						<img
							src={downloadIcon}
							alt=''
						/>
						Download as pdf
					</button>
					<p>
						Created by{' '}
						<a
							href='https://github.com/Shumaila-sayed'
							target='_blank'
						>
							Shumaila Sayed
						</a>
					</p>
				</div>
			</div>
		);
}

export default Header