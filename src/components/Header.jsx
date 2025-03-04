import '../styles/Header.css'
import downloadIcon from '../assets/download_32dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function Header({ resumeRef }) {
	async function handleClick() {
		if (!resumeRef.current) return;

		const element = resumeRef.current;
		const canvas = await html2canvas(element, {scale: 3,});
		const imgData = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'mm',
			format: 'a4',
		});

		const imgWidth = 210; 
		const imgHeight = (canvas.height * imgWidth) / canvas.width; 

		pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);
		pdf.save('resume.pdf');
	}
	return (
		<div className='header'>
			<h1>ResumeHive</h1>
			<div className='header-info'>
				<button onClick={handleClick}>
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