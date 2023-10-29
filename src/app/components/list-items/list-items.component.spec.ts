import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsComponentComponent } from './list-items-component.component';

describe('ListItemsComponentComponent', () => {
  let component: ListItemsComponentComponent;
  let fixture: ComponentFixture<ListItemsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemsComponentComponent]
    });
    fixture = TestBed.createComponent(ListItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});