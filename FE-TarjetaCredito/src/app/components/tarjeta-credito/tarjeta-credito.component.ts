import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css',
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
}
