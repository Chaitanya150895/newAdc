import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
 

  constructor( private router: Router , private authService: AuthService ) {
  }

  ngOnInit() {
  }
  
  
  logout(){
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
