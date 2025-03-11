import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideFirebaseApp(() => initializeApp(environment.firebase)), 
      provideAuth(() => getAuth()),                     
    ]
  });
  
  export default bootstrap;
  