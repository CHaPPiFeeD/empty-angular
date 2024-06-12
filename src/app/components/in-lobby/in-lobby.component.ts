import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-in-lobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './in-lobby.component.html',
  styleUrl: './in-lobby.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InLobbyComponent {
  title = 'in lobby';
}
