import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	onlyOdd : boolean = false;

	oddNumbers = [1,3,5,7,9];
	evenNumbers = [2,4,6,8];
}
