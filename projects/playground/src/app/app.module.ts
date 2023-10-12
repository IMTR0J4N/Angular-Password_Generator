import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { NoopenDirective } from './noopen.directive';
import { ConfirmDirective } from './confirm.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ModelDirective } from './model.directive';
import { ForceLowerDirective } from './forcelower.directive';
import { IfDirective } from './if.directive';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoopenDirective,
    ConfirmDirective,
    ModelDirective,
    UserProfileComponent,
    ForceLowerDirective,
    IfDirective,
    RepeatDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
