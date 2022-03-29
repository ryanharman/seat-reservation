import { Request, Response } from 'express';

import { NoResultsResponse } from './noResultsResponse';

export type ControllerFunction<
  ResBody extends Record<string, unknown> | Record<string, unknown>[],
  ReqBody = any
> = (req: Request<any, ResBody, ReqBody>, res: Response<ResBody | NoResultsResponse>) => any;
