
kepadatoktomb.forEach((tombelem, szamolo) => {

    $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo= "${szamolo}" >     <img class="kiskep"   src="${tombelem.photo}" alt=""> </div>  `)

    let modwidth=90
    $(".kiskep").width(modwidth)

    $(".thumbnail").click((event) => {
    
    let melyikreKattintott = $(event.currentTarget).attr('data-szamozo');  
        
    index = parseInt(melyikreKattintott)
    
    betoltofg (melyikreKattintott)
    
    console.log($(".clicked").text(kepadatoktomb[index].title)
    )
    }
    )
    }
    )


































/* THUMBNAIL RÉSZ */
/*
kepadatoktomb.forEach((tombelem, szamolo) => {

    $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo= "${szamolo}" >     <img src="${tombelem.photo}" alt=""> </div>  `)
   
    kepadatoktomb.forEach((tombelem, szamolo) => {

    $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo= "${szamolo}" >     <img src="${tombelem.photo}" alt=""> </div>  `)

    //Ezt én tettem hozzá, hogy alul egyenletesen legyenek a kisképek-//
    let modwidth=90
    $(".thumbnail").width(modwidth)
     
    $(".thumbnail").click((event) => {
    
    let melyikreKattintott = $(event.currentTarget).attr('data-szamozo');  
        
    index = parseInt(melyikreKattintott)
    
    betoltofg (melyikreKattintott)
    
    console.log($(".clicked").text(kepadatoktomb[index].title)
    )
    }
    )
    }
    )


    
    $(".thumbnail").click((event) => {
    
    let melyikreKattintott = $(event.currentTarget).attr('data-szamozo');  
        
    index = parseInt(melyikreKattintott)
    
    betoltofg (melyikreKattintott)
    
    console.log($(".clicked").text(kepadatoktomb[index].title)
    )
    }
    )
    }
    )
*/

/* MIT CSINÁLUNK A THUMBNAILEKKEL:

EGY NAGY DOBOZBA TESZEK KIS DOBOZOKAT (EZEK A THUMBNAIL-EK), AMELYEKBE FOREACH-CSEL BETESZEM (APPEND) A NAGY TÖMBBÖL A KÉPEKET.
KÖZBEN MINDEN EGYES THUMBNAIL DOBOZKÁT MEGJELÖLÖK(DATA-).
AMIKOR A FELH. KATTINT (CLICK) EGY THUMBNAIL-RE, AMI KIVÁLTJA AZ ESEMÉNYFIGYELŐS ESEMÉNYT (EVENT.CURRENTTARGET),
AKKOR ANNAK A THUMBNAILNEK A MEGJELÖLÉSÉT AZONNAL KIKERESEM (DATA-  ATTRIBÚTUM).
GYAKORLATILAG EZ LESZ AZ INDEXEM, EGY VÁLTOZÓN KERESZTÜL, AMIT MÉG SZÁM TÍPUSÚVÁ IS TESZEK, MERT EGYELŐRE STRING.
íGY MÁR TUDOM, MELYIK KÉPET TÖLTSEM BE.
MÉG KIÍROM A THUMBNAIL CÍMÉT IS. */






//JQuery-vel megadtam, hogy először a data0 objektumból vegye ki az infót.
//Attribútumot adtam a képnek,              h2-nek és p-nek.
$(".kep").attr("src", data0.photo)
                                            // $("h2").text(data0.title) //
                                            // $("p").text(data0.description) //


let index = 0

                                            //Figyelem! képnél van csak .attr és "src".//
let betoltofg = (index) => {
    $(".kep").attr("src", kepadatoktomb[index].photo)
                                            // $("h2").text(kepadatoktomb[index].title) //
                                            // $("p").text(kepadatoktomb[index].description) //
}





// Jobb nyílra kattintás eseménye bekövetkezésekor ez történik://
$(".jobbra").click(() => {
    console.log("jobbra kattintva")
    index = index+1

    if (index > kepadatoktomb.length-1) {
        index = 0
    }

    betoltofg(index)
}
)


// Bal nyílra kattintás eseménye bekövetkezésekor ez történik://
$(".balra").click(() => {
    console.log("balra kattintva")

    index = index-1
    
    if (index < 0) {
        index = kepadatoktomb.length-1
    }
    
    betoltofg(index)
}
)
    














/*
MIT CSINÁLUNK A THUMBNAILEKKEL:

EGY NAGY DOBOZBA TESZEK KIS DOBOZOKAT (EZEK A THUMBNAIL-EK), AMELYEKBE FOREACH-CSEL BETESZEM (APPEND) A NAGY TÖMBBÖL A KÉPEKET.
KÖZBEN MINDEN EGYES THUMBNAIL DOBOZKÁT MEGJELÖLÖK(DATA-).
AMIKOR A FELH. KATTINT (CLICK) EGY THUMBNAIL-RE, AMI KIVÁLTJA AZ ESEMÉNYFIGYELŐS ESEMÉNYT (EVENT.CURRENTTARGET),
AKKOR ANNAK A THUMBNAILNEK A MEGJELÖLÉSÉT AZONNAL KIKERESEM (DATA-  ATTRIBÚTUM).
GYAKORLATILAG EZ LESZ AZ INDEXEM, EGY VÁLTOZÓN KERESZTÜL, AMIT MÉG SZÁM TÍPUSÚVÁ IS TESZEK, MERT EGYELŐRE STRING.
íGY MÁR TUDOM, MELYIK KÉPET TÖLTSEM BE.
MÉG KIÍROM A THUMBNAIL CÍMÉT IS.


kepadatoktomb.forEach((tombelem, szamolo) => {

$("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo= "${szamolo}" >     <img src="${tombelem.photo}" alt=""> </div>  `)
 
    //Ezt én tettem hozzá, hogy alul egyenletesen legyenek a kisképek-//
    let modwidth=90
    $(".thumbnail").width(modwidth)


$(".thumbnail").click((event) => {

let melyikreKattintott = $(event.currentTarget).attr('data-szamozo');  
    
index = parseInt(melyikreKattintott)

betoltofg (melyikreKattintott)

console.log($(".clicked").text(kepadatoktomb[index].title)
)
}
)
}
)



