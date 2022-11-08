import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app/app-routing";
import {bootstrapApplication} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./app/counter/counter.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule,
      RouterModule.forRoot(AppRouting, {useHash: true}),
      StoreModule.forRoot({ count: counterReducer }),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
    ),
  ],
}).catch( err => console.error(err));
