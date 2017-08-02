// JavaScript Document

var daily_employee_register = function ()
{

    var test = "test_var";

    return {

        hyunjang_load : function(proc){
            //공사 중인 것 만 불러온다.
            var gubun = "R";
            var iData = ['proc'];
            iData[0] = proc;

            var result = _DB_query.httpService("hyunjang_info",gubun, iData);
            var res = result[0].data[0];

            var res_num = result[0].data[0].length;


            $("#hyunjang_select").empty();
            for (var i = 0; i < res_num; i++)
            {
                var str = '';
                //var j = i+1;
                str += "<option value='"+res[i].id+"'>";
                str += res[i].hyun_jang_name

                str += "</option>";
                $("#hyunjang_select").append(str);

            }

        },
        daily_employee_include : function(employee_id){

            var gubun = "individual";
            var iData = ['employee_id'];
            iData[0] = employee_id;

            var result = _DB_query.httpService("daily_employee_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var res = result[0].data[0][0];
            var return_code = result[0].data[0][0].return_code;





            if(result_data.indexOf("'"+res.id+"'") == -1){

                result_data.push("'"+res.id+"'");
                var str = '';
                str += "<tr>";
                str += "<td>"+ "<input onClick='checkbox_delete()' name='checkBox' type='checkbox' checked>"+"</td>";
                str += "<td>"+ res.job +"</td>";
                str += "<td>"+ res.name +"</td>";
                str += "<td>"+ "<input type='text'>" +"</td>";
                str += "<td style='display:none;'>"+ res.id +"</td>";
                str += "</tr>";

                $('#monthly_danga').append(str);
            }else{
                alert('이미 등록됨');
            }

            /*
              var res_num = result_data.length;
              for(var i = 0; i < res_num; i++){
                  alert(result_data[i]);
              }

            */

        },
        monthly_danga_load : function(){   //  현장 선택하고 월 선택하면 해당 월의 현장에 등록된 일용직 조회
            var month = $('#toMonth').val();
            var hyunjang_id = $('#hyunjang_select').val();
            var gubun = "R";
            var iData = ['hyunjang_id','month'];
            iData[0] = hyunjang_id;
            iData[1] = month;


            var result = _DB_query.httpService("daily_employee_register_info",gubun, iData);
            var res = result[0].data[0];

            var res_num = result[0].data[0].length;


            $('#monthly_danga').empty();
            for (var i = 0; i < res_num; i++)
            {
                result_data.push("'"+res[i].id+"'");
                var str = '';
                str += "<tr>";
                str += "<td>"+ "<input onClick='checkbox_delete()' name='checkBox' type='checkbox' checked>"+"</td>";
                str += "<td>"+ res[i].job +"</td>";
                str += "<td>"+ res[i].name +"</td>";
                str += "<td>"+ "<input type='text' value='"+res[i].daily_salary+"'>" +"</td>";
                str += "<td style='display:none;'>"+ res[i].id +"</td>";
                str += "</tr>";
                $('#monthly_danga').append(str);
            }



        },
        monthly_danga_save : function(){
            var month = $('#toMonth').val();
            var hyunjang_id = $('#hyunjang_select').val();

            if (!month){
                alert('등록할 날짜를 선택하세요');
                $('#toMonth').focus();
                return false
            }
            if(!hyunjang_id){
                alert('현장을 선택하세요');
                $('#hyunjang_select').focus();
                return false
            }

            //alert($('#monthly_danga tr').size());
            var total_num = $('#monthly_danga tr').size();
            var idGroup = '';
            var dangaGroup = '';
            for (var i = 0; i < total_num; i++) {

                var chk = $('#monthly_danga tr').eq(i).children().find('input[type="checkbox"]').is(':checked');
                var id = $('#monthly_danga tr').eq(i).children().eq(4).text();
                if (chk == true) {

                    var danga = $('table tr').eq(i+1).find('input[type="text"]').val();
                    //alert(id+"님의 단가: "+danga);
                    //TODO danga에는 i+1 을 해야 오류가 나지않는 이유는??
                    idGroup += id + "@";
                    dangaGroup += danga + "@";

                }
            }

            //alert(idGroup+"///"+dangaGroup);


            var gubun = "S";
            var iData = ['hyunjang_id','idGroup','month','dangaGroup','total_num'];
            iData[0] = hyunjang_id;
            iData[1] = idGroup;
            iData[2] = month;
            iData[3] = dangaGroup;
            iData[4] = total_num;

            var result = _DB_query.httpService("daily_employee_register_info",gubun, iData);
            var msg = result[0].data[0][0].msg;
            var res = result[0].data[0][0];
            var return_code = result[0].data[0][0].return_code;
            alert(msg);







        },




    };

}();



