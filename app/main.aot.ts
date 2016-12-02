import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory.js';

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
