import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMemberComponent } from './nav-member.component';

describe('NavMemberComponent', () => {
  let component: NavMemberComponent;
  let fixture: ComponentFixture<NavMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
