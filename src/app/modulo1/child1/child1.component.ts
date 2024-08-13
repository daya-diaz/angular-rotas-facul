import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor(private router: Router) {}

  navigateToChild2() {
    this.router.navigate(['/modulo2/child2']);
  }
}
