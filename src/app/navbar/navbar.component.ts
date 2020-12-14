import { Component, OnInit ,ViewChild ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('close') close:ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onNavClick(){
    const collapse = document.getElementById('navbarNavDropdown');
  }
}
