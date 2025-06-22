import { Injectable } from '@nestjs/common';
import { responseSuccess } from 'src/commons/response';
import Region from 'src/entities/region.entity';

@Injectable()
export class RegionService {
  async findAll() {
    const regions = await Region.findAll();
    return responseSuccess(regions || []);
  }
}