MIT CSINÁLUNK A THUMBNAILEKKEL RÉSZLETEZÉSE:


Kód:    kepadatoktomb.forEach((tombelem, szamol
    o) => { .........)
        A nagy tömb (képadatok) elemein (tombelem) végigmegyünk forEach ciklussal (ez egy függvény), és számoljuk (0-tól kezdve), hogy hol tartunk (számozó).

Kód:     $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo= "${szamolo}" >     <img src="${tombelem.photo}" alt="">     </div>  `)
Kódrészlet:     $("#keptarvalaszto").append(`   <div .......... >      <img src= ...........>      </div>    `)
        Közben a képtárválasztó nagy dobozhoz hozzáadogatjuk a kis div dobozkákat,
        ezekben a dobozkákban vannak az img képek.
Kódrészlet:     $...........append  (` <div class="thumbnail" ........... >      <img src= .........>      </div>  `)
        A dobozkáknak adunk azonosítót (thumbnail). Tehát nem az img képeknek, hanem a dobozkáknak adunk hivatkozási nevet!.
        Osztályazonosítót adunk, nem id-t, mert már eleve többen vannak(forEach ciklus)
Kódrészlet:     $("..........").append(`.....................`)
        Figyelem! A JQuery szereti a stringet.
Kódrészlet:     $...............append(` <div ........... data-szamozo= "${szamolo}" >     <img src= ................>     </div>  `)
        data-  kóddal mindjárt meg is jelölök minden egyes thumbnail-t, hogy be tudjam azonosítani őket. Gondolom a forEach miatt indul 0-tól a számozó.
        A kis dobozka attribútuma most a data-     , nem pedig a kép attribútuma. Tehát most a kis dobozkákkal csinálunk mindenfélét, nem az img képekkel
        Figyelem! A számozó egy változó, azért tesszük kapcsos zárójelbe. ${ }  -lel megkapuk a változó értékét.  " "- be írva ezt pedig a string-jét kapjuk meg.
Kódrészlet:     $...............append(` <div ............. >     <img src="${tombelem.photo}" ......>         </div>  `)
        Az img képek honnét szedjük ki? Hát az objektumok photo mezőjéből. Persze az objektumok most épp a tömb elemei, azért írhatjuk be, hogy tombelem.photo.

Kód:    $(".thumbnail").click((event) => { .......................})
        Eseményfigyelővel figyelem, vajon a felh. kattint-e valamelyik thumbnailre. Ha igen, akkor vmi törénik egy függvényben.

Kód:    let melyikreKattintott =     $(event.currentTarget)      .attr('data-szamozo');
        Figyelem!! Itt event.currentTarget a helyes, nem event.target. Itt az eseményt kiváltó elemre van szükségünk!!!
        No végre kattintott a felh. egy thumbnail-re!
        Nézzem is meg mindjárt, melyik thumbnail ez, mi a data-szamozo beazonosító attribútuma ennek az event-nek,
        és ehhez azonnal be is vezetek egy változót (melyikreKattintott)

Kód:    index = parseInt(melyikreKattintott)
        Én index-nek neveztem el korábban azt, ahol tartok.
        Figyelem!!! A JQuery szereti a stringet! A melyikreKattintott is egy string, át kell alakítani szám típusúvá a parseInt-tel!!!

Kód:    betoltofg (melyikreKattintott)
        Már van index-ünk, mehet a betöltőfüggvény, hogy betöltse a nagy képet (kep).
 
Kód:    console.log($(".clicked").text(kepadatoktomb[index].title)
        Az indexkép fölé írja ki az indexkép nevét is.



THUMBNAIL-RÉSZ GreenFox leírás szerint:

let data = ["first", "second", "third"];

data.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');   Ehelyett: currentTarget a helyes.
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
  });
});
*/
