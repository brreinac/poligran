import { Component, OnInit, ɵConsole } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  providers: [StarshipsService]
})
export class ShipsComponent implements OnInit {

  public title: string;
  public starships: any;
  public starship: Starship; // consume service Starship
  public names: Array<string>;
  public imgPath: string;

  constructor(
    private _service: StarshipsService 
  ) { 
    this.title = "Naves";
    this.starship = new Starship('', '', '' ,'', '', '');
    this.names = [];
    this.imgPath = "assets/images/background-component.jpg";
  }

  ngOnInit() {
    this._service.getStarships().subscribe(
      response => {
        let res: any;
        res = response; // return response from appi
        this.starships = res.results; //save response to attribute
        this.getNames(); //create an array from response
        this.getStarship(2); //Default ship
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getStarship(id: number){
    try {
      //Find Ship By parameter
      this.starship = new Starship(
        this.starships[id].name,
        this.starships[id].model,
        this.starships[id].manufacturer,
        this.starships[id].crew,
        this.starships[id].length,
        this.starships[id].consumables);
    } catch(err) {
      console.log(err);
    }    
  }
  
  //Consume Appi from request
  onFindStarship(name: string){
    let index: number = this.names.indexOf(name); //If index of name exists in array of ships
    if(index === -1){ //if ship dont exists
      alert("Nave no encontrada...");
    } else {
      this.getStarship(index); //Create the ship in view
    }
  }

  //Create array from request
  getNames(){
    for(let i in this.starships){
      this.names.push(this.starships[i].name); //Este método es util para buscar la información de una nave despues de que el usuario haya ingresado el nombre de una nave en la barra de búsqueda 
    }
  }
}
