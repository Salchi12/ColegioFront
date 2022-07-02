import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarProfesorComponent } from './grabar-profesor.component';

describe('GrabarProfesorComponent', () => {
  let component: GrabarProfesorComponent;
  let fixture: ComponentFixture<GrabarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabarProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrabarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
