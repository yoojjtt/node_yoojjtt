
var router_name = 'employee_info';

function employee_info(router, parent)  //  /m, Mobile_routerAct   생성자
{

    console.log('router '+router_name+' standby~~');

    var self = this;
    self.handleRoutes(router, parent);  //  /m, Mobile_routerAct

}

employee_info.prototype.handleRoutes = function(router, parent)  //  /m, Mobile_routerAct
{
    var parent = parent;  //Mobile_routerAct

    router.post("/"+router_name+"/ajax.json", function(req, res) { //  /m/employee_info/ajax.json

        //var apiKey = req.body.apiKey;
        var gubun = req.body.gubun;
        var data = req.body.data;
        //console.log(apiKey);



        if(gubun =="R") {
            var company_no = data[0];
            var email = data[1];
            var type = data[2];


            var query = "CALL employee_list_R('"+email+"','"+type+"','"+company_no+"')";

            console.log(query+ ": 개인정보 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec


        }
        if(gubun =="S"){
            var type = data[0];
            var email = data[1];
            var jumin1 = data[2];
            var jumin2 = data[3];
            var name = data[4];
            var phone = data[5];
            var bank_owner = data[6];
            var bank_name = data[7];
            var bank_account = data[8];
            var company_id = data[9];


            var query = "CALL employee_list_S('"+type+"','"+email+"','"+jumin1+"','"+jumin2+"','"+jumin2+"','"+name+"','"+phone+"','"+bank_account+"','"+bank_name+"','"+bank_owner+"',"+ company_id +")";

            console.log(query +": 개인정보 수정");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec

        }
        if(gubun == "employees"){
            var company_no = data[0];

            var query = "CALL employee_list_R('','',"+company_no+")";

            console.log(query+": 직원리스트 정보 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec
        }


    });

}

employee_info.prototype.query_after = function(res, req, result, error)
{
    console.log(return_data);




}

module.exports = employee_info;