import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginpageAdminPage } from './loginpage-admin.page';

describe('LoginpageAdminPage', () => {
  let component: LoginpageAdminPage;
  let fixture: ComponentFixture<LoginpageAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginpageAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
