import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentLang: string = 'en';

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.loadTranslations(this.currentLang).subscribe();
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    this.translationService.loadTranslations(lang).subscribe();
  }
}
