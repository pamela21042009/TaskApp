import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private tareas: Tarea[] = [];

  constructor() {
    this.cargarTareas();
  }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.guardarTareas();
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.guardarTareas();
  }

  cambiarEstado(id: number) {
    const tarea = this.tareas.find(tarea => tarea.id === id);

    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  private guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  private cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

}