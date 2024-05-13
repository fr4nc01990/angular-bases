import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDbzComponent } from './formulario-dbz.component';

describe('FormularioDbzComponent', () => {
  let component: FormularioDbzComponent;
  let fixture: ComponentFixture<FormularioDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioDbzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
