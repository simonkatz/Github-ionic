import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../services/github';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
    providers: [GithubService]
})
export class DetailsPage {

  public readme = '';
  public repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GithubService) {
        this.repo = navParams.get('repo');

        this.github.getDetails(this.repo).subscribe(
            data => this.readme = data.text(),
            err => {
                if (err.status == 404) {
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}