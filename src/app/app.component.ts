import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [ 
    BannerComponent, 
    NavComponent, 
    SobreComponent, 
    SkillsComponent, 
    ProjectsComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portifolio-2026';
}
