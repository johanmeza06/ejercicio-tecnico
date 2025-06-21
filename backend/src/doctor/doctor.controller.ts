import { Controller, Get, Query } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { FindAllDoctorDto } from './dto/findAll-doctor.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @ApiOperation({
    summary: 'Buscar todos los medicos',
    description:
      'Obtiene una lista de todos los medicos con paginación, orden y filtrado.',
  })
  @ApiQuery({
    name: 'skip',
    required: false,
    description: 'Número de registros a omitir (offset)',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    description: 'Número de registros a retornar (limit)',
  })
  @ApiQuery({
    name: 'requireTotalCount',
    required: false,
    description: 'Solicita el total de registros',
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    description: 'Parámetro de ordenamiento (array)',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description: 'Parámetro de filtrado (array)',
  })
  @Get()
  findAll(@Query() findAllDoctorDto: FindAllDoctorDto) {
    return this.doctorService.findAll(findAllDoctorDto);
  }
}
