import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  // navBar = ["home","about me","work Experience","contact"];
  navBar = [
    {
      name: "home",
      link: "#"
    },
    {
      name: "about",
      link: "#about"
    },
    {
      name: "Experience",
      link: "#work"
    },
    {
      name: "contact",
      link: "#contact"
    },
    
  ];
  // "about me","work Experience","contact"
  resume = "My Resume";
  resumeUrl = "../../../assets/Resume_Keshav.docx";
  menuBtn = "../../../assets/images/menu-icon.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
