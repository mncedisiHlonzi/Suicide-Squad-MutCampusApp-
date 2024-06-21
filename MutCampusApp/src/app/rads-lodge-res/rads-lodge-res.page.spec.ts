import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadsLodgeResPage } from './rads-lodge-res.page';

describe('RadsLodgeResPage', () => {
  let component: RadsLodgeResPage;
  let fixture: ComponentFixture<RadsLodgeResPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadsLodgeResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
