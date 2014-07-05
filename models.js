var Schema = {};

/*
    Information about the brewer
*/
Schema.Brewer = new SimpleSchema({
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
Brewer.attachSchema(Schema.Brewer)






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
    }
});

Malt = new Meteor.Collection("malt");
Malt.attachSchema(Schema.Malt)


/*
    Malt entry
*/
Schema.MaltEntry = new SimpleSchema({
    malt: {
        type: Schema.Malt,
        label: "Malt",
    },
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
MaltEntry.attachSchema(Schema.MaltEntry)



/*
    Information about a hop type
*/
Schema.Hop = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
});

Hop = new Meteor.Collection("hop");
Hop.attachSchema(Schema.Hop)


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
    }
});
HopEntry = new Meteor.Collection("hopEntry");
HopEntry.attachSchema(Schema.HopEntry)




/*
    Information about a hop type
*/
Schema.Yeast = new SimpleSchema({
    name: {
        type: String,
        label: "Navn",
        max: 200
    },
});

Yeast = new Meteor.Collection("yeast");
Yeast.attachSchema(Schema.Yeast)




/*
    Information about a fermentation period
*/
Schema.Fermentation = new SimpleSchema({
    temp: {
        type: Number,
        label: "Temperatur (C)",
    },
    duration: {
        type: Number,
        label: "Varighet (dager)"
    }
});

Fermentation = new Meteor.Collection("fermentation");
Fermentation.attachSchema(Schema.Fermentation)






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
    voluem: {
        type: Number,
        label: "Volum",
    },

    // Brew data

    malt: {
        type: [Schema.Malt],
        label: "Malt",
    },
    hops: {
        type: [Schema.Hop],
        label: "Humle",
    },
    yeast: {
        type: [Schema.Yeast],
        label: "Gjær"
    },
    fermentation: {
        type: [Schema.Fermentation],
        label: "Gjæring"
    },

    og: {
        type: Number,
        label: "OG"
    },
    fg: {
        type: Number,
        label: "FG"
    },
    alcohol: {
        type: Number,
        label: "Alkolhol (%)"
    },
    bitterness: {
        type: Number,
        label: "Bitterhet (IBU)"
    }
    
});

Brew = new Meteor.Collection("brew");
Brew.attachSchema(Schema.Brew);