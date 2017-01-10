app.controller('UploadCtrl', function (APP, $timeout) {
  $timeout(function() {
    $(APP.BFU_ELEMENT).fileupload(APP.BFU_OPTIONS);
  }, 0);
});
