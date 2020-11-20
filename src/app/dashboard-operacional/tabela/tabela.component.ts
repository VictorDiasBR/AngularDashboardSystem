import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Aluno } from "./tabela.model";
import { TabelaService } from "./tabela.service";
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with sorting
 */
@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.css"]
})
export class TabelaComponent implements AfterViewInit, OnInit {
  alunos: Aluno[] = [];

  dataSource: MatTableDataSource<Aluno>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {}

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
    this.dadosService.getAlunos().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Aluno>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
