import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkhachhangComponent } from './addkhachhang.component';

describe('AddkhachhangComponent', () => {
  let component: AddkhachhangComponent;
  let fixture: ComponentFixture<AddkhachhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddkhachhangComponent]
    });
    fixture = TestBed.createComponent(AddkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
