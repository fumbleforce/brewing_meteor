Template.viewbrew.helpers({
    brew: function () {
        var b = Brew.findOne(Session.get("activeBrew"));

        if (b == undefined || b == null) return;

        var brewer = Brewer.findOne(b.brewer);
        b.brewer = brewer;
        if (!isNaN(b.totalEval)) {
            var i = b.totalEval;
            b.totalEval = [];
            while (i-- > 0) b.totalEval.push(i);
        }
        if (!isNaN(b.bitterEval)) {
            var i = b.bitterEval;
            b.bitterEval = [];
            while (i-- > 0) b.bitterEval.push(i);
        }
        if (!isNaN(b.fullnessEval)) {
            var i = b.fullnessEval;
            b.fullnessEval = [];
            while (i-- > 0) b.fullnessEval.push(i);
        }
        if (!isNaN(b.sweetEval)) {
            var i = b.sweetEval;
            b.sweetEval = [];
            while (i-- > 0) b.sweetEval.push(i);
        }
        console.log(b);
        return b;
    },

    active: function () { return Session.get("activeBrew"); }
});