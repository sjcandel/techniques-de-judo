<!DOCTYPE html>
<html ng-app="app" xmlns:og="http://ogp.me/ns#" lang="fr">

<head>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117114562-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-117114562-1');
    </script>


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
    <title><?php echo $title; ?></title>

    <meta name="description" content="Apprends toutes les techniques de judo grâce à des vidéos et des fiches explicatives."/>

    <meta properiété="og:title" contenu="<?php echo $ogTitle; ?>" />
    <meta property="og:type" content="<?php echo $ogType; ?>" />
    <meta property="og:url" content="<?php echo $ogUrl; ?>" />
    <meta property="og:image" content="<?php echo $ogImage; ?>" />

    <!-- AngularJs -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js"></script>
    <script src="/bundle.js"></script>

    <!--Jquery JS-->
    <script src="//code.jquery.com/jquery-3.3.1.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="/main.css" media="screen">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" media="screen">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1"
        crossorigin="anonymous">
</head>

<body class="flex-container">
    <i class="fas fa-bars mobile text-orange" id="open-menu"></i>
    <i class="fas fa-times mobile text-orange" id="close-menu"></i>

    