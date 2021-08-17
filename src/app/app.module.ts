import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './shared/ui/button/button.component';
import { TngButtonDirective } from './shared/ui/directives/tng-button.directive'

@NgModule({
  declarations: [AppComponent, ButtonComponent, TngButtonDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
