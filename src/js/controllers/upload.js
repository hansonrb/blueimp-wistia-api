app.controller('UploadCtrl', function (APP, $scope, $timeout) {
  $timeout(function() {
    $(APP.BFU_ELEMENT).fileupload(APP.BFU_OPTIONS);
  }, 0);

  $scope.$on('fileuploaddone', function(evt,data) {
    var files = data.result && data.result.hashed_id && [data.result];

    if (files.length > 0) {
        data.scope.replace(data.files, files);
    } else if (data.errorThrown || data.textStatus === 'error') {
        data.files[0].error = data.errorThrown || data.textStatus;
    }
  });

  $scope.embedUrl = function(file) {
    if ( !file.hashed_id ) {
        return '';
    }
    return 'https://fast.wistia.com/embed/iframe/' + file.hashed_id + '?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8';
  }
});
