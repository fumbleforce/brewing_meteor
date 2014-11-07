Template.evalbrew.helpers({
    brew: function () {
        return Brew.findOne({
            brewer: Session.get("user"),
            id: Session.get("activeBrew")
        });
    },
});

Template.evalbrew.events({
    "change radio": function () {
        $(this).find('.choice').text( this.value + ' stars' );
    }
})


AutoForm.hooks({
    editBrewForm: {
        beginSubmit: function(formId, template) {
            console.log("Begin submit");
        },

        formToDoc: function (doc) {
            doc.totalEval = +$("input[name='totalEval']:checked").val();
            doc.bitterEval = +$("input[name='bitterEval']:checked").val();
            doc.fullnessEval = +$("input[name='fullnessEval']:checked").val();
            doc.sweetEval = +$("input[name='sweetEval']:checked").val();
            var b = Brew.update(Session.get("activeBrew"), { $set: {
                    totalEval: doc.totalEval,
                    bitterEval: doc.bitterEval,
                    fullnessEval: doc.fullnessEval,
                    sweetEval: doc.sweetEval,
                    comment: doc.comment
                }
            });
            return doc;
        },

        onSuccess: function(operation, result, template) {
            nextPage("frontpage");
        },

        // Called when any operation fails, where operation will be
        // "validation", "insert", "update", "remove", or the method name.
        onError: function(operation, error, template) {
            alert(error.message);
        },
    }
});

