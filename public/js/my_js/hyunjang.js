// JavaScript Document

var hyunjang = function ()
{

    var test = "test_var";

    return {

        hyunjang_load : function(proc){
        //TODO hyunjang_proc 에서 1인 경우 공사 중, 2인 경우 공사 종료
            var gubun = "R";
            var iData = ['proc'];
            iData[0] = proc;


            var result = _DB_query.httpService("hyunjang_info",gubun, iData);
            var res = result[0].data[0];
            //iData[0] = $('#pwd').val(res.pwd);
            var res_num = result[0].data[0].length;
            -
            $("#total_no").empty().append(res_num);
            $("#hyunjang_list").empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var j = i+1;

                str += "<tr>"

                str += "<td>" + res[i].hyun_jang_name + "</td>"
                str += "<td>" + res[i].bogoja + "</td>"
                str += "<td>" + res[i].hyunjang_start+" ~ "+res[i].hyunjang_end + "</td>"
                str += "<td style='display:none;'>" + res[i].id + "</td>"



                str += "</tr>"

                $("#hyunjang_list").append(str);

            }






        },
        hyunjang_indv_load : function(hyunjang_no){


            var gubun = "individual";
            var iData = ['hyunjang_no'];
            iData[0] = hyunjang_no




            var result = _DB_query.httpService("hyunjang_info",gubun, iData);

            var msg = result[0].data[0][0].msg;
            var res = result[0].data[0][0];
            var return_code = result[0].data[0][0].return_code;



            $('#hyun_jang_name').val(res.hyun_jang_name);
            $('#hyunjang_id').val(res.id);
            var str = "<option>"+res.bogoja+"</option>";
            $('#bogoja').empty().append(str);
            $('#hyun_jang_number').val(res.hyun_jang_number);
            $('#balju_company').val(res.balju_company);
            $('#hyunjang_start').val(res.hyunjang_start);
            $('#hyunjang_end').val(res.hyunjang_end);
            $('#hyun_jang_content').val(res.hyun_jang_content);
            $('#remark').val(res.remark);

            var proc = res.hyunjang_proc;

            if(proc == 1){
                $('input:radio[name=sex]:input[value=2]').prop("checked", false);
                $('input:radio[name=sex]:input[value=1]').prop("checked", true);

            }else if(proc == 2){
                $('input:radio[name=sex]:input[value=1]').prop("checked", false);
                $('input:radio[name=sex]:input[value=2]').prop("checked", true);
            }




        },
        new_hyunjang : function(){
            $('#hyunjang_id').val(0);
            $('#hyun_jang_name').val('');
            $('#hyun_jang_number').val('');
            $('#balju_company').val('');
            $('#hyunjang_start').val('');
            $('#hyunjang_end').val('');
            $('#hyun_jang_content').val('');
            $('#remark').val('');

            var gubun = "selectR";
            var iData = ['manager'];
            iData[0] = 'manager';

            var result = _DB_query.httpService("employee_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;
            $("#bogoja").empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                str += "<option>" + res[i].name + "</option>"
                $("#bogoja").append(str);
            }

        },
        hyunjang_save : function(){
            var radio = $('input[type=radio][name=sex]:checked').val();


            var gubun = "S";
            var iData = ['hyunjang_id','hyunjang_no','proc','bogoja','balju_company','hyun_jang_number'
                ,'hyunjang_start','hyunjang_end','hyun_jang_content','remark'];



            iData[0] = $('#hyunjang_id').val();
            iData[1] = $('#hyun_jang_name').val();
            iData[2] = radio;
            iData[3] = $('#bogoja').val();
            iData[4] = $('#balju_company').val();
            iData[5] = $('#hyun_jang_number').val();
            iData[6] = $('#hyunjang_start').val();
            iData[7] = $('#hyunjang_end').val();
            iData[8] = $('#hyun_jang_content').val();
            iData[9] = $('#remark').val();
            var result = _DB_query.httpService("hyunjang_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var return_code = result[0].data[0][0].return_code;

            if(return_code =="100"){
                alert(msg);
                location.reload();

            }


        }



    };

}();



