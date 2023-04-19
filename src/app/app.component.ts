import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor(private el: ElementRef) {
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const homeLayoutTextList = this.el.nativeElement.querySelectorAll('.card-glow');
    homeLayoutTextList.forEach((homeLayoutText: HTMLElement) => {
      const rect = homeLayoutText.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;
      homeLayoutText.style.transform = `perspective(800px) rotateX(${mouseY / -100}deg) rotateY(${mouseX / 100}deg)`;

      const trailer = this.el.nativeElement.querySelector('.trailer');
      const x = event.clientX - trailer.offsetWidth / 2;
      const y = event.clientY - trailer.offsetHeight / 2;
      trailer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

}
