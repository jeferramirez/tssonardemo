import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../components/form/form.component';

@Component({
  selector: 'app-gestionar-producto',
  templateUrl: './gestionar-producto.component.html',
  styleUrls: ['./gestionar-producto.component.css']
})
export class GestionarProductoComponent implements OnInit {

  constructor() { }
  row = null;
  @ViewChild(FormComponent) resForm: FormComponent  = new  FormComponent;



  array = [{ nombre : 'marca',   tipo: 'text' ,   required: false, model: '' },
           { nombre : 'modelo', tipo: 'text' ,   required: true, model: ''},
           { nombre : 'referencia',     tipo: 'number' , required: true, model: ''},
           { nombre : 'fecha vencimiento',    tipo: 'date' ,  required: false, model: ''}

          ];

  ngOnInit() {

    this.resForm.getData.subscribe(  res => {

      console.log(res);

      this.row = res;
      } );


  }

}
