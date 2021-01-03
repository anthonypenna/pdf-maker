import * as I from 'fp-ts/IO'
import * as T from 'fp-ts/Task'
import html2canvas from 'html2canvas'

export const selectElement = (
  selector: string
): I.IO<HTMLElement> => () =>
  document.querySelector(selector) as HTMLElement

export const on = (eventName: string) => <A>(
  callback: () => A | Promise<A>
) => (element: HTMLElement) => {
  element.addEventListener(eventName, callback)
  return element
}

export const toCanvas = (
  element: HTMLElement
): T.Task<HTMLCanvasElement> => () => html2canvas(element)

export const toImage = (canvas: HTMLCanvasElement) =>
  canvas.toDataURL('image/png')
