import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Componente importacion manual

// Tarea
// Crear un modulo llamado ContadorModule
import { ContadorModule} from './contador/contador.module'

import { HeroesModule } from './heroes/heroes.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
