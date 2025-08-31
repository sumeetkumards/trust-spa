import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name = '';
  email = '';
  message = '';
  isSubmitting = false;
  successMessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(): void {
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

    this.http.post('https://script.google.com/macros/s/AKfycbx7JDUq0u8kbRl8sRBD1j3hrxkTSKIHDmABRSov7IFRSi60ca4vzYaAMIF26SpWDW-qBw/exec', formData)
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
