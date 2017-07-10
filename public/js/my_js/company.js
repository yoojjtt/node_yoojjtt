// JavaScript Document

var company = function ()
{

    var test = "test_var";

    return {

        company_load : function(company_no){

            var gubun = "R";
            var iData = ['company_no'];
            iData[0] = company_no;

            var result = _DB_query.httpService("company_info",gubun, iData);
            var res = result[0].data[0][0];
            iData[0] = $('#company_name').val(res.company_name);
            iData[1] = $('#president_email').val(res.president_email);
            iData[2] = $('#president').val(res.president);
            iData[3] = $('#c_phone').val(res.c_phone);
            iData[4] = $('#c_fax').val(res.c_fax);
            iData[5] = $('#c_postnum').val(res.c_postnum);
            iData[6] = $('#c_address1').val(res.c_address1);
            iData[7] = $('#c_address2').val(res.c_address2);
            iData[8] = $('#c_LawNumber').val(res.c_LawNumber);
            iData[9] = $('#c_bank_owner').val(res.c_bank_owner);
            iData[10] = $('#c_bank_name').val(res.c_bank_name);
            iData[11] = $('#c_bank_account').val(res.c_bank_account);





        },
        company_sujung : function(){

            var gubun = "S";
            var iData = ['company_name','company_id','president','c_phone','c_fax','c_postnum',
                'c_address1','c_address2','c_LawNumber','c_bank_owner','c_bank_name','c_bank_account'];
            iData[0] = $('#company_name').val();
            iData[1] = $('#president_email').val();
            iData[2] = $('#president').val();
            iData[3] = $('#c_phone').val();
            iData[4] = $('#c_fax').val();
            iData[5] = $('#c_postnum').val();
            iData[6] = $('#c_address1').val();
            iData[7] = $('#c_address2').val();
            iData[8] = $('#c_LawNumber').val();
            iData[9] = $('#c_bank_owner').val();
            iData[10] = $('#c_bank_name').val();
            iData[11] = $('#c_bank_account').val();


            var result = _DB_query.httpService("company_info",gubun, iData);

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



