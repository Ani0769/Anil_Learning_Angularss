import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { PerfumesListItemComponent } from './perfumes-list-item.component';

describe('PerfumesListItemComponent', () => {
  let component: PerfumesListItemComponent;
  let fixture: ComponentFixture<PerfumesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumesListItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PerfumesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
