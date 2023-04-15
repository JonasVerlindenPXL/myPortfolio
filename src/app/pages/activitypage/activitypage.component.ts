import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent {
  private mouseX = 0;
  private mouseY = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const homeLayoutText = this.el.nativeElement.querySelector('.card-glow');
    const rect = homeLayoutText.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left - rect.width / 2;
    this.mouseY = event.clientY - rect.top - rect.height / 2;
    homeLayoutText.style.transform = `perspective(5000px) rotateX(${this.mouseY / -20}deg) rotateY(${this.mouseX / 20}deg)`;
  }
}
