//the main entry point of the angular appliction
//main=>appModule=>aooComponent
//here we reference all the component globally to viwed from all over the application.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { FormExperimentComponent} from './formExperiment/formExp.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [ BrowserModule ,FormsModule],
  declarations: [AppComponent, ProductListComponent, FormExperimentComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
