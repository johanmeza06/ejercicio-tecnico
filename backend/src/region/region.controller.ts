import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({
    summary: 'Buscar todas las regiones',
    description: 'Obtiene una lista de todas las regiones',
  })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }
}
