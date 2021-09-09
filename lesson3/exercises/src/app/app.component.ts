import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff() {
    this.takeOffEnabled = false;

    const userChoice = window.confirm('Are you sure the shuttle is ready for takeoff?')
    if (userChoice) {
      this.color = 'blue';
      this.height = 10_000;
      this.width = 0;
      this.message = 'Shuttle in flight!';
    }
  }

  moveRocket(img, direction) {
    this.color = 'blue';

    if (direction === 'right') {
      const newPosition = parseInt(img.style.left) + 10;
      if (newPosition < 470) {
        img.style.left = newPosition + 'px';
        this.width += 10_000;
      } else {
        this.color = 'orange';
      }
    } else if (direction === 'left') {
      const newPosition = parseInt(img.style.left) - 10;
      if(newPosition >= 0) {
        img.style.left = newPosition + 'px';
        this.width -= 10_000;
      } else {
        this.color = 'orange';
      }
    } else if (direction === 'down') {
      const newPosition = parseInt(img.style.bottom) - 10;
      if(newPosition >= 0) {
        img.style.bottom = newPosition + 'px';
        this.height -= 10_000;
      } else {
        this.color = 'orange';
      }
    } else if (direction === 'up') {
      const newPosition = parseInt(img.style.bottom) + 10;
      if(newPosition <= 330) {
        img.style.bottom = newPosition + 'px';
        this.height += 10_000;
      } else {
        this.color = 'orange';
      }
    }
  }

  handleLanding(rocketImage) {
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.height = 0;
  }

  handleAbortMission(rocketImage) {
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.height = 0;
  }
}
