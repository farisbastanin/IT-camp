// let mojNovcanik = 100;

// const kafa = 10;
// const sok = 20;
// const cigare = 250;
// let greeting = ""

// if (mojNovcanik > kafa) {
//     mojNovcanik = mojNovcanik-kafa;
//     greeting = "kupili ste kafu"
// }
// if (mojNovcanik < kafa) {
//     greeting = "nemate dovoljno novca za kafu"
// }

// console.log (greeting)
// if (mojNovcanik > (kafa+sok)) {
//     mojNovcanik = mojNovcanik - (kafa+sok) ;
//     greeting = "kupili ste kafu i sok"
// }
// if (mojNovcanik < (kafa+sok)) {
//     greeting = "nemate dovoljno novca za kafu i sok"
// }

// console.log (greeting)

// if (mojNovcanik < cigare) {
//     greeting = "nemate dovoljno novca za cigare";
// }
// if (mojNovcanik > cigare) {
//     mojNovcanik = mojNovcanik - cigare
//     greeting = "kupili ste cigare"
// }

// console.log (greeting)


// let kemal = 150;
// const staZelisKupiti = prompt("Mozes kupiti 1.cokolada , 2.cigare , 3.sok").toLowerCase();

// const sok = 60;
// const cokolada = 40;
// const cigare = 480;

// switch(staZelisKupiti){
//     case "cokolada":
//         kemal = kemal-cokolada;
//         console.log (`ostalo vam je ${kemal} dinara`)
//         console.log (`Hvala sto si kupio ${staZelisKupiti} dodji opet`)
//         break;
//     case "cigare":
//         kemal = kemal-cigare;
//         console.log (`ostalo vam je ${kemal} dinara`)
//         console.log (`Hvala sto si kupio ${staZelisKupiti} dodji opet`)
//         break;
//         case "sok":
//             kemal = kemal-sok;
//             console.log (`ostalo vam je ${kemal} dinara`)
//             console.log (`Hvala sto si kupio ${staZelisKupiti} dodji opet`)
//         break;

// const broj = prompt("unesite neki broj")
// if (isNaN(broj)) {
//     console.log ("ovo sto ste uneli nije broj")
// }

// if (broj % 2 == 0) {
//     console.log("broj koji ste uneli je paran")
// }

// if (broj % 2 == 1) {
//     console.log("Broj nije paran")
// }
// const broj = prompt("unesite broj")
// const broj1 = prompt ("unesite broj")
// const broj2 = prompt ("unesite broj")

// if (broj % 5 == 0 && broj % 3 == 0 ) {
//     console.log (`${broj} je fizzbuzz`)
// }

// else if (broj % 3 == 0) {
//     console.log (` ${broj} je fizz`)
// }

// else if (broj % 5 == 0) {
//     console.log (`${broj} je buzz `)
// }
// else if (isNaN(broj)) {
//     console.log (`${broj} nije broj`)
// }
// else {
//     console.log (`${broj} nije deljiv sa 3 ili 5`)
// }

// if (broj1 % 5 == 0 && broj1 % 3 == 0 ) {
//     console.log (`${broj1} je fizzbuzz`)
// }

// else if (broj1 % 3 == 0) {
//     console.log (` ${broj1} je fizz`)
// }

// else if (broj1 % 5 == 0) {
//     console.log (`${broj1} je buzz `)
// }
// else if (isNaN(broj1)) {
//     console.log (`${broj1} nije broj`)
// }
// else {
//     console.log (`${broj1} nije deljiv sa 3 ili 5`)
// }

// if (broj2 % 5 == 0 && broj2 % 3 == 0 ) {
//     console.log (`${broj} je fizzbuzz`)
// }

// else if (broj2 % 3 == 0) {
//     console.log (` ${broj2} je fizz`)
// }

// else if (broj2 % 5 == 0) {
//     console.log (`${broj2} je buzz `)
// }
// else if (isNaN(broj2)) {
//     console.log (`${broj2} nije broj`)
// }
// else {
//     console.log (`${broj2} nije deljiv sa 3 ili 5`)
// }
 
// function sabiranje(broj1,broj2) {
//     console.log ( Number (broj1) + Number (broj2))
// }
// sabiranje (prompt ("unesite prvi broj"), prompt ("unesite drugi broj"))

// let prvibroj = Number(prompt("Unesite prvi broj"));

// let operacija = prompt("Unesite operaciju");

// let drugibroj = Number(prompt("Unesite drugi broj"));

// if (isNaN(prvibroj) || isNaN(drugibroj)) {
//   console.log("Unesite pravi broj");
// } else {

//   switch (operacija) {
//     case "-":
//         console.log(prvibroj - drugibroj);
//         break;

//     case "+":
//         console.log(prvibroj + drugibroj);
//         break;

//     case "/":
//       console.log(prvibroj / drugibroj);
//       break;

//     case "*":
//       console.log(prvibroj * drugibroj);
//       break;

//     default:
//       console.log("Ta operacija nije podrzana/niste uneli pravu operaciju");
//       break;
//   }
// }
// const sab = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5];

