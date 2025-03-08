import { Component, OnInit } from '@angular/core';
import { TipService } from './tip.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'Daily Grind';
  tipOfTheDay: string = '';

  constructor(private tipService: TipService) { }

  ngOnInit(): void {
    this.getTipOfTheDay();
  }

  getTipOfTheDay(): void {
    this.tipService.getTip().subscribe((tip: string) => this.tipOfTheDay = tip);
  }
}
