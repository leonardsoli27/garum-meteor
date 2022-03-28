import {
    Meteor
} from "meteor/meteor";
import "../ui/pages/home/home";

Router.configure({
    layoutTemplate: "mainTemplate",
    notFoundTemplate: "notFound404",
});

Router.route('/', {
    name: "homeAdmin",
    template: "homeAdmin"
});