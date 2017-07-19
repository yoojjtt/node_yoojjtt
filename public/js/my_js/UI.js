$(document).ready(function(){


    email = get_Cookie('sess_userEmail');  // cookie 전역변수로 써줌
    company_no = get_Cookie('sess_company_no');
    type = get_Cookie('sess_type');


    window.onload = funLoad; // tab-contents에 대한 사이즈 조정
    window.onresize = funLoad;

    //$("iframe.myFrame").height(655); // iframe에 대한 스크롤바 변동시 높이값
    $("iframe.myFrame").height($(window).height()-100); // iframe에 대한 스크롤바 변동시 높이값
    $("iframe.myFrame").width($(window).width()-20);  // -5 정도 해줘야 스크롤바에 안가린다.
    $("#main_contents").height($(window).height()-100);
    $("#main_contents").width($(window).width());


    $(window).resize(function(){  //윈도우 크기 변화하면 작동
        //$("iframe.myFrame").height(655); // 높이고정
        $("iframe.myFrame").height($(window).height()-60); // 높이고정
        $("iframe.myFrame").width($(window).width()-20); // 넓이고정
        $("#main_contents").height($(window).height()-60);
        $("#main_contents").width($(window).width());

        width = $(window).width();
        height = $(window).height();
        /*
        if(width < 1050){  // 만약 1050 밑으로 갈 경우 width 고정

            $("iframe.myFrame").width(1045);  //
        }
           */
    });

    $('#myTab a:first').tab('show');  // 처음 페이지 로드하면, 첫번째 탭 보이게함


});
/* div content dynamic css width,height -------------+*/
function funLoad(){
    var Cheight = $(window).height();
    $('div.tab_contents').css({'height':Cheight+'px'});
}



/*tab active effect ------------------*/
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

/*nav bar click effect -----------------*/
$(".nav").on("click","li", function(){
   $(this).toggleClass("active");
   var target = $(".active");
    target.not($(this)).removeClass("active");
});






/*table click event  ---------------------*/
$("tbody").on("click", "tr", function() //
{
    $('#employee_title').text('직원 정보');
    $('#em_jumin1').attr('disabled', true);
    $('#em_jumin2').attr('disabled', true);
    $('#employee_save').show(); //저장버튼
    $('#employee_delete').show(); //삭제버튼
    $('#employee_enroll').show(); //신규등록 버튼


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
    //alert(seventh);
    //alert(table+third+forth);

    if(table =='employees_list'){info_load(table, third, forth);}  // 직원 개별정보 불러올 때

    if(table =='hyunjang_list'){hyunjang_indv_modal(table, seventh);} //현장 로드

    //info_load(table, first, second); // 세금정보 load할 때





});