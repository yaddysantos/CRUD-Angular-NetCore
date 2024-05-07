import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css',
  providers: [BrowserModule],
})
export class TarjetaCreditoComponent {
  cardList: any[] = [
    {
      title: 'Juan perez',
      tarjetNumber: 12345667898,
      dateOfExpire: '11/12',
      cvv: 123,
    },
    {
      title: 'pedro perez',
      tarjetNumber: 12345667898,
      dateOfExpire: '10/12',
      cvv: 124,
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      headline: [''],
      tarjetNumber: [''],
      dateOfExpire: [''],
      cvv: [''],
    });
  }

  addCard() {
    console.log(this.form);
    const card: any = {
      headline: this.form.get('headline')?.value,
      tarjetNumber: this.form.get('tarjetNumber')?.value,
      dateOfExpire: this.form.get('dateOfExpire')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.cardList.push(card);
    console.log(card);
  }
}
