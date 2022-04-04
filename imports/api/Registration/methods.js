import {
    Meteor
} from 'meteor/meteor';
import {
    check
} from "meteor/check";
import {
    SchoolRegistrationsCollection
} from '/imports/api/Registration/schoolRegistrations';

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
    },

    getDetailSeminaris(seminarisId) {
        return SchoolRegistrationsCollection.findOne({
            "_id": seminarisId,
        });
    },

    cariSeminaris(psb_nama) {
        check(psb_nama, String);

        // console.log(
        //     SchoolRegistrationsCollection.find({
        //         "name": psb_nama,
        //     }).fetch()
        // );

        return SchoolRegistrationsCollection.find({
            $or: [{
                "_id": psb_nama
            }, {
                "name": psb_nama
            }]
        }).fetch();
    },

    absenSeminaris(id_seminaris) {
        check(id_seminaris, String);

        SchoolRegistrationsCollection.update(id_seminaris, {
            $set: {
                kehadiran: "hadir"
            },
        });
    }

});