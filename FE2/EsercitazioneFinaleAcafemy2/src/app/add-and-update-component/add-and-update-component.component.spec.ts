import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateComponentComponent } from './add-and-update-component.component';

describe('AddAndUpdateComponentComponent', () => {
  let component: AddAndUpdateComponentComponent;
  let fixture: ComponentFixture<AddAndUpdateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndUpdateComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAndUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
