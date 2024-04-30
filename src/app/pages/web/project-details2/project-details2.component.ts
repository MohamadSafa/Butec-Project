import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';

@Component({
  selector: 'app-project-details2',
  templateUrl: './project-details2.component.html',
  styleUrls: ['./project-details2.component.css'],
})
export class ProjectDetails2Component {
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService
  ) {}

  ngOnInit(): void {
    this.common.changeNavColor.next('black');
  }
}
