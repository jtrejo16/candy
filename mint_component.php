<?php

// Plugin Name: minting_component
// Text Domain: miNting_component


add_shortcode('minting_component', 'add_minting_component');

function add_minting_component($atts = array(), $content = null, $tag = 'minting_component')
{
    ob_start();
    ?>

        <div id="root">Loading...</div>
        <?php wp_enqueue_script('minting_component', plugins_url('build/static/js/bundle.min.js', __FILE__), array('wp-element'), time(), true); ?>
    <?php return ob_get_clean();
}
    
    
    
    


