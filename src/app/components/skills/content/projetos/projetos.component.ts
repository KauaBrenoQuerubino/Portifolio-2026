import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {


  projetos: any[] = [
    {
      url_image : "imgs/OIP.jfif",
      url_video : "teste",
      nome : "PROJETO 1",
      descricao: "lorem ipson teste",
      link_repositorio: "link",

      tecnologias: [
        "teste", "teste"
      ]
    }
  ]


}
