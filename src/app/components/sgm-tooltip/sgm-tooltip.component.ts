import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiHintDirection } from '@taiga-ui/core';

@Component({
  selector: 'app-sgm-tooltip',
  templateUrl: './sgm-tooltip.component.html',
  styleUrls: ['./sgm-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SgmTooltipComponent {
  @Input('sgm-title') content: string = '';
  @Input('sgm-direction') direction: TuiHintDirection = 'right';
}
