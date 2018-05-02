app.controller("immobilisations", [
  "$scope",
  function($scope) {
    $scope.videos = [
      {
        titre: "Hon Gesa Gatame",
        niveau: "blanche",
        description: "",
        url: "",
        poster: "../../sources/img/hongesagatame.jpg",
        file: "../../sources/file/hongesagatame.pdf"
      },
      {
        titre: "Kata Gatame",
        niveau: "jaune",
        description: "",
        url: "",
        poster: "../../sources/img/katagatame.jpg",
        file: "../../sources/file/katagatame.pdf"
      },
      {
        titre: "Kami Shiho Gatame",
        niveau: "blanche",
        description: "",
        url: "",
        poster: "../../sources/img/kamishihogatame.jpg",
        file: "../../sources/file/kamishihogatame.pdf"
      },
      {
        titre: "Makura Gesa Gatame",
        niveau: "jaune",
        description: "",
        url: "",
        poster: "../../sources/img/makuragesagatame.jpg",
        file: "../../sources/file/makuragesagatame.pdf"
      },
      {
        titre: "Tate Shiho Gatame",
        niveau: "blanche",
        description: "",
        url: "",
        poster: "../../sources/img/tateshihogatame.jpg",
        file: "../../sources/file/tateshihogatame.pdf"
      },
      {
        titre: "Ushiro Gesa Gatame",
        niveau: "blanche",
        description: "",
        url: "",
        poster: "../../sources/img/ushirogesagatame.jpg",
        file: "../../sources/file/ushirogesagatame.pdf"
      },
      {
        titre: "Yoko Shiho Gatame",
        niveau: "blanche",
        description: "",
        url: "",
        poster: "../../sources/img/yokoshihogatame.jpg",
        file: "../../sources/file/yokoshihogatame.pdf"
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
