import VM from '..'

new VM()
  .push({
    expirationTime: 40,
    idleCallback: () => console.log('low priority')
  })
  .push({
    expirationTime: 25,
    idleCallback: () => console.log('common priority')
  })
  .push(() => {
    console.log('high priority')
  })
