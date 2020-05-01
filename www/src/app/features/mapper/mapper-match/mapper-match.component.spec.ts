import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperMatchComponent } from './mapper-match.component';

describe('MapperComponent', () => {
  let component: MapperMatchComponent;
  let fixture: ComponentFixture<MapperMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapperMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapperMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
