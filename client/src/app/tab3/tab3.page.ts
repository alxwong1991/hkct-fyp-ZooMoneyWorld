import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  display = '0';
  firstval: number = null;
  operator : any = null;
  newcursor = false;
  isc = false;
  isdot = false;


  constructor() {}

  click(val: any){
    switch(val){
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.isc = false;
        break;
      case '+/-':
        if(Math.sign(parseInt(this.display, 0)) === 1){
          const sign = -Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();

        }else if(Math.sign(parseInt(this.display, 0 )) === -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();

        }else{
          this.display = this.display;
        }
        break;
        case 'x':
          this.addoperator('x');
          break;
        case '-':
          this.addoperator('-');
          break;
        case '+':
          this.addoperator('+');
          break;
        case '=':
          if(this.firstval !== null && this.operator !== null){
            this.calclast();
            this.operator = null;
            break;
        
          }
        case '0':
          this.addnumber('0');
          break;
          case '1':
          this.addnumber('1');
          break;
          case '2':
          this.addnumber('2');
          break;
          case '3':
          this.addnumber('3');
          break;
          case '4':
          this.addnumber('4');
          break;
          case '5':
          this.addnumber('5');
          break;
          case '6':
          this.addnumber('6');
          break;
          case '7':
          this.addnumber('7');
          break;
          case '8':
          this.addnumber('8');
          break;
          case '9':
          this.addnumber('9');
          break;
          case '.':
          this.adddot();
          break;
        
        

    }
  }

  adddot(){
    if(this.isdot === false){
      this.isdot = true;
    }else{
      this.isdot = false;
    }
  }
  
  addnumber(nbr: string){
    if(nbr === '0'){
      if(this.newcursor === true){
        this.display = nbr;
        this.newcursor = false;
      }else if (this.display === '0'){
        if(this.isdot === true){
          this.display = `${this.display.toString()}.${nbr}`;
        }else{
          this.display = this.display.toString() + nbr;

        }
      }
    }

  }
  addoperator(op: string){

  }
  calclast(){

  }

  
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
