import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RowData} from '../shared/types';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject<HttpClient>(HttpClient);

  getData() : Observable<RowData[]>{
    return this.http
      .get<RowData[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
  };
}
