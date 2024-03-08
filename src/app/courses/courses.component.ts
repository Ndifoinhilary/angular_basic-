import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SummaryPip } from '../../../summary.pips';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, SummaryPip],
  template: `   {{text | summary}}   `

})
export class CoursesComponent {
  text = "Our main application bundle was reduced to less than half, thanks to a refactoring that took us less than a day for a quite large application, and every single screen is now lazy-loaded."
}
