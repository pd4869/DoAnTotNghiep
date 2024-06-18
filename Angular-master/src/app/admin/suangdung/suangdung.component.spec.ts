import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuangdungComponent } from './suangdung.component';

describe('SuangdungComponent', () => {
  let component: SuangdungComponent;
  let fixture: ComponentFixture<SuangdungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuangdungComponent]
    });
    fixture = TestBed.createComponent(SuangdungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
