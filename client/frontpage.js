Template.main.brewer = function () {
    var userid = Session.get("user");
    if (userid)
        return Brewer.findOne(userid);
    return false;
};

Template.frontpage.brewer = Template.main.brewer;

Template.frontpage.events({
    "click .new-brew-btn": function (e) {
        nextPage("newbrew");
    },
    "click .active-brew": function (e) {
        var brewId = $(e.target).attr("brewId");
        Session.set("activeBrew", brewId);
        nextPage("evalbrew");
    }
});


Template.frontpage.brews = function () {
    return Brew.find({
        brewer: Session.get("user"),
        dateCompleted: { $exists: false }
    });
};

Template.frontpage.helpers({
    brews: function () {
        return Brew.find({ brewer: Session.get("user") });
    },
})