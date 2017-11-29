app.constant('APP', {
  'API_URL': 'https://upload.wistia.com/',
  // 'API_URL': 'http://localhost:8888/jQuery-File-Upload/server/php/',
  'BFU_ELEMENT': '#fileupload',
  'BFU_OPTIONS': {
    maxNumberOfFiles: 5,
    maxFileSize: (90 * 1000000),
    acceptFileTypes: /(\.|\/)(avi|mov|qt|mp?g|mp4|wmv|divx)$/i,
    formData: {
      'api_password': ''
    }
  }
});

app.config(function(APP, $httpProvider, fileUploadProvider) {
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  angular.extend(fileUploadProvider.defaults, {
    maxFileSize: APP.BFU_OPTIONS.maxFileSize,
    acceptFileTypes: APP.BFU_OPTIONS.acceptFileTypes
  });
});
