import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSelectedComponent } from './recipe-selected.component';

describe('RecipeSelectedComponent', () => {
  let component: RecipeSelectedComponent;
  let fixture: ComponentFixture<RecipeSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
