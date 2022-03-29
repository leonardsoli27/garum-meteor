import {
    Meteor
} from 'meteor/meteor';
import {
    SchoolRegistrationsCollection
} from '../api/schoolRegistrations';

if (Meteor.isServer) {
    SchoolRegistrationsCollection.insert({
        name: "Leonard",
        identityId: {
            nisn: new NumberLong(100000),
            npsn: new NumberLong(100000),
            nik: new NumberLong(100000),
            kk: new NumberLong(100000),
            kks: new NumberLong(100000),
            kpsBpjs: new NumberLong(100000),
            akta: new NumberLong(100000)
        },
        address: {
            street: "dukuh kupang",
            rt: 09,
            rw: 09,
            dusun: "cek",
            desa: "cek",
            kecamatan: "dukuh pakis",
            kabupaten: "surabaya",
            provinsi: "jawa timur",
            kode_pos: 09878
        },
        contactPerson: {
            email: "cek@gmail.com",
            telepon: "081234567890"
        },
        placeOfBirth: "DImana",
        dateOfBirth: 00102,
        formation: {
            baptist: {
                name: "yakobus",
                place: "surabaya",
                date: 080890
            },
            chrism: {
                name: "yakobus",
                place: "surabaya",
                date: 34123
            }
        },
        parokiId: 1212,
        photoUrl: "coba",
        supportDocument: {
            riwayatAktifGereja: "aktif",
            riwayatPendidikan: ["SD Surabaya", "SMP Surabaya", "SMA Surabaya"],
            riwayatKesehatan: "aman",
            riwayatKeseharian: "baik"
        },
        status: "lajang"
    });
}