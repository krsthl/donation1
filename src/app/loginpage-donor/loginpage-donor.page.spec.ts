import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginpageDonorPage } from './loginpage-donor.page';

describe('LoginpageDonorPage', () => {
  let component: LoginpageDonorPage;
  let fixture: ComponentFixture<LoginpageDonorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginpageDonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

