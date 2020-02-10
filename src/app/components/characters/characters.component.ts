import { Component, OnInit } from '@angular/core';
import { StarpeopleService } from 'src/app/services/starpeople.service';
import { Starpeople } from 'src/app/models/starpeople';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
 providers: [StarpeopleService]
})
export class CharactersComponent implements OnInit {

  public title: string;
  public starpeople: any;
  public starperson: Starpeople; 
  public names: Array<string>;
  public imgPath: string;

  constructor(private _service: StarpeopleService ) {
    this.title = "Personajes";
    this.starperson = new Starpeople('', '', '' ,'', '', '');
    this.names = [];
    this.imgPath = "assets/images/background-component.jpg";

   }

  ngOnInit() {
    this._service.getStarpeople().subscribe(
      response => {
        let res: any;
        res = response; 
        this.starpeople = res.results; 
        this.getNames(); 
        this.getStarpeople(2); 
      },
      error => {
        console.log(error);
      }
    );
  }

  getStarpeople(id: number){
    try {
     
      this.starperson = new Starpeople(
        this.starpeople[id].name,
        this.starpeople[id].height,
        this.starpeople[id].skin_color,
        this.starpeople[id].birth_year,
        this.starpeople[id].mass,
        this.starpeople[id].gender
      );


    } catch(err) {
      console.log(err);
    }
  }

  onFindStarpeople(name: string){
    let index: number = this.names.indexOf(name);
    if(index === -1){
      alert("Personaje not found...");
    } else {
      this.getStarpeople(index);
    }
  }

  getNames(){
    for(let i in this.starpeople){
      this.names.push(this.starpeople[i].name);
    }
  }


}
