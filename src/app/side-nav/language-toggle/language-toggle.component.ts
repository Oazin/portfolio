import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {
  constructor(private translationService: TranslationService) { }

  toggleLanguage(event: any) {
    const lang = event.target.checked ? 'fr' : 'en';
    this.translationService.loadTranslations(lang).subscribe();
  }
}
