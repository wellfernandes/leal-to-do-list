import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBackgroundImageComponentComponent } from './dynamic-background-image-component.component';

describe('DynamicBackgroundImageComponentComponent', () => {
  let component: DynamicBackgroundImageComponentComponent;
  let fixture: ComponentFixture<DynamicBackgroundImageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBackgroundImageComponentComponent],
    });
    fixture = TestBed.createComponent(DynamicBackgroundImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
