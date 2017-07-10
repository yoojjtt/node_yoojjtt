// JavaScript Document

var password = function ()
{

    var test = "test_var";

    return {

        password_load : function(email){

            var gubun = "R";
            var iData = ['email'];
            iData[0] = email;

            var result = _DB_query.httpService("password_info",gubun, iData);
            var res = result[0].data[0][0];
            iData[0] = $('#pwd').val(res.pwd);






        },
        password_sujung : function(email){
            var pwd1 = $('#new_pwd').val();
            var pwd2 = $('#new_pwd2').val();
            if(pwd1 !==pwd2){
                alert('일치하지 않습니다. 비밀번호를 확인하세요.');
                return false
            }

            var gubun = "S";
            var iData = ['new_pwd', 'email'];
            iData[0] = $('#new_pwd').val();
            iData[1] = email;



            var result = _DB_query.httpService("password_info",gubun, iData);

            var msg = result[0].data[0][0].msg;
            var return_code = result[0].data[0][0].return_code;

            if(return_code =="100"){
                alert(msg);
                location.reload();

            }


            // 신상정보를 수정하면 재로그인 하도록,




        }



    };

}();



