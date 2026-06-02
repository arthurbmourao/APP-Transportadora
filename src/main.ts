import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';

bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    ...(appConfig.providers || []), 
    provideEnvironmentNgxMask()    
  ]
})
.catch((err) => console.error(err));
