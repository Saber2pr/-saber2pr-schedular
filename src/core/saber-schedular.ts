/*
 * @Author: saber2pr
 * @Date: 2019-05-06 18:58:57
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-06 18:58:57
 */
import {
  IdleOptions,
  IdleCallback,
  requestIdleCallback,
  cancelIdleCallback
} from '../shim/requestIdleCallback'

export interface Task {
  expirationTime: number
  idleCallback: (timeRemain: number) => any
}

export class Schedular {
  public constructor()
  public constructor(options: IdleOptions)
  public constructor(private readonly options?: IdleOptions) {}
  private readonly taskQueue: Task[] = []
  private handle: number

  public push(...fn: Task[]) {
    this.taskQueue.push(...fn)
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
