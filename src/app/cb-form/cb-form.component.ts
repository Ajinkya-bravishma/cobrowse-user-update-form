import { Component, OnInit, ElementRef } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

import {
  FormControl,
  FormControlName,
  FormGroup,
  NgForm,
} from '@angular/forms';
declare var require: any;
const CobrowseIO = require('cobrowse-sdk-js');
CobrowseIO.license = 'h5U9O61S0DG05Q';
CobrowseIO.start();

// type formDataType={

// }

@Component({
  selector: 'app-cb-form',
  templateUrl: './cb-form.component.html',
  styleUrls: ['./cb-form.component.css'],
})
export class CbFormComponent implements OnInit {
  // formData: any;
  // fieldThree: any;
  // fieldFour: any;
  formData: any;
  buttonActive = false;
  formDataa: any = {
    mobile: {
      title: 'Mobile number',
      fieldThree: 'Old Mobile No',
      fieldFour: 'New Mobile No.',
    },
    address: {
      title: 'Address',
      fieldThree: 'Address Line 1 :',
      fieldFour: 'Address Line 2:',
    },
    email: {
      title: 'Email',
      fieldThree: 'Old Email No :',
      fieldFour: 'New Email No.:',
    },
  };
  routerEvents: any;
  closeModel() {
    this.showData = false;
  }

  // clientComp: any = null
  popup: any = null;
  clientComp = document.getElementById('form-clint');

  showData = false;

  ss: any = null;

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
    let path = this.route.url;
    path = path.slice(1);
    console.log('path==> ', path);

    this.formData = this.formDataa[path];
    console.log('formData==> ', this.formData);

    // this.formService.formData$.subscribe((data) => {
    //   console.log('form data updated', this.formData.title);
    //   this.fieldThree = data;
    //   this.fieldFour = data;
    // });
  }

  // needHelp() {
  //   CobrowseIO.license="h5U9O61S0DG05Q"
  //   CobrowseIO.client().then(async function(){
  //     await CobrowseIO.stop();
  //     CobrowseIO.redactedViews =['input[name=""]']
  //     CobrowseIO.start();
  //     CobrowseIO.createSessionCode().then(function (code: any){
  //       console.log(code);

  //     })
  //   })

  // }
}
