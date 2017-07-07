// JavaScript Document

var auth = function ()
{

    var test = "test_var";

    return {

        login_process : function(){
            var gubun = "login";
            var iData = ['company_id','user_phone','user_pwd'];
            iData[0] = $('#company_id').val();
            iData[1] = $('#user_phone').val();
            iData[2] = $('#user_pwd').val();

            var result = _DB_query.httpService("auth",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var res = result[0].data[0][0];
            var last_time = result[0].data[0][0].last_time;
            var return_code = result[0].data[0][0].return_code;


            if(return_code =='100'){
                var name = res.userName;
                var company_no = res.companyNo;
                set_Cookie('sess_name',name,1);
                set_Cookie('sess_company_no',company_no,1);
                set_Cookie('sess_phone', res.phone,1);
                set_Cookie('sess_type', res.type,1);
                alert(get_Cookie('sess_name')+"님 안녕하세요.");
                alert(last_time);

                if(get_Cookie('sess_name')){

                    location.href="/";

                }

            }else if(return_code == '600'){  //유효기간이 지난 경우
                alert(msg);

            }else if(return_code == '500'){  // 일치하는 회사계정이 없는 경우
                alert(msg);
                $('#company_id').val('');
            }
            else if(return_code =='200'){  //아이디 비번 틀림
                alert(msg);
                $('#company_id').val('');
                $('#user_phone').val('');
                $('#user_pwd').val('');
            }






        },
        logout_process : function(){
            var gubun = "logout";
            var iData = ['company_no','name'];


            iData[0] =  get_Cookie('sess_company_no');
            iData[1] = get_Cookie('sess_name');

            var result = _DB_query.httpService("auth",gubun,iData);
            var res = result[0].data[0][0].msg;
            alert(res);
            if(res){  // msg있을 경우 false
                deleteCookie('sess_name');
                deleteCookie('sess_company_no');
                location.href='/';
                return true;
            }else{
                return false;
            }



        }


    };

}();



