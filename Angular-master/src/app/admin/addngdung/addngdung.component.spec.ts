import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddngdungComponent } from './addngdung.component';

describe('AddngdungComponent', () => {
  let component: AddngdungComponent;
  let fixture: ComponentFixture<AddngdungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddngdungComponent]
    });
    fixture = TestBed.createComponent(AddngdungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
