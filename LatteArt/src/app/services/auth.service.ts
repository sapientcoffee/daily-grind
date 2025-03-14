import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, connectAuthEmulator, signInWithPopup, signOut, user, User, getAuth } from '@angular/fire/auth';
import { Observable, from, switchMap, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth);
    connectAuthEmulator(this.auth, "http://localhost:9099");
  }

  googleSignIn(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      catchError((error) => {
        console.error('Error during Google sign-in:', error);
        return of(null);
      })
    );
  }

  signOut(): Observable<any> {
    return from(signOut(this.auth)).pipe(
      catchError((error) => {
        console.error('Error during sign-out:', error);
        return of(null);
      })
    );
  }

  getUserToken(): Observable<string | null> {
    const storedToken = sessionStorage.getItem('user_token');
    if (storedToken) {
      return of(storedToken);
    }

    return this.user$.pipe(
      switchMap((user) => {
        if (user) {
          return from(user.getIdToken()).pipe(
            catchError((error) => {
              console.error('Error getting user token:', error);
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      }),
    );
  }
}