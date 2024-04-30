import { Component, OnInit } from '@angular/core';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
  expertiseItems: any;
  image: any;
  title: any;
  categoryId: any;
  paragraph1: any;
  paragraph2: any;
  paragraph3: any;
  imageUrl = environment.imageUrl;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService
  ) {}

  ngOnInit(): void {
    this.GetSubSectionEntityById();
  }

  GetSubSectionEntityById() {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(6)
      .subscribe((data) => {
        this.expertiseItems = data;
        console.log('expertise Items', this.expertiseItems);
        this.image = this.expertiseItems[0].Image;
        this.title = this.expertiseItems[0].Title;
        this.categoryId = this.expertiseItems[0].CategoryId;
        this.paragraph1 = this.expertiseItems[0].Paragraph1;
        this.paragraph2 = this.expertiseItems[0].Paragraph2;
        this.paragraph3 = this.expertiseItems[0].Paragraph3;
        console.log('Image', this.image);
      });
  }
}
