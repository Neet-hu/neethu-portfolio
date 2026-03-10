import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Work } from './work/work';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Skills } from './skills/skills';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Techskills } from './techskills/techskills';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Navbar,
    Hero,
    About, 
    Experience,
    Work,
    Skills,
    Contact,
    Techskills,
],
 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}








