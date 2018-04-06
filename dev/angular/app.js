var app = angular.module("app", ["ui.router"]);

////////////////////////////////////////////////////////////
// ROUTING
////////////////////////////////////////////////////////////

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    $stateProvider
      .state("home", {
        url: "",
        templateUrl: "views/index.html",
        controller: "main"
      })
      .state("immobilisations", {
        url: "/immobilisations",
        templateUrl: "views/ne-waza/immobilisations.html",
        controller: "immobilisations"
      })
      .state("retournements", {
        url: "/retournements",
        templateUrl: "views/ne-waza/retournements.html",
        controller: "retournements"
      })
      .state("etranglements", {
        url: "/etranglements",
        templateUrl: "views/ne-waza/etranglements.html",
        controller: "etranglements"
      })
      .state("cles-de-bras", {
        url: "/cles-de-bras",
        templateUrl: "views/ne-waza/cles-de-bras.html",
        controller: "cles"
      })
      .state("techniques-de-bras", {
        url: "/techniques-de-bras",
        templateUrl: "views/tachi-waza/techniques-de-bras.html",
        controller: "main"
      })
      .state("techniques-de-hanches", {
        url: "/techniques-de-hanches",
        templateUrl: "views/tachi-waza/techniques-de-hanches.html",
        controller: "main"
      })
      .state("techniques-de-jambes", {
        url: "/techniques-de-jambes",
        templateUrl: "views/tachi-waza/techniques-de-jambes.html",
        controller: "main"
      })
      .state("techniques-de-sacrifices", {
        url: "/techniques-de-sacrifices",
        templateUrl: "views/tachi-waza/techniques-de-sacrifices.html",
        controller: "main"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "views/contact.html",
        controller: "main"
      });
  }
]);
