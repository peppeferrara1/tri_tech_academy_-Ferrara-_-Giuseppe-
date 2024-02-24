import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRreportComponent } from './product-rreport.component';

describe('ProductRreportComponent', () => {
  let component: ProductRreportComponent;
  let fixture: ComponentFixture<ProductRreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
