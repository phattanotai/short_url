/*
 Navicat Premium Data Transfer

 Source Server         : ok
 Source Server Type    : MongoDB
 Source Server Version : 40207
 Source Host           : localhost:27017
 Source Schema         : election

 Target Server Type    : MongoDB
 Target Server Version : 40207
 File Encoding         : 65001

 Date: 26/04/2021 03:06:28
*/


print('Start #################################################################');

db = db.getSiblingDB('election');
db.createUser(
  {
    user: 'admin',
    pwd: '1234',
    roles: [{ role: 'readWrite', db: 'election' }],
  },
);


print('END #################################################################');


// ----------------------------
// Collection structure for admin_pr_vp
// ----------------------------
db.getCollection("admin_pr_vp").drop();
db.createCollection("admin_pr_vp");

// ----------------------------
// Documents of admin_pr_vp
// ----------------------------
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a3"),
    "admin_nr": 33,
    "pres_name": "Wilson W",
    "vice_pres_name": "Marshall T R"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a2"),
    "admin_nr": 32,
    "pres_name": "Wilson W",
    "vice_pres_name": "Marshall T R"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a1"),
    "admin_nr": 2,
    "pres_name": "Washington G",
    "vice_pres_name": "Adams J"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a0"),
    "admin_nr": 1,
    "pres_name": "Washington G",
    "vice_pres_name": "Adams J"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919f"),
    "admin_nr": 13,
    "pres_name": "Van Buren M",
    "vice_pres_name": "Johnson R M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919e"),
    "admin_nr": 41,
    "pres_name": "Truman H S",
    "vice_pres_name": "Barkley A W"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919d"),
    "admin_nr": 16,
    "pres_name": "Taylor Z",
    "vice_pres_name": "Fillmore M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919c"),
    "admin_nr": 31,
    "pres_name": "Taft W H",
    "vice_pres_name": "Sherman J S"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919b"),
    "admin_nr": 30,
    "pres_name": "Roosevelt T",
    "vice_pres_name": "Fairbanks C W"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238919a"),
    "admin_nr": 40,
    "pres_name": "Roosevelt F D",
    "vice_pres_name": "Truman H S"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389199"),
    "admin_nr": 39,
    "pres_name": "Roosevelt F D",
    "vice_pres_name": "Wallace H A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389198"),
    "admin_nr": 38,
    "pres_name": "Roosevelt F D",
    "vice_pres_name": "Garner J N"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389197"),
    "admin_nr": 37,
    "pres_name": "Roosevelt F D",
    "vice_pres_name": "Garner J N"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389196"),
    "admin_nr": 49,
    "pres_name": "Reagan R",
    "vice_pres_name": "Bush G"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389195"),
    "admin_nr": 15,
    "pres_name": "Polk J K",
    "vice_pres_name": "Dallas G M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389194"),
    "admin_nr": 17,
    "pres_name": "Pierce F",
    "vice_pres_name": "De Vane King"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389193"),
    "admin_nr": 47,
    "pres_name": "Nixon R M",
    "vice_pres_name": "Ford G R"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389192"),
    "admin_nr": 47,
    "pres_name": "Nixon R M",
    "vice_pres_name": "Agnew S T"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389191"),
    "admin_nr": 46,
    "pres_name": "Nixon R M",
    "vice_pres_name": "Agnew S T"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389190"),
    "admin_nr": 9,
    "pres_name": "Monroe J",
    "vice_pres_name": "Tompkins D"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918f"),
    "admin_nr": 8,
    "pres_name": "Monroe J",
    "vice_pres_name": "Tompkins D"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918e"),
    "admin_nr": 29,
    "pres_name": "McKinley W",
    "vice_pres_name": "Roosevelt T"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918d"),
    "admin_nr": 28,
    "pres_name": "McKinley W",
    "vice_pres_name": "Hobart G A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918c"),
    "admin_nr": 7,
    "pres_name": "Madison J",
    "vice_pres_name": "Gerry E"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918b"),
    "admin_nr": 6,
    "pres_name": "Madison J",
    "vice_pres_name": "Clinton G"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238918a"),
    "admin_nr": 20,
    "pres_name": "Lincoln A",
    "vice_pres_name": "Johnson A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389189"),
    "admin_nr": 19,
    "pres_name": "Lincoln A",
    "vice_pres_name": "Hamlin H"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389188"),
    "admin_nr": 44,
    "pres_name": "Kennedy J F",
    "vice_pres_name": "Johnson L B"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389187"),
    "admin_nr": 45,
    "pres_name": "Johnson L B",
    "vice_pres_name": "Humphrey H H"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389186"),
    "admin_nr": 5,
    "pres_name": "Jefferson T",
    "vice_pres_name": "Clinton G"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389185"),
    "admin_nr": 4,
    "pres_name": "Jefferson T",
    "vice_pres_name": "Burr A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389184"),
    "admin_nr": 12,
    "pres_name": "Jackson A",
    "vice_pres_name": "Van Buren M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389183"),
    "admin_nr": 11,
    "pres_name": "Jackson A",
    "vice_pres_name": "Calhoun J"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389182"),
    "admin_nr": 36,
    "pres_name": "Hoover H C",
    "vice_pres_name": "Curtis C"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389181"),
    "admin_nr": 23,
    "pres_name": "Hayes R B",
    "vice_pres_name": "Wheeler W"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389180"),
    "admin_nr": 14,
    "pres_name": "Harrison W H",
    "vice_pres_name": "Tyler J"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917f"),
    "admin_nr": 26,
    "pres_name": "Harrison B",
    "vice_pres_name": "Morton L P"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917e"),
    "admin_nr": 34,
    "pres_name": "Harding W G",
    "vice_pres_name": "Coolidge C"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917d"),
    "admin_nr": 22,
    "pres_name": "Grant U S",
    "vice_pres_name": "Wilson H"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917c"),
    "admin_nr": 21,
    "pres_name": "Grant U S",
    "vice_pres_name": "Colfax S"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917b"),
    "admin_nr": 24,
    "pres_name": "Garfield J A",
    "vice_pres_name": "Arthur C A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e238917a"),
    "admin_nr": 47,
    "pres_name": "Ford G R",
    "vice_pres_name": "Rockefeller N"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389179"),
    "admin_nr": 43,
    "pres_name": "Eisenhower D D",
    "vice_pres_name": "Nixon R M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389178"),
    "admin_nr": 42,
    "pres_name": "Eisenhower D D",
    "vice_pres_name": "Nixon R M"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389177"),
    "admin_nr": 35,
    "pres_name": "Coolidge C",
    "vice_pres_name": "Dawes C G"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389176"),
    "admin_nr": 27,
    "pres_name": "Cleveland G",
    "vice_pres_name": "Stevenson A E"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389175"),
    "admin_nr": 25,
    "pres_name": "Cleveland G",
    "vice_pres_name": "Hendricks T A"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389174"),
    "admin_nr": 48,
    "pres_name": "Carter J E",
    "vice_pres_name": "Mondale W F"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389173"),
    "admin_nr": 18,
    "pres_name": "Buchanan J",
    "vice_pres_name": "Breckinridge"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389172"),
    "admin_nr": 10,
    "pres_name": "Adams J Q",
    "vice_pres_name": "Calhoun J"
} ]);
db.getCollection("admin_pr_vp").insert([ {
    _id: ObjectId("5f4907b160cff915e2389171"),
    "admin_nr": 3,
    "pres_name": "Adams J",
    "vice_pres_name": "Jefferson T"
} ]);

