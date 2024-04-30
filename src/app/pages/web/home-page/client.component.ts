import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  animateIcons(): void {
    const iconContainers = document.querySelectorAll('.clients .clients-icon-container');
    if (iconContainers) {
      iconContainers.forEach(container => {
        container.classList.toggle('move-right');
      });
    }
  }
}
