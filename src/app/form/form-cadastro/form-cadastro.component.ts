import { Component } from "@angular/core";
import { RequestAluno } from "../form.model";
import { FormService } from "../form.service";
import { FormControl, FormGroup } from "@angular/forms";
//import { DashboardEstrategicoComponent } from "./src/app/dashboard-estrategico/dashboard-estrategico.component";
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
  constructor(private formService: FormService) {}

  ngAfterViewInit() {}
  salvar() {
    console.log("aluno - ");
    console.log(this.aluno.value);
    this.request = this.aluno.value;
    this.formService.createAluno(this.request).subscribe((res) => {
      console.log(res);
    });
    //var av1 = this.aluno.get("av1");
    //var av2 = this.aluno.get("av2");
    //var av3 = this.aluno.get("av3");
    // var media = (av1 + av2 + av3) / 3;
    //var num: number;

    //this.aluno
    //.get("media")
    // .reset(
    // (parseInt(av1.value, num) +
    //  parseInt(av2.value, num) +
    //parseInt(av3.value, num)) /
    //3
    //);
  }
}