// ----------------------------
// Collection structure for administration
// ----------------------------
db.getCollection("administration").drop();
db.createCollection("administration");

// ----------------------------
// Documents of administration
// ----------------------------
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891dd"),
    "admin_nr": 49,
    "pres_name": "Reagan R",
    "year_inaugurated": 1981
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891dc"),
    "admin_nr": 48,
    "pres_name": "Carter J E",
    "year_inaugurated": 1977
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891db"),
    "admin_nr": 47,
    "pres_name": "Nixon R M",
    "year_inaugurated": 1973
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891da"),
    "admin_nr": 47,
    "pres_name": "Ford G R",
    "year_inaugurated": 1974
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d9"),
    "admin_nr": 46,
    "pres_name": "Nixon R M",
    "year_inaugurated": 1969
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d8"),
    "admin_nr": 45,
    "pres_name": "Johnson L B",
    "year_inaugurated": 1965
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d7"),
    "admin_nr": 44,
    "pres_name": "Kennedy J F",
    "year_inaugurated": 1961
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d6"),
    "admin_nr": 44,
    "pres_name": "Johnson L B",
    "year_inaugurated": 1963
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d5"),
    "admin_nr": 43,
    "pres_name": "Eisenhower D D",
    "year_inaugurated": 1957
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d4"),
    "admin_nr": 42,
    "pres_name": "Eisenhower D D",
    "year_inaugurated": 1953
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d3"),
    "admin_nr": 41,
    "pres_name": "Truman H S",
    "year_inaugurated": 1949
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d2"),
    "admin_nr": 40,
    "pres_name": "Truman H S",
    "year_inaugurated": 1945
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d1"),
    "admin_nr": 40,
    "pres_name": "Roosevelt F D",
    "year_inaugurated": 1945
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891d0"),
    "admin_nr": 39,
    "pres_name": "Roosevelt F D",
    "year_inaugurated": 1941
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891cf"),
    "admin_nr": 38,
    "pres_name": "Roosevelt F D",
    "year_inaugurated": 1937
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ce"),
    "admin_nr": 37,
    "pres_name": "Roosevelt F D",
    "year_inaugurated": 1933
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891cd"),
    "admin_nr": 36,
    "pres_name": "Hoover H C",
    "year_inaugurated": 1929
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891cc"),
    "admin_nr": 35,
    "pres_name": "Coolidge C",
    "year_inaugurated": 1925
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891cb"),
    "admin_nr": 34,
    "pres_name": "Harding W G",
    "year_inaugurated": 1921
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ca"),
    "admin_nr": 34,
    "pres_name": "Coolidge C",
    "year_inaugurated": 1923
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c9"),
    "admin_nr": 33,
    "pres_name": "Wilson W",
    "year_inaugurated": 1917
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c8"),
    "admin_nr": 32,
    "pres_name": "Wilson W",
    "year_inaugurated": 1913
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c7"),
    "admin_nr": 31,
    "pres_name": "Taft W H",
    "year_inaugurated": 1909
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c6"),
    "admin_nr": 30,
    "pres_name": "Roosevelt T",
    "year_inaugurated": 1905
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c5"),
    "admin_nr": 29,
    "pres_name": "Roosevelt T",
    "year_inaugurated": 1901
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c4"),
    "admin_nr": 29,
    "pres_name": "McKinley W",
    "year_inaugurated": 1901
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c3"),
    "admin_nr": 28,
    "pres_name": "McKinley W",
    "year_inaugurated": 1897
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c2"),
    "admin_nr": 27,
    "pres_name": "Cleveland G",
    "year_inaugurated": 1893
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c1"),
    "admin_nr": 26,
    "pres_name": "Harrison B",
    "year_inaugurated": 1889
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891c0"),
    "admin_nr": 25,
    "pres_name": "Cleveland G",
    "year_inaugurated": 1885
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891bf"),
    "admin_nr": 24,
    "pres_name": "Garfield J A",
    "year_inaugurated": 1881
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891be"),
    "admin_nr": 24,
    "pres_name": "Arthur C A",
    "year_inaugurated": 1881
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891bd"),
    "admin_nr": 23,
    "pres_name": "Hayes R B",
    "year_inaugurated": 1877
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891bc"),
    "admin_nr": 22,
    "pres_name": "Grant U S",
    "year_inaugurated": 1873
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891bb"),
    "admin_nr": 21,
    "pres_name": "Grant U S",
    "year_inaugurated": 1869
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ba"),
    "admin_nr": 20,
    "pres_name": "Lincoln A",
    "year_inaugurated": 1865
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b9"),
    "admin_nr": 20,
    "pres_name": "Johnson A",
    "year_inaugurated": 1865
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b8"),
    "admin_nr": 19,
    "pres_name": "Lincoln A",
    "year_inaugurated": 1861
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b7"),
    "admin_nr": 18,
    "pres_name": "Buchanan J",
    "year_inaugurated": 1857
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b6"),
    "admin_nr": 17,
    "pres_name": "Pierce F",
    "year_inaugurated": 1853
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b5"),
    "admin_nr": 16,
    "pres_name": "Taylor Z",
    "year_inaugurated": 1849
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b4"),
    "admin_nr": 16,
    "pres_name": "Fillmore M",
    "year_inaugurated": 1850
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b3"),
    "admin_nr": 15,
    "pres_name": "Polk J K",
    "year_inaugurated": 1845
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b2"),
    "admin_nr": 14,
    "pres_name": "Tyler J",
    "year_inaugurated": 1841
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b1"),
    "admin_nr": 14,
    "pres_name": "Harrison W H",
    "year_inaugurated": 1841
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891b0"),
    "admin_nr": 13,
    "pres_name": "Van Buren M",
    "year_inaugurated": 1837
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891af"),
    "admin_nr": 12,
    "pres_name": "Jackson A",
    "year_inaugurated": 1833
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ae"),
    "admin_nr": 11,
    "pres_name": "Jackson A",
    "year_inaugurated": 1829
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ad"),
    "admin_nr": 10,
    "pres_name": "Adams J Q",
    "year_inaugurated": 1825
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ac"),
    "admin_nr": 9,
    "pres_name": "Monroe J",
    "year_inaugurated": 1821
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ab"),
    "admin_nr": 8,
    "pres_name": "Monroe J",
    "year_inaugurated": 1817
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891aa"),
    "admin_nr": 7,
    "pres_name": "Madison J",
    "year_inaugurated": 1813
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a9"),
    "admin_nr": 6,
    "pres_name": "Madison J",
    "year_inaugurated": 1809
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a8"),
    "admin_nr": 5,
    "pres_name": "Jefferson T",
    "year_inaugurated": 1805
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a7"),
    "admin_nr": 4,
    "pres_name": "Jefferson T",
    "year_inaugurated": 1801
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a6"),
    "admin_nr": 3,
    "pres_name": "Adams J",
    "year_inaugurated": 1797
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a5"),
    "admin_nr": 2,
    "pres_name": "Washington G",
    "year_inaugurated": 1793
} ]);
db.getCollection("administration").insert([ {
    _id: ObjectId("5f4907b160cff915e23891a4"),
    "admin_nr": 1,
    "pres_name": "Washington G",
    "year_inaugurated": 1789
} ]);

