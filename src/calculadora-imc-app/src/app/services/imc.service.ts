import { Injectable } from '@angular/core';

export interface ResultadoImc {
  valor: number;
  categoria: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  calcularImc(peso: number, altura: number): number {
    if (!peso || !altura) {
      return 0;
    }
    return peso / (altura * altura);
  }

  obtenerCategoria(imc: number): ResultadoImc {
    let categoria = '';
    let color = '';

    if (imc < 18.5) {
      categoria = 'Bajo peso';
      color = 'primary'; // azul
    } else if (imc < 25) {
      categoria = 'Normal';
      color = 'success'; // verde
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
      color = 'warning'; // amarillo
    } else {
      categoria = 'Obesidad';
      color = 'danger'; // rojo
    }

    return { valor: imc, categoria, color };
  }
}
