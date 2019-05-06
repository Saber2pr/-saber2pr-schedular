/*
 * @Author: saber2pr
 * @Date: 2019-05-06 10:36:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-06 10:57:55
 */
export interface IdleDeadline {
  readonly didTimeout: boolean
  timeRemaining(): number
}

export interface IdleOptions {
  timeout: number
}

export type IdleCallback = {
  (deadline: IdleDeadline): void
}

export function requestIdleCallback(callback: IdleCallback): number

export function requestIdleCallback(
  callback: IdleCallback,
  options: IdleOptions
): number

export function cancelIdleCallback(handle: number): void
