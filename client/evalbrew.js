Template.evalbrew.brew = function () {
    return Brew.findOne({
        brewer: Session.get("user"),
        id: Session.get("activeBrew")
    });
};


AutoForm.hooks({
    editBrewForm: {
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
            alert(error.message);
        },
    }
});