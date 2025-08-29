import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDetailGridComponent } from './detail-detail-grid.component';

describe('DetailDetailGridComponent', () => {
  let component: DetailDetailGridComponent;
  let fixture: ComponentFixture<DetailDetailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailDetailGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDetailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
