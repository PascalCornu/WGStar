import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierenScreenComponent } from './registrieren-screen.component';

describe('RegistrierenScreenComponent', () => {
  let component: RegistrierenScreenComponent;
  let fixture: ComponentFixture<RegistrierenScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrierenScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrierenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
