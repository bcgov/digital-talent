import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';

export class ApiResponseDto<T> {
  @IsObject()
  @ApiProperty({ isArray: false })
  readonly data: T;

  constructor(data: T) {
    this.data = data;
  }
}
