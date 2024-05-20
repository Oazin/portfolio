import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project1: IProject = { title: "PROJECTTITLE1", imageSrc: "../../assets/pictures/UTGgram_picture.png", description: "PROJECTDESCRIPTION1"};
  project2: IProject = { title: "PROJECTTITLE2", imageSrc: "https://via.placeholder.com/300", description: "PROJECTDESCRIPTION2"};
  project3: IProject = { title: "PROJECTTITLE3", imageSrc: "https://via.placeholder.com/300", description: "PROJECTDESCRIPTION3"};
  project4: IProject = { title: "PROJECTTITLE4", imageSrc: "https://via.placeholder.com/300", description: "PROJECTDESCRIPTION4"};
  project5: IProject = { title: "PROJECTTITLE5", imageSrc: "https://via.placeholder.com/300", description: "PROJECTDESCRIPTION5"};
  project6: IProject = { title: "PROJECTTITLE6", imageSrc: "https://via.placeholder.com/300", description: "PROJECTDESCRIPTION6"};

  projects: IProject[] = [this.project1, this.project2, this.project3, this.project4, this.project5, this.project6];

  constructor() { }

  ngOnInit(): void {
  }
}
