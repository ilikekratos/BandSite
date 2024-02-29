import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  events = [
    { id: 1, month:'APR' ,  day: '06', venue:'Rock\'nRolla', location: 'Iasi' },
    { id: 2, month:'APR'  , day: '07', venue:'Art Rock Cafe',location: 'Suceava' },
    { id: 3, month:'APR' ,  day: '10', venue:'Form Space',location: 'Cluj-Napoca' },
  ];  
  constructor() { }

  ngOnInit(): void {
  }

}
