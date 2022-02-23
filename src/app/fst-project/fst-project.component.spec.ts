import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstProjectComponent } from './fst-project.component';

describe('FstProjectComponent', () => {
  let component: FstProjectComponent;
  let fixture: ComponentFixture<FstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FstProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
