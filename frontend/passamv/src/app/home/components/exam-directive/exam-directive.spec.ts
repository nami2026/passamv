import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDirective } from './exam-directive';

describe('ExamDirective', () => {
  let component: ExamDirective;
  let fixture: ComponentFixture<ExamDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
