import { Controller, Get, Param } from '@nestjs/common';
import { PicklistService } from '../../picklist/picklist.service';

@Controller({
  version: '0',
  path: 'picklists',
})
export class PicklistController {
  constructor(private readonly picklistService: PicklistService) {}

  @Get(':context')
  async getPicklist(@Param('context') context: string) {
    // eslint-disable-next-line no-console
    console.log('context: ', context);
    return this.picklistService.getPicklist(context);
  }
}
