import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {} from '@angular/material';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  contactArray = [1, 2, 3, 4, 5, 6, 7];
  title = 'emergency';
  userImage = '../assets/images/contact.jpg';
}
