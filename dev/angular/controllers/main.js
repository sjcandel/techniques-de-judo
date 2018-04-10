app.controller("main", [
  "$scope",
  function($scope) {
    // $scope.openMenu = function() {
    //   $("#menu").css("left", "0");
    //   $("#open-menu").css("display", "none");
    //   $("#close-menu").css("display", "block");
    // };
    // $scope.closeMenu = function() {
    //   $("#menu").css("left", "-80%");
    //   $("#open-menu").css("display", "block");
    //   $("#close-menu").css("display", "none");
    // };
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
