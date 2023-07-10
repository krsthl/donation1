import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonorDashboardPage } from './donor-dashboard.page';

describe('DonorDashboardPage', () => {
  let component: DonorDashboardPage;
  let fixture: ComponentFixture<DonorDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonorDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
