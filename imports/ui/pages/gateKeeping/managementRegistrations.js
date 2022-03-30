import {
    Meteor
} from "meteor/meteor";
import {
    ReactiveDict
} from "meteor/reactive-dict";
import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
    SchoolRegistrationsCollection
} from '/imports/api/Registration/schoolRegistrations';
import '/imports/api/Registration/methods.js';

import './managementRegistrations.html';

Template.detailSeminaris.onCreated(function () {
    this.state = new ReactiveDict();
    const id_seminaris = Router.current().params._id;
    const self = this;
    self.seminarisDetail = new ReactiveVar();
    Meteor.call("seminaris.getDetail", id_seminaris, function (error, result) {
        if (result) {
            // self.seminarisDetail.set(result);
            console.log(self.seminarisDetail.set(result));
        } else {
            console.log(error);
        }
    })
});

Template.detailSeminaris.events({
    "click button"() {
        Router.go("daftarSeminaris");
    },
});

Template.daftarSeminaris.onCreated(function () {
    this.state = new ReactiveDict();
    // Meteor.call("seminaris.daftar");
});

Template.daftarSeminaris.events({
    "click button"() {
        Router.go("menuAdmin");
    },
});

Template.daftarSeminaris.helpers({
    seminaris() {
        return SchoolRegistrationsCollection.find({});
    },
});