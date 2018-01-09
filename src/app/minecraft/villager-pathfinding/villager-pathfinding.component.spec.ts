import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerPathfindingComponent } from './villager-pathfinding.component';

describe('VillagerPathfindingComponent', () => {
  let component: VillagerPathfindingComponent;
  let fixture: ComponentFixture<VillagerPathfindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerPathfindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerPathfindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
