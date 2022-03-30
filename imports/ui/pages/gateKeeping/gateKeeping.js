import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './gateKeeping.html';

Template.gateKeeping.events({
    "click button"() {
        Router.go("homeAdmin");
    },

    "click #cari"() {
        Meteor.call('addSeminaris', function (error, result) {
            if (error) {
                console.log(error);
            }
        })
    },
});