import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {


  @Input() forminputs: Array <any>;
  @Output() getData: EventEmitter <any> = new EventEmitter <any>()  ;
  dataModel: any;


  constructor() { }

  ngOnInit() {


    console.log(this.forminputs);


  }


  sendData( ) {


    const datamodel: Object = new Object;

    this.forminputs.forEach( element => {
      datamodel[element.nombre] = element.model;

     });

    // console.log(allRes);

    console.log(this.forminputs);
    console.log(datamodel);



  }


  showObject() {


    const datamodel: Object = new Object;

    this.forminputs.forEach( element => {
      datamodel[element.nombre] = element.model;
      element.model = '';
     });

    // console.log(allRes);

    // console.log(this.forminputs);

    this.dataModel = datamodel;
    this.getData.emit( this.dataModel );

  }


}
