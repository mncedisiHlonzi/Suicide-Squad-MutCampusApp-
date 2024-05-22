import { Component} from '@angular/core';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  radio: Howl;
  volume: number = 1;
  contact = {
    name: '',
    message: ''
  };

  constructor() { 
    this.radio = new Howl({
      src: ['https://iono.fm/s/153'],
      html5: true, // Enable HTML5 Audio to force Web Audio API
    });
  }

  play() {
    this.radio.play();
  }

  pause() {
    this.radio.pause();
  }

  changeVolume(event) {
    this.radio.volume(this.volume);
  }

  submitContactForm(event) {
    event.preventDefault();
    // Handle the form submission logic, e.g., sending the message to the radio presenter.
    console.log('Contact form submitted', this.contact);
  }

}
