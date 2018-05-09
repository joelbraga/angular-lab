import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelForm2Component } from './model-form-2.component';

describe('ModelForm2Component', () => {
  let component: ModelForm2Component;
  let fixture: ComponentFixture<ModelForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
