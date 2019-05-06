/*
 * @Author: saber2pr
 * @Date: 2019-05-06 10:36:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-06 10:57:55
 */
declare interface IdleDeadline {
  readonly didTimeout: boolean
  timeRemaining(): number
}

declare interface IdleOptions {
  timeout: number
}

declare type IdleCallback = {
  (deadline: IdleDeadline): void
}

declare function requestIdleCallback(callback: IdleCallback): number

declare function requestIdleCallback(
  callback: IdleCallback,
  options: IdleOptions
): number

declare function cancelIdleCallback(handle: number): void
