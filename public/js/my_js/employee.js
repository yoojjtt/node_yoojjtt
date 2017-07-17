// JavaScript Document

var employee = function ()
{

    var test = "test_var";

    return {

        employee_load : function(company_no, email, type){  //profile에 개인정보, 직원리스트에서 클릭할 때 개인정보
            var gubun = "R";
            var iData = ['company_no', 'email', 'type'];
            iData[0] = company_no;
            iData[1] = email;
            iData[2] = type;
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
                $('#em_jumin1').val(res.jumin1);
                $('#em_jumin2').val(res.jumin2);
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
                location.reload();

            }  

        },
        employees_load : function(company_no){  //직원 목록에 직원들 리스트 로드
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
        new_employee : function(){  // 직원등록 버튼 클릭할 경우
            $('#employee_title').text('직원 신규등록');
            $('#em_name').val('');
            $('#em_jumin1').attr('disabled', false).val('');
            $('#em_jumin2').attr('disabled', false).val('');
            $('#em_phone').val('');
            $('#em_email').val('');
            $('#em_account_owner').val('');
            $('#em_account_name').val('');
            $('#em_account').val('');
            $('#em_type').val('');
            $('#employee_update').hide();
            $('#employee_delete').hide();
            $('#employee_enroll').hide();

            $('tr').removeClass('highlight');

        },
        employee_save : function(){  // 직원등록에서 저장할 경우, 직원정보 수정하고 저장할 경우
            var type = $('#em_type').val();
            var email = $('#em_email').val();
            var name = $('#em_name').val();
            var phone = $('#em_phone').val();
            var account_owner = $('#em_account_owner').val();
            var account_name = $('#em_account_name').val();
            var account = $('#em_account').val();
            var jumin1 = $('#em_jumin1').val();
            var jumin2 = $('#em_jumin2').val();
            var jumin_num = jumin1.length + jumin2.length;


            if(!email){
                alert('이메일은 필수사항입니다.');
                $('#em_email').focus();
                return false
            }
            if(!name){
                alert('이름은 필수사항입니다.');
                $('#em_name').focus();
                return false
            }
            if(!phone){
                alert('핸드폰은 필수사항입니다.');
                $('#em_phone').focus();
                return false
            }
            if(!jumin1 && !jumin2){
                alert('주민번호는 필수사항입니다.');
                $('#em_jumin').focus();
                return false
            }

            if(jumin_num < 13){
                alert("주민 번호 형식이 잘못되었습니다.");
                return false
            }
            /*else{
                var jumin1 = jumin.substring(0,5);
                var jumin2 = jumin.substring(6, 13);
            }*/

            /*
            if(jumin_num > 13 && jumin_num < 15){
                var juminArray = jumin.split("-");
                var jumin1 = juminArray[0];
                var jumin2 = juminArray[1];
            }
            */




            var gubun = "S";
            var iData = ['type', 'email','jumin1','jumin2','name','phone','bank_owner','bank_name','bank_account', 'company_id'];
            iData[0] = type;
            iData[1] = email;
            iData[2] = jumin1;
            iData[3] = jumin2;
            iData[4] = name;
            iData[5] = phone;
            iData[6] = account_owner;
            iData[7] = account_name;
            iData[8] = account;
            iData[9] = get_Cookie('sess_company_no');



            var result = _DB_query.httpService("employee_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var return_code = result[0].data[0][0].return_code;

            if(return_code =="200"){
                alert(msg);
                location.reload();

            }
            if(return_code == '100'){
                alert(msg);
                location.reload();
            }

        },




    };

}();



