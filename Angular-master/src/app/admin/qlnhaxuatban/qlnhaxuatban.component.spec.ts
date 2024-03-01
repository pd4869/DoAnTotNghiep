import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlnhaxuatbanComponent } from './qlnhaxuatban.component';

describe('QlnhaxuatbanComponent', () => {
  let component: QlnhaxuatbanComponent;
  let fixture: ComponentFixture<QlnhaxuatbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlnhaxuatbanComponent]
    });
    fixture = TestBed.createComponent(QlnhaxuatbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
