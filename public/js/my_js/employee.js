// JavaScript Document

var employee = function ()
{

    var test = "test_var";

    return {

        employee_load : function(name, company_no, phone){  // 개인만 로드
            var gubun = "R";
            var iData = ['name', 'company_no', 'phone'];
            iData[0] = name;
            iData[1] = company_no;
            iData[2] = phone;
            var result = _DB_query.httpService("employee_info",gubun, iData);
            var res = result[0].data[0][0];
            var profile_email = document.getElementById("email");

            if(profile_email){  // profile 에서 신상 조회할 때
                $('#email').val(res.email);
                $('#jumin1').val(res.jumin1);
                $('#jumin2').val(res.jumin2);
                $('#name').val(res.name);
                $('#phone').val(res.phone);
                $('#bank_owner').val(res.bank_owner);
                $('#bank_name').val(res.bank_name);
                $('#bank_account').val(res.bank_account);

            }else{  // 직원 목록에서 신상 조회할 때
                $('#em_name').val(res.name);
                $('#em_jumin').val(res.jumin1 + res.jumin2);
                $('#em_phone').val(res.phone);
                $('#em_email').val(res.email);
                $('#em_account_owner').val(res.bank_owner);
                $('#em_account_name').val(res.bank_name);
                $('#em_account').val(res.bank_account);
                $('#em_type').val(res.type);
            }






        },
        employee_sujung : function(){  // 개인정보 수정
            //TODO profile 페이지일 경우에는 trim
            var gubun = "S";
            var iData = ['type', 'email','jumin1','jumin2','name','phone','bank_owner','bank_name','bank_account', 'company_id'];
            iData[0] = '';
            iData[1] = $('#email').val();
            iData[2] = $('#jumin1').val();
            iData[3] = $('#jumin2').val();
            iData[4] = $('#name').val();
            iData[5] = $('#phone').val();
            iData[6] = $('#bank_owner').val();
            iData[7] = $('#bank_name').val();
            iData[8] = $('#bank_account').val();
            iData[9] = get_Cookie('sess_company_no');


            var result = _DB_query.httpService("employee_info",gubun, iData);

            var msg = result[0].data[0][0].msg;
            var return_code = result[0].data[0][0].return_code;

            if(return_code =="100"){
                alert(msg);
                alert('로그아웃 하셔야 합니다.');

            }  

        },
        new_employee : function(){
            $('#em_name').val('');
            $('#em_jumin').val('');
            $('#em_phone').val('');
            $('#em_email').val('');
            $('#em_account_owner').val('');
            $('#em_account_name').val('');
            $('#em_account').val('');
            $('#em_type').val('');
            $('#em_update').hide();
            $('#em_delete').hide();
            $('#em_new').show();
            $('tr').removeClass('highlight');

        },
        new_employee_insert : function(){

            var jumin = $('#em_jumin').val();
            var jumin_num = jumin.length;

            if(jumin_num > 13 && jumin_num < 15){
                var juminArray = jumin.split("-");
                var jumin1 = juminArray[0];
                var jumin2 = juminArray[1];
            }else if(jumin_num = 13){
                var jumin1 = jumin.substring(0,5);
                var jumin2 = jumin.substring(6, 12);
            }else if(jumin_num < 13 && jumin_num > 14 ){
                alert("주민 번호 형식이 잘못되었습니다.");
            }// 예외 14자리인데 잘못해서 숫자하나더 입력한 경우


            var gubun = "S";
            var iData = ['type', 'email','jumin1','jumin2','name','phone','bank_owner','bank_name','bank_account', 'company_id'];
            iData[0] = $('#em_type').val();
            iData[1] = $('#em_email').val();
            iData[2] = jumin1;
            iData[3] = jumin2;
            iData[4] = $('#em_name').val();
            iData[5] = $('#em_phone').val();
            iData[6] = $('#em_account_owner').val();
            iData[7] = $('#em_account_name').val();
            iData[8] = $('#em_account').val();
            iData[9] = get_Cookie('sess_company_no');


            var result = _DB_query.httpService("employee_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var return_code = result[0].data[0][0].return_code;

            if(return_code =="200"){
                alert(msg);
                location.href = "/";

            }

        },
        employees_load : function(company_no){  //직원 전체 로드
            var gubun = "employees";
            var iData = ['company_no'];
            iData[0] = company_no;

            var result = _DB_query.httpService("employee_info",gubun, iData);



            var res = result[0].data[0];
            var res_num = result[0].data[0].length;


            for (var i = 0; i < res_num; i++)
            {
                var str = '';

                str += "<tr>"
                str += "<td>" + res[i].name + "</td>"
                str += "<td>" + res[i].phone + "</td>"
                str += "<td>" + res[i].email + "</td>"
                str += "<td>" + res[i].type + "</td>"

                str += "</tr>"
                $("#employees_list").append(str);
            }






        },



    };

}();



