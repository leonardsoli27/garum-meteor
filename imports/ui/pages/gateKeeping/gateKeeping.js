import {
    Meteor
} from "meteor/meteor";
import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '/imports/api/Registration/methods.js';

import './gateKeeping.html';

Template.gateKeeping.onCreated(function () {
    const self = this;
    self.hasilCari = new ReactiveVar();
});

Template.gateKeeping.events({
    "submit .form-cari"(event, template) {
        event.preventDefault();
        const {
            target
        } = event;

        const psb_nama = target.psb_nama.value;
        Meteor.call("cariSeminaris", psb_nama, function (error, result) {
            if (error) {
                alert(error);
            } else {
                template.hasilCari.set(result);
            }
        });
        // queueMicrotask
        // target.psb_nama.value = '';
    },

    "submit .form-hadir"(event, template) {
        // event.preventDefault();
        const {
            target
        } = event;

        const id_seminaris = target.id_seminaris.value;
        // console.log(id_seminaris);
        Meteor.call("absenSeminaris", id_seminaris, function (error, result) {
            if (error) {
                alert("Absensi Gagal Dilakukan");
            } else {
                alert("Absensi Berhasil Dilakukan");

            }
        })
    }
});

Template.gateKeeping.helpers({
    daftarHadir() {
        // console.log(Template.instance().hasilCari.get());
        return Template.instance().hasilCari.get();
    },
});