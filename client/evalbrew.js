Template.evalbrew.brew = function () {
    return Brew.findOne({
        brewer: Session.get("user"),
        id: Session.get("activeBrew")
    });
};