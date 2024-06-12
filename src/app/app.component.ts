import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { map } from 'rxjs';

interface WidgetForm {
  id: FormControl<string | null>;
  token: FormControl<string | null>;
  language: FormControl<string>;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = "empty-angular";
  form: FormGroup<WidgetForm> = this.formBuilder.group({
    id: new FormControl("", [Validators.required]),
    token: new FormControl("", [Validators.required]),
    language: new FormControl("en", { nonNullable: true }),
  });

  reload = true;

  constructor(private formBuilder: FormBuilder) {
    this.form.valueChanges.subscribe(() => {
      this.reload = false;

      setTimeout(() => this.reload = true);
    })
  }
}
