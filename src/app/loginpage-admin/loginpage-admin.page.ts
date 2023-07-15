import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage-admin',
  templateUrl: './loginpage-admin.page.html',
  styleUrls: ['./loginpage-admin.page.scss'],
})
export class LoginpageAdminPage  {
 email: string='';
  username: string='';
  password: string='';
  loginFailed: boolean = false;

  constructor(private navCtrl: NavController, private router: Router, private http: HttpClient) {}

  navigateToLanding() {
    
    this.navCtrl.navigateForward('/donate');
  }
  
  navigateToLanding1() {
    
    this.http.get('assets/admin.xml', { responseType: 'text' }).subscribe(
      (xmlData) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        // Extract user data from the XML
        const users = xmlDoc.getElementsByTagName('admin');
        let authenticated = false;
        let authenticated1 = false;

        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          const xmlemail = user.getElementsByTagName('email')[0]?.textContent;
          const xmlUsername = user.getElementsByTagName('username')[0]?.textContent;
          const xmlPassword = user.getElementsByTagName('password')[0]?.textContent;
          

          if (xmlemail === this.email && this.username === xmlUsername && this.password === xmlPassword ) {
            authenticated = true;
            break;
          }
      
         
        }
       

        if (authenticated) {
          // Login successful
          this.navCtrl.navigateForward('/donate');
        
        }  else {
          // Login failed
          this.loginFailed = true;
          console.log('Invalid username or password or email');
        }
      },
      (error) => {
        // Handle error
        console.log('Error: ', error);
      }

      
    );
    return true;

    
  }
 
}