import { Component } from '@angular/core';



@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})





export class BodyComponent{
    
    mostrar = true;

    frase: any ={
        mensaje: 'un gran poder reqiere gran posiblidad',
        autor: 'ben parker'
    };
    personajes: string[] = ['spiderman','venon','doctorql'];



}