import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  color = '';

  setColor(event: any) {
    const target = event.target;
    this.color = target.value;
  }

}
