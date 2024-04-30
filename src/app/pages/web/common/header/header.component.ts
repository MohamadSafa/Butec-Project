import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { truncate } from 'fs';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isDropdownOpen: boolean = true;
  toggleDropdown(event: Event) {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  hideDropdown() {
    this.isDropdownOpen = false;
  }
  navColor: any = 'black';
  isOpen: any = false;
  // @ViewChild('blue') blue: ElementRef;

  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getPageColor();
    console.log('navColor', this.navColor);
  }

  getPageColor(): any {
    this.common.changeNavColor.subscribe((color) => {
      this.navColor = color;
    });
    return this.navColor;
  }

  openMenu() {
    if (this.isOpen == false) {
      var hamb = document.getElementById('nav') as HTMLElement;
      hamb?.style.setProperty('display', 'block');
      this.isOpen = true;
    } else {
      var hamb = document.getElementById('nav') as HTMLElement;
      hamb?.style.setProperty('display', 'none');
      this.isOpen = false;
    }
  }

  // switch() {
  //   this.renderer.setStyle(
  //     this.blue.nativeElement,
  //     'background-color',
  //     this.navColor
  //   );
  // }
}
