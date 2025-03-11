import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { TipService } from './tip.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, NgIf],
  standalone: true
})
export class AppComponent {
  title = 'Daily Grind';
  isLoggedIn = false;
  tipOfTheDay: string = '';

  constructor( /* private tipService: TipService,*/ public authService: AuthService) {
    
    
    
   }

  googleSignIn(){
    
    this.authService.googleSignIn();
    
    setTimeout(() => {
      this.isLoggedIn = true;
      console.log('user is logged in');
    }, 1000);
  }
  
  signOut() {
    this.authService.signOut()
      .subscribe({
        next: () => {
          // Handle successful sign-out
          console.log('Sign-out successful');
        },
        error: (error) => {
          console.error('Sign-out error:', error);
        }
      });
  }

  getTipOfTheDay(): void {
   // this.tipService.getTip().subscribe((tip: string) => this.tipOfTheDay = tip);
   //this.tipOfTheDay = 'test'
   
  }

  

}
