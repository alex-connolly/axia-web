import { Routes, RouterModule, CanActivate } from '@angular/router';
import {LandingComponent} from "./landing/landing.c";
import {RoadmapComponent} from "./roadmap/roadmap.c";
import {LegalComponent} from "./legal/legal.c";
import {AssetsComponent} from "./resources/assets/assets.c";
import {TeamComponent} from "./about/team/team.c";
import {FAQComponent} from "./about/faq/faq.c";
import {ScalabilityComponent} from "./technology/scalability/scalability.c";
import {AnonymityComponent} from "./technology/anonymity/anonymity.c";
import {AccessbilityComponent} from "./technology/accessibility/accessibility.c";
import {ConsensusComponent} from "./technology/consensus/consensus.c";
import {ContractsComponent} from "./technology/contracts/contracts.c";
import {HierarchiesComponent} from "./technology/hierarchies/hierarchies.c";
import {AppComponent} from "./app.c";

const appRoutes: Routes = [
    { path : 'roadmap', component:RoadmapComponent},
    { path : 'legal', component:LegalComponent},
    { path : 'resources/assets', component: AssetsComponent},
    { path : 'about/team', component: TeamComponent},
    { path : 'about/faq', component: FAQComponent},
    { path : 'technology/scalability', component: ScalabilityComponent},
    { path : 'technology/anonymity', component: AnonymityComponent},
    { path : 'technology/accessbility', component: AccessbilityComponent},
    { path : 'technology/consensus', component: ConsensusComponent},
    { path : 'technology/contracts', component: ContractsComponent},
    { path : 'technology/hierarchies', component: HierarchiesComponent},
	{ path : '', 		component: LandingComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
	AppComponent, LandingComponent, RoadmapComponent, LegalComponent,
    AssetsComponent, TeamComponent, FAQComponent, ScalabilityComponent,
    AnonymityComponent, AccessbilityComponent, ConsensusComponent,
    ContractsComponent, HierarchiesComponent
];
