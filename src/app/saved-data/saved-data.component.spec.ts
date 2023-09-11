import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDataComponent } from './saved-data.component';

describe('SavedDataComponent', () => {
  let component: SavedDataComponent;
  let fixture: ComponentFixture<SavedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedDataComponent]
    });
    fixture = TestBed.createComponent(SavedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
