import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search!: string;
  menu: boolean = false;

  constructor(private router: Router) { }
  navigateToSearch() {
    if (this.search.trim() !== '') {
      this.router.navigate(['/search', this.search]);
    }
  }

  openMenu(){
    if(!this.menu){
      this.menu = true;
    }
    else{
      this.menu = false;
    }
  }
}
