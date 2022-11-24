import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar/dist/calendar.model';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.page.html',
  styleUrls: ['./ledger.page.scss'],
})
export class LedgerPage implements OnInit {
  dateMulti: string[];
  type: 'string';

  constructor(public modalCtrl: ModalController) { }

  
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  
  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'multi',
      title: 'Multi',
      color:'danger'
    };
  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();
}
  ngOnInit() {
    this.openCalendar()
  }

}
