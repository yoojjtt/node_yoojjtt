$(document).ready(function(){


    email = get_Cookie('sess_userEmail');  // cookie 전역변수로 써줌
    company_no = get_Cookie('sess_company_no');
    type = get_Cookie('sess_type');


    window.onload = funLoad; // tab-contents에 대한 사이즈 조정
    window.onresize = funLoad;

    /* page load 하면 조정 값 */
    $("iframe.myFrame").height($(window).height()-100);
    $("iframe.myFrame").width($(window).width()-20);
    $("#main_contents").height($(window).height()-80);
    $("#main_contents").width($(window).width());

    /* page size resize 하면 조정 값*/
    $(window).resize(function(){  //윈도우 크기 변화하면 작동
        $("iframe.myFrame").height($(window).height()-60);
        $("iframe.myFrame").width($(window).width()-20);
        $("#main_contents").height($(window).height()-60);
        $("#main_contents").width($(window).width());

        /*
        if(width < 1050){  // 만약 1050 밑으로 갈 경우 width 고정

            $("iframe.myFrame").width(1045);  //
        }
        */
    });

    $('#myTab a:first').tab('show');  // 처음 페이지 로드하면, 첫번째 탭 보이게함


});
/* div content dynamic css width,height -------------*/
function funLoad(){
    var Cheight = $(window).height();
    $('div.tab_contents').css({'height':Cheight+'px'});
}



/*nav bar click effect -----------------*/
$(".nav").on("click","li", function(){
   $(this).toggleClass("active");
   var target = $(".active");
    target.not($(this)).removeClass("active");
});



/*table click event  ---------------------*/
$("tbody").on("click", "tr", function() //
{



    $(this).toggleClass("highlight");
    var target = $('.highlight');
    target.not($(this)).removeClass("highlight");

    /*테이블 명을 가져와야 한다.*/
    var table = $(this).parent().attr("id");
    //var select = target.children().eq(0).text();
    var first = $(this).children().eq(0).text();
    var second = $(this).children().eq(1).text();
    var third = $(this).children().eq(2).text();
    var forth = $(this).children().eq(3).text();
    var sixth = $(this).children().eq(6).text();
    var seventh = $(this).children().eq(7).text();

    if(table =='employees_list'){info_load(table, third, forth);}  // 직원 개별정보 불러올 때

    if(table =='hyunjang_list'){hyunjang_indv_modal(table, seventh);} //현장 로드

    if(table =='daily_employee_list'){daily_employee_modal('modal/daily_employee_modal', second)} // 일용직 개인정보 불러올 때




});

/*table click event  ---------------------*/
$("tbody").on("click", "button", function() //
{
    var tbody = $(this).parent().parent().parent().parent();
    var td = $(this).parent().parent().parent().children();
    var table = tbody.attr("id");
    var third = td.eq(2).text();
    var button_type = $(this).attr('name');
    //alert(button_type);

    if(table == 'service_table'){
        if(button_type == 'extension'){
            var input_value = $(this).siblings('span').children().val();
            if(!input_value){
                alert('값을 입력하세요');
                return false
            }
            service_auth.update(email, third, input_value , '');
        }else if(button_type =='ban'){
            var ban = $(this).attr('name');
            service_auth.update(email, third, input_value , ban);
        }



    }



});
