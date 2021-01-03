import * as I from 'fp-ts/IO'
import * as T from 'fp-ts/Task'
import { flow, pipe } from 'fp-ts/function'
import { createPdf, addImage, save } from './pdf'
import { selectElement, toCanvas, toImage, on } from './dom'

export const convertPageToCanvasImage = pipe(
  selectElement('.app_page'),
  I.chain(toCanvas),
  T.map(toImage)
)

export const createPdfFromImage = (image: string) =>
  pipe(createPdf, addImage(image), save('example'))

export const downloadPDF = pipe(
  convertPageToCanvasImage,
  T.chain(flow(createPdfFromImage, T.fromIO))
)

export const main = pipe(
  selectElement('.app_save_button'),
  I.map(on('click')(downloadPDF))
)
