import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

export const appConfing: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true})],
};