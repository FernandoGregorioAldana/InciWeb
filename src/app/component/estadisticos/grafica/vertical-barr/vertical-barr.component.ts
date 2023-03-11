import { Component} from '@angular/core';
import { single } from 'src/app/models';
import { Color, ScaleType } from '@swimlane/ngx-charts';





@Component({
  selector: 'app-vertical-barr',
  templateUrl: './vertical-barr.component.html',
  styleUrls: ['./vertical-barr.component.css']
})
export class VerticalBarrComponent { 



  single: []=[];


  //tamaño que tendra la grafica 
  view: [number, number] = [700, 400];

  // opciones que tendra la grafica que se muentra por pantalla
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Carreras';
  showYAxisLabel = true;
  yAxisLabel = 'incidencias';


  //Colores que tiene la grafica mostrada
  colorScheme: Color = { 
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
};

//Se manda a llamar la estructura que contiene los valores de los datos
  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }
}

