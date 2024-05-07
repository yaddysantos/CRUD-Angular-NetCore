import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // ,
  ],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css',
  providers: [BrowserModule, BrowserAnimationsModule],
})
export class TarjetaCreditoComponent implements OnInit {
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
      headline: ['', Validators.required],
      cardNumber: [
        '',
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(16),
      ],
      dateOfExpire: [
        '',
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ],
      cvv: [
        '',
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ],
    });
  }

  ngOnInit(): void {}

  addCard() {
    console.log(this.form);
    const card: any = {
      headline: this.form.get('headline')?.value,
      cardNumber: this.form.get('cardNumber')?.value,
      dateOfExpire: this.form.get('dateOfExpire')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.cardList.push(card);
    alert('Tarjeta Agredada/registrada con exito')
    //this.toastr.success('Tarjeta registrada con exito!', 'Tarjeta Registrada!');
    this.form.reset();
  }

  deleteCard(index: number) {
    this.cardList.splice(index,1);
    alert('Tarjeta eliminada')
  }
}
