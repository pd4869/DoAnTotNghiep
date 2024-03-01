import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnxbComponent } from './addnxb.component';

describe('AddnxbComponent', () => {
  let component: AddnxbComponent;
  let fixture: ComponentFixture<AddnxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnxbComponent]
    });
    fixture = TestBed.createComponent(AddnxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
