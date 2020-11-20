import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Aluno } from "../dados-api/dados-api.model";
import { DadosApiService } from "../dados-api/dados-api.service";
@Component({
  selector: "app-dashboard-geral",
  templateUrl: "./dashboard-geral.component.html",
  styleUrls: ["./dashboard-geral.component.css"]
})
export class DashboardGeralComponent implements OnInit {
  naoAnalisados = [];

  analisados = [];

  nomes: string[] = [];
  constructor(private dadosService: DadosApiService) {}
  ngOnInit() {
    this.dadosService.getAlunos().subscribe((alunos) => {
      for (const i of alunos) {
        if (Number(i.media) <= 10) {
          this.naoAnalisados.push(i.nome);
        }
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
