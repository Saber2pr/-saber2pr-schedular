import { Schedular } from '..'

new Schedular()
  .push({
    expirationTime: 40,
    idleCallback: () => console.log('low priority')
  })
  .push({
    expirationTime: 0,
    idleCallback: () => console.log('high priority')
  })
  .push({
    expirationTime: 25,
    idleCallback: () => console.log('common priority')
  })
  .execute()
