import { Routes, RouterModule, CanActivate } from '@angular/router';
import {NodeComponent} from "node/node.c";
import {LandingComponent} from "landing/landing.c";
import {WalletComponent} from "wallet/wallet.c";

const appRoutes: Routes = [
	{ path : 'wallet', component: WalletComponent },
	{ path : 'node', 	component: NodeComponent},
    { path : 'guardian', 	component: GuardianComponent},
	{ path : '', 		component: LandingComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
	AppComponent, NodeComponent, WalletComponent, LandingComponent
];
