import { Component } from "@angular/core";
import { RequestAluno, Aluno } from "../form.model";
import { FormService } from "../form.service";
import { FormControl, FormGroup } from "@angular/forms";
//import { DashboardEstrategicoComponent } from "./src/app/dashboard-estrategico/dashboard-estrategico.component";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-form-cadastro",
  templateUrl: "./form-cadastro.component.html",
  styleUrls: ["./form-cadastro.component.css"]
})
export class FormCadastroComponent {
  aluno = new FormGroup({
    nome: new FormControl(""),
    matricula: new FormControl(""),
    av1: new FormControl(""),
    av2: new FormControl(""),
    av3: new FormControl("")
    //media: new FormControl("")
  });
  request: RequestAluno;
  alunos: Aluno[] = [];
  constructor(
    private formService: FormService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {}
  salvar(nome) {
    console.log("aluno - ");
    console.log(this.aluno.value);
    this.request = this.aluno.value;
    this.formService.createAluno(this.request).subscribe((res) => {
      console.log(res);
    });
    this._snackBar.open("O aluno " + nome + " foi criado!", "Ok!", {
      duration: 2000
    });
  }
}
