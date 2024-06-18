import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorComponentComponent } from './text-editor-component.component';

describe('TextEditorComponentComponent', () => {
  let component: TextEditorComponentComponent;
  let fixture: ComponentFixture<TextEditorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorComponentComponent]
    });
    fixture = TestBed.createComponent(TextEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
