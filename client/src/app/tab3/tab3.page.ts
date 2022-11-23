import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  
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

}
