import * as I from 'fp-ts/IO'
import { jsPDF } from 'jspdf'

export const createPdf = new jsPDF('p', 'mm', 'a4', false)

export const addImage = (image: string) => (pdf: jsPDF) => {
  pdf.addImage(image, 'WEBP', 0, 0, 210, 297)
  return pdf
}

export const save =
  (filename: string) =>
  (pdf: jsPDF): I.IO<void> =>
  () =>
    pdf.save(filename)
