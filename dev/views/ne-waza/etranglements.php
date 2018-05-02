<?php 
    $title = "Etranglements - Techniques de Judo";
    $ogTitle = "Etranglements - Techniques de Judo";
    $ogType = "video";
    $ogUrl = $_SERVER['REQUEST_URI'];;
    $ogImage = " ";
    include('../../includes/header.php');
    include('../../includes/nav.php');
?>

<section class="animated fadeInRight"  ng-controller="etranglements">
  
  <!-- PLAYER -->
  <article>
    <div class="m-x-15">
      <h1 class="text-grey2 text-xxl uppercase weight-700">Etranglements</h1>
      <h2 class="subtitle text-xl p-l-40">shime-waza</h2>
    </div>
  </article>

  <!-- PLAYLIST -->
  <article class="m-t-40">
    <div class="videoGrid flex-container">
      <p ng-if="!videos[0]">WORK IN PROGRESS</p>
      <a class="videoGrid__elt m-x-15 m-b-40" ng-repeat="v in videos" ng-click="showDetails(v)">
        <div class="videoGrid__cover flex-container is-vertical-center is-horizontal-center">
          <i class="far fa-play-circle text-xl text-white"></i>
        </div>
        <div class="videoGrid__img">

          <img ng-src="{{v.poster}}">
        </div>
        <p class="p-t-10 text-grey2 uppercase weight-700">{{v.titre}}</p>
      </a>
    </div>
  </article>

</section>


<?php include('../../includes/footer.php'); ?>