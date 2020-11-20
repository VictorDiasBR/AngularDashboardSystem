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
  media: number[] = [];
  matricula: string[] = [];

  j: number = 0;
  constructor(private dadosService: TabelaService) {}

  ngOnInit() {
    this.dadosService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;
      var aprovados: number = 0;
      var reprovados: number = 0;
      for (const i of this.alunos) {
        if (Number(i.media) <= 10) {
          this.nomes.push(i.nome);
          this.av1.push(i.av1);
          this.av2.push(i.av2);
          this.av3.push(i.av3);
          this.media.push(Number(i.media));
          this.matricula.push(i.matricula);
          if (Number(i.media) >= 6) {
            aprovados++;
          } else {
            reprovados++;
          }
        }
      }

      this.serie(
        this.nomes,
        this.av1,
        this.av2,
        this.av3,
        this.media,
        this.matricula,
        aprovados,
        reprovados
      );
    });
  }
  serie(nomes, av1, av2, av3, medias, matriculas, aprovados, reprovados) {
    const container: HTMLElement | null = document.getElementById("container");
    const options: Highcharts.Options = {
      title: {
        text: "Gráfico de Notas das Avaliações, Médias e Resultados"
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
        },
        {
          type: "spline",
          name: "Médias",
          data: medias,
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[7],
            fillColor: "white"
          }
        },
        {
          type: "pie",
          name: "Quantidade",
          data: [
            {
              name: "Aprovados",
              y: aprovados,
              color: "green"
            },
            {
              name: "Reprovados",
              y: reprovados,
              color: "red"
            }
          ],
          center: [60, 30],
          size: 100,
          showInLegend: true,
          dataLabels: {
            enabled: false
          }
        }
      ]
    };

    if (container) {
      Highcharts.chart(container, options);
    }
  }
}
