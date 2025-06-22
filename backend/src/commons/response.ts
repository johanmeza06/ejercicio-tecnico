import { HttpStatus } from '@nestjs/common';

export const responseSuccess = (data: any) => {
  return { statusCode: HttpStatus.OK, message: 'Success', data };
};
