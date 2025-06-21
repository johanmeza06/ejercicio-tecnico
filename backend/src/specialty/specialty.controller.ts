import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @ApiOperation({
    summary: 'Buscar todas las especialidades',
    description: 'Obtiene una lista de todas las especialidades',
  })
  @Get()
  findAll() {
    return this.specialtyService.findAll();
  }
}