// console.log (sab)

// const arr = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];
// let resp = 0
// let resnp = 0

// let counter = arr.length - 1;
// while (counter >= 0) {
//   if (arr[counter] % 2 == 0) {
//     resp = resp + arr[counter]
//   }
//   else if (arr[counter] % 2 ==1) {
//     resnp = resnp + arr[counter]
//   }

//   counter--
// }
// console.log (resp)
// console.log (resnp)
// const arrTest = [1,2,3,4,5,6]
// let index = 0
// let doindex = arrTest.length;
// while (index < doindex) {
//   console.log(arrTest[index])
//   index++;
// }
// let parni = [];
// let nep = [];
// const arrTest = [1,2,3,4,5,6,7,8,9,10,11,12]
// let counter = arrTest.length - 1;
// while (counter >= 0) {
//   if (arrTest[counter] % 2 == 0) {
//     parni.push(arrTest[counter])
//   }
//   else if (arrTest[counter] % 2 ==1) {
//     nep.push(arrTest[counter])
//   }
//   counter--;
// }

// console.log ("ovo su parni brojevi:", parni,"ovo su neparni brojevi:" , nep)
// const username = "faris"
// const password = "faris123"
// let unosUsername = ""
// let unosPassword = ""

// while(username !== unosUsername) {
//   unosUsername = prompt("unesite username")
//   if(unosUsername !== username) {
//     alert("pogresili ste username ili password")
//   }
// }

// while(password !== unosPassword) {
//   unosPassword = prompt("unesite password")
//   if(unosPassword !== password) {
//     alert("pogresili ste username ili password")
//   }
// }

// alert("uspesno ste se ulogovali")

// window.location.replace("file:///C:/Users/HomePC/Desktop/program/seda/projekat/index.html")
// const arr = [1,2,3,4,5,6,7]
// const reversearr = [];
// 7,6,5,4,3,2,1

// for (let i = arr.length -1; i >= 0; i--) {
//   reversearr.push(arr[i])
// }

// console.log (reversearr,"reversearr")

// const arr = [1,2,3,4,5,6,7]
// const arr2 = [1,3,3,5,6,7,8]
// const newarr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == arr2[i]) {
//    newarr.push(arr[i])
//   }
  
// }
// console.log(newarr)
// const arr2 = [[1,2,3], [1,2,3], [1,2,3]];
// let arrnew = [];

// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//   arrnew.push(arr2[i][j])
    
//   }
  
// }
// console.log(arrnew)

// const domaciArr = [[1,2,3],[4,5,6,],[7,8,9]]
// const noviDomaciArr =[]
// for (let i = domaciArr.length-1, j=0; i >= 0 ; i--,j++) {
//   noviDomaciArr.push(domaciArr[j][i])
// }
// console.log(noviDomaciArr)


// const test = "ime-prezime"
// const novitest = test.split("-")
// console.log (novitest)

// let broj = prompt("unesite broj")
// for (let i = 1; i < broj; i++) {
//     let zvezdice = ""
//     for (let j = 1; j <= i; j++) {
//         zvezdice += "*"
//     }
//     console.log (zvezdice)
// }
//  const arr1 = [1,2,3,4,5,6,7,8,9]
//  const arr3 = [2,2,3,1,5,6,7,21,5,76,8,9]
//  let arr4 = [];


// const zadatakZadaca = [12,32,32,321,213,3213,1313131,313131]


// const  bucanResenje = zadatakZadaca.map((el,i,arr) => {
//     if(i === 0){
//        return el;
//     }
//     else {
//         if(el % 2 === 0){
//             return el-arr[i-1]
//         }
//         else  {
//             return el
//         }    }
// })

// console.log(bucanResenje);
                                        //   jelkaaa domaci
// let n = prompt("unesite koliko spratova zvezdica zelite");
// let step = 2;
// for (let i = 1; i <= n; i += step) {
//   console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2));
// }
//                                         //   zadatak 3
//                                         console.log (" ")
//                                         console.log (" ")
//                                         // zadatak 3
// function simetricnost(array) {
//     for (let i = 0; i < array.length / 2; i++) {
//         if (array[i] !== array[array.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// const simetricniarr = [1, 2, 3, 2, 1];
// const nesimetricniarr = [1, 2, 3, 4, 5];

// console.log(simetricnost(simetricniarr), "ako pise true onda je simetrican/false nije simetrican");
// console.log(simetricnost(nesimetricniarr), "ako pise true onda je simetrican/false nije simetrican"); 
//                                         // zadatak 1
//                                         console.log (" ")
//                                         console.log (" ")
//                                         // zadatak 1
// function ponavljanje(array, element) {
//     let count = 0;
//      for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             count++;
//         }
//     }
//     return count;
// }

// const arrSaElementima = [1, 3, 7, 3, 3, 2, 1];
// const element = 3;

