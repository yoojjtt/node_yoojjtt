// JavaScript Document

var closing = function ()
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
            iData[4] = 'monthly';  //'daily'


            var result = _DB_query.httpService("kongsu_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;


            $('#kongsu_table_body').empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var kongsu = res[i].attendance;
                var kongsu_daily = kongsu.split('@');
                var tot_num = kongsu_daily.length;

                if(res[i].attendance == null){
                    kongsu = '미입력';
                    // TODO 결석 배열 만들어서 결석 토탈에 넣어준다.
                }


                str += "<tr>"

                str += "<td style='display:none;'>" + res[i].daily_employee_num + "</td>";
                str += "<td>" + res[i].name + "</td>";
                str += "<td>" + res[i].job+ "</td>";
                str += "<td>" + res[i].jumin1 +"-"+ res[i].jumin2 + "</td>";




                var daily_salary_total = res[i].daily_salary;
                var total_salary = 0;  // 금액을 더할 때는 in 로 초기값 설정해야 한다.
                str += "<td>"

                    for(var j = 0; j < tot_num; j++){
                        str += "<div class='label_week_date'>"+kongsu_daily[j] + "</div>"


                        total_salary += daily_salary_total * kongsu_daily[j];
                    }


                str += "</td>";
                str += "<td>"+ res[i].daily_salary.toLocaleString() +"</td>";
                str += "<td>"+  total_salary.toLocaleString() +"</td>";
                str += "</tr>"
                $('#kongsu_table_body').append(str);
            }

        },


    };

}();


