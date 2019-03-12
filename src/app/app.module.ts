import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GestionarUserComponent } from './components/gestionar-user/gestionar-user.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { FormComponent } from './components/form/form.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GestionarProductoComponent } from './gestionar-producto/gestionar-producto.component';




@NgModule({
  declarations: [
    AppComponent,
    GestionarUserComponent,
    ListTableComponent,
    FormComponent,
    GestionarProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
