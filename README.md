# remix-server

## Elysia

```js
import { Elysia } from 'elysia';
import { createRequestHandler } from 'remix-server/elysia';

const app = new Elysia();

app.all(
  '*',
  createRequestHandler({
    build: () => import('./build/server/index.js'),
  })
);
```

## Fastify

```js
import fastify from 'fastify';
import { createRequestHandler } from 'remix-server/fastify';

const app = fastify();

app.all(
  '*',
  createRequestHandler({
    build: () => import('./build/server/index.js'),
  })
);
```

## Hono

```js
import { Hono } from 'hono';
import { createRequestHandler } from 'remix-server/hono';

const app = new Hono();

app.use(
  createRequestHandler({
    build: () => import('./build/server/index.js'),
  })
);
```
