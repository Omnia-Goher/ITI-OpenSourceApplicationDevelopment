import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  currentSlideIndex = 0;
  intervaTime: any;
  pauseDisabled = true;
  playDisabled = false;
  nextDisabled = false;
  prevDisabled = true;

  prevImage() {
      this.currentSlideIndex--;
      const slides = document.querySelectorAll(".slide");
      if (this.currentSlideIndex < 0) {
        this.currentSlideIndex = slides.length - 1;
      }
      if (this.currentSlideIndex == 0) {
        this.prevDisabled = true
        this.nextDisabled = false
      }
      if (this.currentSlideIndex < slides.length) {
        this.nextDisabled = false
      }
      slides.forEach((slide, index) => {
        if (index === this.currentSlideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
  }

  nextImage() {
      this.currentSlideIndex++;
      const slides = document.querySelectorAll(".slide");
      if (this.currentSlideIndex == slides.length-1) {
        this.nextDisabled = true
      }
      if (this.currentSlideIndex > 0) {
        this.prevDisabled = false;
      } 
      slides.forEach((slide, index) => {
        if (index === this.currentSlideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
  }
 
  playImages() {
    this.pauseDisabled = false
    this.playDisabled = true
    const slides = document.querySelectorAll(".slide");
    this.intervaTime = setInterval(() => {
      if(this.currentSlideIndex == slides.length-1){
        this.currentSlideIndex=-1
      }
      this.prevDisabled = this.currentSlideIndex>0 ? false : true;
      this.nextDisabled = this.currentSlideIndex==slides.length-1 ? true : false;
      this.nextImage(); 
    }, 1000);    
  }
  
  pauseImages() {
    this.pauseDisabled = true
    this.playDisabled = false
    clearInterval(this.intervaTime);
  }
}
