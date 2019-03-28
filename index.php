<?php

Kirby::plugin('sylvainjule/quickpages', [
	'fields' => array(
		'quickpages' => require_once __DIR__ . '/lib/quickpages.php',
	),
	'translations' => array(
		'en' => array(
			'quickpages.placeholder' => 'Filter pages'
		),
		'fr' => array(
			'quickpages.placeholder' => 'Filtrer les pages'
		),
	)
]);