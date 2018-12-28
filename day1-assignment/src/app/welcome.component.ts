import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `<div>Welcome to {{ trainingName }} training</div>`
})
export class WelcomeComponent {
  trainingName = 'AngularJS';
}
