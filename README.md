# @saber2pr/schedular

[![npm](https://img.shields.io/npm/v/@saber2pr/schedular.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/schedular)

> 基于 requestIdleCallback 的优先级调度

```bash
# from npm
npm install @saber2pr/schedular

# from github
git clone https://github.com/Saber2pr/-saber2pr-schedular.git
```

## API

```ts
import VM from '@saber2pr/schedular'

new VM()
  .push({
    expirationTime: 40,
    idleCallback: () => console.log('low priority')
  })
  .push({
    expirationTime: 25,
    idleCallback: () => console.log('common priority')
  })
  .push(() => console.log('high priority')) // expirationTime: 0
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
