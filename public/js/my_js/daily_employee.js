// JavaScript Document

var daily_employee = function ()
{

    var test = "test_var";

    return {

        daily_employee_load : function(job){

            var gubun = "R";
            var iData = ['job'];
            iData[0] = job;

            var result = _DB_query.httpService("daily_employee_info",gubun, iData);
            var res = result[0].data[0];

            var res_num = result[0].data[0].length;
            $('#total_daily_employee_no').empty().append(res_num);
            $("#daily_employee_list").empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var j = i+1;

                str += "<tr>";
                //str += "<td>" + j + "</td>";
                str += "<td>" + res[i].job + "</td>";
                str += "<td>" + res[i].name + "</td>";
                str += "<td>" + res[i].jumin1 + "</td>";
                str += "<td style='display:none;'>" + res[i].id + "</td>";

                str += "</tr>";
                $("#daily_employee_list").append(str);
            }


        },
        daily_employee_indv_load : function(employee_id) {

         var gubun = "individual";
         var iData = ['employee_id'];
         iData[0] = employee_id;

        var result = _DB_query.httpService("daily_employee_info",gubun, iData);
        var msg = result[0].data[0][0].msg;
        var res = result[0].data[0][0];
        var return_code = result[0].data[0][0].return_code;

            $('#daily_employee_name').val(res.name);
            $('#daily_employee_jumin1').val(res.jumin1);
            $('#daily_employee_jumin2').val(res.jumin2);


            var str = "<option>"+res.job+"</option>";
            $('#daily_employee_job').empty().append(str);

            var phone = res.phone.split("-");

            $('#daily_employee_phone1').val(phone[0]);
            $('#daily_employee_phone2').val(phone[1]);
            $('#daily_employee_phone3').val(phone[2]);

            $('#daily_employee_postnum').val(res.address1);
            $('#daily_employee_address').val(res.address2+" "+res.postnum);

            $('#daily_employee_bank_owner').val(res.bank_owner);

            var str2 = "<option>"+res.bank_name+"</option>";
            $('#daily_employee_bank_name').empty().append(str2);
            $('#daily_employee_bank_account').val(res.bank_account);

        },
        daily_employee_sujung : function(hyunjang_no){



        }



    };

}();



