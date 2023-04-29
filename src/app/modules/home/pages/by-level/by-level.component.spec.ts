import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLevelComponent } from './by-level.component';

describe('ByLevelComponent', () => {
  let component: ByLevelComponent;
  let fixture: ComponentFixture<ByLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
