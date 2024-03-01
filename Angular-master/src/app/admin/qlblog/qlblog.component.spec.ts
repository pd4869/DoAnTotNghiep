import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlblogComponent } from './qlblog.component';

describe('QlblogComponent', () => {
  let component: QlblogComponent;
  let fixture: ComponentFixture<QlblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlblogComponent]
    });
    fixture = TestBed.createComponent(QlblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
