if (Meteor.isClient) {

    Template.frontpage.events({
        "click .new-brew-btn": function () {
            $(".page").hide();
            $(".newbrew").show();
        }
    })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
