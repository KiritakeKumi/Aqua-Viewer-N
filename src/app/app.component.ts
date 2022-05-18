import {ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService, User} from './auth/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {PreloadService} from './database/preload.service';
import {Subscription} from 'rxjs';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'aqua-viewer';

  user: User;

  loading = false;
  ongekiMenu: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'ongeki/profile'
    },
    {
      id: 1,
      name: 'Battle Point',
      url: 'ongeki/battle'
    },
    {
      id: 2,
      name: 'Rating',
      url: 'ongeki/rating'
    },
    {
      id: 3,
      name: 'Play Record',
      url: 'ongeki/recent'
    },
    {
      id: 4,
      name: 'Music List',
      url: 'ongeki/song'
    },
    {
      id: 5,
      name: 'Card',
      url: 'ongeki/card'
    },
    {
      id: 6,
      name: 'Setting',
      url: 'ongeki/setting'
    }
  ];

  mobileQuery: MediaQueryList;

  dark = 'dark';
  v1Menus: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'chuni/v1/profile'
    },
    {
      id: 1,
      name: 'Rating',
      url: 'chuni/v1/rating'
    },
    {
      id: 2,
      name: 'Play Record',
      url: 'chuni/v1/recent'
    },
    {
      id: 3,
      name: 'Music List',
      url: 'chuni/v1/song'
    },
    {
      id: 4,
      name: 'Character',
      url: 'chuni/v1/character'
    },
    {
      id: 5,
      name: 'Setting',
      url: 'chuni/v1/setting'
    }
  ];

  v2Menus: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'chuni/v2/profile'
    },
    {
      id: 1,
      name: 'Rating',
      url: 'chuni/v2/rating'
    },
    {
      id: 2,
      name: 'Play Record',
      url: 'chuni/v2/recent'
    },
    {
      id: 3,
      name: 'Music List',
      url: 'chuni/v2/song'
    },
    {
      id: 4,
      name: 'Character',
      url: 'chuni/v2/character'
    },
    {
      id: 5,
      name: 'User Box',
      url: 'chuni/v2/userbox'
    },
    {
      id: 6,
      name: 'Setting',
      url: 'chuni/v2/setting'
    }
  ];

  divaMenus: Menu[] = [
    {
      id: 0,
      name: 'Profile',
      url: 'diva/profile'
    },
    {
      id: 1,
      name: 'Pv Record',
      url: 'diva/record'
    },
    {
      id: 2,
      name: 'Pv List',
      url: 'diva/pv'
    },
    {
      id: 3,
      name: 'Recent Play',
      url: 'diva/recent'
    },
    {
      id: 4,
      name: 'Setting',
      url: 'diva/setting'
    },
    {
      id: 5,
      name: 'Management',
      url: 'diva/management'
    },
    {
      id: 6,
      name: 'Modules',
      url: 'diva/modules'
    },
    {
      id: 7,
      name: 'Customizes',
      url: 'diva/customizes'
    },
  ];
  private subscription: Subscription;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private route: Router,
    private api: ApiService,
    private preLoad: PreloadService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    if (this.user !== null) {
      this.preLoad.load();
    }
    this.subscription = this.api.loadingState.subscribe(
      state => this.loading = state.show
    );
  }

  ngOnChanges(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}

export class Menu {
  id: number;
  name: string;
  url: string;
}
