<?php

$base = require kirby()->root('kirby') . '/config/fields/pages.php';


/* Merge new properties
--------------------------------*/

$base = array_merge_recursive($base, array(
    'props' => array(
        'start' => function($start = false) {
            return $start;
        },
    ),
));

return $base;