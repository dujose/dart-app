import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //TODO get info from local Storage
  public full_name = 'Jeanne Kminchelle ';
  public avatarURL = 'https://robohash.org/autquiaut.png"';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    //TODO pegar info do usuario logado do localStorage
    //localStorage.getItem('user');
  }

  doLogOut() {
    this.authService.logOut();
  }

  openURL(url: string) {
    if (url) {
      this.router.navigate([url]);
    }
  }
}
