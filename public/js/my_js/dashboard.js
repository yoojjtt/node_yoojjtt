
// JavaScript Document

var dashboard = function ()
{

    var test = "test_var";

    return {

        monthly_closing_load : function(){

            var month = $('#toMonth').val();
            //alert(month);


            var gubun = "R";
            var iData = ['month',];

            iData[0] = month;


            var result = _DB_query.httpService("dashboard_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;
            var j = 0;
            $('#dashboard_table_body').empty();
            for (var i = 0; i < res_num; i++)
            {

                j ++;
                var str = '';
                //var kongsu = res[i].kongsu;
                str += "<tr>"
                str += "<td>" + j +"</td>";
                str += "<td style='display:none;'>" + res[i].id + "</td>";
                str += "<td>" + res[i].hyun_jang_name + "</td>";
                str += "<td>" + res[i].bogoja + "</td>";
                str += "<td>" + res[i].balju_company + "</td>";
                str += "<td>" + res[i].hyunjang_start+ "</td>";
                str += "<td>" + res[i].hyunjang_end+ "</td>";

                str += "<td>" + res[i].num_manager+"명" + "</td>";
                str += "<td>" + res[i].num_worker+"명" + "</td>";

                var average_danga = parseInt(res[i].average_danga).toLocaleString();
                if(average_danga == NaN){
                    alert(average_danga);
                }
                str += "<td>" + average_danga + "</td>";
                str += "<td>" + "얼마" + "</td>";
                str += "<td>" + "얼마" + "</td>";
                str += "<td>" + "얼마" + "</td>";
                str += "<td>" + "얼마" + "</td>";
                str += "<td>"+"</td>";
                str += "</tr>"
                $('#dashboard_table_body').append(str);
            }

        },


    };

}();



