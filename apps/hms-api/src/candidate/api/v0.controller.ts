/* eslint-disable no-console */
// import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
// import { CandidateService } from '../../candidate/candidate.service';
// import { CreateCandidateDto } from '../../generated/dtos/create-candidate.dto';
// import { UpdateCandidateDto } from '../../generated/dtos/update-candidate.dto';
// import { PrismaService } from '../../services/prisma/prisma.service';

// @Controller({
//   version: '0',
//   path: 'candidates',
// })
// export class CandidateController {
//   constructor(private readonly candidateService: CandidateService, private readonly prisma: PrismaService) {}

//   @Post()
//   createCandidate(@Body() data: CreateCandidateDto) {
//     return this.candidateService.createCandidate(data);
//   }

//   @Get()
//   async getCandidates() {
//     return this.candidateService.getCandidates();
//   }

//   @Get(':id')
//   async getCandidate(@Param('id') id: string) {
//     return this.candidateService.getCandidate(id);
//   }

//   @Patch(':id')
//   async updateCandidate(@Param('id') id: string, @Body() data: UpdateCandidateDto) {
//     return this.candidateService.updateCandidate(id, data);
//   }

//   @HttpCode(204)
//   @Delete(':id')
//   async deleteCandidate(@Param('id') id: string) {
//     return this.candidateService.deleteCandidate(id);
//   }
// }

import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CandidateService } from '../candidate.service';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';

@Controller({
  version: '0',
  path: 'candidates',
})
export class CandidateApiV0Controller {
  constructor(private readonly candidateService: CandidateService) {}

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
    console.log(updateCandidateDto);

    return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }
}
