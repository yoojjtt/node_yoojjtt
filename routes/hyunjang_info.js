
var router_name = 'hyunjang_info';

function hyunjang_info(router, parent)  //  /m, Mobile_routerAct   생성자
{

    console.log('router '+router_name+' standby~~');

    var self = this;
    self.handleRoutes(router, parent);  //  /m, Mobile_routerAct

}

hyunjang_info.prototype.handleRoutes = function(router, parent)  //  /m, Mobile_routerAct
{
    var parent = parent;  //Mobile_routerAct

    router.post("/"+router_name+"/ajax.json", function(req, res) { //  /m/hyunjang_info/ajax.json

        //var apiKey = req.body.apiKey;
        var gubun = req.body.gubun;
        var data = req.body.data;
        //console.log(apiKey);



        if(gubun =="R") {
            var company_no = data[0];



            var query = "CALL hyunjang_R('"+company_no+"','')";

            console.log(query);

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec


        }
        if(gubun =="individual"){
            var hyunjang_no = data[0];


            var query = "CALL hyunjang_R('','"+ hyunjang_no+"')";

            console.log(query);

            parent.mysql_proc_exec(query, res, req, router_name); //Mobile_routerAct.mysql_proc_exec

        }


    });

}

hyunjang_info.prototype.query_after = function(res, req, result, error)
{
    console.log(return_data);




}

module.exports = hyunjang_info;