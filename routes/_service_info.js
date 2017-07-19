
var router_name = 'service_info';

function service_info(router, parent)  //  /m, Mobile_routerAct   생성자
{

    console.log('router '+router_name+' standby~~');

    var self = this;
    self.handleRoutes(router, parent);  //  /m, Mobile_routerAct

}

service_info.prototype.handleRoutes = function(router, parent)  //  /m, Mobile_routerAct
{
    var parent = parent;  //Mobile_routerAct

    router.post("/"+router_name+"/ajax.json", function(req, res) { //  /m/service_info/ajax.json

        //var apiKey = req.body.apiKey;
        var gubun = req.body.gubun;
        var data = req.body.data;
        //console.log(apiKey);



        if(gubun =="R") {

            var super_email = data[0];


            var query = "CALL _expiration_date_R('"+super_email+"')";

            console.log(query+": 사용기간 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec


        }
        if(gubun =="S"){

            var company_no = data[0];
            var email = data[1];


            var query = "CALL _expiration_date_S('"+company_no+"','"+email+"')";

            console.log(query+": 사용기간 수정");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec

        }


    });

}

service_info.prototype.query_after = function(res, req, result, error)
{





}

module.exports = service_info;