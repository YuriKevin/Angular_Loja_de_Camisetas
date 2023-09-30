import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCamisetaComponent } from './add-camiseta.component';

describe('AddCamisetaComponent', () => {
  let component: AddCamisetaComponent;
  let fixture: ComponentFixture<AddCamisetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCamisetaComponent]
    });
    fixture = TestBed.createComponent(AddCamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