// ----------------------------
// Collection structure for election
// ----------------------------
db.getCollection("election").drop();
db.createCollection("election");

// ----------------------------
// Documents of election
// ----------------------------
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389270"),
    "election_year": 1980,
    candidate: "Reagan R",
    votes: 489,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926f"),
    "election_year": 1980,
    candidate: "Carter J",
    votes: 49,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926e"),
    "election_year": 1976,
    candidate: "Ford G R",
    votes: 240,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926d"),
    "election_year": 1976,
    candidate: "Carter J E",
    votes: 297,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926c"),
    "election_year": 1972,
    candidate: "Nixon R M",
    votes: 520,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926b"),
    "election_year": 1972,
    candidate: "McGovern G S",
    votes: 17,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238926a"),
    "election_year": 1972,
    candidate: "Hospers J",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389269"),
    "election_year": 1968,
    candidate: "Wallace G C",
    votes: 46,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389268"),
    "election_year": 1968,
    candidate: "Nixon R M",
    votes: 301,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389267"),
    "election_year": 1968,
    candidate: "Humphrey H H",
    votes: 191,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389266"),
    "election_year": 1964,
    candidate: "Johnson L B",
    votes: 486,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389265"),
    "election_year": 1964,
    candidate: "Goldwater B",
    votes: 52,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389264"),
    "election_year": 1960,
    candidate: "Nixon R M",
    votes: 219,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389263"),
    "election_year": 1960,
    candidate: "Kennedy J F",
    votes: 303,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389262"),
    "election_year": 1960,
    candidate: "Byrd",
    votes: 15,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389261"),
    "election_year": 1956,
    candidate: "Stevenson A",
    votes: 73,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389260"),
    "election_year": 1956,
    candidate: "Jones W B",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925f"),
    "election_year": 1956,
    candidate: "Eisenhower D D",
    votes: 457,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925e"),
    "election_year": 1952,
    candidate: "Stevenson A",
    votes: 89,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925d"),
    "election_year": 1952,
    candidate: "Eisenhower D D",
    votes: 442,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925c"),
    "election_year": 1948,
    candidate: "Truman H S",
    votes: 303,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925b"),
    "election_year": 1948,
    candidate: "Thurmond J S",
    votes: 39,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238925a"),
    "election_year": 1948,
    candidate: "Dewey T E",
    votes: 189,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389259"),
    "election_year": 1944,
    candidate: "Roosevelt F D",
    votes: 432,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389258"),
    "election_year": 1944,
    candidate: "Dewey T E",
    votes: 99,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389257"),
    "election_year": 1940,
    candidate: "Wilkie W L",
    votes: 82,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389256"),
    "election_year": 1940,
    candidate: "Roosevelt F D",
    votes: 449,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389255"),
    "election_year": 1936,
    candidate: "Roosevelt F D",
    votes: 523,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389254"),
    "election_year": 1936,
    candidate: "Landon A M",
    votes: 8,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389253"),
    "election_year": 1932,
    candidate: "Roosevelt F D",
    votes: 472,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389252"),
    "election_year": 1932,
    candidate: "Hoover H C",
    votes: 59,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389251"),
    "election_year": 1928,
    candidate: "Smith A E",
    votes: 87,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389250"),
    "election_year": 1928,
    candidate: "Hoover H C",
    votes: 444,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924f"),
    "election_year": 1924,
    candidate: "La Follette R M",
    votes: 13,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924e"),
    "election_year": 1924,
    candidate: "Davis J W",
    votes: 136,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924d"),
    "election_year": 1924,
    candidate: "Coolidge C",
    votes: 382,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924c"),
    "election_year": 1920,
    candidate: "Harding W G",
    votes: 404,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924b"),
    "election_year": 1920,
    candidate: "Cox W W",
    votes: 127,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238924a"),
    "election_year": 1916,
    candidate: "Wilson W",
    votes: 277,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389249"),
    "election_year": 1916,
    candidate: "Hughes C E",
    votes: 254,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389248"),
    "election_year": 1912,
    candidate: "Wilson W",
    votes: 435,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389247"),
    "election_year": 1912,
    candidate: "Taft W H",
    votes: 8,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389246"),
    "election_year": 1912,
    candidate: "Roosevelt T",
    votes: 88,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389245"),
    "election_year": 1908,
    candidate: "Taft W H",
    votes: 321,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389244"),
    "election_year": 1908,
    candidate: "Bryan W J",
    votes: 162,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389243"),
    "election_year": 1904,
    candidate: "Roosevelt T",
    votes: 336,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389242"),
    "election_year": 1904,
    candidate: "Parker A B",
    votes: 140,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389241"),
    "election_year": 1900,
    candidate: "McKinley W",
    votes: 292,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389240"),
    "election_year": 1900,
    candidate: "Bryan W J",
    votes: 155,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923f"),
    "election_year": 1896,
    candidate: "McKinley W",
    votes: 271,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923e"),
    "election_year": 1896,
    candidate: "Bryan W J",
    votes: 176,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923d"),
    "election_year": 1892,
    candidate: "Weaver J B",
    votes: 22,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923c"),
    "election_year": 1892,
    candidate: "Harrison B",
    votes: 145,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923b"),
    "election_year": 1892,
    candidate: "Cleveland G",
    votes: 277,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238923a"),
    "election_year": 1888,
    candidate: "Harrison B",
    votes: 233,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389239"),
    "election_year": 1888,
    candidate: "Cleveland G",
    votes: 168,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389238"),
    "election_year": 1884,
    candidate: "Cleveland G",
    votes: 219,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389237"),
    "election_year": 1884,
    candidate: "Blaine J G",
    votes: 182,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389236"),
    "election_year": 1880,
    candidate: "Hancock W S",
    votes: 155,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389235"),
    "election_year": 1880,
    candidate: "Garfield J A",
    votes: 214,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389234"),
    "election_year": 1876,
    candidate: "Tilden S J",
    votes: 184,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389233"),
    "election_year": 1876,
    candidate: "Hayes R B",
    votes: 185,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389232"),
    "election_year": 1872,
    candidate: "Jenkins C J",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389231"),
    "election_year": 1872,
    candidate: "Hendricks T A",
    votes: 42,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389230"),
    "election_year": 1872,
    candidate: "Grant U S",
    votes: 286,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922f"),
    "election_year": 1872,
    candidate: "Davis D",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922e"),
    "election_year": 1872,
    candidate: "Brown B G",
    votes: 18,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922d"),
    "election_year": 1868,
    candidate: "Seymour",
    votes: 80,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922c"),
    "election_year": 1868,
    candidate: "Grant U S",
    votes: 214,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922b"),
    "election_year": 1864,
    candidate: "McClellan G B",
    votes: 21,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238922a"),
    "election_year": 1864,
    candidate: "Lincoln A",
    votes: 212,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389229"),
    "election_year": 1860,
    candidate: "Lincoln A",
    votes: 180,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389228"),
    "election_year": 1860,
    candidate: "Douglas S",
    votes: 12,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389227"),
    "election_year": 1860,
    candidate: "Breckinridge J",
    votes: 72,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389226"),
    "election_year": 1860,
    candidate: "Bell J",
    votes: 39,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389225"),
    "election_year": 1856,
    candidate: "Fremont J C",
    votes: 114,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389224"),
    "election_year": 1856,
    candidate: "Fillmore M",
    votes: 8,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389223"),
    "election_year": 1856,
    candidate: "Buchanan J",
    votes: 174,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389222"),
    "election_year": 1852,
    candidate: "Scott W",
    votes: 42,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389221"),
    "election_year": 1852,
    candidate: "Pierce F",
    votes: 254,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389220"),
    "election_year": 1848,
    candidate: "Taylor Z",
    votes: 163,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921f"),
    "election_year": 1848,
    candidate: "Cass L",
    votes: 127,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921e"),
    "election_year": 1844,
    candidate: "Polk J K",
    votes: 170,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921d"),
    "election_year": 1844,
    candidate: "Clay H",
    votes: 105,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921c"),
    "election_year": 1840,
    candidate: "Van Buren M",
    votes: 60,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921b"),
    "election_year": 1840,
    candidate: "Harrison W H",
    votes: 234,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238921a"),
    "election_year": 1836,
    candidate: "White H L",
    votes: 26,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389219"),
    "election_year": 1836,
    candidate: "Webster D",
    votes: 14,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389218"),
    "election_year": 1836,
    candidate: "Van Buren M",
    votes: 170,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389217"),
    "election_year": 1836,
    candidate: "Mangum W P",
    votes: 11,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389216"),
    "election_year": 1836,
    candidate: "Harrison W H",
    votes: 73,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389215"),
    "election_year": 1832,
    candidate: "Wirt W",
    votes: 7,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389214"),
    "election_year": 1832,
    candidate: "Jackson A",
    votes: 219,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389213"),
    "election_year": 1832,
    candidate: "Floyd J",
    votes: 11,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389212"),
    "election_year": 1832,
    candidate: "Clay H",
    votes: 49,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389211"),
    "election_year": 1828,
    candidate: "Jackson A",
    votes: 178,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389210"),
    "election_year": 1828,
    candidate: "Adams J",
    votes: 83,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920f"),
    "election_year": 1824,
    candidate: "Jackson A",
    votes: 99,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920e"),
    "election_year": 1824,
    candidate: "Crawford W H",
    votes: 41,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920d"),
    "election_year": 1824,
    candidate: "Clay H",
    votes: 37,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920c"),
    "election_year": 1824,
    candidate: "Adams J Q",
    votes: 84,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920b"),
    "election_year": 1820,
    candidate: "Monroe J",
    votes: 231,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e238920a"),
    "election_year": 1820,
    candidate: "Adams J Q",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389209"),
    "election_year": 1816,
    candidate: "Monroe J",
    votes: 183,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389208"),
    "election_year": 1816,
    candidate: "King R",
    votes: 34,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389207"),
    "election_year": 1812,
    candidate: "Madison J",
    votes: 128,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389206"),
    "election_year": 1812,
    candidate: "Clinton G",
    votes: 89,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389205"),
    "election_year": 1808,
    candidate: "Pinckney C C",
    votes: 47,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389204"),
    "election_year": 1808,
    candidate: "Madison J",
    votes: 122,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389203"),
    "election_year": 1808,
    candidate: "Clinton G",
    votes: 6,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389202"),
    "election_year": 1804,
    candidate: "Pinckney C C",
    votes: 14,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389201"),
    "election_year": 1804,
    candidate: "Jefferson T",
    votes: 162,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e2389200"),
    "election_year": 1800,
    candidate: "Pinckney C C",
    votes: 64,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ff"),
    "election_year": 1800,
    candidate: "Jefferson T",
    votes: 73,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891fe"),
    "election_year": 1800,
    candidate: "Jay J",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891fd"),
    "election_year": 1800,
    candidate: "Burr A",
    votes: 73,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891fc"),
    "election_year": 1800,
    candidate: "Adams J",
    votes: 65,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891fb"),
    "election_year": 1796,
    candidate: "Washington G",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891fa"),
    "election_year": 1796,
    candidate: "Pinckney T",
    votes: 59,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f9"),
    "election_year": 1796,
    candidate: "Pinckney C C",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f8"),
    "election_year": 1796,
    candidate: "Johnson S",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f7"),
    "election_year": 1796,
    candidate: "Jefferson T",
    votes: 68,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f6"),
    "election_year": 1796,
    candidate: "Jay J",
    votes: 5,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f5"),
    "election_year": 1796,
    candidate: "Iredell J",
    votes: 3,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f4"),
    "election_year": 1796,
    candidate: "Henry J",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f3"),
    "election_year": 1796,
    candidate: "Ellsworth O",
    votes: 11,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f2"),
    "election_year": 1796,
    candidate: "Clinton G",
    votes: 7,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f1"),
    "election_year": 1796,
    candidate: "Burr A",
    votes: 30,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891f0"),
    "election_year": 1796,
    candidate: "Adams S",
    votes: 15,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ef"),
    "election_year": 1796,
    candidate: "Adams J",
    votes: 71,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ee"),
    "election_year": 1792,
    candidate: "Washington G",
    votes: 132,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ed"),
    "election_year": 1792,
    candidate: "Jefferson T",
    votes: 4,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ec"),
    "election_year": 1792,
    candidate: "Clinton G",
    votes: 50,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891eb"),
    "election_year": 1792,
    candidate: "Burr A",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891ea"),
    "election_year": 1792,
    candidate: "Adams J",
    votes: 77,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e9"),
    "election_year": 1789,
    candidate: "Washington G",
    votes: 69,
    "winner_loser_indic": "W"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e8"),
    "election_year": 1789,
    candidate: "Telfair E",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e7"),
    "election_year": 1789,
    candidate: "Rutledge J",
    votes: 6,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e6"),
    "election_year": 1789,
    candidate: "Milton J",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e5"),
    "election_year": 1789,
    candidate: "Lincoln B",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e4"),
    "election_year": 1789,
    candidate: "Jay J",
    votes: 9,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e3"),
    "election_year": 1789,
    candidate: "Huntington S",
    votes: 2,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e2"),
    "election_year": 1789,
    candidate: "Harrison R H",
    votes: 6,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e1"),
    "election_year": 1789,
    candidate: "Hancock J",
    votes: 4,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891e0"),
    "election_year": 1789,
    candidate: "Clinton G",
    votes: 3,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891df"),
    "election_year": 1789,
    candidate: "Armstrong J",
    votes: 1,
    "winner_loser_indic": "L"
} ]);
db.getCollection("election").insert([ {
    _id: ObjectId("5f4907b160cff915e23891de"),
    "election_year": 1789,
    candidate: "Adams J",
    votes: 34,
    "winner_loser_indic": "L"
} ]);

