import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionesComponent } from './exposiciones.component';

describe('ExposicionesComponent', () => {
  let component: ExposicionesComponent;
  let fixture: ComponentFixture<ExposicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExposicionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
