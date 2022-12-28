import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tally",
  templateUrl: "./tally.page.html",
  styleUrls: ["./tally.page.scss"],
})
export class TallyPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async create() {
    const alert = await this.alertController.create({
      header: "我的賬本",
      buttons: ["OK"],
      inputs: [
        {
          placeholder: "Name",
        },

        {
          type: "date",
          placeholder: "StartDate",
        },
      ],
    });

    await alert.present();
  }
}
