import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoadonbanComponent } from './qlhoadonban.component';

describe('QlhoadonbanComponent', () => {
  let component: QlhoadonbanComponent;
  let fixture: ComponentFixture<QlhoadonbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlhoadonbanComponent]
    });
    fixture = TestBed.createComponent(QlhoadonbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
