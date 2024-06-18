import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkedoanhthunamComponent } from './thongkedoanhthunam.component';

describe('ThongkedoanhthunamComponent', () => {
  let component: ThongkedoanhthunamComponent;
  let fixture: ComponentFixture<ThongkedoanhthunamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongkedoanhthunamComponent]
    });
    fixture = TestBed.createComponent(ThongkedoanhthunamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
