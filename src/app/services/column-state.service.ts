// column-state.service.ts
import {Injectable, signal} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColumnStateService {
  state = signal<Record<string, boolean>>({});
}
