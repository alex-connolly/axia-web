
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'roadmap',
    styleUrls: ['roadmap.c.css'],
    templateUrl: 'roadmap.c.html',
})

export class RoadmapComponent {

    versions = [{
                    name:"Prometheus",
                    projects: [{
                        name:"Guardian",
                        github:"github.com/end-r/guardian",
                        slack:"guardianlang.slack.com",
                    },{
                        name:"Protocol Whitepaper",
                        github:"github.com/"
                    },{
                        name:"Go Client",
                        github: "",
                    },{
                        name:"Web Client",
                        github: "",
                    },{
                        name:"Demos",
                        github: "",
                    },{
                        name:"Community",
                        github: "",
                    },{
                        name:"Adamant",
                        github: "",
                    },]
                },
                {
                    name:"Wildfire",
                    projects: [{
                        name:"Java Client",
                    },{
                        name:"Ansible Network",
                    }, {
                        name:"Axia Name Service",
                    }, {
                        name:"Apollo",
                    }]
                },
                {
                    name:"Inferno",
                    projects: [{
                        name:"Guardian",
                        github:"github.com/end-r/guardian",
                        slack:"guardianlang.slack.com",
                    }]
                },
                {
                    name:"Supernova",
                    projects: [{
                        name:"Guardian",
                        github:"github.com/end-r/guardian",
                        slack:"guardianlang.slack.com",
                    }]
                },
                {
                    name:"Ragnarok",
                    projects: [{
                        name:"Guardian",
                        github:"github.com/end-r/guardian",
                        slack:"guardianlang.slack.com",
                    }]
                },
                {
                    name:"Pheonix",
                    projects: [{
                        name:"Guardian",
                        github:"github.com/end-r/guardian",
                        slack:"guardianlang.slack.com",
                    }]
                }]



}
