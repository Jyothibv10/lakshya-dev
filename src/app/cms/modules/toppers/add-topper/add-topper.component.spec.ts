import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopperComponent } from './add-topper.component';

describe('AddTopperComponent', () => {
  let component: AddTopperComponent;
  let fixture: ComponentFixture<AddTopperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTopperComponent]
    });
    fixture = TestBed.createComponent(AddTopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
