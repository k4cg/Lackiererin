<?php

class Lackiererin {
	public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
		$out->addModules("ext.lackiererin");
	}

}

?>
