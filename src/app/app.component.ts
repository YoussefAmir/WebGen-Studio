import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _album = [];
  slideIndex = 1;
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _lightbox: Lightbox
  ){
    this.matIconRegistry.addSvgIcon(
      "laptop",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/laptop.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "iphone",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/iphone.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "support",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/support.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/facebook.svg")
    );

    for (let i = 1; i <= 7; i++) {
      const src = '/assets/portfolio-img' + i + '.jpg';
      const album = {
         src: src
      };
      this._album.push(album)
    }
    setInterval(() => this.plusDivs(1),2000);

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index,{positionFromTop: 1000});
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  // Thumbnail image controls
   currentSlide(n) {
  this.showDivs(n);
}

  plusDivs(n){
    this.showDivs(this.slideIndex+n);
}

  showDivs(n) {
    var i;
    var x = document.querySelector("#home"+this.slideIndex);
    console.log("#home"+this.slideIndex)
    console.log(n)
    n = (n > 3)? 1 : (n<1)? 3 : n;
    this.slideIndex = n;
    console.log(this.slideIndex)

    x.id = "home"+n
  }
 
}
