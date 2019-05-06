# @saber2pr/schedular

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
new Schedular(options: IdleOptions)
```

2. 注册一个待调度的任务

```ts
new Schedular(options: IdleOptions).push(...fn: Task[])
```

3. 开始调度任务

```ts
new Schedular(options: IdleOptions).execute()
```

4. 停止调度

```ts
new Schedular(options: IdleOptions).cancel()
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
