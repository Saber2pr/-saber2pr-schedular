import Sch from '..'

Sch.push({
  expirationTime: 40,
  idleCallback: () => console.log('low priority')
})
  .push(() => console.log('high priority'))
  .push({
    expirationTime: 25,
    idleCallback: () => console.log('common priority')
  })
  .execute()
