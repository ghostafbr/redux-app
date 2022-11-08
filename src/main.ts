import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app/app-routing";
import {bootstrapApplication} from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(AppRouting, {useHash: true}))
  ],
}).catch( err => console.error(err));
