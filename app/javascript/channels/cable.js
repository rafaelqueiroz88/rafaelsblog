(function () {
    this.App || (this.App = {});
    App.cable = ActionCable.createConsumer($('meta[name=action-cable-url').attr('content'));
}).call(this);