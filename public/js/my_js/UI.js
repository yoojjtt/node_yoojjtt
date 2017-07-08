$(document).ready(function(){


    name = get_Cookie('sess_name');  // cookie 전역변수로 써줌
    company_no = get_Cookie('sess_company_no');
    type = get_Cookie('sess_type');
    phone = get_Cookie('sess_phone');



    $("iframe.myFrame").height($(window).height()-10);
    $("iframe.myFrame").width($(window).width()-5);  // -5 정도 해줘야 스크롤바에 안가린다.

    $(window).resize(function(){
        $("iframe.myFrame").height($(window).height()-10);
        $("iframe.myFrame").width($(window).width()-5);

        width = $(window).width();
        height = $(window).height();
        if(width < 1050){
            $("iframe.myFrame").width(1045);  // 1050 밑으로 갈 경우 width 고정
        }

    });

    $('#myTab a:first').tab('show');  // 처음 페이지 로드하면, 첫번째 탭 보이게함


});

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

    $('#save').show(); //저장버튼
    $('#delete').show(); //삭제버튼
    $('#enroll').show(); //신규등록 버튼

    /*공통 모듈이지만 버튼 show, hide 추가할 것 아니면 class로 해도될 것같다.*/
    $(this).toggleClass("highlight");
    var target = $('.highlight');
    target.not($(this)).removeClass("highlight");

    /*테이블 명을 가져와야 한다.*/
    var table = $(this).parent().attr("id");
    var first = target.children().eq(0).text();
    var second = target.children().eq(1).text();

    info_load(table, first, second);





});