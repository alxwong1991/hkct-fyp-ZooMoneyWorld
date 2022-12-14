import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}
  
  //calculator
  
  roleMessage = '';
  type="";
 
  myData = [

  ]

  
  //calculator
  cost = '0'
  money = ''

  calClick(value:string) {
    this.money = this.money + value

    this.cost = this.money
  }
  delClick() {
    this.cost = this.cost.slice(0,-1)
    if(this.cost==''){
      this.cost='0'
    }
    this.money = this.cost
  }

  async send() {
    const alert = await this.alertController.create({
      header: '日期： ',
      subHeader: '金額： $ ',
      message: '類型： ' ,
      
      buttons: [
        {
          text: 'Cancel',
          role: '取消成功',
          
        },
        {
          text: 'OK',
          role: '記賬成功',
          
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    this.roleMessage = ` ${role}`;
  }

}
