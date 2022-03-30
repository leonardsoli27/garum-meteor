import {
    Meteor
} from 'meteor/meteor';
import {
    SchoolRegistrationsCollection
} from '/imports/api/Registration/schoolRegistrations';
import {
    check
} from "meteor/check";

Meteor.methods({
    "addSeminaris": function () {
        SchoolRegistrationsCollection.insert({
            "name": "Bacasss",
            "identityId": {
                "nisn": 1234,
                "npsn": 1234,
                "nik": 1234,
                "kk": 1234,
                "kks": 1234,
                "kpsBpjs": 1234,
                "akta": 1234
            },
            "address": {
                "street": "dukuh kupang",
                "rt": 09,
                "rw": 09,
                "dusun": "cek",
                "desa": "cek",
                "kecamatan": "dukuh pakis",
                "kabupaten": "surabaya",
                "provinsi": "jawa timur",
                "kode_pos": 09878
            },
            "contactPerson": {
                "email": "cek@gmail.com",
                "telepon": "081234567890"
            },
            "placeOfBirth": "DImana",
            "dateOfBirth": 00102,
            "formation": {
                "baptist": {
                    "name": "yakobus",
                    "place": "surabaya",
                    "date": 080890
                },
                "chrism": {
                    "name": "yakobus",
                    "place": "surabaya",
                    "date": 34123
                }
            },
            "parokiId": 1212,
            "photoUrl": "coba",
            "supportDocument": {
                "riwayatAktifGereja": "aktif",
                "riwayatPendidikan": ["SD Surabaya", "SMP Surabaya", "SMA Surabaya"],
                "riwayatKesehatan": "aman",
                "riwayatKeseharian": "baik"
            },
            "status": "lajang"
        });
    },

    "seminaris.daftar"() {
        return SchoolRegistrationsCollection.find({});
        // console.log(SchoolRegistrationsCollection.find({}));
    },

    "seminaris.getDetail"(seminarisId) {
        check(seminarisId, String);

        if (!this.seminarisId == 0) {
            throw new Meteor.Error("Seminaris Tidak Terdaftar");
        }

        // console.log(SchoolRegistrationsCollection.findOne({
        //     _id: seminarisId,
        // }));

        return SchoolRegistrationsCollection.findOne({
            _id: seminarisId,
        });
    },

});