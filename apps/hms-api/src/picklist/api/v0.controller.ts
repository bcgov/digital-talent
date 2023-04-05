/* eslint-disable no-console */
import { Controller, Get } from '@nestjs/common';
import { Roles } from '../../auth/decorators/roles.decorator';
import { ApiFilter } from '../../decorators/api-filter.decorator';
import { ApiPagedResponseDto } from '../../dtos/api-paged-response.dto';
import { PageMetaDto } from '../../dtos/page-meta.dto';
import { GroupedPicklist, PicklistOption, PicklistService, PicklistType } from '../picklist.service';

@Controller({
  version: '0',
  path: 'picklists',
})
export class PicklistApiV0Controller {
  constructor(private readonly picklistService: PicklistService) {}

  private formatPicklistData = (count: number, data: PicklistType) => {
    return new ApiPagedResponseDto<PicklistOption | GroupedPicklist>(
      data,
      new PageMetaDto({ itemCount: count, options: {} }),
    );
  };

  @Get('digital-talent-roles')
  async getDigitalTalentRolesPicklist() {
    const [count, data] = await this.picklistService.findDigitalTalentRolePicklist();
    return this.formatPicklistData(count, data);
  }

  @Get('hiring-managers')
  async getHiringManagersPicklist() {
    const [count, data] = await this.picklistService.findHiringManagerPicklist();
    return this.formatPicklistData(count, data);
  }

  @Get('locations')
  async getLocationsPicklist() {
    const [count, data] = await this.picklistService.findLocationPicklist();
    return this.formatPicklistData(count, data);
  }

  @Get('ministries')
  async getMinistriesPicklist() {
    const [count, data] = await this.picklistService.findMinistriesPicklist();
    return this.formatPicklistData(count, data);
  }

  @Get('skills')
  async getSkillsPicklist() {
    const [count, data] = await this.picklistService.findSkillsPicklist();
    return this.formatPicklistData(count, data);
  }

  @Get('users')
  @Roles('admin', 'user')
  async getUsersPicklist(@ApiFilter() filter: Record<string, any> | undefined) {
    const [count, data] = await this.picklistService.findUsersPicklist(filter);
    return this.formatPicklistData(count, data);
  }
}
