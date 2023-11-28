import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];
(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));
