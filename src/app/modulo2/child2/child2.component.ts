import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  constructor(private router: Router) {}

  navigateToChild1() {
    this.router.navigate(['/modulo1/child1']);
  }
}
