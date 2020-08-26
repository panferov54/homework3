$(function () {
let itemText='';
let $list=$('#ul');
let $newItemButton=$('#newItemButton');
let $newItemForm=$('#newItemForm');

//скрывает список и затем плавно выводим его по элементам
    $('#ul>li').hide().each(function (index) {
$(this).delay(450*index).fadeIn(1500);
    });

    //выведем сколько товаров в списке
    function updateCount(){
        let $items=$('li').length;
        $('#counter').text($items);
    }
   updateCount();

//    удаление элементов списка
    $list.on('click','li',function () {
      let $elem=$(this);

        let $complete=$elem.hasClass('complete');
        if ($complete){
           $elem.animate({
               opacity:0,
               paddingLeft:'+=180px'
           },500,'swing',function () {
$elem.remove();
               updateCount();
           })

        }else{
            itemText=$elem.text();
            $elem.remove();

            $list.append(`<li class="complete">${itemText}</li>`).hide().fadeIn(500);
            $('li:last-child').css('color','red');
        }
       // $(this).remove();
        updateCount();
    })

});