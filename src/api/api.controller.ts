import { Controller,Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Post()postSimple(): string {return 'post /api';}

}
