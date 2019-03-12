import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-gestionar-user',
  templateUrl: './gestionar-user.component.html',
  styleUrls: ['./gestionar-user.component.css']
})


export class GestionarUserComponent implements OnInit, AfterContentInit {

  @ViewChild(FormComponent) resForm: FormComponent  = new  FormComponent;

  row = null;
  nuevo = {

    nombre: '',
    tipo : '' ,
    required: false,
    model : ''
  };


  array = [{ nombre : 'nombre',   tipo: 'text' ,   required: true, model: '' },
           { nombre : 'apellido', tipo: 'text' ,   required: true, model: ''},
           { nombre : 'edad',     tipo: 'number' , required: true, model: ''},
           { nombre : 'email',    tipo: 'email' ,  required: false, model: ''}

          ];

  constructor() { }

   ngOnInit() {

   }

   ngAfterContentInit(): void {

     this.resForm.getData.subscribe(  res => {

      console.log(res);

      this.row = res;
      } );


    }

  addField() {


    this.array.push(   { nombre : 'nuevocampo',   tipo: 'text' ,   required: true, model: '' } ) ;
  }

}
