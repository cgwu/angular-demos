import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-demo-injector',
  templateUrl: './user-demo-injector.component.html',
  styleUrls: ['./user-demo-injector.component.css']
})
export class UserDemoInjectorComponent implements OnInit {
  userName: string;

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`
  constructor(private userService: UserService, @Inject('API_URL') private apiUrl: string) { }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({ name: 'Nate Murray 张' });
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }

}
