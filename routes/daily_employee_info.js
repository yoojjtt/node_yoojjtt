
var router_name = 'daily_employee_info';

function daily_employee_info(router, parent)  //  /m, Mobile_routerAct   생성자
{

    console.log('router '+router_name+' standby~~');

    var self = this;
    self.handleRoutes(router, parent);  //  /m, Mobile_routerAct

}

daily_employee_info.prototype.handleRoutes = function(router, parent)  //  /m, Mobile_routerAct
{
    var parent = parent;  //Mobile_routerAct

    router.post("/"+router_name+"/ajax.json", function(req, res) { //  /m/daily_employee_info/ajax.json

        //var apiKey = req.body.apiKey;
        var gubun = req.body.gubun;
        var data = req.body.data;
        //console.log(apiKey);



        if(gubun =="R") {
            var company_no = data[0];



            var query = "CALL daily_employee_R("+company_no+")";

            console.log(query+": 일용직 리스트 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec


        }
        if(gubun =="S"){
            var hyunjang_no = data[0];


            var query = "CALL daily_member_S('','"+ hyunjang_no+"')";

            console.log(query+": 개별 현장정보 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec

        }


    });

}

daily_employee_info.prototype.query_after = function(res, req, result, error)
{
    console.log(return_data);




}

module.exports = daily_employee_info;