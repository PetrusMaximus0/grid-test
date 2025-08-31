import {Component, computed, inject} from '@angular/core';
import {IToolPanel, IToolPanelParams} from 'ag-grid-community';
import {ColumnStateService} from '../services/column-state.service';

@Component({
  selector: 'app-detail-columns-panel',
  standalone: true,
  template: `
    <div class="custom-panel">
      <h4>Detail Grid Columns</h4>
      @for (col of detailCols; track col.logicalKey) {
        <label>
          <input
            type="checkbox"
            [checked]="state()[col.logicalKey]"
            (change)="toggle(col.logicalKey, $event)" />
          {{ col.header }}
        </label>
      }
    </div>
  `,
  styles: [`
    .custom-panel {
      padding: 8px;
    }
    label {
      display: block;
      margin-bottom: 4px;
    }
  `]
})
export class DetailColumnsPanelComponent implements IToolPanel {
  private colStateService = inject(ColumnStateService);

  // pretend detail grid columns (user-friendly names + logical keys)
  readonly detailCols = [
    { header: 'Dollars', logicalKey: 'dollars' },
    { header: 'Yen', logicalKey: 'yen' }
  ];

  // directly expose the signal from the service
  state = computed(()=>this.colStateService.state());

  agInit(_params: IToolPanelParams): void {
    // Nothing needed: signals auto-react
  }

  toggle(key: string, event: Event) {
    const visible = event.currentTarget as HTMLInputElement;
    this.colStateService.state.set({
      ...this.colStateService.state(),
      [key]: visible.checked
    });
  }

  refresh(): void {}
}
