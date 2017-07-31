$(document).ready(function(){


    email = get_Cookie('sess_userEmail');  // cookie 전역변수로 써줌
    company_no = get_Cookie('sess_company_no');
    type = get_Cookie('sess_type');

});


/*table click event  ---------------------*/
$("tbody").on("click", "tr", function(){//

    $(this).toggleClass("highlight");

    var target = $('.highlight');
    target.not($(this)).removeClass("highlight");

    /*테이블 명을 가져와야 한다.*/
    var table = $(this).parent().attr("id");

    var first = $(this).children().eq(0).text();
    var second = $(this).children().eq(1).text();
    var third = $(this).children().eq(2).text();
    var forth = $(this).children().eq(3).text();


    if(table =='employees_list'){daily_employee.daily_employee_indv_load(forth);}  // 직원 개별정보 불러올 때

    if(table =='hyunjang_list'){hyunjang.hyunjang_indv_load(forth);} //현장 개별 정보 로드

    if(table =='daily_employee_list'){daily_employee.daily_employee_indv_load(forth);} // 일용직 개별 정보 로드



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
