import {
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllDoctorDto {
  @ApiProperty({
    description: 'Número máximo de médicos a retornar',
    required: false,
    default: 50,
    minimum: 0,
    maximum: 10000,
    type: Number,
    example: 50,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(10000)
  take?: number;

  @ApiProperty({
    description: 'Número de médicos a omitir para la paginación',
    required: false,
    default: 0,
    minimum: 0,
    maximum: 10000,
    type: Number,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  skip?: number;

  @ApiProperty({
    description: 'Solicita el total de registros',
    required: false,
    default: true,
    type: Boolean,
    example: true,
  })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  requireTotalCount?: boolean;

  @ApiProperty({
    description: 'Parámetro de ordenamiento',
    required: false,
    type: 'array',
    items: {
      type: 'object',
      properties: {
        column: { type: 'string', example: 'nombre' },
        desc: { type: 'boolean', example: false },
      },
    },
    example: [[{ column: 'nombre', desc: false }]],
  })
  @IsOptional()
  @IsArray()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return [];
      }
    }
    return value;
  })
  @Type(() => Object)
  sort?: any[];

  @IsOptional()
  @IsArray()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return [];
      }
    }
    return value;
  })
  @Type(() => Object)
  filter?: any[];
}
