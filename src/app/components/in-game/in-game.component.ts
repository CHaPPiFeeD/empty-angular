import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-in-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './in-game.component.html',
  styleUrl: './in-game.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InGameComponent {
  title = 'in game';
}
