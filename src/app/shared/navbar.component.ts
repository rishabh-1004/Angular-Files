import { Component } from '@angular/core';

@Component({
	selector:'navi-bar',
	template: `
		<div class='top-bar'>
			<div class="top-bar-title">Rishabh's Gaming Company</div>
			<div>
				<ul class="menu">
					<li class ='nav-menu'><a href="#">Menu Item 1 </a></li>
					<li class = 'nav-menu'> <a [routerLink]="['/admin']"> Admin</a></li>
				</ul>
			</div>
		</div>`,
	styleUrls:['./navbar.component.css']

})

export class NavComponent {}