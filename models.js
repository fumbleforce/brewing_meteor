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
    Malt entry
*/
Schema.MaltEntry = new SimpleSchema({

    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    ebc: {
        type: Number,
        label: "EBC",
        optional: true,
        decimal: true,
    },
    gravity: {
        type: Number,
        label: "Tetthet",
        optional: true,
        decimal: true,
    },
    price: {
        type: Number,
        label: "Pris per pose",
        optional: true,
        decimal: true,
    },
    amount: {
        type: Number,
        label: "Kg per pose",
        optional: true,
        decimal: true,
    },
    weight: {
        type: Number,
        label: "Vekt (g)",
        optional: true
    },
    percent: {
        type: Number,
        label: "Andel (%)",
        optional: true,
        decimal: true,
    },
    color: {
        type: Number,
        label: "Farge (MCU)",
        optional: true,
        decimal: true,
    }
});
MaltEntry = new Meteor.Collection("maltEntry");
MaltEntry.attachSchema(Schema.MaltEntry);




/*
    Hop entry
*/
Schema.HopEntry = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
    price: {
        type: Number,
        label: "Pris per pose",
        optional: true,
        decimal: true,
    },
    amount: {
        type: Number,
        label: "Gram per pose",
        optional: true
    },
    weight: {
        type: Number,
        label: "Vekt (g)",
        optional: true
    },
    alpha: {
        type: Number,
        label: "Alfa (%)",
        optional: true,
        decimal: true,
    },
    boil: {
        type: Number,
        label: "Koketid (min)",
        optional: true
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)",
        optional: true,
        decimal: true,
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
        optional: true,
        decimal: true,
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
        optional: true,
        decimal: true,
    },
    duration: {
        type: Number,
        label: "Varighet (min)",
        optional: true,
        decimal: true,
    },
    amount: {
        type: Number,
        label: "Mengde",
        optional: true,
        decimal: true,
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
        type: String,
        label: "Påbegynt",
        optional: true
    },
    dateCompleted: {
        type: String,
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
        type: [Schema.Yeast],
        label: "Gjær",
        optional: true,
    },

    // Brew data

    estimatedOg: {
        type: Number,
        label: "Beregnet OG",
        optional: true,
        decimal: true,
    },
    measuredOg: {
        type: Number,
        label: "Målt OG",
        optional: true,
        decimal: true,
    },
    estimatedFg: {
        type: Number,
        label: "Beregnet FG",
        optional: true,
        decimal: true,
    },
    measuredFg: {
        type: Number,
        label: "Målt FG",
        optional: true,
        decimal: true,
    },
    yield: {
        type: Number,
        label: "Utbytte",
        optional: true,
        decimal: true,
    },
    alcohol: {
        type: Number,
        label: "Alkolhol (%)",
        optional: true,
        decimal: true,
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)",
        optional: true,
        decimal: true,
    },
    priceEach: {
        type: Number,
        label: "Pris per flaske (kr)",
        optional: true,
        decimal: true,
    },

    // Evaluation

    totalEval: {
        type: Number,
        label: "Totalvurdering",
        optional: true,
        decimal: false
    },
    bitterEval: {
        type: Number,
        label: "Bitterhet",
        optional: true,
        decimal: false
    },
    fullnessEval: {
        type: Number,
        label: "Fylde",
        optional: true,
        decimal: false
    },
    sweetEval: {
        type: Number,
        label: "Sødme",
        optional: true,
        decimal: false
    },
    comment: {
        type: String,
        label: "Kommentar",
        optional: true,
        max: 1000
    }


});

Brew = new Meteor.Collection("brew");
Brew.attachSchema(Schema.Brew);