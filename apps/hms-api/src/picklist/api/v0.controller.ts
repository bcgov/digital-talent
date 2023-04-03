import { Controller, Get, Param } from '@nestjs/common';
import { ApiPagedResponseDto } from '../../dtos/api-paged-response.dto';
import { PageMetaDto } from '../../dtos/page-meta.dto';
import { GroupedPicklist, PicklistOption, PicklistScope, PicklistService } from '../picklist.service';

@Controller({
  version: '0',
  path: 'picklists',
})
export class PicklistApiV0Controller {
  constructor(private readonly picklistService: PicklistService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const [count, data] = await this.picklistService.findOne(id as PicklistScope);

    return new ApiPagedResponseDto<PicklistOption | GroupedPicklist>(
      data,
      new PageMetaDto({ itemCount: count, options: {} }),
    );
  }
}
