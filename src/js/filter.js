app.filter('trust', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