// ----------------------------
// Collection structure for pres_hobby
// ----------------------------
db.getCollection("pres_hobby").drop();
db.createCollection("pres_hobby");

// ----------------------------
// Documents of pres_hobby
// ----------------------------
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ab"),
    "pres_name": "Wilson W",
    hobby: "Walking"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892aa"),
    "pres_name": "Wilson W",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a9"),
    "pres_name": "Wilson W",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a8"),
    "pres_name": "Washington G",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a7"),
    "pres_name": "Washington G",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a6"),
    "pres_name": "Van Buren M",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a5"),
    "pres_name": "Truman H S",
    hobby: "Walking"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a4"),
    "pres_name": "Truman H S",
    hobby: "Poker"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a3"),
    "pres_name": "Truman H S",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a2"),
    "pres_name": "Taylor Z",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a1"),
    "pres_name": "Taft W H",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e23892a0"),
    "pres_name": "Taft W H",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929f"),
    "pres_name": "Roosevelt T",
    hobby: "Wrestling"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929e"),
    "pres_name": "Roosevelt T",
    hobby: "Tennis"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929d"),
    "pres_name": "Roosevelt T",
    hobby: "Shooting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929c"),
    "pres_name": "Roosevelt T",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929b"),
    "pres_name": "Roosevelt T",
    hobby: "Jujitsu"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238929a"),
    "pres_name": "Roosevelt T",
    hobby: "Hunting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389299"),
    "pres_name": "Roosevelt T",
    hobby: "Boxing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389298"),
    "pres_name": "Roosevelt F D",
    hobby: "Swimming"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389297"),
    "pres_name": "Roosevelt F D",
    hobby: "Sailing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389296"),
    "pres_name": "Roosevelt F D",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389295"),
    "pres_name": "Nixon R M",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389294"),
    "pres_name": "McKinley W",
    hobby: "Walking"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389293"),
    "pres_name": "McKinley W",
    hobby: "Swimming"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389292"),
    "pres_name": "McKinley W",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389291"),
    "pres_name": "Lincoln A",
    hobby: "Walking"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389290"),
    "pres_name": "Kennedy J F",
    hobby: "Touch Football"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928f"),
    "pres_name": "Kennedy J F",
    hobby: "Swimming"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928e"),
    "pres_name": "Kennedy J F",
    hobby: "Sailing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928d"),
    "pres_name": "Johnson L B",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928c"),
    "pres_name": "Jefferson T",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928b"),
    "pres_name": "Jefferson T",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238928a"),
    "pres_name": "Jackson A",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389289"),
    "pres_name": "Hoover H C",
    hobby: "Medicine Ball"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389288"),
    "pres_name": "Hoover H C",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389287"),
    "pres_name": "Hayes R B",
    hobby: "Shooting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389286"),
    "pres_name": "Hayes R B",
    hobby: "Driving"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389285"),
    "pres_name": "Hayes R B",
    hobby: "Croquet"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389284"),
    "pres_name": "Harrison B",
    hobby: "Hunting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389283"),
    "pres_name": "Harding W G",
    hobby: "Riding"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389282"),
    "pres_name": "Harding W G",
    hobby: "Poker"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389281"),
    "pres_name": "Harding W G",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389280"),
    "pres_name": "Garfield J A",
    hobby: "Billiards"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927f"),
    "pres_name": "Eisenhower D D",
    hobby: "Painting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927e"),
    "pres_name": "Eisenhower D D",
    hobby: "Hunting"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927d"),
    "pres_name": "Eisenhower D D",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927c"),
    "pres_name": "Eisenhower D D",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927b"),
    "pres_name": "Eisenhower D D",
    hobby: "Bridge"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e238927a"),
    "pres_name": "Coolidge C",
    hobby: "Pitching Hay"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389279"),
    "pres_name": "Coolidge C",
    hobby: "Mechanical Horse"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389278"),
    "pres_name": "Coolidge C",
    hobby: "Indian Clubs"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389277"),
    "pres_name": "Coolidge C",
    hobby: "Golf"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389276"),
    "pres_name": "Coolidge C",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389275"),
    "pres_name": "Cleveland G",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389274"),
    "pres_name": "Arthur C A",
    hobby: "Fishing"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389273"),
    "pres_name": "Adams J Q",
    hobby: "Walking"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389272"),
    "pres_name": "Adams J Q",
    hobby: "Swimming"
} ]);
db.getCollection("pres_hobby").insert([ {
    _id: ObjectId("5f4907b260cff915e2389271"),
    "pres_name": "Adams J Q",
    hobby: "Billiards"
} ]);

