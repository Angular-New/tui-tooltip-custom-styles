import { Component } from '@angular/core';
import { TuiHintDirection } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public content: string = 'other-attempt';
  public direction: TuiHintDirection = 'bottom';
  public customHostDirection: TuiHintDirection = 'right';
}
