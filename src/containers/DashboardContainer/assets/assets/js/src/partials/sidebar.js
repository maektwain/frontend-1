
/**
 *
 */

+function($){

  page.initSidebar = function() {
    var body = page.body;

    $(document).on( 'click', '.sidebar-toggler, .sidebar-close, .backdrop-sidebar', function() {
      body.toggleClass( 'sidebar-open' );
      if ( body.hasClass('sidebar-open') ) {
        body.prepend('<div class="backdrop backdrop-sidebar"></div>')
      }
      else {
        $('.backdrop-sidebar').remove();
      }
    });

    // Sidebar nav
    //
    /*
    var navItemShow = $('.nav-sidebar .nav-item.show');
    navItemShow.find('> .nav-link .nav-angle').addClass('rotate');
    navItemShow.find('> .nav').css('display', 'block');
    navItemShow.removeClass('show');

    var navSidebarIsAccordion = false;
    if ( 'true' == $('.nav-sidebar').dataAttr('accordion', 'false') ) {
      navSidebarIsAccordion = true;
    }

    $(document).on( 'click', '.nav-sidebar .nav-item', function() {
      var item = $(this);
      item.children('.nav').slideToggle();
      if ( navSidebarIsAccordion ) {
        item.siblings('.nav-item').children('.nav:visible').slideUp().prev('.nav-link').children('.nav-angle').removeClass('rotate');
      }
      item.find('> .nav-link .nav-angle').toggleClass('rotate');
    });
    */

    // Perfect scrollbar
    //
    // var ps = new PerfectScrollbar($('.sidebar-body')[0], {
    //   wheelSpeed: 0.4,
    //   minScrollbarLength: 20
    // });

  }

}(jQuery);

