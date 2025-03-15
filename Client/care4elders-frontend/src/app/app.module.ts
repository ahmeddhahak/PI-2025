import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';  // if you have one
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component'; // Import your component

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent // Add this
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
