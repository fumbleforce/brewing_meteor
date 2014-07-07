


nextPage = function (page){

    turnGlass();

    $(".page").animate({
        "margin-left": "-200%"
     }, 500, "swing", function () {
        $(".page").hide();

        $("."+page)
        .css("margin-left", "200%")
        .show()
        .animate({
            "margin-left": "0px"
        }, 500, "swing");
    });
};



UI.registerHelper("malts", function() {
    //return Malt.find();
    /*
    var malts = [{
        name: "Supermalt",
        ebc: 11,
        gravity: 11111
    },
    {
        name: "Defaultmalt",
        ebc: 1,
        gravity: 10000
    }];
    */
    var malts = Malt.find().fetch();

    malts = _.map(malts, function (malt, i) {
        malt.label = malt.name + "    EBC: " + malt.ebc + "    Tetthet: " + malt.gravity;
        malt.value = i;
        return malt;
    });
    return malts;
});

UI.registerHelper("hops", function() {
    var hops = Hop.find().fetch();

    hops = _.map(hops, function (hop, i) {
        hop.label = hop.name;
        hop.value = i;
        return hop;
    });
    return hops;
});

UI.registerHelper("yeasts", function() {
    var yeasts = Yeast.find().fetch();

    yeasts = _.map(yeasts, function (yeast, i) {
        yeast.label = yeast.name;
        yeast.value = i;
        return yeast;
    });
    return yeasts;
});


if (Meteor.isClient) {


    AutoForm.setDefaultTemplateForType('afQuickField', 'bootstrap3-horizontal');

    Template.frontpage.events({
        "click .new-brew-btn": function (e) {
            nextPage("newbrew");


        }
    });

    Template.newbrew.events({
        "change input[name='volume']": function (e) {
            var $el = $(e.currentTarget),
                val = $el.val();

            console.log(val);

        },
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
