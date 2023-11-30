import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

function initialize() {
  return () => {
    loadRemoteModule({
      type: 'manifest',
      remoteName: 'sharedComponents',
      exposedModule: './web-components',
    });
  };
}
async function getUserService() {
  return await loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4500/remoteEntry.js',
    exposedModule: './user-service',
  });
}
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
