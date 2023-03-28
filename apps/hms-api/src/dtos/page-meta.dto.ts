import { ApiProperty } from '@nestjs/swagger';
import { PageOptionsDto } from './page-options.dto';

export interface PageMetaDtoParams {
  itemCount: number;
  options: PageOptionsDto;
}

export class PageMetaDto {
  @ApiProperty()
  readonly itemCount: number;

  constructor({ itemCount, options }: PageMetaDtoParams) {
    this.itemCount = itemCount;
  }
}
