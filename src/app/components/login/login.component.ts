import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})


export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  doLogin() {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    var data = this.loginForm.getRawValue() as IUser;
    this.authService.logIn(data)
      .subscribe((response) => {
        this.isLoading = false;
        if (!response) {
          this.openSnackBar();
        }
      }, error => {
        // setTimeOut adiciondo para que o tempo seja suficiente para tela de 'LOADING' aparecer
        setTimeout(() => {
          console.log('error:', error.message)
          this.openSnackBar();
          this.isLoading = false;
        }, 5000);

      })
  }

  openSnackBar() {
    this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
      duration: 6000
    });
  }

}
