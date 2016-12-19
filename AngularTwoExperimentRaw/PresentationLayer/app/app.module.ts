//the main entry point of the angular appliction
//main=>appModule=>aooComponent
//here we reference all the component globally to viwed from all over the application.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './product/product-list.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent, ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
