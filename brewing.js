


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
        malt.value = i;
        return malt;
    });
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

    Template.main.brewer = function () {
        var userid = Session.get("user");
        if (userid)
            return Brewer.findOne(userid);
        return false;
    };

    Template.frontpage.events({
        "click .new-brew-btn": function (e) {
            nextPage("newbrew");
        }
    });

    Template.frontpage.activeBrews = function () {
        return Brew.find({
            brewer: Session.get("user"),
            dateCompleted: { $exists: false }
        });
    };

    Template.newbrew.calculate = function (form) {
        var data = formToObject(form),
            refs = getInputRefs();
        data = deleteEmptyEntries(data);
        data = stringToNumbers(data);

        refs['meshWater'].val(refs['volume'].val());


        if (Array.isArray(data['malts.$.weight'])) {
            var totalMalt = data['malts.$.weight'].reduce(function(a,b){return +a + +b;}, 0);

            $('[name="malts.$.percent"]').each(function (i, $el) {
                $(this).val(100*(data['malts.$.weight'][i]/totalMalt));
            });

        } else {
            refs['malts.$.percent'].val(100);
        }

        refs['alcohol'].val(Math.random());




        console.log(data);
    };

    Template.newbrew.events({
        "change input": function (e) {
            Template.newbrew.calculate("#insertBrewForm");
        },
    });

    AutoForm.hooks({
        insertBrewerForm: {
            after: {
                insert: function(error, result, template) {
                    if (!error) {
                        console.log(result);
                        Session.set("user", result);
                        localStorage["user"] = result;
                        nextPage("frontpage");
                    } else {
                        alert(error);
                    }
                    
                },
            }
        }
    });

     Meteor.startup(function () {
        if (localStorage["user"])
            Session.set("user", localStorage["user"]);
        Deps.flush();
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}