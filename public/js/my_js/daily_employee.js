// JavaScript Document

var daily_employee = function ()
{

    var test = "test_var";

    return {

        daily_employee_load : function(company_no){

            var gubun = "R";
            var iData = ['company_no'];
            iData[0] = company_no;

            var result = _DB_query.httpService("daily_employee_info",gubun, iData);
            var res = result[0].data[0];

            var res_num = result[0].data[0].length;


            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var j = i+1;

                str += "<tr>";
                //str += "<td>" + j + "</td>";
                str += "<td>" + res[i].name + "</td>";
                str += "<td>" + res[i].job + "</td>";
                //str += "<td>" + res[i].phone + "</td>";
                //str += "<td>" + res[i].address1 + "</td>";
                //str += "<td>" + res[i].address2 + "</td>";
                //str += "</tr>";
                $("#daily_employee_list").append(str);
            }


        },
        daily_employee_sujung : function(hyunjang_no){



        }



    };

}();



