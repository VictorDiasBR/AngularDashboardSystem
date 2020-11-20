import { Component } from "@angular/core";
import { Aluno } from "../form.model";
import { FormService } from "../form.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Card } from "../../models/project.model";
import { AppState } from "../../app.state.card";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as CardActions from "../../actions/project.actions";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-form-obs",
  templateUrl: "./form-obs.component.html",
  styleUrls: ["./form-obs.component.css"]
})
export class FormObsComponent {
  nomeSelected: string;
  aluno = new FormGroup({
    nome: new FormControl(""),
    matricula: new FormControl(""),
    av1: new FormControl(""),
    av2: new FormControl(""),
    av3: new FormControl(""),
    media: new FormControl(""),
    descricao: new FormControl(""),
    obsTitulo: new FormControl(""),
    progresso: new FormControl("")
  });

  alunos: Aluno[] = [];
  nomes: string[] = [];
  cards: Card[] = [];

  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;

      for (const i of this.alunos) {
        this.nomes.push(i.nome);
      }

      this.serie(this.nomes);
    });
  }
  serie(nomes) {
    return (nomes = this.nomes);
  }

  salvar() {
    console.log(this.aluno.value);
    this.aluno.get("nome").reset(this.nomeSelected);
    for (const i of this.alunos) {
      if (i.nome === this.nomeSelected) {
        this.aluno.get("matricula").reset(i.matricula);
        this.aluno.get("av1").reset(i.av1);
        this.aluno.get("av2").reset(i.av2);
        this.aluno.get("av3").reset(i.av3);
        this.aluno.get("media").reset(i.media);
      }
    }
    console.log("Objeto final final - ");
    console.log(this.aluno.value);
    this.cards.push(this.aluno.value);

    for (const i of this.cards) {
      console.log(i);
    }
  }

  addCard(nome) {
    console.log(this.aluno.value);
    this.aluno.get("nome").reset(this.nomeSelected);
    for (const i of this.alunos) {
      if (i.nome === this.nomeSelected) {
        this.aluno.get("matricula").reset(i.matricula);
        this.aluno.get("av1").reset(i.av1);
        this.aluno.get("av2").reset(i.av2);
        this.aluno.get("av3").reset(i.av3);
        this.aluno.get("media").reset(i.media);
        this.aluno.get("progresso").reset(Number(i.media) * 10);
      }
    }
    console.log("last ____");
    console.log(this.aluno.value);
    this.store.dispatch(new CardActions.AddCard(this.aluno.value));
    this._snackBar.open("O card do aluno " + nome + " foi criado!", "Ok!", {
      duration: 2000
    });
  }
}
