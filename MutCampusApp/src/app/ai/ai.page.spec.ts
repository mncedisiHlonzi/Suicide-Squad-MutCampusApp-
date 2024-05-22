import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AIPage } from './ai.page';

describe('AIPage', () => {
  let component: AIPage;
  let fixture: ComponentFixture<AIPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
