import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClienteComponent } from './details-cliente.component';

describe('DetailsClienteComponent', () => {
  let component: DetailsClienteComponent;
  let fixture: ComponentFixture<DetailsClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsClienteComponent]
    });
    fixture = TestBed.createComponent(DetailsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
