// JavaScript Document

var service_auth = function ()
{

    var test = "test_var";

    return {

        load : function(email){
            var gubun = "R";
            var iData = ['super_user'];

            iData[0] = email;

            var result = _DB_query.httpService("service_info",gubun, iData);
            var msg = result[0].data[1][0].msg;
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;
            //lert(msg);

            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                var j = i+1;

                str += "<tr>";
                str += "<td>" + j + "</td>";
                str += "<td>" + res[i].name + "</td>";

                var startDay = new Date(res[i].startDay*1000);
                var s_year = startDay.getFullYear();
                var s_month = startDay.getMonth()+1;
                var s_date = startDay.getDate();


                var endDay = new Date(res[i].endDay*1000);
                var e_year = endDay.getFullYear();
                var e_month = endDay.getMonth()+1;
                var e_date = endDay.getDate();


                var gap_day = (endDay - startDay)/(24*60*60*1000);
                //var gap = new Date(Math.floor(gap_day));
                //var gap_date = gap.getDate();


                str += "<td style='text-align:center'>" + s_year+"년 " +s_month+"월 "+ s_date +"일 "
                    +"~"+ e_year+"년 " +e_month+"월 "+ e_date +"일 "
                    +"<span style='color:red;'>" +"("+"잔여일 수:  "+gap_day+" 일"+")"+"</span>"
                    +  "</td>";

                str += "<td>"

                    +"<div class='form-inline'>"

                            +"<span style='margin-right:5px;'>"
                            +"<input class='span2' type='number'/>"

                            +"</span>"

                            +"<button class='btn btn-success'style='margin-right:5px;' >연장</button>"
                            +"<button class='btn btn-danger' >정지</button>"
                    +"</div>"
                    + "</td>";


                str += "</tr>";
                $("#service_table").append(str);
            }






        },
        update : function(email, date, ban){
            var gubun = "login";
            var iData = ['user_email','date', 'ban'];

            iData[0] = email;
            iData[1] = date;
            iData[2] = ban;

            var result = _DB_query.httpService("_service_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var res = result[0].data[0][0];
            var last_time = result[0].data[0][0].last_time;
            var return_code = result[0].data[0][0].return_code;


        }


    };

}();



