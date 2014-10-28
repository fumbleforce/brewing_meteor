Template.main.helpers({
    brewer: function () {
        var userid = Session.get("user");
        if (userid)
            return Brewer.findOne(userid);
        return false;
    }
});

Template.frontpage.brewer = Template.main.brewer;

Template.frontpage.events({
    "click .new-brew-btn": function (e) {
        nextPage("newbrew");
    },
    "click .active-brew": function (e) {
        var brewId = $(e.target).closest("[brewid]").attr("brewId");
        Session.set("activeBrew", brewId);
        console.log(brewId);
        if ($(e.target).hasClass("edit")) {
            nextPage("evalbrew");
        } else {
            nextPage("viewbrew");
        }
    },
});


Template.frontpage.helpers({
    brews: function () {
        return Brew.find({ brewer: Session.get("user") });
    },
    brewer: function () {
        var userid = Session.get("user");
        if (userid)
            return Brewer.findOne(userid);
        return false;
    }
})

