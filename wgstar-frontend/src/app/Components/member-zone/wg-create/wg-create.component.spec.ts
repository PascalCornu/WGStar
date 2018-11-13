import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgCreateComponent } from './wg-create.component';

describe('WgCreateComponent', () => {
  let component: WgCreateComponent;
  let fixture: ComponentFixture<WgCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
