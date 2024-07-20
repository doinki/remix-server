import {
  type AppLoadContext,
  createRequestHandler as createRemixRequestHandler,
  type ServerBuild,
} from '@remix-run/node';
import { type Context } from 'hono';

export interface GetLoadContextFunction {
  (c: Context): Promise<AppLoadContext> | AppLoadContext;
}

export interface RequestHandler {
  (c: Context): Promise<Response>;
}

export function createRequestHandler({
  build,
  getLoadContext,
  mode = process.env.NODE_ENV,
}: {
  build: ServerBuild | (() => Promise<ServerBuild>);
  getLoadContext?: GetLoadContextFunction;
  mode?: string;
}): RequestHandler {
  let handleRequest = createRemixRequestHandler(build, mode);

  if (getLoadContext) {
    return async (c) => handleRequest(c.req.raw, await getLoadContext(c));
  }

  return (c) => handleRequest(c.req.raw);
}
