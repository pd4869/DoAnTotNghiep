import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthdbComponent } from './cthdb.component';

describe('CthdbComponent', () => {
  let component: CthdbComponent;
  let fixture: ComponentFixture<CthdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CthdbComponent]
    });
    fixture = TestBed.createComponent(CthdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
