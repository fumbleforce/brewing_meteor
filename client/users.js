login = function (username) {
    var brewer = Brewer.findOne({ username: username });
    if (brewer) {
        Session.set("user", brewer._id);
        localStorage["user"] = brewer._id;
        nextPage("frontpage");
    } else {
        $(".username").addClass("error")
    }

}

Template.login.events({
    "click .login-button": function () {
        var username = $(".username").val();
        login(username);
    }
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
        },
    },
});