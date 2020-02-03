import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collectionMenu: any[] = [];
  accountsMenu: any[] = [];


constructor() {

  this.collectionMenu.push({id : 1, menuitem : 'Gadgets'});
  this.collectionMenu.push({id : 2, menuitem : 'Shoes'})

  this.accountsMenu.push({id : 1, menuitem : 'Login'})
  this.accountsMenu.push({id : 2, menuitem : 'SignUp'})

   }

ngOnInit() {
  }

}

