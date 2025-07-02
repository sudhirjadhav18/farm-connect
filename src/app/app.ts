import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FcHeaderComponent } from './shared/fc-header/fc-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FcHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
}
