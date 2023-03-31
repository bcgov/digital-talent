import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CandidateLocationService } from '../candidate-location.service';
import { CandidateService } from '../candidate.service';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { UpdateCandidateLocationDto } from '../dto/update-candidate-location.dto';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';

@Controller({
  version: '0',
  path: 'candidates',
})
export class CandidateApiV0Controller {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly locationService: CandidateLocationService,
  ) {}

  // Core Endpoints

  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }

  // Location Endpoints

  @Get(':id/locations')
  findAllLocations(@Param('id') id: string) {
    return this.locationService.findAll(id);
  }

  @Put(':id/locations')
  updateLocations(@Param('id') id: string, @Body() data: UpdateCandidateLocationDto[]) {
    return this.locationService.update(id, data);
  }
}
