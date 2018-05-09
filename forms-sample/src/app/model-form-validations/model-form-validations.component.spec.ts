import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormValidationsComponent } from './model-form-validations.component';

describe('ModelFormValidationsComponent', () => {
  let component: ModelFormValidationsComponent;
  let fixture: ComponentFixture<ModelFormValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFormValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
