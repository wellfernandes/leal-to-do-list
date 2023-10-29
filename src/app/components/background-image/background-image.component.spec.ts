import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundImageComponent } from './background-image.component';

describe('DynamicBackgroundImageComponentComponent', () => {
  let component: BackgroundImageComponent;
  let fixture: ComponentFixture<BackgroundImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundImageComponent],
    });
    fixture = TestBed.createComponent(BackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});