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
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Kata gatame",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/89357746?autoplay=1&color=ffffff&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Kami shio gatame",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Tate shio gatame",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Yoko shio gatame",
        niveau: "blanche",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Makura gesa gatame",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
        file: "sources/file/file.pdf"
      },
      {
        titre: "Ushiro gesa gatame",
        niveau: "jaune",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nisi consectetur, luctus mi in, pulvinar ipsum. Nunc ipsum nisi, tempor at sapien id, ornare posuere tellus. ",
        url:
          "https://player.vimeo.com/video/24396879?autoplay=1&title=0&byline=0&portrait=0",
        poster: "sources/img/img.jpg",
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
