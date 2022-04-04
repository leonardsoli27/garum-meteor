import "/imports/ui/pages/home/home";
import "/imports/ui/pages/gateKeeping/managementRegistrations"
import "/imports/ui/pages/gateKeeping/gateKeeping"
import "/imports/ui/pages/hasil_tes/hasil_tes"

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

Router.route("/daftar-hasil-tes", {
  name: "daftarHasilTes",
  template: "daftarHasilTes"
});

Router.route("/input-hasil-tes", {
  name: "inputHasilTes",
  template: "inputHasilTes"
});

Router.route("/daftar-wawancara", {
  name: "tesWawancara",
  template: "tesWawancara"
});

Router.route("/input-pairing", {
  name: "inputPairing",
  template: "inputPairing"
});