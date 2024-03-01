import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop1Component } from './shop1.component';

describe('Shop1Component', () => {
  let component: Shop1Component;
  let fixture: ComponentFixture<Shop1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shop1Component]
    });
    fixture = TestBed.createComponent(Shop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
