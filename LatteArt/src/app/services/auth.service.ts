import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, connectAuthEmulator, signInWithPopup, signOut, user, User } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth);
    connectAuthEmulator(this.auth, "http://https://9000-idx-daily-grind-1741388285145.cluster-cxy3ise3prdrmx53pigwexthgs.cloudworkstations.dev:9099");
  }

  googleSignIn(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  signOut(): Observable<any> {
    return from(signOut(this.auth));
  }
}