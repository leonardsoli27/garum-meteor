import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './home.html';

Template.menuAdmin.events({
    "click button"() {
        Router.go('homeAdmin');
    }
});