import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiPagedResponseDto } from '../../dtos/api-paged-response.dto';
import { ApiResponseDto } from '../../dtos/api-response.dto';
import { PageMetaDto } from '../../dtos/page-meta.dto';
import { CreateOpportunityDto } from '../dto/create-opportunity.dto';
import { UpdateOpportunityDto } from '../dto/update-opportunity.dto';
import { OpportunityService } from '../opportunity.service';

@Controller({
  version: '0',
  path: 'opportunities',
})
export class OpportunityApiV0Controller {
  constructor(private readonly opportunityService: OpportunityService) {}

  private formatResponse(data: any, count?: number) {
    return !count
      ? new ApiResponseDto<any>(data)
      : new ApiPagedResponseDto<any>(data, new PageMetaDto({ itemCount: count, options: {} }));
  }

  @Post()
  async create(@Body() createOpportunityDto: CreateOpportunityDto) {
    const data = await this.opportunityService.create(createOpportunityDto);
    return this.formatResponse(data);
  }

  @Get()
  async findAll() {
    const [data, count] = await this.opportunityService.findAll();

    return this.formatResponse(data, count as number);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.opportunityService.findOne(id);

    return this.formatResponse(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOpportunityDto: UpdateOpportunityDto) {
    const data = await this.opportunityService.update(id, updateOpportunityDto);

    return this.formatResponse(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opportunityService.remove(id);
  }
}
