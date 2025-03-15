import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // if you have one
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
