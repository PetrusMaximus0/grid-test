import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailColumnsPanelComponent } from './detail-columns-panel.component';

describe('CustomColumnToolPanelComponent', () => {
  let component: DetailColumnsPanelComponent;
  let fixture: ComponentFixture<DetailColumnsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailColumnsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailColumnsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
