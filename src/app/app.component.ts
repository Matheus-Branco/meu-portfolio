import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SobreComponent } from "./components/secoes/sobre/sobre.component";
import { HabilidadesComponent } from "./components/secoes/habilidades/habilidades.component";
import { StackComponent } from "./components/secoes/stack/stack.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    SobreComponent,
    HabilidadesComponent,
    StackComponent,
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {}