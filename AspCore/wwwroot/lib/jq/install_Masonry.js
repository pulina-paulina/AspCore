jQuery(documrnt).ready(funtion($) { //-используем js файл
    $(".container_cards").masonry({ //родительский блок 
        itemSelector: ".card", //дочерний блок
        columnWidth: 50
    });
});