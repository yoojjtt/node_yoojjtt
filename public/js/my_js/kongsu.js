// JavaScript Document

var kongsu = function ()
{

    var test = "test_var";

    return {

        kongsu_load : function(month, daily){

            var gubun = "R";
            var iData = ['hyunjang_no','daily_employee_num','month','daily','infoType'];
            /* 임시 데이터 베이스*/


            iData[0] = $('#hyunjang_select').val();
            iData[1] = '';
            iData[2] = month;  // 날짜  2017-08  (월까지만 자른다.)
            iData[3] = daily;
            iData[4] = 'daily';  //'daily'


            var result = _DB_query.httpService("kongsu_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;


            $('#kongsu_table_body').empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';

                str += "<tr>"
                str += "<td>" + "<input onClick='kongsu.kongsu_check(this)' name='checkBox2' type='checkbox'>"+"</td>";
                str += "<td style='display:none;'>" + res[i].daily_employee_num + "</td>";
                str += "<td>" + res[i].name + "</td>";
                str += "<td>" + res[i].jumin1 +"-"+ res[i].jumin2 + "</td>";
                str += "<td>" + res[i].job+ "</td>";
                str += "<td>" + res[i].kongsu + "</td>";
                str += "</tr>"
                $('#kongsu_table_body').append(str);
            }
        },
        kongsu_save : function(){
            var hyunjang_id = $('#hyunjang_select').val();
            var kongsu = $('#Kongsu_type').val();
            var daily = $('#dateSearch').val();
            var total_num = result_data_save.length;
            var idGroup = '';
        alert(result_data_save);
            for(var i = 0 ; i < total_num; i++){
                var id = result_data_save[i];

                idGroup += id + "@";

            }
            //alert(idGroup);


            var gubun = "S";
            var iData = ['hyunjang_id','daily_employee_num','date','kongsu','total_num'];
            /* 임시 데이터 베이스*/
            iData[0] = hyunjang_id;
            iData[1] = idGroup;
            iData[2] = daily;
            iData[3] = kongsu;
            iData[4] = total_num;


            var result = _DB_query.httpService("kongsu_info",gubun, iData);
            var res = result[0].data[0];
            var res_num = result[0].data[0].length;
            var msg = result[0].data[0][0].msg;
            //var res = result[0].data[0][0];
            var return_code = result[0].data[0][0].return_code;

            if(return_code == '100'){
                //alert(msg);
                location.reload();


            }


        },
        kongsu_check : function(me){
            var isChecked = $(me).is(":checked");
            var txt;


            if(isChecked == true) {  //checked 되있다면
                txt = $(me).parent().parent().children().eq(1).text().trim();

                //alert(txt);

                var find_id = result_data_save.indexOf(txt, 0);
                if(find_id != -1) {  // 있다면
                    alert(error);
                }else{
                    result_data_save.push(txt); // 배열에 추가
                }

            }else{  // checkd 해제 했다면 
                txt = $(me).parent().parent().children().eq(1).text().trim();
                //alert(txt);
                var find_id = result_data_save.indexOf(txt, 0);
                if(find_id != -1) {  // 있다면
                    result_data_save.splice(find_id, 1);  // 배열에서 제외
                }else{
                    alert(err);
                }

            }
            //alert(result_data_save);

        }



    };

}();



