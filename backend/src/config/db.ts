import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

export const dbConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => {
  const isProduction = configService.get('NODE_ENV') === 'production';
  return {
    dialect: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    autoLoadModels: true,
    synchronize: true,
    models: [path.join(__dirname, '/../entities/**/*')],
    logging: false,
    ...(isProduction && {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
  };
};
