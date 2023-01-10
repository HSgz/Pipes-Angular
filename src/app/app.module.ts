import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Cambiar el locale de la aplicación
import localeEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule, BrowserAnimationsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
