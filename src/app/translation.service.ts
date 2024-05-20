import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLang: string = 'en';

  constructor(private http: HttpClient) { }

  loadTranslations(lang: string): Observable<any> {
    this.currentLang = lang;
    return this.http.get(`/assets/i18n/${lang}.json`).pipe(
      map((response: any) => {
        this.translations = response;
        return response;
      })
    );
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
