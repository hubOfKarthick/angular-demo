import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`auth/login`, { email, password })
            .pipe(map(user => {
                if (user && user.token) {
                    // store user details in local storage to keep user logged in
                    localStorage.setItem('currentUser', JSON.stringify(user.result));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}



// BehaviorSubject
// ---------------
// A BehaviorSubject is a type of observable (i.e. a stream of data that we can subscribe to like the observable 
// returned from HTTP requests in Angular). ... When you subscribe to it, it will immediately return the last value 
// that was emitted immediately (or the initial value if no data has been emitted yet)