// ----------------------------
// Collection structure for pres_marriage
// ----------------------------
db.getCollection("pres_marriage").drop();
db.createCollection("pres_marriage");

// ----------------------------
// Documents of pres_marriage
// ----------------------------
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d7"),
    "pres_name": "Wilson W",
    "spouse_name": "Galt E B",
    "pr_age": 58,
    "sp_age": 43,
    "nr_children": 0,
    "mar_year": 1915
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d6"),
    "pres_name": "Wilson W",
    "spouse_name": "Axson E L",
    "pr_age": 28,
    "sp_age": 25,
    "nr_children": 3,
    "mar_year": 1885
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d5"),
    "pres_name": "Washington G",
    "spouse_name": "Custis M D",
    "pr_age": 26,
    "sp_age": 27,
    "nr_children": 0,
    "mar_year": 1759
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d4"),
    "pres_name": "Van Buren M",
    "spouse_name": "Hoes H",
    "pr_age": 24,
    "sp_age": 23,
    "nr_children": 4,
    "mar_year": 1807
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d3"),
    "pres_name": "Tyler J",
    "spouse_name": "Gardiner J",
    "pr_age": 54,
    "sp_age": 24,
    "nr_children": 7,
    "mar_year": 1844
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d2"),
    "pres_name": "Tyler J",
    "spouse_name": "Christian L",
    "pr_age": 23,
    "sp_age": 22,
    "nr_children": 8,
    "mar_year": 1813
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d1"),
    "pres_name": "Truman H S",
    "spouse_name": "Wallace E V",
    "pr_age": 35,
    "sp_age": 34,
    "nr_children": 1,
    "mar_year": 1919
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d0"),
    "pres_name": "Taylor Z",
    "spouse_name": "Smith M M",
    "pr_age": 25,
    "sp_age": 21,
    "nr_children": 6,
    "mar_year": 1810
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892cf"),
    "pres_name": "Taft W H",
    "spouse_name": "Herron H",
    "pr_age": 28,
    "sp_age": 25,
    "nr_children": 3,
    "mar_year": 1886
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ce"),
    "pres_name": "Roosevelt T",
    "spouse_name": "Lee A H",
    "pr_age": 22,
    "sp_age": 19,
    "nr_children": 1,
    "mar_year": 1880
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892cd"),
    "pres_name": "Roosevelt T",
    "spouse_name": "Carow E K",
    "pr_age": 28,
    "sp_age": 25,
    "nr_children": 5,
    "mar_year": 1886
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892cc"),
    "pres_name": "Roosevelt F D",
    "spouse_name": "Roosevelt A E",
    "pr_age": 23,
    "sp_age": 20,
    "nr_children": 6,
    "mar_year": 1905
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892cb"),
    "pres_name": "Reagan R",
    "spouse_name": "Wyman J",
    "pr_age": 28,
    "sp_age": 25,
    "nr_children": 2,
    "mar_year": 1940
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ca"),
    "pres_name": "Reagan R",
    "spouse_name": "Davis N",
    "pr_age": 41,
    "sp_age": 28,
    "nr_children": 2,
    "mar_year": 1952
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c9"),
    "pres_name": "Polk J K",
    "spouse_name": "Childress S",
    "pr_age": 28,
    "sp_age": 20,
    "nr_children": 0,
    "mar_year": 1824
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c8"),
    "pres_name": "Pierce F",
    "spouse_name": "Appleton J M",
    "pr_age": 29,
    "sp_age": 28,
    "nr_children": 3,
    "mar_year": 1834
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c7"),
    "pres_name": "Nixon R M",
    "spouse_name": "Ryan T C",
    "pr_age": 27,
    "sp_age": 28,
    "nr_children": 2,
    "mar_year": 1940
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c6"),
    "pres_name": "Monroe J",
    "spouse_name": "Kortright E",
    "pr_age": 27,
    "sp_age": 17,
    "nr_children": 3,
    "mar_year": 1786
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c5"),
    "pres_name": "McKinley W",
    "spouse_name": "Saxton I",
    "pr_age": 27,
    "sp_age": 23,
    "nr_children": 2,
    "mar_year": 1871
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c4"),
    "pres_name": "Madison J",
    "spouse_name": "Todd D D P",
    "pr_age": 43,
    "sp_age": 26,
    "nr_children": 0,
    "mar_year": 1794
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c3"),
    "pres_name": "Lincoln A",
    "spouse_name": "Todd M",
    "pr_age": 33,
    "sp_age": 23,
    "nr_children": 4,
    "mar_year": 1842
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c2"),
    "pres_name": "Kennedy J F",
    "spouse_name": "Bouvier J L",
    "pr_age": 36,
    "sp_age": 24,
    "nr_children": 3,
    "mar_year": 1953
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c1"),
    "pres_name": "Johnson L B",
    "spouse_name": "Taylor C A",
    "pr_age": 26,
    "sp_age": 21,
    "nr_children": 2,
    "mar_year": 1934
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892c0"),
    "pres_name": "Johnson A",
    "spouse_name": "McCardle E",
    "pr_age": 18,
    "sp_age": 16,
    "nr_children": 5,
    "mar_year": 1827
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892bf"),
    "pres_name": "Jefferson T",
    "spouse_name": "Skelton M W",
    "pr_age": 28,
    "sp_age": 23,
    "nr_children": 6,
    "mar_year": 1772
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892be"),
    "pres_name": "Jackson A",
    "spouse_name": "Robards R D",
    "pr_age": 26,
    "sp_age": 26,
    "nr_children": 0,
    "mar_year": 1794
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892bd"),
    "pres_name": "Hoover H C",
    "spouse_name": "Henry L",
    "pr_age": 24,
    "sp_age": 23,
    "nr_children": 2,
    "mar_year": 1899
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892bc"),
    "pres_name": "Hayes R B",
    "spouse_name": "Webb L W",
    "pr_age": 30,
    "sp_age": 21,
    "nr_children": 8,
    "mar_year": 1852
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892bb"),
    "pres_name": "Harrison W H",
    "spouse_name": "Symmes A T",
    "pr_age": 22,
    "sp_age": 20,
    "nr_children": 10,
    "mar_year": 1795
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ba"),
    "pres_name": "Harrison B",
    "spouse_name": "Scott C L",
    "pr_age": 20,
    "sp_age": 21,
    "nr_children": 2,
    "mar_year": 1853
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b9"),
    "pres_name": "Harrison B",
    "spouse_name": "Dimmick M S L",
    "pr_age": 62,
    "sp_age": 37,
    "nr_children": 1,
    "mar_year": 1896
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b8"),
    "pres_name": "Harding W G",
    "spouse_name": "De Wolfe F K",
    "pr_age": 25,
    "sp_age": 30,
    "nr_children": 0,
    "mar_year": 1891
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b7"),
    "pres_name": "Grant U S",
    "spouse_name": "Dent J B",
    "pr_age": 26,
    "sp_age": 22,
    "nr_children": 4,
    "mar_year": 1848
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b6"),
    "pres_name": "Garfield J A",
    "spouse_name": "Rudolph L",
    "pr_age": 26,
    "sp_age": 26,
    "nr_children": 7,
    "mar_year": 1858
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b5"),
    "pres_name": "Ford G R",
    "spouse_name": "Warren E B",
    "pr_age": 35,
    "sp_age": 30,
    "nr_children": 4,
    "mar_year": 1948
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b4"),
    "pres_name": "Fillmore M",
    "spouse_name": "Powers A",
    "pr_age": 26,
    "sp_age": 27,
    "nr_children": 2,
    "mar_year": 1826
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b3"),
    "pres_name": "Fillmore M",
    "spouse_name": "McIntosh C C",
    "pr_age": 58,
    "sp_age": 44,
    "nr_children": 0,
    "mar_year": 1858
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b2"),
    "pres_name": "Eisenhower D D",
    "spouse_name": "Doud G",
    "pr_age": 25,
    "sp_age": 19,
    "nr_children": 2,
    "mar_year": 1916
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b1"),
    "pres_name": "Coolidge C",
    "spouse_name": "Goodhue G A",
    "pr_age": 33,
    "sp_age": 26,
    "nr_children": 2,
    "mar_year": 1905
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892b0"),
    "pres_name": "Cleveland G",
    "spouse_name": "Folson F",
    "pr_age": 49,
    "sp_age": 21,
    "nr_children": 5,
    "mar_year": 1886
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892af"),
    "pres_name": "Carter J E",
    "spouse_name": "Smith R",
    "pr_age": 21,
    "sp_age": 18,
    "nr_children": 4,
    "mar_year": 1946
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ae"),
    "pres_name": "Arthur C A",
    "spouse_name": "Herndon E L",
    "pr_age": 29,
    "sp_age": 22,
    "nr_children": 3,
    "mar_year": 1859
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ad"),
    "pres_name": "Adams J Q",
    "spouse_name": "Johnson L C",
    "pr_age": 30,
    "sp_age": 22,
    "nr_children": 4,
    "mar_year": 1797
} ]);
db.getCollection("pres_marriage").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ac"),
    "pres_name": "Adams J",
    "spouse_name": "Smith A",
    "pr_age": 28,
    "sp_age": 19,
    "nr_children": 5,
    "mar_year": 1764
} ]);

