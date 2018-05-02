<?php 
    $title = "Immobilisations - Techniques de Judo";
    $ogTitle = "Immobilisations - Techniques de Judo";
    $ogType = "video.other";
    $ogUrl = $_SERVER['REQUEST_URI'];
    $ogImage = " ";
    include('../../includes/header.php');
    include('../../includes/nav.php');
?>

<section class="animated fadeInRight" ng-controller="immobilisations">
            
    <!-- PLAYER -->
    <article>
        <div class="m-x-15">
            <h1 class="text-grey2 text-xxl uppercase weight-700">Immobilisations</h1>
            <h2 class="subtitle text-xl p-l-40">osae-komi-waza</h2>
        </div>

        <div class="m-x-15 m-t-40 m-b-60 flex-container playerContainer">
            <div class="flex-2 playerContainer__video">
                <div <div style="position:relative;height:0;padding-bottom:56.21%"> >
                    <iframe src="{{selectedVideo.url | trustUrl }}" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
            <div class="flex-1 p-l-40 playerContainer__description">
                <p class="text-grey2 text-l uppercase weight-700 m-b-20">{{selectedVideo.titre}}</p>

                <div class="m-b-20 flex-container is-vertical-center">
                    <i class="fas fa-file-pdf text-grey3 text-l m-r-10"></i>
                    <a class="ghost-button" href="{{selectedVideo.file}}" download="{{selectedVideo.file}}" ng-click="dl = !dl">Imprimer les explications</a>
                </div>
                <p class="m-b-10">
                    <b>Niveau : </b>ceinture {{selectedVideo.niveau}}</p>
                <p class="m-b-10">
                    <b>Description : </b>{{selectedVideo.description}}</p>
            </div>
        </div>
    </article>
    
    <div class="separator m-x-15">
        <p class="floating-label">+ de vidéos</p>
    </div>

    <!-- PLAYLIST -->
    <article>
        <div class="m-t-40">
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
        </div>
    </article>

</section>

<?php include('../../includes/footer.php'); ?>