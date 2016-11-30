import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Uncomment the following for AoT
// import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

// Comment the following for AoT
import { AppModule } from '../app/app.module';

// Uncomment the following for AoT
// platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);

// Comment the following for AoT
platformBrowserDynamic().bootstrapModule(AppModule);
