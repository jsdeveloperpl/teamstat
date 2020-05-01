import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.http.post<any>(`${environment.API_URL}/login`, this.loginForm.value).subscribe((res) => {
      if (!res.auth) {
        return console.log('invalid login and/or password');
      }
      this.authService.saveToken();
      this.router.navigate(['../../']).then(console.log);
    });
  }

}
