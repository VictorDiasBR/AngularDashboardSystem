import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardOperacionalComponent } from "./dashboard-operacional/dashboard-operacional.component";
import { DashboardEstrategicoComponent } from "./dashboard-estrategico/dashboard-estrategico.component";
import { FormComponent } from "./form/form.component";
import { DashboardGeralComponent } from "./dashboard-geral/dashboard-geral.component";
import { DashboardIotComponent } from "./dashboard-iot/dashboard-iot.component";
import { RelatorioIotComponent } from "./relatorio-iot/relatorio-iot.component";
const routes: Routes = [
  { path: "dashboard-operacional", component: DashboardOperacionalComponent },
  { path: "dashboard-estrategico", component: DashboardEstrategicoComponent },
  { path: "form", component: FormComponent },
  { path: "dashboard-geral", component: DashboardGeralComponent },
  { path: "dashboard-iot", component: DashboardIotComponent },
  { path: "relatorio-iot", component: RelatorioIotComponent },
  { path: "", redirectTo: "dashboard-operacional", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
