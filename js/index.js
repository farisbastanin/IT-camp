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
