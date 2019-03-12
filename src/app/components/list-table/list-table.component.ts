import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit, AfterContentInit {

  @Input() newData: any;

  constructor() { }

  ngOnInit() {


  }


  ngAfterContentInit() {

  }

}