// ----------------------------
// Collection structure for president
// ----------------------------
db.getCollection("president").drop();
db.createCollection("president");

// ----------------------------
// Documents of president
// ----------------------------
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892fe"),
    "pres_name": "Wilson W",
    "birth_yr": 1856,
    "yrs_serv": 8,
    "death_age": 67,
    party: "Democratic",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892fd"),
    "pres_name": "Washington G",
    "birth_yr": 1732,
    "yrs_serv": 7,
    "death_age": 67,
    party: "Federalist",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892fc"),
    "pres_name": "Van Buren M",
    "birth_yr": 1782,
    "yrs_serv": 4,
    "death_age": 79,
    party: "Democratic",
    "state_born": "New York"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892fb"),
    "pres_name": "Tyler J",
    "birth_yr": 1790,
    "yrs_serv": 3,
    "death_age": 71,
    party: "Whig",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892fa"),
    "pres_name": "Truman H S",
    "birth_yr": 1884,
    "yrs_serv": 7,
    "death_age": 88,
    party: "Democratic",
    "state_born": "Missouri"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f9"),
    "pres_name": "Taylor Z",
    "birth_yr": 1784,
    "yrs_serv": 1,
    "death_age": 65,
    party: "Whig",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f8"),
    "pres_name": "Taft W H",
    "birth_yr": 1857,
    "yrs_serv": 4,
    "death_age": 72,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f7"),
    "pres_name": "Roosevelt T",
    "birth_yr": 1858,
    "yrs_serv": 7,
    "death_age": 60,
    party: "Republican",
    "state_born": "New York"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f6"),
    "pres_name": "Roosevelt F D",
    "birth_yr": 1882,
    "yrs_serv": 12,
    "death_age": 63,
    party: "Democratic",
    "state_born": "New York"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f5"),
    "pres_name": "Reagan R",
    "birth_yr": 1911,
    "yrs_serv": 3,
    "death_age": null,
    party: "Republican",
    "state_born": "Illinois"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f4"),
    "pres_name": "Polk J K",
    "birth_yr": 1795,
    "yrs_serv": 4,
    "death_age": 53,
    party: "Democratic",
    "state_born": "North Carolina"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f3"),
    "pres_name": "Pierce F",
    "birth_yr": 1804,
    "yrs_serv": 4,
    "death_age": 64,
    party: "Democratic",
    "state_born": "New Hampshire"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f2"),
    "pres_name": "Nixon R M",
    "birth_yr": 1913,
    "yrs_serv": 5,
    "death_age": null,
    party: "Republican",
    "state_born": "California"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f1"),
    "pres_name": "Monroe J",
    "birth_yr": 1758,
    "yrs_serv": 8,
    "death_age": 73,
    party: "Demo-Rep",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892f0"),
    "pres_name": "McKinley W",
    "birth_yr": 1843,
    "yrs_serv": 4,
    "death_age": 58,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ef"),
    "pres_name": "Madison J",
    "birth_yr": 1751,
    "yrs_serv": 8,
    "death_age": 85,
    party: "Demo-Rep",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ee"),
    "pres_name": "Lincoln A",
    "birth_yr": 1809,
    "yrs_serv": 4,
    "death_age": 56,
    party: "Republican",
    "state_born": "Kentucky"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ed"),
    "pres_name": "Kennedy J F",
    "birth_yr": 1917,
    "yrs_serv": 2,
    "death_age": 46,
    party: "Democratic",
    "state_born": "Massachusetts"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ec"),
    "pres_name": "Johnson L B",
    "birth_yr": 1908,
    "yrs_serv": 5,
    "death_age": 65,
    party: "Democratic",
    "state_born": "Texas"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892eb"),
    "pres_name": "Johnson A",
    "birth_yr": 1808,
    "yrs_serv": 3,
    "death_age": 66,
    party: "Democratic",
    "state_born": "North Carolina"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892ea"),
    "pres_name": "Jefferson T",
    "birth_yr": 1743,
    "yrs_serv": 8,
    "death_age": 83,
    party: "Demo-Rep",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e9"),
    "pres_name": "Jackson A",
    "birth_yr": 1767,
    "yrs_serv": 8,
    "death_age": 78,
    party: "Democratic",
    "state_born": "South Carolina"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e8"),
    "pres_name": "Hoover H C",
    "birth_yr": 1874,
    "yrs_serv": 4,
    "death_age": 90,
    party: "Republican",
    "state_born": "Iowa"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e7"),
    "pres_name": "Hayes R B",
    "birth_yr": 1822,
    "yrs_serv": 4,
    "death_age": 70,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e6"),
    "pres_name": "Harrison W H",
    "birth_yr": 1773,
    "yrs_serv": 0,
    "death_age": 68,
    party: "Whig",
    "state_born": "Virginia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e5"),
    "pres_name": "Harrison B",
    "birth_yr": 1833,
    "yrs_serv": 4,
    "death_age": 67,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e4"),
    "pres_name": "Harding W G",
    "birth_yr": 1865,
    "yrs_serv": 2,
    "death_age": 57,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e3"),
    "pres_name": "Grant U S",
    "birth_yr": 1822,
    "yrs_serv": 8,
    "death_age": 63,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e2"),
    "pres_name": "Garfield J A",
    "birth_yr": 1831,
    "yrs_serv": 0,
    "death_age": 49,
    party: "Republican",
    "state_born": "Ohio"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e1"),
    "pres_name": "Ford G R",
    "birth_yr": 1913,
    "yrs_serv": 2,
    "death_age": null,
    party: "Republican",
    "state_born": "Nebraska"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892e0"),
    "pres_name": "Fillmore M",
    "birth_yr": 1800,
    "yrs_serv": 2,
    "death_age": 74,
    party: "Whig",
    "state_born": "New York"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892df"),
    "pres_name": "Eisenhower D D",
    "birth_yr": 1890,
    "yrs_serv": 8,
    "death_age": 79,
    party: "Republican",
    "state_born": "Texas"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892de"),
    "pres_name": "Coolidge C",
    "birth_yr": 1872,
    "yrs_serv": 5,
    "death_age": 60,
    party: "Republican",
    "state_born": "Vermont"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892dd"),
    "pres_name": "Cleveland G",
    "birth_yr": 1837,
    "yrs_serv": 8,
    "death_age": 71,
    party: "Democratic",
    "state_born": "New Jersey"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892dc"),
    "pres_name": "Carter J E",
    "birth_yr": 1924,
    "yrs_serv": 4,
    "death_age": null,
    party: "Democratic",
    "state_born": "Georgia"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892db"),
    "pres_name": "Buchanan J",
    "birth_yr": 1791,
    "yrs_serv": 4,
    "death_age": 77,
    party: "Democratic",
    "state_born": "Pennsylvania"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892da"),
    "pres_name": "Arthur C A",
    "birth_yr": 1830,
    "yrs_serv": 3,
    "death_age": 56,
    party: "Republican",
    "state_born": "Vermont"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d9"),
    "pres_name": "Adams J Q",
    "birth_yr": 1767,
    "yrs_serv": 4,
    "death_age": 80,
    party: "Demo-Rep",
    "state_born": "Massachusetts"
} ]);
db.getCollection("president").insert([ {
    _id: ObjectId("5f4907b260cff915e23892d8"),
    "pres_name": "Adams J",
    "birth_yr": 1735,
    "yrs_serv": 4,
    "death_age": 90,
    party: "Federalist",
    "state_born": "Massachusetts"
} ]);

