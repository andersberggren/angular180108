import "zone.js";
import "reflect-metadata";

import { AppModule }      from './src/module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
