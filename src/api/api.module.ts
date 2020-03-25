import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';

import { RestService } from './libro/rest/rest.service';

@Module({
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