// const kolikoput = ponavljanje(arrSaElementima, element);
// console.log(`Element ${element} se pojavljuje ${kolikoput} puta u nizu.`);               
// const kemal = [1,2,3,4,5,63,4353];
// const veljko = [2,3,42,24,42,35,52];
// let kemalveljko = [];

// kemalveljko = kemal.concat(veljko)

// console.log(kemalveljko)

// const svi = [1,2,3,4,4324324,23423,234,1231]

// let samoNeparni = [];
// for (let i = 0; i < svi.length; i++) {
//     if (svi[i] % 2 !== 0 ) { samoNeparni.push(svi[i])
        
//     }
    
// }
// console.log(samoNeparni)


// const samoNeparnisafilterom = svi.filter((el) => el % 2 !==)

// console.log(samoNeparnisafilterom)

// console.log(samoNeparni.includes(1);

// const bazaPodataka = ["ahmed","faris","sergejbit"];
// const sergejbezbita = []
// bazaPodataka.forEach((el) => {
//     if (el === "sergejbit") {
//         sergejbezbita.push("sergej")
        
//     } 
// }
// )
// console.log(sergejbezbita)

// const imateImamo = [[1,2,3,32],[23232,323232]]
// const flex = imateImamo.flat(2)
// console.log(flex);
// const imateImamo1 = [1,2,3,32,23232,323232]
// console.log(imateImamo1.some((el) => el > 2));
// const kemal2 = {
//     ime:"Kemal",
//     prezime: "Skrijelj",
//     godine:18,
//     hobi:["kosarka","ispijanje kafe","programiranje"],
//     lokacija:{
//         grad:"Novi Zarpa",
//         drzava:"Srbija"
//     }
// }

// kemal2.ime = "test"


// let test321 = "t"

// console.log(test321);

// test321 = "23"

// console.log(test23);

// console.log(kemal2);

// const imeunos = prompt("unesite vase ime")
// const prezimeunos = prompt("unesite vase prezime")
// const godineunos = prompt("unesite vase godine")

// const ovo = {
//     ime : "",
//     prezime : "",
//     godine: "",
// }
// ovo.ime = imeunos
// ovo.prezime = prezimeunos
// ovo.godine = godineunos

// console.log (ovo)

// const User = {
//     korisnickoIme:"",
//     sifra:"",
//     email:"",
// }

// while (User.korisnickoIme.length > 3) {
//     User.korisnickoIme = prompt("unresite korsnicko ime")
// }
// while (User.sifra.length > 3) {
//     User.sifra = prompt("unesite sifru")
// }
// while (User.email.includes("@")) {
//     User.email = prompt("unesite email")
// }

// const arr = [1,23232,1231231,1,132123,111,1,23,23,1];
// const put = {

// }
// const myCar = {
//     id: 1,
//     marka: "Audi",
//     model: "a4",
//     boja: "Crvena",
//     pogon: "prednji",
//     menjac: "automatski",
//     kontakt: [0o622222, 0o2033322],
//     servis: {
//       datum: "04,maj",
//       km: 23000,
//       serviser: "Pasovic",
//     },
//     udaran: true,
    
//     trenutnaBrzina: 0,
//     maksimalnaBrzina: 260,
//     povecanjeBrzine: function(brzina) {
//       if (this.trenutnaBrzina + brzina <= this.maksimalnaBrzina) {
//         this.trenutnaBrzina += brzina;
//         console.log("Brzina je povećana za " + brzina + " km/h.");
//       } else {
//         console.log("Dostignuta je maksimalna brzina.");
//       }
//     },
//     smanjenjeBrzine: function(brzina) {
//       if (this.trenutnaBrzina - brzina >= 0) {
//         this.trenutnaBrzina -= brzina;
//         console.log("Brzina je smanjena za " + brzina + " km/h.");
//       } else {
//         console.log("Brzina ne može biti manja od nule.");
//       }
//     },
//     koci: function() {
//       this.trenutnaBrzina = 0;
//       console.log("Vozilo je zaustavljeno.");
//     }
//   };
  
//   console.log("Trenutna brzina prije ubrzanja:", myCar.trenutnaBrzina);
//   myCar.povecanjeBrzine (prompt("unesite koliko je auto ubrzao"));
//   console.log("Trenutna brzina nakon ubrzanja:", myCar.trenutnaBrzina);
  
//   console.log("Trenutna brzina prije kočenja:", myCar.trenutnaBrzina);
//   myCar.koci();
//   console.log("Trenutna brzina nakon kočenja:", myCar.trenutnaBrzina);
// class ja {
//   constructor(ime,prezime,godiste){
//     this.ime = ime,
//     this.prezime = prezime,
//     this.godiste = godiste
//   }
// }

// const jaaa = new ja("Faris","bastanin",2008)
// const starost = (2024 - jaaa.godiste)
// console.log("vasa starost je:",starost)
// const person = [
//     {
//         ucenik: {
//             skola: ['Osnovna', 'Srednja'],
//             informacija: {Ime: "ime", prezime: "prezime"}
//         },
//     }

    
// ]

// console.log (person[0][1][1])