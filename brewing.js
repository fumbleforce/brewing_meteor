


nextPage = function (page) {

    turnGlass();

    $(".page:visible").animate({
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

formToObject = function (form) {
    form = $(form);
    var o = {};
    var a = form.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

stringToNumbers = function (obj) {
    for (var field in obj)
        if (!isNaN(obj[field])) obj[field] = +obj[field];
    return obj;
};

deleteEmptyEntries = function (obj) {
    var toDelete = [];

    for (var field in obj) {
        if (obj[field] === "") {
            toDelete.push(field);
        }
    }

    _.each(toDelete, function (f) {
        delete obj[f];
    });

    return obj;
};

getInputRefs = function () {
    var refs = {};
    $("[data-schema-key]").each(function () {
        refs[$(this).attr("data-schema-key")] = $(this);
    });
    return refs;
};

UI.registerHelper("malts", function() {
    return _.map(Malt.find().fetch(), function (malt, i) {
        malt.label = malt.name +
            "    EBC: " + malt.ebc +
            "    Tetthet: " + malt.gravity;
        malt.value = malt._id;
        return malt;
    });
});

UI.registerHelper("hops", function() {
    var hops = Hop.find().fetch();

    hops = _.map(hops, function (hop, i) {
        hop.label = hop.name;
        hop.value = hop._id;
        return hop;
    });
    return hops;
});

UI.registerHelper("yeasts", function() {
    var yeasts = Yeast.find().fetch();

    yeasts = _.map(yeasts, function (yeast, i) {
        yeast.label = yeast.name;
        yeast.value = yeast._id;
        return yeast;
    });
    return yeasts;
});


if (Meteor.isClient) {

    AutoForm.setDefaultTemplateForType('afQuickField', 'bootstrap3-horizontal');

     Meteor.startup(function () {
        if (localStorage["user"]) {
            Session.set("user", localStorage["user"]);
            //Meteor.userId = localStorage["user"];
        }

        Deps.flush();
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}