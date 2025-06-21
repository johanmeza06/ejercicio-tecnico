import { Injectable } from '@nestjs/common';
import { responseSuccess } from 'src/commons/response';
import Especialidad from 'src/entities/especialidad.entity';

@Injectable()
export class SpecialtyService {
  async findAll() {
    const specialties = await Especialidad.findAll();
    return responseSuccess(specialties || []);
  }
}
