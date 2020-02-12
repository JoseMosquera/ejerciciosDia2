import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { CensurePipe } from '../pipes/censure.pipe';

enum ServiceStatus {
  Active = 'active',
  Inactive = 'inactive'
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public currentDate: Date = new Date();

  public serviceStatus: ServiceStatus = ServiceStatus.Active;

  public statusNotice: string;
  message: string

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private translate: TranslateService,
              private truncatePipe: TruncatePipe,
              private censurePipe: CensurePipe) {

  }

  public ngOnInit(): void {
    this.message = this.getMessage(3)
    this.statusNotice = this.translate.instant('statusNotice', {
      status: this.translate.instant('serviceStatus')[this.serviceStatus]
    });
  }

  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.truncatePipe.transform('This is an alert message.', 15),
      buttons: ['OK']
    });

    await alert.present();
  }

  public presentSayHelloToast() {

    // ES6 - Promise way

    this.toastController.create({
      message: this.translate.instant('hello'),
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }

  public async presentSayHelloNameToast(): Promise<void> {

    // ES7 - async / await way

    const toast = await this.toastController.create({
      message: this.translate.instant('helloName', { name: 'world' }),
      duration: 2000
    });

    toast.present();
  }

  getMessage(id: number): string {
    return this.censurePipe.transform(id)
  }
}
