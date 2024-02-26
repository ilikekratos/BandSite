import { Component,Renderer2 ,OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showMenu: boolean = false;
  constructor(private renderer: Renderer2) {}


  ngOnInit(): void {
    this.checkZoomLevel();
    this.renderer.listen('window', 'resize', () => {
      this.checkZoomLevel();
    });
  }
  checkZoomLevel() {
    const zoomLevel = window.devicePixelRatio;
    if (zoomLevel >2) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
  isSearchBarVisible: boolean = false;

  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible;
    console.log("Ceva")
  }

}
