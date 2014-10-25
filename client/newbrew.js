Template.newbrew.calculate = function (form) {
    var data = formToObject(form),
        refs = getInputRefs();
    data = deleteEmptyEntries(data);
    data = stringToNumbers(data);

    /*
    refs['meshWater'].val(refs['volume'].val());

    if (Array.isArray(data['malts.$.weight'])) {
        var totalMalt = data['malts.$.weight'].reduce(function(a,b){return +a + +b;}, 0);

        $('[name="malts.$.percent"]').each(function (i, $el) {
            $(this).val(100*(data['malts.$.weight'][i]/totalMalt));
        });

    } else {
        refs['malts.$.percent'].val(100);
    }
    */

    refs['alcohol'].val(Math.random().toFixed(2));

    console.log(data);
};

Template.newbrew.events({
    "change input": function (e) {
        Template.newbrew.calculate("#insertBrewForm");
    },
});

AutoForm.hooks({
    insertBrewForm: {
        onSubmit: function(doc) {
            console.log("On submit");
            console.log(doc)
        },

        beginSubmit: function(formId, template) {
            console.log("Begin submit");
        },

        onSuccess: function(operation, result, template) {
            nextPage("frontpage");
        },

        // Called when any operation fails, where operation will be
        // "validation", "insert", "update", "remove", or the method name.
        onError: function(operation, error, template) {
            console.log(operation);
            console.log(error.stack);
            alert(error.message);
        },

        formToDoc: function (doc) {
            if (!_.isArray(doc.malts.$)) {
                doc.malts = [doc.malts.$];
            }

            if (!_.isArray(doc.hops.$)) {
                doc.hops = [doc.hops.$];
            }

            if (!_.isArray(doc.yeast.$)) {
                doc.yeast = [doc.yeast.$];
            }

            doc.brewer = Session.get("user");

            return doc;
        },
        docToForm: function (doc) {
            //doc.malts.$.malt = doc.malts.$.malt._id;
            return doc;
        },
    }
});