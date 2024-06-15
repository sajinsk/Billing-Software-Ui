import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationAddComponent } from './quotation-add.component';

describe('QuotationAddComponent', () => {
  let component: QuotationAddComponent;
  let fixture: ComponentFixture<QuotationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
