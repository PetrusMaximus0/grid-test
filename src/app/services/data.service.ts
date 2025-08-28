import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject<HttpClient>(HttpClient);

  getData(){
    return this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
  };
}
