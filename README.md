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

1. 创建一个调度者实例

```ts
const schedular = new Schedular(options)
```

> options 同 requestIdleCallback 第二个参数

```ts
const schedular = new Schedular({ timeout: 20 })
```

2. 注册一个待调度的任务 Task

> Task 类型

```ts
interface Task {
  expirationTime: number
  idleCallback: (timeRemain: number) => any
}
```

```ts
schedular.push({
  expirationTime: 40,
  idleCallback: timeRemain => console.log('task!, timeRemain:', timeRemain)
})
```

3. 开始调度任务

```ts
schedular.execute()
```

4. 停止调度

```ts
schedular.cancel()
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
