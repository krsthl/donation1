import { Component } from '@angular/core';

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.page.html',
  styleUrls: ['./donor-dashboard.page.scss'],
})
export class DonorDashboardPage {
  currentMonth: string; // Store the current month value here
  totalDonation: number; // Store the total donation amount in the current month here
  projects: any[]; // Store the project data here
  expenses: any[]; // Store the expense data here
  donationAmount: number; // Store the donation amount for adding a new donation

  constructor() {
    // Initialize the properties with actual data
    this.currentMonth = 'January';
    this.totalDonation = 1000;
    this.projects = [
      { name: 'Project 1', description: 'Project 1 description' },
      { name: 'Project 2', description: 'Project 2 description' },
      { name: 'Project 3', description: 'Project 3 description' },
    ];
    this.expenses = [
      { name: 'Expense 1', amount: 500 },
      { name: 'Expense 2', amount: 300 },
      { name: 'Expense 3', amount: 200 },
    ];
    this.donationAmount = 0; // Initialize the donation amount to 0
  }

  addDonation() {
    // Implement your logic to add the donation
    console.log('Donation added:', this.donationAmount);
  }
}
