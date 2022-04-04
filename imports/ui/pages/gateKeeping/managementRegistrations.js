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
    let id_seminaris = Router.current().params._id;
    const self = this;
    self.seminarisDetail = new ReactiveVar([]);
    Meteor.call("getDetailSeminaris", id_seminaris, function (error, result) {
        if (result) {
            self.seminarisDetail.set(result);
        }
    })
});

Template.detailSeminaris.events({
    "click button"() {
        Router.go("daftarSeminaris");
    },
});

Template.detailSeminaris.helpers({
    seminari() {
        return Template.instance().seminarisDetail.get();
    }
});

Template.daftarSeminaris.onCreated(function () {
    this.state = new ReactiveDict();
    // Meteor.call("seminaris.daftar", function (error, result) {
    //     if (error) {
    //         alert("Data Tidak Ada");
    //     }
    // });
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