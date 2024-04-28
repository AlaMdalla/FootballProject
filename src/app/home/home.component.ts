import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AppComponent]
})
export class HomeComponent {
    slides = [
        {
          image: '/assets/images/cover1.jpg',
          title: 'Slide 1 Title',
          description: 'Slide 1 Description',
          buttonText: 'Button 1'
        },
        {
          image: '/assets/images/cover2.jpg',
          title: 'Slide 2 Title',
          description: 'Slide 2 Description',
          buttonText: 'Button 2'
        },
        // Add more slides as needed
      ];
      currentIndex = 0;
    
      prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
      }
    
      nextSlide() {
        this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
      }
}
