import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab4Page],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should play radio', () => {
    spyOn(component.radio, 'play');
    component.play();
    expect(component.radio.play).toHaveBeenCalled();
  });

  it('should pause radio', () => {
    spyOn(component.radio, 'pause');
    component.pause();
    expect(component.radio.pause).toHaveBeenCalled();
  });

  it('should change volume', () => {
    const newVolume = 0.5;
    component.volume = newVolume;
    spyOn(component.radio, 'volume');
    component.changeVolume(null);
    expect(component.radio.volume).toHaveBeenCalledWith(newVolume);
  });

});


function expect(volume: any) {
  throw new Error('Function not implemented.');
}
