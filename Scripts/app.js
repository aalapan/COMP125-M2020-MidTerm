
"use strict";//IIFE (Immediately Invoked Function Expression)
(function ()

{ 
  function addParagraphIntroParagraph()

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

function addParagraphHydra()

    {let hydra = document.getElementById("Hydra");
    
    if (hydra)
    {
        let newHydra = document.createElement("p");
        newHydra.textContent = `The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.`;

        hydra.appendChild(newHydra);

        return true;
    }
    
    return false;   
}

function addParagraphIthaca()

    {let ithaca = document.getElementById("Ithaca");
    
    if (ithaca)
    {
        let newIthaca = document.createElement("p");
        newIthaca.textContent = `Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.`;

        ithaca.appendChild(newIthaca);

        return true;
    }
    
    return false;   
}

function addParagraphGavdos()

    {let gavdos = document.getElementById("Gavdos");
    
    if (gavdos)
    {
        let newGavdos = document.createElement("p");
        newGavdos.textContent = `Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.`;

        gavdos.appendChild(newGavdos);

        return true;
    }
    
    return false;   
}

function ValidateForm()
{
    let contactForm = document.forms[0];

    if(contactForm)
    {
        contactForm.noValidate = true;

        let errorMessage = document.getElementById("errorMessage");

        let firstName = document.getElementById("firstName");
        firstName.addEventListener("blur", (event) =>
        {
            if(firstName.length<2)
            {
                firstName.focus();
                errorMessage.textContent = "First name not valid. Must be more than 2 characters.";
                return false;
            }
            return true;
        })

        let lastName = document.getElementById("lastName");
        lastName.addEventListener("blur", (event) => 
        {
                if(lastName.length<2)
                {
                    lastName.focus();
                    errorMessage.textContent = "Last Name not valid. Must be more than 2 characters."; 
                    return false;
                }
                return true;
        })

        let contactNumber = document.getElementById("contactNumber");
        contactNumber.addEventListener("blur", (event) =>
        {
            let contactNumberRGEX = /^[\+]?[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
            let contactNumberResult = contactNumberRGEX.test(contactNumber.value);

            if(contactNumberResult == false)
            {
                contactNumber.focus();
                errorMessage.textContent = "Please enter a valid contact number. Example:(416)123-4567"
                return false;
            }
            return true;
        })

        let email = document.getElementById("email");
        email.addEventListener("blur", (event) =>
        {
            let emailRGEX = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            let emailResult = emailRGEX.test(email.value);

            if(emailResult == false)
            {
                email.focus();
                errorMessage.textContent = "E-mail entered was not valid. Please enter a valid e-mail"
                return false;
            }
            return true;
        })

        let sendButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", (event) =>
        {
            event.preventDefault();
            console.log("Send Button Clicked");
            console.log("First Name: " + firstName.value);
            console.log("Last Name: " + lastName.value);
            console.log("Contact Number: " + contactNumber.value);
            console.log("E-mail: " + email.value);
            console.log("Your Message: " + yourMessage.value);
            console.log("Form is successfully validated.");
        })

    }
    return false
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

    let hydraParagraphSuccess = addParagraphHydra();

    if(hydraParagraphSuccess){
        console.log("The paragraph was sucessfully added to Hydra.");
    }
    else{
        console.warn("The paragraph was NOT added to Hydra.");
    }

    let ithacaParagraphSuccess = addParagraphIthaca();

    if(ithacaParagraphSuccess){
        console.log("The paragraph was sucessfully added to Ithaca.");
    }
    else{
        console.warn("The paragraph was NOT added to Ithaca.");
    }

    let gavdosParagraphSuccess = addParagraphGavdos();

    if(gavdosParagraphSuccess){
        console.log("The paragraph was sucessfully added to Gavdos.");
    }
    else{
        console.warn("The paragraph was NOT added to Gavdos.");
    }

    let validateFormSuccess = validateForm();
    if(validateFormSuccess){
        console.log("The validation was successful.");
    }
    else{
        console.log("The validation was NOT successful.");
    }


}


window.addEventListener("load", Start);

})();
