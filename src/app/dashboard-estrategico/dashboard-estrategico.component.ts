import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { FormObsComponent } from "../form/form-obs/form-obs.component";
import { Card } from "./../models/project.model";
import { AppState } from "./../app.state.card";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
export interface Aluno {
  matricula: string;
  nome: string;
  av1: number;
  av2: number;
  av3: number;
  media: string;
  descricao: string;
  obsTitulo: string;
}

@Component({
  selector: "app-dashboard-estrategico",
  templateUrl: "./dashboard-estrategico.component.html",
  styleUrls: ["./dashboard-estrategico.component.css"]
})
export class DashboardEstrategicoComponent {
  /** Based on the screen size, switch from standard to one column per row */
  form: FormObsComponent;
  cardsStore: Observable<Card[]>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {
    this.cardsStore = store.select("card");
    console.log(this.cardsStore.pipe());
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsStore;
      }

      return this.cardsStore;
    })
  );
}
