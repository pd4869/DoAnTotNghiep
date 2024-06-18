import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuanxbComponent } from './suanxb.component';

describe('SuanxbComponent', () => {
  let component: SuanxbComponent;
  let fixture: ComponentFixture<SuanxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuanxbComponent]
    });
    fixture = TestBed.createComponent(SuanxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
