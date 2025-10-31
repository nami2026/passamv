import { Routes } from '@angular/router';
import { Login } from './security/components/login/login';
import { Register } from './security/components/register/register';
import { Main } from './security/components/main/main';
import { AuthGuard } from './guard/auth-guard';
import { Dashboard } from './home/components/dashboard/dashboard';
import { Directive } from './home/components/directive/directive';
import { FinancialAdvisor } from './home/components/financial-advisor/financial-advisor';
import { ExamFinancialAdvisor } from './home/components/exam-financial-advisor/exam-financial-advisor';
import { ExamDirective } from './home/components/exam-directive/exam-directive';
import { HistoricalComponent } from './home/components/historical/historical';

export const routes: Routes = [
    { path: "login", pathMatch: 'full', component: Login},
    { path: '', component: Main },
    { path: "register", component: Register},
    { path: "home", component: Dashboard, canActivate: [AuthGuard]},
    { path: "directivo", component: Directive, canActivate: [AuthGuard]},
    { path: "asesor-financiero", component: FinancialAdvisor, canActivate: [AuthGuard]},
    { path: "examen-asesor-financiero", component: ExamFinancialAdvisor, canActivate: [AuthGuard]},
    { path: "examen-directivo", component: ExamDirective, canActivate: [AuthGuard]},
    { path: "historico", component: HistoricalComponent, canActivate: [AuthGuard]}
];
