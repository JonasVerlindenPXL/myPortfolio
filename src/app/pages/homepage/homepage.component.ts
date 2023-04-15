import {Component, HostListener, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit{
  @ViewChild('textElement') textElement!: ElementRef;

  ngAfterViewInit() {
    const text = 'Fullstack Developer,UI/UX enthusiast, Designer';
    this.loopTypeOutText(text, this.textElement.nativeElement);
  }

  async loopTypeOutText(text: string, element: HTMLElement, delay: number = 50) {
    while (true) {
      const words = text.split(",");
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
          element.innerHTML += word[j].replace(',', '');
          await this.sleep(delay);
        }
        await this.sleep(delay * 15);
        for (let j = word.length; j > 0; j--) {
          element.innerHTML = element.innerHTML.slice(0, -1);
          await this.sleep(delay);
        }
        await this.sleep(delay);
      }
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
