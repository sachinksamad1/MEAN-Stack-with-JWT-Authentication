import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WelcomeResponse } from '../../models/user.model';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage!: string;
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getWelcomeMessage().subscribe(
      (res: WelcomeResponse) => {
        this.welcomeMessage = res.data.message;
        this.user = res.data.user;
      },
      err => {
        console.error(err);
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
}