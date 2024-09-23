import { Component } from "@angular/core";
import { ItemExperiencias } from "./models/item-expericencias";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-experiencias",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./experiencias.component.html",
})
export class ExperienciasComponent {
  experiencias: ItemExperiencias[] = [
    {
      duracaoExperiencia: "Mar/2024 - Atualmente",
      imgUrl: "assets/logo-academia.png",
      alt: "Logo da Academia do Programador",
      titulo: "Aluno de Programação",
      descricao: `
        <p>
          No curso tive diversas oportunidades de praticar como por exemplo: desenvolvimento e integração
          das aplicações web.
        </p>

        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET 8, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, MSTest, Docker, Angular.
        </p>
      `,
    },
  ];
}