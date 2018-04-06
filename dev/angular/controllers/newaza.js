app.filter("trustUrl", [
  "$sce",
  function($sce) {
    return function(recordingUrl) {
      return $sce.trustAsResourceUrl(recordingUrl);
    };
  }
]);

app.controller("newaza", [
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

    $scope.videos = [
      {
        titre: "Hon gesa gatame",
        categorie: "immobilisation",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Kata gatame",
        categorie: "immobilisation",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/89357746?autoplay=1&color=ffffff&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Kami shio gatame",
        categorie: "immobilisation",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Tate shio gatame",
        categorie: "immobilisation",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Yoko shio gatame",
        categorie: "immobilisation",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Makura gesa gatame",
        categorie: "immobilisation",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
      },
      {
        titre: "Ushiro gesa gatame",
        categorie: "immobilisation",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg"
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
