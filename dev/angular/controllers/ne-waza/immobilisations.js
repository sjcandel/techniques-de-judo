app.controller("immobilisations", [
  "$scope",
  function($scope) {
    //$scope.openMenu();

    $scope.videos = [
      {
        titre: "Hon gesa gatame",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url: "",
        poster: "sources/img/hongesagatame.jpg",
        file: "sources/file/hongesagatame.pdf"
      },
      {
        titre: "Kata gatame",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url: "",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Makura gesa gatame",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url: "",
        poster: "sources/img/makuragesagatame.jpg",
        file: "sources/file/file.pdf"
      }
    ];

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
