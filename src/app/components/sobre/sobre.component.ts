import { Component } from '@angular/core';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  
  constructor(private shared: SharedService) {}
  
  baixarCV() {
    const link = document.createElement('a');
    link.href = 'pdfs/Curriculo_Kaua_Breno.pdf';
    link.download = 'Curriculo_Kaua_Breno.pdf';
    link.click();
  }


  irParaSobre(valor: number) {

    this.shared.setSecao(valor)

    const elemento = document.getElementById('skills');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
