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

  experience  = [
    {
      name: "Mobikasa",
      post: "Junior-Frontend Developer",
      time: "Nov-2022 to March-2023",
      jobResTtl: "Job responsibility",
      jobRes1: "Redesign the Current project Developed in any coding language",
      jobRes2: "Redesign the Current project Developed in any coding language",
      jobRes3: "Redesign the Current project Developed in any coding language",
    },
    {
      name: "Corporate Serve",
      post: "UI/UX Developer",
      time: "May-2022 to July-2022",
      jobResTtl: "Job responsibility",
      jobRes1: "Redesign the Current project Developed in any coding language",
      jobRes2: "Redesign the Current project Developed in any coding language",
      jobRes3: "Redesign the Current project Developed in any coding language",
    },
    {
      name: "Dhwaniris",
      post: "UI Developer",
      time: "Sept-2021 to April-2022",
      jobResTtl: "Job responsibility",
      jobRes1: "Redesign the Current project Developed in any coding language",
      jobRes2: "Redesign the Current project Developed in any coding language",
      jobRes3: "Redesign the Current project Developed in any coding language",
    },
    {
      name: "Reb Solutions",
      post: "Intern",
      time: "Oct-2020 to Dec-2020 ",
      jobResTtl: "job responsibility",
      jobRes1: "Redesign the Current project Developed in any coding language",
      jobRes2: "Redesign the Current project Developed in any coding language",
      jobRes3: "Redesign the Current project Developed in any coding language",
    },
    {
      name: "Freelancing",
      post: "Freelancer",
      time: "Aprl-2020 to Aug-2021 ",
      jobResTtl: "job responsibility",
      jobRes1: "Redesign the Current project Developed in any coding language",
      jobRes2: "Redesign the Current project Developed in any coding language",
      jobRes3: "Redesign the Current project Developed in any coding language",
    },
  ]
}
