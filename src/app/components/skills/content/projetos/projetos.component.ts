import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJETO_PADRAO } from '../../../../model/projetos';
import { SlicePipe} from '@angular/common';


@Component({
  selector: 'app-projetos',
  imports: [RouterLink, SlicePipe],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {


  projetos: any[] = PROJETO_PADRAO

  
}
