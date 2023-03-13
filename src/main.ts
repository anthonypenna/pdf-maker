import { flow, pipe } from 'fp-ts/function'
import * as I from 'fp-ts/IO'
import * as T from 'fp-ts/Task'
import 'virtual:windi.css'
import { on, selectElement, toCanvas, toImage } from './dom'
import { addImage, createPdf, save } from './pdf'

export const convertPageToCanvasImage = pipe(
  selectElement('#page'),
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
  selectElement('#download_button'),
  I.map(on('click')(downloadPDF))
)
