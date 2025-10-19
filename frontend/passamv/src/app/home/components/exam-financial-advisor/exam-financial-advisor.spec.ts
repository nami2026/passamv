import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFinancialAdvisor } from './exam-financial-advisor';

describe('ExamFinancialAdvisor', () => {
  let component: ExamFinancialAdvisor;
  let fixture: ComponentFixture<ExamFinancialAdvisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamFinancialAdvisor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamFinancialAdvisor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
