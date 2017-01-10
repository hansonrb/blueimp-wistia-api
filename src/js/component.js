app.component('bwaUpload', {
  templateUrl: './src/html/template.html',
  controller: function(APP) {
    var ctrl = this;
    this.$onInit = function() {
      APP.BFU_OPTIONS.formData.api_password = ctrl.config.api_password;
      ctrl.data = {
        action: APP.API_URL,
        options: APP.BFU_OPTIONS
      };
    };
  },
  bindings: {
    config: '='
  }
});
