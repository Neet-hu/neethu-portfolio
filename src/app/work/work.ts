import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {

  projects = [

{
title: "CyberGuard",
subtitle: "Cyberbullying Detection System",
description: "Deep learning NLP model + Flask API + AI legal chatbot",
tags: ["Deep Learning", "NLP", "Flask", "Python"],
highlight: "Published in IEEE Xplore"
},

{
title: "Fake Face Detection",
subtitle: "CNN Image Classification",
description: "Real vs fake face detection using CNN, OpenCV & dlib",
tags: ["CNN", "OpenCV", "dlib", "Python"],
highlight: "Computer Vision"
},

{
title: "Contract Validation",
subtitle: "BERT-based Analysis",
description: "Automated business contract clause analysis using BERT NLP",
tags: ["BERT", "NLP", "Python", "Automation"],
highlight: "Enterprise NLP"
},

{
title: "Style Buddy",
subtitle: "Fashion Stylist App",
description: "Personalized outfit recommendation web application",
tags: ["Web App", "UI/UX", "Recommendation"],
highlight: "Full-Stack"
}

]

}