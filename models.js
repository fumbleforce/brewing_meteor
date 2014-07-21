var Schema = {};

/*
    Information about the brewer
*/
Schema.Brewer = new SimpleSchema({
    username: {
        type: String,
        label: "Brukernavn",
        max: 30
    },
    name: {
        type: String,
        label: "Brygger",
        max: 200
    },
    brewery: {
        type: String,
        label: "Bryggeri",
        optional: true,
        max: 200
    },
});

Brewer = new Meteor.Collection("brewer");
Brewer.attachSchema(Schema.Brewer);






/*
    Information about a malt type
*/
Schema.Malt = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    ebc: {
        type: Number,
        label: "EBC",
    },
    gravity: {
        type: Number,
        label: "Tetthet"
    },
    price: {
        type: Number,
        label: "Pris per pose"
    },
    amount: {
        type: Number,
        label: "Kg per pose"
    }
});

Malt = new Meteor.Collection("malt");
Malt.attachSchema(Schema.Malt);


/*
    Malt entry
*/
Schema.MaltEntry = new SimpleSchema({
    
    malt: {
        type: Schema.Malt,
        label: "Malt",
    },
    /*
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    ebc: {
        type: Number,
        label: "EBC",
    },
    gravity: {
        type: Number,
        label: "Tetthet"
    },
    */
    weight: {
        type: Number,
        label: "Vekt (g)",
    },
    percent: {
        type: Number,
        label: "Andel (%)",
    },
    color: {
        type: Number,
        label: "Farge (MCU)"
    }
});
MaltEntry = new Meteor.Collection("maltEntry");
MaltEntry.attachSchema(Schema.MaltEntry);



/*
    Information about a hop type
*/
Schema.Hop = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    price: {
        type: Number,
        label: "Pris per pose"
    },
    amount: {
        type: Number,
        label: "Gram per pose"
    }
});

Hop = new Meteor.Collection("hop");
Hop.attachSchema(Schema.Hop);


/*
    Hop entry
*/
Schema.HopEntry = new SimpleSchema({
    hop: {
        type: Schema.Hop,
        label: "Humle",
    },
    weight: {
        type: Number,
        label: "Vekt (g)",
    },
    alpha: {
        type: Number,
        label: "Alfa (%)",
    },
    boil: {
        type: Number,
        label: "Koketid (min)"
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)"
    },

});
HopEntry = new Meteor.Collection("hopEntry");
HopEntry.attachSchema(Schema.HopEntry);




/*
    Information about a hop type
*/
Schema.Yeast = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    price: {
        type: Number,
        label: "Pris"
    }
});

Yeast = new Meteor.Collection("yeast");
Yeast.attachSchema(Schema.Yeast);




/*
    Information about a mesh period
*/
Schema.Period = new SimpleSchema({
    temp: {
        type: Number,
        label: "Temperatur (C)",
        optional: true
    },
    duration: {
        type: Number,
        label: "Varighet (min)",
        optional: true
    },
    amount: {
        type: Number,
        label: "Mengde",
        optional: true
    }
});

Period = new Meteor.Collection("period");
Period.attachSchema(Schema.Period);






/*
    Information about one brew
*/
Schema.Brew = new SimpleSchema({
    title: {
        type: String,
        label: "Tittel",
        max: 200
    },
    description: {
        type: String,
        label: "Beskrivelse",
        optional: true,
        max: 1000
    },
    brewer: {
        type: Schema.Brewer,
        label: "Brygger"
    },
    dateStarted: {
        type: Date,
        label: "Påbegynt"
    },
    dateCompleted: {
        type: Date,
        label: "Ferdigstillt",
        optional: true
    },

    volume: {
        type: Number,
        label: "Volum (liter)",
    },


    // Process info

    meshWater: {
        type: Number,
        label: "Meskevann (liter)"
    },
    firstMesh: {
        type: Schema.Period,
        label: "1. Mesking"
    },
    secondMesh: {
        type: Schema.Period,
        label: "2. Mesking"
    },
    rinsing: {
        type: Schema.Period,
        label: "Skylling"
    },
    washing: {
        type: Schema.Period,
        label: "Utvasking"
    },
    boilStart: {
        type: Schema.Period,
        label: "Kokestart"
    },
    

    fermentation: {
        type: Schema.Period,
        label: "Gjæring"
    },

    flasking: {
        type: Schema.Period,
        label: "Flasking/Fat"
    },


    // Brew ingredients

    malts: {
        type: [Schema.MaltEntry],
        label: "Malt",
    },
    hops: {
        type: [Schema.HopEntry],
        label: "Humle",
    },
    yeast: {
        type: [Schema.YeastEntry],
        label: "Gjær"
    },

    // Brew data

    estimatedOg: {
        type: Number,
        label: "Beregnet OG"
    },
    measuredOg: {
        type: Number,
        label: "Målt OG"
    },
    estimatedFg: {
        type: Number,
        label: "Beregnet FG"
    },
    measuredFg: {
        type: Number,
        label: "Målt FG"
    },
    yield: {
        type: Number,
        label: "Utbytte"
    },
    alcohol: {
        type: Number,
        label: "Alkolhol (%)"
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)"
    },


    priceEach: {
        type: Number,
        label: "Pris per flaske (kr)"
    }
    
});

Brew = new Meteor.Collection("brew");
Brew.attachSchema(Schema.Brew);