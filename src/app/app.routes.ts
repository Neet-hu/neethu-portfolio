import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Stats } from './stats/stats';
import { Contact } from './contact/contact';
import { Projects} from './projects/projects';
import { App } from './app';
import { Techskills } from './techskills/techskills';
export const routes: Routes = [

{
path: '',
component: Hero
},

{
path: 'projects',
component: Projects
},

{
path: 'contact',
component: Contact
},

{
  path: 'technical',
  component: Techskills
}
];





export class AppModule {}