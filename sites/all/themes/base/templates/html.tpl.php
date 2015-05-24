<!doctype html>
<html class="no-js" lang="<?php echo $language->language; ?>">
<head>
  <?php echo $head; ?>
  <title><?php echo $head_title; ?></title>
  <?php echo $styles; ?>
  <?php echo $scripts; ?>
  <link rel="stylesheet" href="<?php echo path_to_theme();?>/public/assets/css/global.css"/>
<body>
  <?php echo $page_top; ?>
  <?php echo $page; ?>
  <?php echo $page_bottom; ?>
  <script src="<?php echo path_to_theme();?>/public/assets/js/shared.js"></script>
  <script src="<?php echo path_to_theme();?>/public/assets/js/app.js"></script>
</body>
</html>