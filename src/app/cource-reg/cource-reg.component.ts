import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;
const CobrowseIO = require('cobrowse-sdk-js');
CobrowseIO.license = 'h5U9O61S0DG05Q';
CobrowseIO.start();
@Component({
  selector: 'app-cource-reg',
  templateUrl: './cource-reg.component.html',
  styleUrls: ['./cource-reg.component.css'],
})
export class CourceRegComponent {
  popup: any = null;


  showData = false;

  ss: any = null;
  buttonActive: boolean | undefined;
 

  onHit(e: any) {
    e.preventDefault();
    e.target.disabled = true;

   

    CobrowseIO.client()
      .then(() => {
        CobrowseIO.createSessionCode()
          .then((code: any) => {
            console.log('your Cobrowse code is', code);
            this.ss = code;
            if (this.showData) {
              this.showData = true;
            } else {
              this.showData = false;
            }
            this.showData = !this.showData;

            CobrowseIO.on('session.updated', (xyz: any) => {
              if (xyz.isActive()) {
                this.buttonActive = true;
              } else {
                this.buttonActive = false;
                e.target.disabled = false;
              }

            });

           
          })
          .catch((err: any) =>
            console.log('CobrowseIO.createSessionCode() err===>', err)
          );
      })
      .catch((err: any) => console.log('CobrowseIO.client() err===>', err));
  }

  closePopup() {
    this.showData = false;
  }

  constructor(private route: Router) {}
  
}
