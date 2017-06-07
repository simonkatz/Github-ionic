import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubService } from '../../services/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, private github: GithubService) {

  }

  getRepos() {
      this.github.getRepos(this.username).subscribe(
          data => {
              this.foundRepos = data.json();
          },
          err => console.error(err),
          () => console.log('getRepos completed')
      );
  }
}
