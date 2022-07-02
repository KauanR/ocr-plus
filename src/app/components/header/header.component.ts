import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    route: string = ''
    routerSub: Subscription = {} as Subscription

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.routerSub = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                this.route = (event as NavigationEnd).url
            })
    }

    ngOnDestroy(): void {
        this.routerSub?.unsubscribe()
    }

}