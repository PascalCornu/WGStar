import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberZoneComponent } from './member-zone.component';

describe('MemberZoneComponent', () => {
  let component: MemberZoneComponent;
  let fixture: ComponentFixture<MemberZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
