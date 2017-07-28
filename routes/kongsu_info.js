
var router_name = 'kongsu_info';

function kongsu_info(router, parent)  //  /m, Mobile_routerAct   생성자
{

    console.log('router '+router_name+' standby~~');

    var self = this;
    self.handleRoutes(router, parent);  //  /m, Mobile_routerAct

}

kongsu_info.prototype.handleRoutes = function(router, parent)  //  /m, Mobile_routerAct
{
    var parent = parent;  //Mobile_routerAct

    router.post("/"+router_name+"/ajax.json", function(req, res) { //  /m/kongsu_info/ajax.json

        //var apiKey = req.body.apiKey;
        var gubun = req.body.gubun;
        var data = req.body.data;
        //console.log(apiKey);



        if(gubun =="R") {
            var company_no = data[0];
            var hyun_jang_num = data[1];
            var daily_employee_num = data[2];
            var date = data[3];
            var infoType = data[4];




            var query = "CALL daily_kongsu_R('"+company_no+"','"+hyun_jang_num+"','"+daily_employee_num+"','"+
                date+"','"+infoType+"')";

            console.log(query+": 공수 daily 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec


        }
        if(gubun =="S"){
            /*
            var hyunjang_no = data[0];


            var query = "CALL hyunjang_R('','"+ hyunjang_no+"')";

            console.log(query+": 개별 현장정보 로드");

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec
            */
        }


    });

}

kongsu_info.prototype.query_after = function(res, req, result, error)
{
    console.log(return_data);




}

module.exports = kongsu_info;