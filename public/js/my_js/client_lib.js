// JavaScript Document

var lib = function ()
{

    var test = "test_var";

    return {

        dateValue : function(){
            var now = new Date();
            var year= now.getFullYear();
            var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);  // 달이 9월이상이면 ''+10,11,12 찍고 아니면 '0'+ 먼스찍기
            var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
            var chan_val = year + '-' + mon + '-' + day;
            $('#dateSearch').val(chan_val);
        },
        dateValue_add : function(addday){  // 1이오면 하루 증가, -1 이 오면 하루 차감
            var day = document.getElementById('dateSearch').value;
            var resultDay = lib.GetDateAdd(day ,addday);
            //document.getElementById('dateSearch').value = day;
        },
        GetDateAdd : function(strSDate, Days){
            var SDate_pYyyymmdd = strSDate.replace(eval("/\\" + "-" + "/g"), "");
            var SDate_yyyy = SDate_pYyyymmdd.substr(0, 4) * 1;
            var SDate_mm = SDate_pYyyymmdd.substr(4, 2) * 1;
            var SDate_dd = SDate_pYyyymmdd.substr(6, 2) * 1;
            var SDate = new Date(SDate_yyyy, SDate_mm - 1, SDate_dd);
            SDate.getDate(SDate.getDate() + Days);
            var resultDate = new Date(Date.parse(SDate) + Days * 1000 * 60 * 60 * 24);
            var test =  resultDate.getFullYear() + "-" + ((resultDate.getMonth() + 101) +
                "").substring(1, 3) + "-" + ((resultDate.getDate() + 100) + "").substring(1, 3);

            $('#dateSearch').val(test);
            daily_search();
        }


    };

}();



