import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonorLandingPage } from './donor-landing.page';

describe('DonorLandingPage', () => {
  let component: DonorLandingPage;
  let fixture: ComponentFixture<DonorLandingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonorLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
