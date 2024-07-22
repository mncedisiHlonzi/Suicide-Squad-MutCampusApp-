import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit, AfterViewInit {
  @ViewChild('audioElement') audioElementRef!: ElementRef<HTMLAudioElement>;
  private audioElement!: HTMLAudioElement;
  private _volume: number = 0.5;
  isPlaying = false;

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;
    if (this.audioElement) {
      this.audioElement.volume = this._volume;
    }
  }

  constructor(private elementRef: ElementRef) {}

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.play();
    } else {
      this.pause();
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.audioElement = this.audioElementRef.nativeElement;
    this.initAudio();
  }

  initAudio(): void {
    this.audioElement.src = 'https://iono.fm/s/153'; // Replace with the actual MUT Radio stream URL
    this.audioElement.load();
  }

  play(): void {
    this.audioElement.play();
  }

  pause(): void {
    this.audioElement.pause();
  }

  volumeChange(event: CustomEvent): void {
    const value = (event.detail.value as number) / 100;
    this.volume = value;
  }

  seek(event: CustomEvent): void {
    const value = (event.detail.value as number);
    this.audioElement.currentTime = value;
  }
}
