// JavaScript Document

var nomu = function ()
{

    var test = "test_var";

    return {

        monthly_closing_load : function(){
            /*세금 정보를 먼저 불러온다. 혹시 오류 있을 수 있으니 변수뒤에 1을 붙여줌*/
            var gubun1 = "R";
            var iData1 = ['company_id'];
            iData1[0] = '';

            var result1 = _DB_query.httpService("tax_info",gubun1, iData1);
            var res1 = result1[0].data[0][0];
            var exception = res1.exception; //면세 범위
            var income = res1.income; // 갑근세::  (월급여 - exception) * 갑근세 * 근무일 수
            var jumin = res1.jumin; // 주민세
            var p_employee = res1.p_employee/100; // 개인 고용 보험
            var c_employee = res1.c_employee; // 법인 고용 보험
            var p_med = res1.p_med/100; // 개인 건강보험
            var c_med = res1.c_med; // 법인 건강보험
            var p_old = res1.p_old; // 개인 노인고용보험
            var c_old = res1.c_old; // 법인 노인고용보험
            var p_pension = res1.p_pension/100; // 개인 국민연금
            var c_pension = res1.c_pension; // 법인 국민연금
            var startDay = res1.startDay;  // 세금 적용기간 시작일
            var endDay = res1.endDay;  //세금 적용기간 종료일


            //alert(exception);


            if(result1){
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
                var total_money = 0;
                var total_danga = 0;
                var balju_company = res[0].balju_company;
                var bogoja = res[0].bogoja;
                var hyun_jang_name = res[0].hyun_jang_name;
                var hyun_jang_number = res[0].hyun_jang_number;
                var company_name = res[0].company_name;
                var company_address = res[0].company_address;
                var company_phone = res[0].company_phone;
                var president = res[0].president;

                //alert(balju_company);
                $('#balju_company').empty().append(balju_company);
                $('#bogoja').empty().append(bogoja);
                /* 현장명, 사업장관리번호, 사업자명, 소재지, 공사명, 회사 전화번호,
                    고용관리 책임자, 책임자의 주민등록번호, 대표이름
                 */
                $('#hyun_jang_name').empty().append(hyun_jang_name);


                //$('#hyun_jang_number').empty().append(hyun_jang_number);
                $('#company_name').empty().append(company_name);
                $('#company_address').empty().append(company_address);
                $('#company_phone').empty().append(company_phone);
                $('#president').empty().append(president);
                //$('#acc_name').empty().append(acc_name);
                //$('#acc-jumin').empty().append(acc_jumin);




                var exception_money = parseFloat(exception);
                var income_rate = parseFloat(income)/100;
                var jumin_tax = parseFloat(jumin)/100;

                $('#kongsu_table_body').empty();
                for (var i = 0; i < res_num; i++)
                {

                    var str = '';
                    var kongsu = res[i].attendance;
                    var kongsu_daily = kongsu.split('@@');
                    var tot_num = kongsu_daily.length;
                    //alert(tot_num);
                    if(res[i].attendance == null){
                        kongsu = '미입력';
                        // TODO 결석 배열 만들어서 결석 토탈에 넣어준다.
                    }
                    var k = i+1;

                    str += "<tr>"
                    str += "<td style='display:none;'>" + res[i].daily_employee_num + "</td>";
                    str += "<td>" + k + "</td>";
                    str += "<td>" + res[i].name + "</td>";
                    str += "<td>" + res[i].job+ "</td>";


                   var address1 =  res[i].address1;
                   var address1_leng = address1.length;
                   if(address1_leng >11 ){
                       //alert(address1_leng);
                       address1 = address1.substring(-10, 10);  // s_index, e_index
                       //alert(address1)
                   }

                    str += "<td>" 
                        +"<div class='label_week_date_jumin'>"+res[i].jumin1 +"-"+ res[i].jumin2 + "</div>"
                        +"<div class='label_week_date_jumin'>"+address1 + "</div>"
                        +"</td>";

                    var daily_salary_total = res[i].daily_salary;
                    var total_salary = 0;  // 금액을 더할 때는 in 로 초기값 설정해야 한다.
                    var gab_tax = 0;  // 갑근세계산을 위한 float 변수;

                    str += "<td>"  //출결현황

                        var daily_salary = parseFloat(res[i].daily_salary);  // 단가를 String 형에서 계산하기위해 FLOAT 으로 바꿈
                        var kongsu_total = 0;

                        for(var j = 0; j < tot_num; j++){
                            //if(kongsu_daily[j] == 0){
                            //str += "<div class='label_week_date'>"+"" + "</div>"
                            //}else{
                            str += "<div class='label_week_date'>"+kongsu_daily[j] + "</div>"
                            total_salary += daily_salary_total * kongsu_daily[j];
                            var kongsu = parseFloat(kongsu_daily[j]);

                            if(kongsu_daily[j]>0){
                                kongsu_total += kongsu
                            }

                            if(daily_salary > 100000){  // 단가가 면세액 기준 보다 높은 경우 갑근세 해당
                                if(kongsu_daily[j]>0){  // 공수가 1 이상인 것 한에서 적용 //TODO 공수가 있는 것 한해서 계산해야한다.
                                    gab_tax += (daily_salary*kongsu-exception_money) * income_rate;  // 갑근세 계산식!!



                                }
                            }

                            //}

                        }
                    str += "</td>";
                    str += "<td>"+ kongsu_total.toFixed(1)+"</td>";
                    str += "<td>"+ res[i].daily_salary.toLocaleString() +"</td>";  //단가(String)
                    str += "<td>"+  total_salary.toLocaleString() +"</td>";   // 노무비 총액(String)



                    var gab_tax_c = gab_tax.toFixed(0); // data 형이 string이 아닌 float 을 위해서
                    var gab_tax_val = Number(gab_tax.toFixed(0)).toLocaleString();  // , string 돈 액수로 표현하기 위해서
                    var jumin_tax_c = (gab_tax_c*jumin_tax).toFixed(0); // 계산할 떄 float 값으로 들어와야된다.
                    var jumin_tax_val = Number(jumin_tax_c).toLocaleString();
                    var employee_tax = total_salary*p_employee ;  //  노무비 총액 * 개인 고용보험율 (0.065)
                    var med_tax = parseInt(total_salary*p_med);  // 노무비 총액 * 개인 의료보험율 (0.036)
                    var pension_tax = total_salary*p_pension;  //노무비 총액  * 개인 국민연금(0.045)




                    var total_tax_sum = parseFloat(gab_tax_c) + parseFloat(jumin_tax_c)+employee_tax+med_tax+pension_tax;

                    if(gab_tax_val == '0'){  // 면제기준이면 치환
                        gab_tax_val = '-';
                    }
                    if(jumin_tax_val == '0'){  //갑근이 면제이면 주민도 면제 치환
                        jumin_tax_val = '-';
                    }

                    var real_income = (total_salary - total_tax_sum);

                    str += "<td>"+ gab_tax_val +"</td>";   //갑근세
                    str += "<td>"+ jumin_tax_val+"</td>";  //주민세
                    str += "<td>"+  employee_tax.toLocaleString() +"</td>";
                    str += "<td>"+  med_tax.toLocaleString() +"</td>";
                    str += "<td>"+  pension_tax.toLocaleString() +"</td>";
                    str += "<td>"+  total_tax_sum.toLocaleString() +"</td>";
                    str += "<td>"+  real_income.toLocaleString() +"</td>";

                    str += "</tr>"
                    $('#kongsu_table_body').append(str);


                    total_money += total_salary;
                    total_danga += res[i].daily_salary;
                }

                var money = total_money.toLocaleString();
                //alert(money);
                //alert(res_num);
                var average_money = (total_salary/res_num).toLocaleString();
                var average_danga = (total_danga/res_num).toLocaleString();
                $('#total_num').text(res_num + " 명");
                $('#total_money').text(money+ " 원");
                $('#average_monthly_salary').text(average_money+ " 원");
                $('#average_danga').text(average_danga+ " 원");
            }






        },


    };

}();



