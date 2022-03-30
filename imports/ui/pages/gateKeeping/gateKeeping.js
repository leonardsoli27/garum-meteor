import {
    Meteor
} from "meteor/meteor";
import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
    SchoolRegistrationsCollection
} from '/imports/api/Registration/schoolRegistrations';

import './gateKeeping.html';

Template.gateKeeping.events({
    "click button"() {
        Router.go("homeAdmin");
    },
});

Template.gateKeeping.helpers({
    daftarHadir() {
        // console.log(SchoolRegistrationsCollection.find({}));
        return SchoolRegistrationsCollection.find({});
    },
});