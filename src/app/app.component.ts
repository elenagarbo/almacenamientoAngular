import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  juego = 'baloncesto';
  //variables de data binding sin VAR o LET

  constructor(){
    this.grabarLocalStorage();
  }
  
  grabarLocalStorage(){

    var nombre:string= "Danielooo";
  
    var persona ={
  
      nombre: "sara",
      apellido: "garcia",
      edad: 30
    }
  
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
  }
  







}
