import * as I from 'fp-ts/IO'
import { jsPDF } from 'jspdf'

export const createPdf = new jsPDF('p', 'mm', 'a4')

export const addImage = (image: string) => (pdf: jsPDF) => {
  pdf.addImage(image, 'PNG', 0, 0, 211, 298)
  return pdf
}

export const save = (filename: string) => (
  pdf: jsPDF
): I.IO<void> => () => pdf.save(filename)
