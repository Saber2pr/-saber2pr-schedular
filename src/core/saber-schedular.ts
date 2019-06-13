/*
 * @Author: saber2pr
 * @Date: 2019-05-06 18:58:57
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-06 19:30:53
 */
/// <reference path="../shim/requestIdleCallback.ts" />

export interface Task {
  expirationTime: number
  idleCallback: (timeRemain: number) => any
}

export const isTask = (obj: any): obj is Task =>
  ['expirationTime', 'idleCallback'].every(i => typeof obj[i] !== 'undefined')

export const isIdleCallback = (fn: any): fn is Task['idleCallback'] =>
  typeof fn === 'function'

export class Schedular {
  public constructor()
  public constructor(options: IdleOptions)
  public constructor(private readonly options?: IdleOptions) {}
  private readonly taskQueue: Task[] = []
  private handle: number

  public push(...fn: Array<Task | Task['idleCallback']>): this {
    for (const f of fn) {
      isTask(f)
        ? this.taskQueue.push(f)
        : isIdleCallback(f)
        ? this.taskQueue.push({
            expirationTime: 0,
            idleCallback: f
          })
        : null
    }

    return this
  }

  private idleCallback: IdleCallback = async deadline => {
    const task = this.taskQueue.shift()
    if (!task) return

    if (deadline.timeRemaining() > task.expirationTime || deadline.didTimeout) {
      await task.idleCallback(deadline.timeRemaining())
    } else {
      this.taskQueue.push(task)
    }

    requestIdleCallback(this.idleCallback, this.options)
  }

  public execute(): void {
    this.handle = requestIdleCallback(this.idleCallback, this.options)
  }

  public cancel() {
    cancelIdleCallback(this.handle)
  }
}
