import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { XhmmComponent } from './xhmm/xhmm.component';
import { OutputComponent } from './output/output.component';
const appRoutes = [
  {path: 'output', component: OutputComponent},
  {path: 'home',component:XhmmComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    XhmmComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
