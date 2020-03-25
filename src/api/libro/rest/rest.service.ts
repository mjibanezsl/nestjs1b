import { Injectable } from '@nestjs/common';
import { Libro } from '../libro';


@Injectable()
export class RestService {


    public libros: Libro [] = [];
    public libro:Libro;

    getDatos(): Libro[] {
      return this.libros;
    }

    addDatos(mylibro:Libro) {

      this.libros.push(mylibro);          
      
      


       
      }
}
