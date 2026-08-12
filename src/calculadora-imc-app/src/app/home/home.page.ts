import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImcService, ResultadoImc } from '../services/imc.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  peso: number | null = null;
  altura: number | null = null;
  edad: number | null = null;
  genero: string | null = null;

  resultado: ResultadoImc | null = null;
  mostrarError = false;

  constructor(private imcService: ImcService) {}

  calcular() {
    if (!this.peso || !this.altura || this.peso <= 0 || this.altura <= 0) {
      this.mostrarError = true;
      this.resultado = null;
      return;
    }

    this.mostrarError = false;
    const imc = this.imcService.calcularImc(this.peso, this.altura);
    this.resultado = this.imcService.obtenerCategoria(imc);
  }

  limpiar() {
    this.peso = null;
    this.altura = null;
    this.edad = null;
    this.genero = null;
    this.resultado = null;
    this.mostrarError = false;
  }
}
