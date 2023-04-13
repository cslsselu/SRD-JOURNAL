import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';



@Injectable({
	providedIn: 'root'
})
export class AuthService {

	// Injecting the Firebase Auth service	
	constructor(private auth: Auth) { }

	// Method to register a new user with the provided email and password
	async register({ email, password }: { email: string, password: string }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	// Method to log in a user with the provided email and password
	async login({ email, password }: { email: string, password: string }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	// Method to log out the currently logged in user
	logout() {
		return signOut(this.auth);
	}

	// Getter method to get the currently logged in user
	get user() {
		return this.auth.currentUser;
	}
}
