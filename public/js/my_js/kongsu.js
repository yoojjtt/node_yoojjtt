// JavaScript Document

var kongsu = function ()
{

    var test = "test_var";

    return {

        kongsu_load : function(company_no, hyunjang_no, date, infoType){

            var gubun = "R";
            var iData = ['company_no','hyunjang_no','daily_employee_num','date','infoType'];
            /* 임시 데이터 베이스*/
            iData[0] = company_no;
            iData[1] = hyunjang_no;
            iData[2] = '';
            iData[3] = date;
            iData[4] = infoType;


            var result = _DB_query.httpService("kongsu_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;



            for (var i = 0; i < res_num; i++)
            {
                var str = '';

                str += "<tr>"
                str += "<td>" + res[i].hyun_jang_cord + "</td>"
                str += "<td>" + res[i].daily_employee_num + "</td>"
                str += "<td>" + res[i].kongsu + "</td>"




                str += "</tr>"
                $('#kongsu_table_body').append(str);
            }






        },
        kongsu_sujung : function(){



        }



    };

}();



