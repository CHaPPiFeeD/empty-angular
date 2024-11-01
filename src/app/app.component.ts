import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, map, merge } from 'rxjs';

interface WidgetForm {
  id: FormControl<string | null>;
  token: FormControl<string | null>;
  session: FormControl<string | null>;
  currency: FormControl<string | null>;
  gameId: FormControl<string | null>;
  providerId: FormControl<string | null>;
  language: FormControl<string | undefined>;
  mode: FormControl<string>;
  isDevEnv: FormControl<boolean>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'gos-widget-demo';
  form: FormGroup<WidgetForm> = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    token: new FormControl(''),
    session: new FormControl(''),
    currency: new FormControl('EUR'),
    gameId: new FormControl(''),
    providerId: new FormControl(''),
    language: new FormControl<string | undefined>(undefined, {
      nonNullable: true,
    }),
    mode: new FormControl<string>('light', { nonNullable: true }),
    isDevEnv: new FormControl<boolean>(true, { nonNullable: true }),
  });

  reload = true;

  constructor(private formBuilder: FormBuilder, route: ActivatedRoute, @Inject(DOCUMENT) document: Document) {
    this.form.controls.mode.valueChanges.subscribe((value) => {
      document.body.classList.toggle('dark');
    });

    merge(
      this.form.controls.id.valueChanges,
      this.form.controls.token.valueChanges,
      this.form.controls.session.valueChanges,
      this.form.controls.currency.valueChanges,
      this.form.controls.gameId.valueChanges,
      this.form.controls.providerId.valueChanges,
      this.form.controls.language.valueChanges,
      this.form.controls.isDevEnv.valueChanges
    )
      .pipe(debounceTime(500))
      .subscribe(() => this.reloadWidget());
  }

  public reloadWidget(): void {
    this.reload = false;

    setTimeout(() => (this.reload = true));
  }
}
