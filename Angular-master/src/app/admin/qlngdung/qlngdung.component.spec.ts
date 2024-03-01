import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlngdungComponent } from './qlngdung.component';

describe('QlngdungComponent', () => {
  let component: QlngdungComponent;
  let fixture: ComponentFixture<QlngdungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlngdungComponent]
    });
    fixture = TestBed.createComponent(QlngdungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
