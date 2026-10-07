import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonCheckbox,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFooter
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { add, trash } from 'ionicons/icons';

import { TareaService } from '../services/tarea';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonCheckbox,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFooter
  ]
})
export class HomePage {

  tareas: Tarea[] = [];

  constructor(
    private router: Router,
    private tareaService: TareaService
  ) {
    addIcons({
      add,
      trash
    });

    this.tareas = this.tareaService.obtenerTareas();
  }

  abrirFormulario() {
    this.router.navigate(['/agregar-tarea']);
  }

  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(id);
    this.tareas = this.tareaService.obtenerTareas();
  }

  cambiarEstado(id: number) {
    this.tareaService.cambiarEstado(id);
  }

}