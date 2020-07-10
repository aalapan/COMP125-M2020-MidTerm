"use strict";//IIFE (Immediately Invoked Function Expression)
(function ()

{function addParagraphIntroParagraph()

    {let IntroParagraph = document.getElementById("IntroParagraph");
    
    if (IntroParagraph)
    {
        let newIntroParagraph = document.createElement("p");
        newIntroParagraph.textContent = `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`;

        IntroParagraph.appendChild(newIntroParagraph);

        return true;
    }

    return false;
}

function addParagraphFolegandros()

    {let folegandros = document.getElementById("Folegandros");
    
    if (folegandros)
    {
        let newFolegandros = document.createElement("p");
        newFolegandros.textContent = `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`;

        folegandros.appendChild(newFolegandros);

        return true;
    }
    
    return false;
}

function addParagraphAlonissos()

    {let alonissos = document.getElementById("Alonissos");
    
    if (alonissos)
    {
        let newAlonissos = document.createElement("p");
        newAlonissos.textContent = `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`;

        alonissos.appendChild(newAlonissos);

        return true;
    }
    
    return false;
}

function addParagraphSpetses()

    {let spetses = document.getElementById("Spetses");
    
    if (spetses)
    {
        let newSpetses = document.createElement("p");
        newSpetses.textContent = `This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.`;

        spetses.appendChild(newSpetses);

        return true;
    }
    
    return false;
}

function addParagraphAmorgos()

    {let amorgos = document.getElementById("Amorgos");
    
    if (amorgos)
    {
        let newAmorgos = document.createElement("p");
        newAmorgos.textContent = `Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.`;

        amorgos.appendChild(newAmorgos);

        return true;
    }
    
    return false;   
}

function addParagraphSyros()

    {let syros = document.getElementById("Syros");
    
    if (syros)
    {
        let newSyros = document.createElement("p");
        newSyros.textContent = `A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.`;

        syros.appendChild(newSyros);

        return true;
    }
    
    return false;   
}

function addParagraphMilos()

    {let milos = document.getElementById("Milos");
    
    if (milos)
    {
        let newMilos = document.createElement("p");
        newMilos.textContent = `This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.`;

        milos.appendChild(newMilos);

        return true;
    }
    
    return false;   
}


function Start ()
{
    console.log(`%App Started.`);

    let introParagraphSuccess = addParagraphIntroParagraph();

    if(introParagraphSuccess){
        console.log("The paragraph was sucessfully added to the Intro Paragraph.");
    }
    else{
        console.warn("The paragraph was NOT added to the Intro Paragraph.");
    }

    let folegandrosParagraphSuccess = addParagraphFolegandros();

    if(folegandrosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Folegandros.");
    }
    else{
        console.warn("The paragraph was NOT added to Folegandros.");
    }

    let alonissosParagraphSuccess = addParagraphAlonissos();

    if(alonissosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Alonissos.");
    }
    else{
        console.warn("The paragraph was NOT added to Alonissos.");
    }

    let spetsesParagraphSuccess = addParagraphSpetses();

    if(spetsesParagraphSuccess){
        console.log("The paragraph was sucessfully added to Spetses.");
    }
    else{
        console.warn("The paragraph was NOT added to Spetses.");
    }

    let amorgosParagraphSuccess = addParagraphAmorgos();

    if(amorgosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Amorgos.");
    }
    else{
        console.warn("The paragraph was NOT added to Amorgos.");
    }

    let syrosParagraphSuccess = addParagraphSyros();

    if(syrosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Syros.");
    }
    else{
        console.warn("The paragraph was NOT added to Syros.");
    }

    let milosParagraphSuccess = addParagraphMilos();

    if(milosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Milos.");
    }
    else{
        console.warn("The paragraph was NOT added to Milos.");
    }
}

window.addEventListener("load", Start);

})();