import { Component, OnInit } from "@angular/core";
import { Aluno } from "./tabela.model";
import { TabelaService } from "./tabela.service";

/**
 * @title Table with sorting
 */
@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.css"]
})
export class TabelaComponent implements OnInit {
  alunos: Aluno[] = [];

  displayedColumns: string[] = [
    "matricula",
    "nome",
    "av1",
    "av2",
    "av3",
    "media"
  ];

  constructor(private dadosService: TabelaService) {}

  ngOnInit() {
    this.dadosService.getAlunos().subscribe((res) => (this.alunos = res));
  }
}
