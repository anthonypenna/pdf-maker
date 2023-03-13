import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import 'virtual:windi.css'

async function takePageScreenshot(page: HTMLElement) {
	const canvas = await html2canvas(page)
	return canvas.toDataURL('image/webp')
}

function convertImageToPDF(image: string) {
	const pdf = new jsPDF('portrait', 'mm', 'a4', false)
	pdf.addImage(image, 'WEBP', 0, 0, 210, 297)
	return pdf
}

const downloadButton = document.querySelector('#download_button') as HTMLButtonElement

downloadButton.addEventListener('click', async () => {
	const page = document.querySelector('#page') as HTMLElement
	const pageScreenshot = await takePageScreenshot(page)
	const pdf = convertImageToPDF(pageScreenshot)
	pdf.save('example.pdf')
})
