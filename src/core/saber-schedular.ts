/*
 * @Author: saber2pr
 * @Date: 2019-05-06 10:52:29
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-06 12:21:09
 */
export interface Task {
  expirationTime: number
  idleCallback: (timeRemain: number) => any
}

export class Schedular {
  constructor()
  constructor(options: IdleOptions)
  constructor(private readonly options?: IdleOptions) {}
  private readonly schedule: Task[] = []
  private handle: number

  public push(...fn: Task[]) {
    this.schedule.push(...fn)
    return this
  }

  private idleCallback: IdleCallback = async deadline => {
    const task = this.schedule.shift()
    if (!task) return

    if (deadline.timeRemaining() > task.expirationTime || deadline.didTimeout) {
      await task.idleCallback(deadline.timeRemaining())
    } else {
      this.schedule.push(task)
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
