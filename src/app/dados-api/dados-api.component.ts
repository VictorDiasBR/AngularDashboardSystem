import { Component, OnInit } from '@angular/core';
import { Aluno } from "./dados-api.model";
import { DadosApiService } from "./dados-api.service";
@Component({
  selector: 'app-dados-api',
  templateUrl: './dados-api.component.html',
  styleUrls: ['./dados-api.component.css']
})
export class DadosApiComponent implements OnInit {
  alunos:Aluno[];
  constructor(private dadosService: DadosApiService) {}

  ngOnInit() {
    this.dadosService.getAlunos().subscribe((res) => (this.alunos = res));
  }

}
