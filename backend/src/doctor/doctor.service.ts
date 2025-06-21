import { filterLogLevels, Injectable } from '@nestjs/common';
import { FindAllDoctorDto } from './dto/findAll-doctor.dto';
import Medico from 'src/entities/medico.entity';
import { responseSuccess } from 'src/commons/response';
import { Op, Order } from 'sequelize';

@Injectable()
export class DoctorService {
  constructor() {}

  async findAll(findAllDoctorDto: FindAllDoctorDto) {
    const take = findAllDoctorDto.take || 50;
    const skip = findAllDoctorDto.skip || 0;
    const requireTotalCount = findAllDoctorDto.requireTotalCount !== false;
    let order: Order = [];
    let where: any = {};

    // Procesar sort (DevExtreme envía un array de objetos)
    if (
      Array.isArray(findAllDoctorDto.sort) &&
      findAllDoctorDto.sort.length > 0
    ) {
      order = findAllDoctorDto.sort.map((column: any) => {
        if (column.selector === 'especialidad') {
          column.selector = 'especialidadId';
        }
        if (column.selector === 'region') {
          column.selector = 'regionId';
        }
        return [column.selector, column.desc ? 'DESC' : 'ASC'];
      });
    }

    if (Array.isArray(findAllDoctorDto.filter)) {
      findAllDoctorDto.filter.reduce((acc, filter) => {
        if (filter.especialidad) {
          where.especialidadId = filter.especialidad;
        }
        if (filter.region) {
          where.regionId = filter.region;
        }
        if (filter.name) {
          where.nombre = { [Op.iLike]: `%${filter.name}%` };
        }
        return acc;
      }, {});
    }

    const medicos = await Medico.findAll({
      limit: take,
      offset: skip,
      order,
      where,
      include: [
        { association: 'especialidad', attributes: ['nombre'] },
        { association: 'region', attributes: ['nombre'] },
      ],
    });

    const formatDoctors = medicos.map((medico) => {
      const { especialidad, region, ...rest } = medico.toJSON();
      return {
        ...rest,
        especialidad: especialidad?.nombre || 'NO ESPECIFICADA',
        region: region?.nombre || 'NO ESPECIFICADA',
      };
    });
    let count = 0;
    if (requireTotalCount) {
      count = await Medico.count({ where });
    }
    return responseSuccess({ doctors: formatDoctors, count });
  }
}
