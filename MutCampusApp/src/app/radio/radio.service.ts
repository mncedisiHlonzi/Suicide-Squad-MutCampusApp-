import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private radio: Howl;
  private sprite: Howl;
  private positionalSound: Howl;

  constructor() {
    this.radio = new Howl({
      src: ['path/to/your/audio/file.mp3'],
      volume: 0.5
    });

    this.sprite = new Howl({
      src: ['path/to/your/sprite.mp3'],
      sprite: {
        clip1: [0, 1000],
        clip2: [2000, 1000]
      }
    });

    this.positionalSound = new Howl({
      src: ['path/to/your/audio/file.mp3'],
      pos: [0, 0, -0.5],
      volume: 1.0
    });
  }

  play() {
    this.radio.play();
  }

  pause() {
    this.radio.pause();
  }

  stop() {
    this.radio.stop();
  }

  setVolume(volume: number) {
    this.radio.volume(volume);
  }

  seek(time: number) {
    this.radio.seek(time);
  }

  playSprite(clip: string) {
    this.sprite.play(clip);
  }

  updatePosition(x: number, y: number, z: number) {
    this.positionalSound.pos(x, y, z);
  }
}
