import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMgmtComponent } from './login-mgmt.component';

describe('LoginMgmtComponent', () => {
  let component: LoginMgmtComponent;
  let fixture: ComponentFixture<LoginMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
