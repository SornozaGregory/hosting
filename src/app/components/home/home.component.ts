import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      imgSrc: 'assets/img/MT-09.jpg',
      title: 'YAMAHA MT-09',
      description: 'Motor tricilíndrico crossplane de 890 cc y alto torque y potencia, suspensión ajustable para una mejor conducción deportiva, cambio rápido QSS (Quick Shifter Sistem) para subir de marcha con agilidad.',
    },
    {
      imgSrc: 'assets/img/H2R.jpg',
      title: 'KAWASAKI NINJA H2R',
      description: 'La H2R cuenta con: suspensión trasera Ohlins, cambio rápido hacia arriba y hacia abajo, dispositivos aerodinámicos, gestión de curvas y un indicador de ángulo de inclinación. Ninja H2R, haz tu parte en la historia. Este vehículo no está fabricado para su uso en la vía pública.',
    },
    {
      imgSrc: 'assets/img/V4.jpg',
      title: 'DUCATI STREETFIGHTER V4',
      description: 'La Streetfighter V4 es una moto que lleva aún más lejos los conceptos de la "Fight Formula". La evolución sigue la de la familia Panigale V4: sin carenados, manillar alto y ancho, 178 kg de peso, motor Desmosedici Stradale de 208 CV, alas biplano y paquete electrónico de última generación.',
    },
    {
      imgSrc: 'assets/img/CBR1000.jpg',
      title: 'HONDA CBR1000RR',
      description: 'Motor 4 tiempos de 998CC, 4 cilindros en línea, DOCH de 16 válvulas, refrigeración líquida, Panel de control LCD, transmisión de 6 velocidades tipo retorno, sistema de arranque eléctrico.',
    }
  ];
}
