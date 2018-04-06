// app.filter("trustUrl", [
//   "$sce",
//   function($sce) {
//     return function(recordingUrl) {
//       return $sce.trustAsResourceUrl(recordingUrl);
//     };
//   }
// ]);

app.controller("retournements", [
  "$scope",
  function($scope) {
    $scope.openMenu = function() {
      $("#menu").css("left", "0");
      $("#open-menu").css("display", "none");
      $("#close-menu").css("display", "block");
    };
    $scope.closeMenu = function() {
      $("#menu").css("left", "-80%");
      $("#open-menu").css("display", "block");
      $("#close-menu").css("display", "none");
    };
    //$scope.openMenu();

    $scope.videos = [];

    $scope.selectedVideo = $scope.videos[0];

    $scope.showDetails = function(video) {
      $scope.selectedVideo = video;
      $("html, body").animate(
        {
          scrollTop: 0
        },
        600
      );
      return false;
    };
  }
]);
