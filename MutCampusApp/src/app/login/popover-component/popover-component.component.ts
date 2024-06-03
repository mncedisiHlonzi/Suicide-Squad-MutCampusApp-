import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  @Input() isOpen: boolean | undefined;

  constructor(private navCtrl: NavController) {}

  navigateToLogin(role: string) {
    this.isOpen = false;
    this.navCtrl.navigateForward(`/login/${role}`);
  }
}
