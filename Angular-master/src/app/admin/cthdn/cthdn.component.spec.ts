import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthdnComponent } from './cthdn.component';

describe('CthdnComponent', () => {
  let component: CthdnComponent;
  let fixture: ComponentFixture<CthdnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CthdnComponent]
    });
    fixture = TestBed.createComponent(CthdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
