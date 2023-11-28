import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopperComponent } from './list-topper.component';

describe('ListTopperComponent', () => {
  let component: ListTopperComponent;
  let fixture: ComponentFixture<ListTopperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTopperComponent]
    });
    fixture = TestBed.createComponent(ListTopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
