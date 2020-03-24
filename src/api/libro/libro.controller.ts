
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Libro } from './libro';
import {Librosinid} from './librosinid';

@Controller('libro')
export class LibroController {
    @Get() // listado
    findAll(): Libro[] {
      // buscar los datos en la BBDD
      return [];
    }
    @Post() // añadir un objeto
    addOne(@Body() mylibro: Librosinid): Libro {
      // recoger el objeto y meterlo en la BBDD
      const libro = new Libro();
      libro.id = 1;
      libro.titulo = mylibro.titulo;
      libro.autor = mylibro.autor;
      return libro;
    }
    @Get('/:id') // mostrar
    getById(@Param() params): Libro {
      // Capturar e id y consultar a la BBDD
      const libro = new Libro();
      libro.id = params.id;
      libro.titulo = 'quijote';
      libro.autor = 'cervantes';
      libro.fecha=  new Date("1850-01-16");  ;  
      return libro;
    }
    @Put('/:id') // modificar un objeto
    modifyById(@Param() params,
               @Body() updateLibro: Librosinid): Libro {
      // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
      const libro = new Libro();
      libro.id = 1;
      libro.titulo = updateLibro.titulo;
      libro.autor = updateLibro.autor;
      return libro;
    }
    @Delete('/:id') // borrar
    deleteById(@Param() params): Libro {
      // coger el id consultar a la bbdd y luego borrar el objeto
      const libro = new Libro();
      libro.id = params.id;
      libro.titulo = 'quijote';
      libro.autor = 'cervantes';
      libro.fecha=  new Date("1850-01-16");  ;  
      return libro;
}
}
