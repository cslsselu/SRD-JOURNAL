import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { AuthGuard } from './auth-guard/auth.guard';

//This file defines the routing configuration of the Angular application 
//and sets up authentication guards to control access to different routes.

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  
  {
		path: '',
		loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
		canActivate: [AuthGuard],
		data: { authGuardPipe: redirectLoggedInToHome }
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
		canActivate: [AuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin }
	},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'journal',
    loadChildren: () => import('./pages/journal/journal.module').then( m => m.JournalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/article/article.module').then( m => m.ArticlePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'table',
    loadChildren: () => import('./pages/table/table.module').then( m => m.TablePageModule),
    canActivate: [AuthGuard]
  }, 
  {
    path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
