import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routers } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/sign-up.component';

import  { UserSevice } from './adminShared/user.services';


const AdminRoutes: Routes = [
	{
		path:'admin',
		component:AdminComponent,
		children:[
			{path: 'login', component: LoginComponent },
			{path: 'signup', component: SignUpComponent },
			{path: '',component:AdminMenuComponent, canActivate: [UserService]}
		]
	},
];

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		RouterModule.forChild(AdminRouters)
	],
	exports:[
		RouterModule
	],
	declarations: [
		AdminComponent,
		AdminMenuComponent,
		LoginComponent,
		SignUpComponent
	],
	providers: [
		UserService,
	]
})

export class AdminModule{}