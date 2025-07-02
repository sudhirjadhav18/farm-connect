import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FcHeaderComponent } from './shared/fc-header/fc-header.component';
import { FcFooterComponent } from "./shared/fc-footer/fc-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FcHeaderComponent, FcFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
}
