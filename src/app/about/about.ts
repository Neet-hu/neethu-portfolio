import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 education = {
    degree: "B.Tech — CSE",
    college: "Saintgits College of Engineering",
    location: "Kerala • 2021–2025",
    cgpa: "CGPA 7.62"
  }

  publication = {
    title: "IEEE Publication",
    project: "CyberGuard — Cyberbullying Detection",
    source: "IEEE Xplore, 2025",
    link: "https://ieeexplore.ieee.org/document/11135899"
  }
}
