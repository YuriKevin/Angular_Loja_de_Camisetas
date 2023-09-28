import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClienteComponent } from './management-cliente.component';

describe('ManagementClienteComponent', () => {
  let component: ManagementClienteComponent;
  let fixture: ComponentFixture<ManagementClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementClienteComponent]
    });
    fixture = TestBed.createComponent(ManagementClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
