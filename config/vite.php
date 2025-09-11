<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerInternal' => 'http://localhost:3000/',
    'devServerPublic' => 'http://' . getenv('DDEV_PRIMARY_URL_HOST') . ':3000', // <-- Corrected line
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'checkDevServer' => true,
];