import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})

export class MapInformationComponent implements OnInit {
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  @Input() countryRegion!: string;
  
  constructor() { 
    console.log(this.countryId);
  }

  ngOnInit(): void { }
}