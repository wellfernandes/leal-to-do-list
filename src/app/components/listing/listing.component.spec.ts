import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingComponent } from './listing.component';

describe('ListingComponentComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingComponent]
    });
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
