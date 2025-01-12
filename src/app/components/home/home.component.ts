import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  celebrate(){
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {y: 0.6}
    });
  }
}
