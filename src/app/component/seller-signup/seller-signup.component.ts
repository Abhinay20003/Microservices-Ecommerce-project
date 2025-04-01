import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Import Router service

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css'],
  standalone: true,  // Indicates that this is a standalone component
  imports: [RouterModule]  
})
export class SellerSignupComponent {
redirectToPage() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router) {}  // Inject Router service

  redirectToLoginPage(): void {
    this.router.navigate(['/login']);  // Navigate to the login page when the method is called
  }
}
