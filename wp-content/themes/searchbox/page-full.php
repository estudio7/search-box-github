<?php
/**
 * Template Name: Page (Full width)
 * Description: Page template full width.
 *
 */

get_header();

the_post();
?>
<div id="post-<?php the_ID(); ?>" <?php post_class( 'content' ); ?>>
	<h1 class="entry-title"><?php the_title(); ?></h1>
	<div id="app" class="app">
		<h1>Buscar Repo no Github</h1>
		<div class="content-form">
			<form autocomplete="on">
				<input type="" id="input_user" placeholder="Repositorio do Github" />
				<button type="submit" class="btn-app">Buscar</button>
			</form>
		</div>

		<div class="content-list">
			<div class="content-list-container">
				<ul></ul>
			</div>
		</div>
	</div>
</div><!-- /#post-<?php the_ID(); ?> -->
<?php
	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;

get_footer();
