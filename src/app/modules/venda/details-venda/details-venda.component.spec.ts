import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVendaComponent } from './details-venda.component';

describe('DetailsVendaComponent', () => {
  let component: DetailsVendaComponent;
  let fixture: ComponentFixture<DetailsVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsVendaComponent]
    });
    fixture = TestBed.createComponent(DetailsVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
