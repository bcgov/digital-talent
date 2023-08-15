import { Injectable, NestMiddleware } from '@nestjs/common';
import * as express from 'express';

// This enables content-type: text/plain raw body input

@Injectable()
export class TextParserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    express.text()(req, res, next);
  }
}
