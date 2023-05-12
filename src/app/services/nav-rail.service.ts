// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// @Injectable({
//     providedIn: 'root'
// })
// export class NavRailService {
//     private navRailStateSource = new BehaviorSubject<boolean>(false);
//     navRailState$ = this.navRailStateSource.asObservable();

//     constructor() { }

//     toggleNavRail(state: boolean): void {
//         this.navRailStateSource.next(state);
//     }

//     getCurrentNavRailState(): boolean {
//         return this.navRailStateSource.getValue();
//     }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavRailService {
    private navRailStateSource = new BehaviorSubject<boolean>(false);
    navRailState$ = this.navRailStateSource.asObservable();

    private collapsedStateSource = new BehaviorSubject<boolean>(false);
    collapsedState$ = this.collapsedStateSource.asObservable(); // Make sure this line exists

    constructor() { }

    toggleNavRail(state: boolean): void {
        this.navRailStateSource.next(state);
    }

    toggleCollapsedState(state: boolean): void { // Make sure the method name is 'toggleCollapsedState'
        this.collapsedStateSource.next(state);
    }

    getCurrentNavRailState(): boolean {
        return this.navRailStateSource.getValue();
    }
}