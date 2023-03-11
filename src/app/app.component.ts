import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../app/component/services/user.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router, RouterModule, Routes} from '@angular/router';


imports:[
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppRoutingModule,
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formlog: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router


  ){
    this.formlog = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
  onbutton(){
    this.userService.login(this.formlog.value)
    .then(Response => {
      console.log(Response);
    })
    .catch(error => console.log(error));
  }
}
