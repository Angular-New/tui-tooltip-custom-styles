import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule,
  TuiHintModule,
  TuiRootModule,
  TuiTooltipModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SgmTooltipComponent } from './components/sgm-tooltip/sgm-tooltip.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent,
    SgmTooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiAvatarModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
