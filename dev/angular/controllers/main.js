app.controller("main", [
  "$scope",
  function($scope) {
    // $scope.openMenu = function() {
    //   $("#menu").css("left", "0");
    //   $("#open-menu").hide;
    // };
    // $scope.openMenu();
  }
]);

app.filter("trustUrl", [
  "$sce",
  function($sce) {
    return function(recordingUrl) {
      return $sce.trustAsResourceUrl(recordingUrl);
    };
  }
]);
