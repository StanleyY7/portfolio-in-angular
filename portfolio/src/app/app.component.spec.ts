import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        CoverComponent,
        AboutComponent,
        ProjectsComponent,
        SkillsComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
