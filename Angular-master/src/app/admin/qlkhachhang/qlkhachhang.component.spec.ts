import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlkhachhangComponent } from './qlkhachhang.component';

describe('QlkhachhangComponent', () => {
  let component: QlkhachhangComponent;
  let fixture: ComponentFixture<QlkhachhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlkhachhangComponent]
    });
    fixture = TestBed.createComponent(QlkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
