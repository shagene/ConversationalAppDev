import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
// export class NavRailService {
//     private navRailVisible = new BehaviorSubject<boolean>(true);
//     private mobileNavRailVisible = new BehaviorSubject<boolean>(false);

//     navRailVisible$ = this.navRailVisible.asObservable();
//     mobileNavRailVisible$ = this.mobileNavRailVisible.asObservable();
//     navRailState$: any;

//     constructor() { }

//     toggleNavRail() {
//         this.navRailVisible.next(!this.navRailVisible.value);
//     }

//     toggleMobileNavRail() {
//         this.mobileNavRailVisible.next(!this.mobileNavRailVisible.value);
//     }

//     setNavRailVisibility(visible: boolean) {
//         this.navRailVisible.next(visible);
//     }

//     setMobileNavRailVisibility(visible: boolean) {
//         this.mobileNavRailVisible.next(visible);
//     }
// }

@Injectable({
    providedIn: 'root'
})
export class NavRailService {
    private navRailStateSource = new BehaviorSubject<boolean>(false);
    navRailState$ = this.navRailStateSource.asObservable();

    constructor() { }

    toggleNavRail(state: boolean): void {
        this.navRailStateSource.next(state);
    }

    getCurrentNavRailState(): boolean {
        return this.navRailStateSource.getValue();
    }
}