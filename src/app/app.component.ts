import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
     trigger('routeAnimations', [
      transition('* <=> *', [
        // prepare both views
        query(':enter, :leave', [
          style({ position: 'absolute', width: '100%' })
        ], { optional: true }),

        group([
          // old page out
          query(':leave', [
            animate('220ms ease', style({ opacity: 0, transform: 'translateY(10px)' }))
          ], { optional: true }),

          // new page in
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            animate('260ms 40ms ease', style({ opacity: 1, transform: 'none' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'trust-spa';
  getRouteAnimationData(outlet: any) {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
