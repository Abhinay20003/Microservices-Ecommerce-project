import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SellerSignupComponent } from './component/seller-signup/seller-signup.component'; // Import necessary components

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Ensures it's a standalone component
  imports: [RouterOutlet],  // ✅ Import any needed components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
