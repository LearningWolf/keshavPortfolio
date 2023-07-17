import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  technicalSkills = ["HTML5","CSS3","Bootstrap","JavaScript (JS)","jQuery","Angular"]
  designSkills = ["Figma","Xd"]
  // ques1 = "If I lost my memory whats the first thing you'd tell me about us"
  // ques2 = "why do you think I fell in love with you"
  // ques3 = "What does living a good life mean to you "
  // ques4 = "Whats your biggest fear about our future"
  // ques5 = "Beside cheating and lying what else destroys a relationship"
  // ques6 = "Whats your favorite werid habit of mine"
  // ques7 = "What an isecurity of mine that you love"
}
