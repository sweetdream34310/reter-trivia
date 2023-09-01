import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from './../db-service';

@Injectable()
export class ApplicationSettingsService {

  constructor(
    private dbService: DbService) {
  }

  getApplicationSettings(): Observable<any[]> {
    return this.dbService.valueChanges('application_settings');
  }
}
