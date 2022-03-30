import {
    Meteor
} from "meteor/meteor"
import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './home.html';

Template.menuAdmin.events({
    "click button"() {
        Router.go('homeAdmin');
    },
});

Template.homeAdmin.events({
    "click #cetak"() {
        Meteor.call('addSeminaris', function (error, result) {
            if (error) {
                console.log(error);
            }
        })
    },
});