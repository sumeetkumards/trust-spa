import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  name = '';
  email = '';
  message = '';
  isSubmitting = false;
  successMessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill all fields');
      return;
    }

    this.isSubmitting = true;
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('https://script.google.com/macros/s/AKfycbwdNoPE6ZKb6x0HZCAzC8Cvcgc5gllLxtmG1HDuuxJzmt0HL1EDUrbnzB93SYq5hwrRQw/exec', formData)
      .subscribe({
        next: () => {
          this.successMessage = 'Thank you! Your enquiry has been submitted.';
          this.name = '';
          this.email = '';
          this.message = '';
          this.isSubmitting = false;
        },
        error: () => {
          alert('Something went wrong. Please try again later.');
          this.isSubmitting = false;
        }
      });
  }
}
