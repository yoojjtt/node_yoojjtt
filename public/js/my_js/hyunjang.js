// JavaScript Document

var hyunjang = function ()
{

    var test = "test_var";

    return {

        hyunjang_load : function(company_no){

            var gubun = "R";
            var iData = ['company_no'];
            iData[0] = company_no;

            var result = _DB_query.httpService("hyunjang_info",gubun, iData);
            var res = result[0].data[0];
            //iData[0] = $('#pwd').val(res.pwd);
            var res_num = result[0].data[0].length;


            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var j = i+1;

                str += "<tr>"

                str += "<td>" + j + "</td>"
                str += "<td>" + res[i].hyun_jang_name + "</td>"
                str += "<td>" + res[i].hyun_jang_content + "</td>"
                str += "<td>" + res[i].balju_company + "</td>"
                str += "<td>" + res[i].bogoja + "</td>"
                str += "<td>" + res[i].hyunjang_start + "</td>"
                str += "<td>" + res[i].hyunjang_end + "</td>"
                str += "<td style='display:none;'>" + res[i].no + "</td>"


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
            $('#bogoja').val(res.bogoja);
            $('#hyun_jang_content').val(res.hyun_jang_content);
            $('#balju_company').val(res.balju_company);
            $('#hyunjang_start').val(res.hyunjang_start);
            $('#hyunjang_end').val(res.hyunjang_end);
            $('#hyunjang_content').val(res.hyunjang_content);


        }



    };

}();



