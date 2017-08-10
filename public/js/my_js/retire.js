// JavaScript Document

var retire = function ()
{

    var test = "test_var";

    return {

        monthly_closing_load : function(){



                var gubun = "R";
                var iData = ['hyunjang_no','daily_employee_num','month','daily','infoType'];
                /* 임시 데이터 베이스*/


                iData[0] = $('#hyunjang_select').val();
                iData[1] = '';
                iData[2] = $('#toMonth').val();  // 날짜  2017-08  (월까지만 자른다.)
                iData[3] = '';
                iData[4] = 'retire';  //'daily'


                var result = _DB_query.httpService("retire_info",gubun, iData);
                var res = result[0].data[0];
                var res_num = result[0].data[0].length;
                var total_money = 0;
                var total_danga = 0;

                 var present_kongsu = 0;

                $('#retire_table_body').empty();
                for (var i = 0; i < res_num; i++)
                {

                    var str = '';
                    var k = i+1;

                    var start = res[i].start_work_kongsu;
                    var pluse_one = res[i].plus_one;
                    var pluse_two = res[i].plus_two;


                        //alert(present[1]);



                    str += "<tr>"
                        str += "<td style='display:none;'>" + res[i].daily_employee_num + "</td>";
                        str += "<td>" + k + "</td>";
                        str += "<td>" + res[i].name + "</td>";
                        str += "<td>" + res[i].job+ "</td>";
                        str += "<td>" + res[i].jumin1 +"-"+ res[i].jumin2 + "</td>";
                        str += "<td>" + res[i].start_work + "</td>";
                        str += "<td>" + start + "</td>";
                        str += "<td>" + pluse_one + "</td>";
                        str += "<td>" + pluse_two +"</td>";
                        str += "<td>" + "4월 공수" +"</td>";
                        str += "<td>" + "5월 공수" +"</td>";
                        str += "<td>" + "6월 공수" +"</td>";
                        str += "<td>" + "7월 공수" +"</td>";
                        str += "<td>" + "8월 공수" +"</td>";
                        str += "<td>" + "9월 공수" +"</td>";
                        str += "<td>" + "10월 공수" +"</td>";
                        str += "<td>" + "11월 공수" +"</td>";
                        str += "<td>" + "12월 공수" +"</td>";
                        str += "<td>" + "근무 개월 수" +"</td>";
                        str += "<td>" + "최근 3개월"+ "<br>"+ "평균 급여" +"</td>";
                    str += "</tr>"
                    $('#retire_table_body').append(str);


                    //total_money += total_salary;
                    //otal_danga += res[i].daily_salary;


                }









        },


    };

}();



