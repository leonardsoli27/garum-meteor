import {
    Template
} from 'meteor/templating';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './managementRegistrations.html';

Template.detailSeminaris.events({
    "click button"() {
        Router.go('daftarSeminaris');
    }
});