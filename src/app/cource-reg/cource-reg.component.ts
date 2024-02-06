import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
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
  clientComp = document.getElementById('form-clint');

  showData = false;

  ss: any = null;
  buttonActive: boolean | undefined;
  formData: any;
  formDataa: any;

  onHit(e: any) {
    e.preventDefault();
    e.target.disabled = true;
    console.log('clientComp==> ', this.clientComp);
    // this.clientComp.addEventListener("click", this.myFunction)
    // this.popup.addEventListener("click", this.myFunction2)

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
              // console.log('isActive ===== ', xyz.isActive());
              // console.log('isAuthorizing ===== ', xyz.isAuthorizing());
              // console.log('isEnded ===== ', xyz.isEnded());
              // console.log('isPending ===== ', xyz.isPending());
              // console.log('requireConsent ===== ', xyz.requireConsent());
              // console.log('setFullDevice ===== ', xyz.setFullDevice());
              // console.log('setRemoteControl ===== ', xyz.setRemoteControl());
              // console.log('state ===== ', xyz.state());
              // console.log('fullDevice ===== ', xyz.fullDevice());

              // console.log('allowRemoteControl ===== ', xyz.allowRemoteControl());
            });

            // alert(`${code}`);
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

  constructor(private route: Router, private formService: FormService) {}
  ngOnInit() {
    // let path = this.route.url;
    // path = path.slice(1);
    // console.log('path==> ', path);

    // this.formData = this.formDataa[path];
    // console.log('formData==> ', this.formData);

    // this.formService.formData$.subscribe((data) => {
    //   console.log('form data updated', this.formData.title);
    //   this.fieldThree = data;
    //   this.fieldFour = data;
    // });
  }
}
