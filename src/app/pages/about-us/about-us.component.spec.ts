import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AboutUsComponent', () => {
    let component: AboutUsComponent;
    let fixture: ComponentFixture<AboutUsComponent>;
    let httpMock: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AboutUsComponent ],
        imports: [ HttpClientTestingModule ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AboutUsComponent);
      component = fixture.componentInstance;
      httpMock = TestBed.inject(HttpTestingController);
      fixture.detectChanges();
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should alert if fields are empty on submit', () => {
      spyOn(window, 'alert');
      component.name = '';
      component.email = '';
      component.message = '';
      component.submitForm();
      expect(window.alert).toHaveBeenCalledWith('Please fill all fields');
    });

    it('should set isSubmitting to true and send POST request when fields are filled', () => {
      component.name = 'John';
      component.email = 'john@example.com';
      component.message = 'Hello!';
      component.submitForm();
      expect(component.isSubmitting).toBeTrue();

      const req = httpMock.expectOne('https://script.google.com/macros/s/AKfycbx7JDUq0u8kbRl8sRBD1j3hrxkTSKIHDmABRSov7IFRSi60ca4vzYaAMIF26SpWDW-qBw/exec');
      expect(req.request.method).toBe('POST');
      req.flush({});
    });

    it('should reset fields and show success message on successful submit', () => {
      component.name = 'Jane';
      component.email = 'jane@example.com';
      component.message = 'Hi!';
      component.submitForm();

      const req = httpMock.expectOne('https://script.google.com/macros/s/AKfycbx7JDUq0u8kbRl8sRBD1j3hrxkTSKIHDmABRSov7IFRSi60ca4vzYaAMIF26SpWDW-qBw/exec');
      req.flush({});

      expect(component.successMessage).toBe('Thank you! Your enquiry has been submitted.');
      expect(component.name).toBe('');
      expect(component.email).toBe('');
      expect(component.message).toBe('');
      expect(component.isSubmitting).toBeFalse();
    });

    it('should alert and reset isSubmitting on error', () => {
      spyOn(window, 'alert');
      component.name = 'Jane';
      component.email = 'jane@example.com';
      component.message = 'Hi!';
      component.submitForm();

      const req = httpMock.expectOne('https://script.google.com/macros/s/AKfycbx7JDUq0u8kbRl8sRBD1j3hrxkTSKIHDmABRSov7IFRSi60ca4vzYaAMIF26SpWDW-qBw/exec');
      req.error(new ErrorEvent('Network error'));

      expect(window.alert).toHaveBeenCalledWith('Something went wrong. Please try again later.');
      expect(component.isSubmitting).toBeFalse();
    });
  });
});
