import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homeItems: any;
  image: any;
  title: any;
  subTitle: any;
  paragraph1: any;
  imageUrl = environment.imageUrl;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService
  ) {}

  ngOnInit(): void {
    this.GetSubSectionEntityById();
    this.common.changeNavColor.next('');
  }

  GetSubSectionEntityById() {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(4)
      .subscribe((data) => {
        this.homeItems = data;
        console.log('homeItems', this.homeItems);
        this.image = this.homeItems[0].Image;
        this.title = this.homeItems[0].Title;
        this.subTitle = this.homeItems[0].SubTitle;
        this.paragraph1 = this.homeItems[0].Paragraph1;
        console.log('Image', this.image);
      });
  }
}
