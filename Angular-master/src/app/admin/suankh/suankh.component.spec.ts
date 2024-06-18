import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuankhComponent } from './suankh.component';

describe('SuankhComponent', () => {
  let component: SuankhComponent;
  let fixture: ComponentFixture<SuankhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuankhComponent]
    });
    fixture = TestBed.createComponent(SuankhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
