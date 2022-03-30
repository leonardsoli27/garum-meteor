import "/imports/ui/pages/home/home";
import "/imports/ui/pages/gateKeeping/managementRegistrations"
import "/imports/ui/pages/gateKeeping/gateKeeping"

Router.configure({
  // layoutTemplate: "mainTemplate",
  notFoundTemplate: "notFound404",
});

Router.route('/', {
  name: "homeAdmin",
  template: "homeAdmin"
});

Router.route('/home', {
  name: "menuAdmin",
  template: "menuAdmin"
});

Router.route('/managementRegistrations', {
  name: "daftarSeminaris",
  template: "daftarSeminaris"
});

Router.route('/detailSeminaris/:_id', {
  name: "detailSeminaris",
  template: "detailSeminaris"
});

Router.route('/gateKeeping', {
  name: "gateKeeping",
  template: "gateKeeping"
});