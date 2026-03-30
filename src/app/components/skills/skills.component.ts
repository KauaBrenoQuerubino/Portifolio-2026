import { Component } from '@angular/core';
import { ProjetosComponent } from './content/projetos/projetos.component';
import { NgClass } from '@angular/common';
import { CertificadosComponent } from "./content/certificados/certificados.component";
import { HabilidadesComponent } from "./content/habilidades/habilidades.component";
import { SharedService } from '../../service/shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-skills',
  imports: [ProjetosComponent, NgClass, CertificadosComponent, HabilidadesComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  btnSelect = 1;
  private sub!: Subscription;

  constructor(public shared: SharedService) {}

  ngOnInit() {
    this.sub = this.shared.secaoAtiva$.subscribe(valor => {
      this.btnSelect = valor;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