// ----------------------------
// Collection structure for state
// ----------------------------
db.getCollection("state").drop();
db.createCollection("state");

// ----------------------------
// Documents of state
// ----------------------------
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389330"),
    "state_name": "Wyoming",
    "admin_entered": 26,
    "year_entered": 1890
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932f"),
    "state_name": "Wisconsin",
    "admin_entered": 15,
    "year_entered": 1848
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932e"),
    "state_name": "West Virginia",
    "admin_entered": 19,
    "year_entered": 1863
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932d"),
    "state_name": "Washington",
    "admin_entered": 26,
    "year_entered": 1889
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932c"),
    "state_name": "Virginia",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932b"),
    "state_name": "Vermont",
    "admin_entered": 1,
    "year_entered": 1791
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238932a"),
    "state_name": "Utah",
    "admin_entered": 27,
    "year_entered": 1896
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389329"),
    "state_name": "Texas",
    "admin_entered": 15,
    "year_entered": 1845
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389328"),
    "state_name": "Tennessee",
    "admin_entered": 2,
    "year_entered": 1796
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389327"),
    "state_name": "South Dakota",
    "admin_entered": 26,
    "year_entered": 1889
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389326"),
    "state_name": "South Carolina",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389325"),
    "state_name": "Rhode Island",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389324"),
    "state_name": "Pensylvania",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389323"),
    "state_name": "Oregon",
    "admin_entered": 18,
    "year_entered": 1859
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389322"),
    "state_name": "Oklahoma",
    "admin_entered": 30,
    "year_entered": 1907
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389321"),
    "state_name": "Ohio",
    "admin_entered": 4,
    "year_entered": 1803
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389320"),
    "state_name": "North Dakota",
    "admin_entered": 26,
    "year_entered": 1889
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931f"),
    "state_name": "North Carolina",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931e"),
    "state_name": "New York",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931d"),
    "state_name": "New Mexico",
    "admin_entered": 31,
    "year_entered": 1912
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931c"),
    "state_name": "New Jersey",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931b"),
    "state_name": "New Hampshire",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238931a"),
    "state_name": "Nevada",
    "admin_entered": 19,
    "year_entered": 1864
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389319"),
    "state_name": "Nebraska",
    "admin_entered": 20,
    "year_entered": 1867
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389318"),
    "state_name": "Montana",
    "admin_entered": 26,
    "year_entered": 1889
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389317"),
    "state_name": "Missouri",
    "admin_entered": 9,
    "year_entered": 1821
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389316"),
    "state_name": "Mississippi",
    "admin_entered": 8,
    "year_entered": 1817
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389315"),
    "state_name": "Minnesota",
    "admin_entered": 18,
    "year_entered": 1858
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389314"),
    "state_name": "Michigan",
    "admin_entered": 12,
    "year_entered": 1837
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389313"),
    "state_name": "Massachusetts",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389312"),
    "state_name": "Maryland",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389311"),
    "state_name": "Maine",
    "admin_entered": 8,
    "year_entered": 1820
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389310"),
    "state_name": "Louisianna",
    "admin_entered": 6,
    "year_entered": 1812
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930f"),
    "state_name": "Kentucky",
    "admin_entered": 1,
    "year_entered": 1792
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930e"),
    "state_name": "Kansas",
    "admin_entered": 18,
    "year_entered": 1861
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930d"),
    "state_name": "Iowa",
    "admin_entered": 15,
    "year_entered": 1846
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930c"),
    "state_name": "Indiana",
    "admin_entered": 7,
    "year_entered": 1816
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930b"),
    "state_name": "Illinois",
    "admin_entered": 8,
    "year_entered": 1818
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e238930a"),
    "state_name": "Idaho",
    "admin_entered": 26,
    "year_entered": 1890
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389309"),
    "state_name": "Hawaii",
    "admin_entered": 43,
    "year_entered": 1959
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389308"),
    "state_name": "Georgia",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389307"),
    "state_name": "Florida",
    "admin_entered": 14,
    "year_entered": 1845
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389306"),
    "state_name": "Delaware",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389305"),
    "state_name": "Connecticut",
    "admin_entered": null,
    "year_entered": 1776
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389304"),
    "state_name": "Colorado",
    "admin_entered": 22,
    "year_entered": 1876
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389303"),
    "state_name": "California",
    "admin_entered": 16,
    "year_entered": 1850
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389302"),
    "state_name": "Arkansas",
    "admin_entered": 12,
    "year_entered": 1836
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389301"),
    "state_name": "Arizona",
    "admin_entered": 31,
    "year_entered": 1912
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e2389300"),
    "state_name": "Alaska",
    "admin_entered": 43,
    "year_entered": 1959
} ]);
db.getCollection("state").insert([ {
    _id: ObjectId("5f4907b360cff915e23892ff"),
    "state_name": "Alabama",
    "admin_entered": 8,
    "year_entered": 1819
} ]);
