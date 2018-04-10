app.controller("cles", [
  "$scope",
  function($scope) {
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
