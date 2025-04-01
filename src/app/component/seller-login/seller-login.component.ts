import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',  // Make sure this points to your HTML file
  styleUrls: ['./seller-login.component.css'],   // Make sure this points to your CSS file
  standalone: true,  // Indicates that this is a standalone component
  imports: [RouterModule]  // Add any other components or modules you need to import here
})
export class SellerLoginComponent {
  sellerId: string = '';
  licenseNumber: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    console.log('Form submitted', { sellerId: this.sellerId, licenseNumber: this.licenseNumber, password: this.password });
  }
}
