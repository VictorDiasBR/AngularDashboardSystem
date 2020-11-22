import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
@Component({
  selector: "app-relatorio-iot",
  templateUrl: "./relatorio-iot.component.html",
  styleUrls: ["./relatorio-iot.component.css"]
})
export class RelatorioIotComponent implements OnInit {
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit(): void {}
}
