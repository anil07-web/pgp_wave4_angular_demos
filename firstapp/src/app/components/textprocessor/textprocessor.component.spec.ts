import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextprocessorComponent } from './textprocessor.component';

describe('TextprocessorComponent', () => {
  let component: TextprocessorComponent;
  let fixture: ComponentFixture<TextprocessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextprocessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextprocessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
