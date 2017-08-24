
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'footer',
    styleUrls: ['footer.c.css'],
    templateUrl: 'footer.c.html',
})

export class FooterComponent {

    legalOptions = [
        {
            name: "Privacy Policy",
            link: "privacy",
        },
        {
            name: "Terms of Service",
            link: "tos",
        }
    ]
    developerOptions = [
        {
            name: "Documentation",
            link: "docs",
        },
        {
            name: "Support",
            link: "support",
        },
        {
            name: "Quickstart",
            link: "quickstart"
        },
    ]
    communityOptions = [
        {
            name: "Reddit",
            link: "reddit.com/r/axia",
            image: "",
        },
        {
            name: "Github",
            link: "github.com/axia",
            image: "",
        },
        {
            name: "Youtube",
            link: "youtube.com/axia",
            image: "",
        },
        {
            name: "Facebook",
            link: "facebook.com/axia",
            image: "",
        },
        {
            name: "Twitter",
            link: "twitter.com/axiaprotocol",
            image: "",
        },
    ]

}
