import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementVendasComponent } from './management-vendas.component';

describe('ManagementVendasComponent', () => {
  let component: ManagementVendasComponent;
  let fixture: ComponentFixture<ManagementVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementVendasComponent]
    });
    fixture = TestBed.createComponent(ManagementVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
