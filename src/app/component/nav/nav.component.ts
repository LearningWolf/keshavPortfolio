import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  navBar = ["home","about me","portfolio","contact"]
  resume = "My Resume"
  resumeUrl = "../../../assets/Resume_Keshav.docx"
  menuBtn = "../../../assets/images/menu-icon.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
