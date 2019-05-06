import { Schedular } from '../core/saber-schedular'

new Schedular()
  .push({
    expirationTime: 40,
    idleCallback: () => console.log('low priority')
  })
  .push({
    expirationTime: 0,
    idleCallback: () => console.log('hight priority')
  })
  .push({
    expirationTime: 25,
    idleCallback: () => console.log('common priority')
  })
  .execute()
