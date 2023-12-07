import { Component, Input } from '@angular/core';
import { TuiHintDirection } from '@taiga-ui/core';

@Component({
  selector: 'app-custom-host-tooltip',
  templateUrl: './custom-host-tooltip.component.html',
  styleUrls: ['./custom-host-tooltip.component.scss']
})
export class CustomHostTooltipComponent {
  @Input('host-title') public customHostTitle: string = '';
  @Input('host-direction') public customHostDirection: TuiHintDirection = 'bottom-right';
}
