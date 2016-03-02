if (window.location.hash &&	(window.location.pathname == '/bibliography'))
    console.log("X")
    $(
        $(window.location.hash).parent()
    ).parent().addClass("selected_source")
