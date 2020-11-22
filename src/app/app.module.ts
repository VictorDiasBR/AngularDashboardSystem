import { ProgressBarModule } from "angular-progress-bar";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";

import { MatInputModule } from "@angular/material/input";

import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { DashboardEstrategicoComponent } from "./dashboard-estrategico/dashboard-estrategico.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { DashboardOperacionalComponent } from "./dashboard-operacional/dashboard-operacional.component";
import { GraficoComponent } from "./dashboard-operacional/grafico/grafico.component";
import { TabelaComponent } from "./dashboard-operacional/tabela/tabela.component";
import { GridComponent } from "./dashboard-operacional/grid/grid.component";
import { FormComponent } from "./form/form.component";
import { GridFormComponent } from "./form/grid-form/grid-form.component";
import { FormCadastroComponent } from "./form/form-cadastro/form-cadastro.component";
import { FormObsComponent } from "./form/form-obs/form-obs.component";
import { DadosApiComponent } from "./dados-api/dados-api.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/project.reducer";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { DashboardGeralComponent } from "./dashboard-geral/dashboard-geral.component";
import { DashboardIotComponent } from './dashboard-iot/dashboard-iot.component';
import { RelatorioIotComponent } from './relatorio-iot/relatorio-iot.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardEstrategicoComponent,
    DashboardOperacionalComponent,
    GraficoComponent,
    TabelaComponent,
    GridComponent,
    FormComponent,
    GridFormComponent,
    FormCadastroComponent,
    FormObsComponent,
    DadosApiComponent,
    DashboardGeralComponent,
    DashboardIotComponent,
    RelatorioIotComponent
  ],
  imports: [
    HighchartsChartModule,
    ProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,

    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      card: reducer
    })
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
