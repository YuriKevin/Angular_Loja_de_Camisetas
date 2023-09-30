import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendasComponent } from './edit-vendas.component';

describe('EditVendasComponent', () => {
  let component: EditVendasComponent;
  let fixture: ComponentFixture<EditVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVendasComponent]
    });
    fixture = TestBed.createComponent(EditVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
