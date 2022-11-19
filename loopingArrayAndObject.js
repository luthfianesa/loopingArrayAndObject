const data = [
  {
    id: 1,
    name: "dono",
    address: "jakarta",
  },
  {
    id: 2,
    name: "kasino",
    address: "depok",
  },
];

const dataAddress = data.map((value) => {
  return value.address;
});
console.log(dataAddress, "<<< Ambil data address menggunakan variabel");
console.log("\n");

function getAddress(param) {
  return param.map((item) => {
    return item.address;
  });
}
console.log(getAddress(data), "<<< Ini fungsi getAddress menggunakan Function Declarative");
console.log("\n");

const ambilAddress = (param) => {
  return param.map((item) => {
    return item.address;
  });
};
console.log(ambilAddress(data), "<<< Ini fungsi ambilAddress menggunakan Arrow Function");
console.log("\n");

// Menggunakan function declarative
function getName1(value) {
  return value.map(function (item) {
    return item.name;
  });
}

console.log(getName1(data), "<<< Ambil data nama menggunakan Function Declarative");
console.log("\n");

// Menggunakan Arrow function
const getName2 = (value) => {
  return value.map(function (item) {
    return item.name;
  });
};

console.log(getName2(data), "<<< Ambil data nama Menggunakan Arrow Function");
console.log("\n");

const api = {
  res: "succedd",
  statusCode: 200,
  data: [
    {
      id: 1,
      name: "rinda",
    },
    {
      id: 2,
      name: "adinda",
    },
    {
      id: 3,
      name: "joko",
    },
  ],
};

// Dapetin nama pake variabel
const getData = api.data.map((item) => {
  return item.name;
});
console.log(getData);
console.log("\n");

// Dapetin data nama pake fungsi
function getName3(params) {
  return params.data.map((items) => {
    return items.name;
  });
}
console.log(getName3(api));
console.log("\n");

let data1 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

const getDataOne = data1.map((item) => {
  return item.company.name;
});

console.log(getDataOne, "<<< Ini hasil dari variabel getDataOne");
console.log("\n");

function getData1(params) {
  return params.map((item) => {
    return item.company.name;
  });
}

console.log(getData1(data1), "<<< Ini hasil dari fungsi getData1");
console.log("\n");

const data2 = [
  {
    id: 1,
    name: "ibnu",
    subject: {
      name: "english",
      score: 80,
    },
  },
  {
    id: 1,
    name: "dono",
    subject: {
      name: "english",
      score: 70,
    },
  },
  {
    id: 1,
    name: "dian",
    subject: {
      name: "english",
      score: 75,
    },
  },
];

// Ambil nilai > 70
const above70 = data2
  .filter((item) => {
    return item.subject.score > 70;
  })
  .map((item) => {
    return item.subject.score;
  });

console.log(above70);
console.log("\n");

const myInfo1 = {
  name: "robert",
  age: 25,
  hobbies: ["fishing", "riding"],
  family: {
    father: "jumadi",
    mother: "juminten",
    siblings: ["celine", "andrew"],
  },
};

// Access Object using dot notation
console.log(myInfo1.family.father);

// Access Object using bracket notation
console.log(myInfo1["family"]["mother"]);

//  Robert 2nd Sibling 'Andrew'
console.log(myInfo1["family"]["siblings"][1]);
console.log("\n");

// console.log(Object.keys(myInfo));

const myInfo2 = {
  name: "robert",
  age: 25,
  hobbies: ["fishing", "riding"],
};

//  Dapetin key
for (let property in myInfo2) {
  console.log(`${property}`);
}
console.log("\n");

// Dapetin value
for (let property in myInfo2) {
  console.log(`${myInfo2[property]}`);
}
console.log("\n");
console.log("\n");

const dataAneh = {
  statusCode: 200,
  listing: [
    {
      id: 1,
      name: "budi",
      hobbies: [
        {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      ],
    },
    {
      id: 2,
      name: "ahmad",
      hobbies: [
        {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      ],
    },
  ],
};

// Ambil data hobbiesnya ahmad monday, swimming, empang

// Menggunakan variabel, Output Data string
let ambilData = dataAneh.listing.filter((params) => {
  let result = "";
  let finalResult = "";

  if (params.name === "ahmad") {
    result = params.hobbies[0];
  }

  for (let key in result) {
    finalResult = result[key];
    console.log(finalResult);
  }
});
console.log("\n");

// Menggunakan function, Output data string
function getValue1(params) {
  let result = "";
  let finalResult = "";

  params.listing.filter((items) => {
    if (items.name === "ahmad") {
      result = items.hobbies[0];
    }
    for (let key in result) {
      finalResult = result[key];
      console.log(finalResult);
    }
  });
}
getValue1(dataAneh);
console.log("\n");

// Menggunakan function, Output data array
function getValue2(params) {
  let result = "";
  let finalResult = [];

  params.listing.filter((items) => {
    if (items.name === "ahmad") {
      result = items.hobbies[0];
    }
    for (let key in result) {
      finalResult.push(result[key]);
    }
  });
  return finalResult;
}
console.log(getValue2(dataAneh));