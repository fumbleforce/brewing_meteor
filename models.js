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
        optional: true
    },
    gravity: {
        type: Number,
        label: "Tetthet",
        optional: true
    },
    price: {
        type: Number,
        label: "Pris per pose",
        optional: true
    },
    amount: {
        type: Number,
        label: "Gram per pose",
        optional: true
    }
});

Malt = new Meteor.Collection("malt");
Malt.attachSchema(Schema.Malt);


/*
    Malt entry
*/
Schema.MaltEntry = new SimpleSchema({
    
    malt: {
        type: String,
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
        optional: true
    },
    percent: {
        type: Number,
        label: "Andel (%)",
        optional: true
    },
    color: {
        type: Number,
        label: "Farge (MCU)",
        optional: true
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
        label: "Pris per pose",
        optional: true
    },
    amount: {
        type: Number,
        label: "Gram per pose",
        optional: true
    }
});

Hop = new Meteor.Collection("hop");
Hop.attachSchema(Schema.Hop);


/*
    Hop entry
*/
Schema.HopEntry = new SimpleSchema({
    hop: {
        type: String,
        label: "Humle",
    },
    weight: {
        type: Number,
        label: "Vekt (g)",
        optional: true
    },
    alpha: {
        type: Number,
        label: "Alfa (%)",
        optional: true
    },
    boil: {
        type: Number,
        label: "Koketid (min)",
        optional: true
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)",
        optional: true
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
        label: "Pris",
        optional: true
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
        type: String,
        label: "Brygger",
    },
    dateStarted: {
        type: Date,
        label: "Påbegynt",
    },
    dateCompleted: {
        type: Date,
        label: "Ferdigstillt",
        optional: true
    },
    rating: {
        type: Number,
        label: "Vurdering",
        optional: true
    },

    volume: {
        type: Number,
        label: "Volum (liter)",
        optional: true,
    },

    type: {
        type: String,
        label: "Øltype",
        optional: true
    },


    // Process info

    meshWater: {
        type: Number,
        label: "Meskevann (liter)",
        optional: true,
    },
    firstMesh: {
        type: Schema.Period,
        label: "1. Mesking",
        optional: true,
    },
    secondMesh: {
        type: Schema.Period,
        label: "2. Mesking",
        optional: true,
    },
    rinsing: {
        type: Schema.Period,
        label: "Skylling",
        optional: true,
    },
    washing: {
        type: Schema.Period,
        label: "Utvasking",
        optional: true,
    },
    boilStart: {
        type: Schema.Period,
        label: "Kokestart",
        optional: true,
    },
    

    fermentation: {
        type: Schema.Period,
        label: "Gjæring",
        optional: true,
    },

    flasking: {
        type: Schema.Period,
        label: "Flasking/Fat",
        optional: true,
    },


    // Brew ingredients

    malts: {
        type: [Schema.MaltEntry],
        label: "Malt",
        optional: true,
    },
    hops: {
        type: [Schema.HopEntry],
        label: "Humle",
        optional: true,
    },
    yeast: {
        type: [Schema.YeastEntry],
        label: "Gjær",
        optional: true,
    },

    // Brew data

    estimatedOg: {
        type: Number,
        label: "Beregnet OG",
        optional: true,
    },
    measuredOg: {
        type: Number,
        label: "Målt OG",
        optional: true,
    },
    estimatedFg: {
        type: Number,
        label: "Beregnet FG",
        optional: true,
    },
    measuredFg: {
        type: Number,
        label: "Målt FG",
        optional: true,
    },
    yield: {
        type: Number,
        label: "Utbytte",
        optional: true,
    },
    alcohol: {
        type: Number,
        label: "Alkolhol (%)",
        optional: true,
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)",
        optional: true,
    },


    priceEach: {
        type: Number,
        label: "Pris per flaske (kr)",
        optional: true,
    }
    
});

Brew = new Meteor.Collection("brew");
Brew.attachSchema(Schema.Brew);