import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { Aluno } from "../tabela/tabela.model";
import { TabelaService } from "../tabela/tabela.service";
declare var require: any;
const IndicatorsCore = require("highcharts/indicators/indicators");
IndicatorsCore(Highcharts);
const IndicatorZigZag = require("highcharts/indicators/zigzag");
IndicatorZigZag(Highcharts);

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.css"]
})
export class GraficoComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {};
  alunos: Aluno[] = [];

  nomes: string[] = [];
  av1: number[] = [];
  av2: number[] = [];
  av3: number[] = [];
  media: string[] = [];
  matricula: string[] = [];

  j: number = 0;
  constructor(private dadosService: TabelaService) {}

  ngOnInit() {
    this.dadosService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;

      for (const i of this.alunos) {
        this.nomes.push(i.nome);
        this.av1.push(i.av1);
        this.av2.push(i.av2);
        this.av3.push(i.av3);
        this.media.push(i.media);
        this.matricula.push(i.matricula);
      }

      this.serie(
        this.nomes,
        this.av1,
        this.av2,
        this.av3,
        this.media,
        this.matricula
      );
    });
  }
  serie(nomes, av1, av2, av3, medias, matriculas) {
    const container: HTMLElement | null = document.getElementById("container");
    const options: Highcharts.Options = {
      title: {
        text: "Gráfico de notas das avaliações"
      },
      xAxis: {
        categories: nomes,
        title: {
          text: "Nomes"
        }
      },
      yAxis: {
        title: {
          text: "Notas"
        }
      },
      series: [
        {
          type: "column",
          name: "Av1",
          data: av1
        },
        {
          type: "column",
          name: "Av2",
          data: av2
        },
        {
          type: "column",
          name: "Av3",
          data: av3
        }
      ]
    };

    if (container) {
      Highcharts.chart(container, options);
    }
  }
}
