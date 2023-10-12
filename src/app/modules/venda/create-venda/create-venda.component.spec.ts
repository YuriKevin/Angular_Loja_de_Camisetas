import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendaComponent } from './create-venda.component';

describe('CreateVendaComponent', () => {
  let component: CreateVendaComponent;
  let fixture: ComponentFixture<CreateVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVendaComponent]
    });
    fixture = TestBed.createComponent(CreateVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
