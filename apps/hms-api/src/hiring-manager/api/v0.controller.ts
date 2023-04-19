import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiPagedResponseDto } from '../../dtos/api-paged-response.dto';
import { ApiResponseDto } from '../../dtos/api-response.dto';
import { PageMetaDto } from '../../dtos/page-meta.dto';
import { CreateHiringManagerDto } from '../dto/create-hiring-manager.dto';
import { UpdateHiringManagerDto } from '../dto/update-hiring-manager.dto';
import { HiringManagerService } from '../hiring-manager.service';

@Controller({
  version: '0',
  path: 'hiring-managers',
})
export class HiringManagerApiV0Controller {
  constructor(private readonly hiringManagerService: HiringManagerService) {}

  private formatResponse(data: any, count?: number) {
    return !count
      ? new ApiResponseDto<any>(data)
      : new ApiPagedResponseDto<any>(data, new PageMetaDto({ itemCount: count, options: {} }));
  }

  @Post()
  async create(@Body() createHiringManagerDto: CreateHiringManagerDto) {
    const data = await this.hiringManagerService.create(createHiringManagerDto);

    return this.formatResponse(data);
  }

  @Get()
  async findAll() {
    const [data, count] = await this.hiringManagerService.findAll();

    return this.formatResponse(data, count as number);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.hiringManagerService.findOne(id);

    return this.formatResponse(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHiringManagerDto: UpdateHiringManagerDto) {
    const data = await this.hiringManagerService.update(id, updateHiringManagerDto);
    return this.formatResponse(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hiringManagerService.remove(id);
  }
}
