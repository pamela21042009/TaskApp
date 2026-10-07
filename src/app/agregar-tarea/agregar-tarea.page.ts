import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText
} from '@ionic/angular';

import { TareaService } from '../services/tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonText,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AgregarTareaPage {

  formulario = this.formBuilder.group({
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: [''],
    prioridad: ['Media', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tareaService: TareaService
  ) {}

  guardarTarea() {

    if (this.formulario.valid) {

      const nuevaTarea = {
        id: Date.now(),
        titulo: this.formulario.value.titulo!,
        descripcion: this.formulario.value.descripcion || '',
        prioridad: this.formulario.value.prioridad as 'Alta' | 'Media' | 'Baja',
        completada: false
      };

      this.tareaService.agregarTarea(nuevaTarea);

      this.router.navigate(['/']);
    }

  }

}