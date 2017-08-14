

// JavaScript Document

var print = function ()
{

    var test = "test_var";

    return {

        nomu_pdf : function(){

            alert('노무비 내역서');
            var img = new Image();
            img.addEventListener('load', function() {
                var doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4-horizontal'

                });
                //doc.setPage(2);
                //doc.addPage(500, 270);  //w,h

                //doc.internal.getNumberOfPages(2);
                doc.addImage(img, 'png', 0, 0, 298, 210);  //  x,y,w,h,

                doc.addFont('HMKMMAG.TTF', 'MagicR', 'normal', 'Identity-H');
                doc.addFont('HMKMRHD.TTF', 'HeadlineR', 'normal', 'Identity-H');
                doc.addFont('msgothic.ttf', 'MsGothic', 'normal', 'Identity-H');
                doc.addFont('gothic.ttf', 'LiLing', 'normal', 'Identity-H');
                doc.addFont('HARLOWSI.TTF', 'WMLWQI+HarlowSolid', 'normal', 'WinAnsiEncoding');
                doc.addFont('ITCBLKAD.TTF','a','normal','WinAnsiEncoding');
                doc.addFont('BOD_PSTC.TTF','b','normal','WinAnsiEncoding');
                doc.addFont('GADUGI.TTF', 'GADUGI', 'normal', 'WinAnsiEncoding');





                //doc.setDefaultFonts(0, 'Times');    //English default
                doc.setDefaultFonts(1, 'normal');    //Korean default
                doc.setDefaultFonts(3, 'LiLing');         //Chinese default
                doc.setDefaultFonts(2, 'MsGothic');        //Japanese default

                //var name = $('#kongsu_table_body').children().children().eq(2).text();
                //var job = $('#kongsu_table_body').children().children().eq(3).text();

                var total_row = $('#kongsu_table_body tr').length;  //table의 총 row 수

                //var hyunjang = $('#hyunjang_select').text();
                var balju_company = $('#balju_company').text();
                var bogoja = $('#bogoja').text();
                var hyun_jang_name = $('#hyun_jang_name').text();
                var date = $('#toMonth').val();

                //alert(hyun_jang_name);

                doc.setFont('HeadlineR');        // set font

                doc.setTextColor(0,0,0);
                doc.setCharSpace(1);


                doc.setFontSize(6);
                doc.drawText(33,11,[balju_company]);
                doc.drawText(33,15,[hyun_jang_name]);
                doc.drawText(33,20,[hyun_jang_name]);
                doc.drawText(95,16,[date]);


                /*sum 을 구하는 배열*/
                var sum_total_kongsu =[];
                var sum_danga = [];
                var sum_total_income = [];
                var sum_gab_tax = [];
                var sum_jumin_tax = [];
                var sum_employ_tax = [];
                var sum_med_tax = [];
                var sum_pension = [];
                var sum_tax_total = [];
                var sum_closing_money = [];





                for(var i=0; i<total_row; i++){

                    var tr = $('#kongsu_table_body tr').eq(i);
                    var index = tr.children().eq(1).text();
                    var name = tr.children().eq(2).text();
                    var job = tr.children().eq(3).text();
                    var jumin = tr.children().eq(4).text();


                    var kongsu = tr.children().eq(5).find('div');
                    //alert(kongsu.length);
                    var kongsuLeg = kongsu.length;

                    var total_kongsu = tr.children().eq(6).text();
                    var danga = tr.children().eq(7).text();
                    var total_income = tr.children().eq(8).text(); //노무비 총액
                    var gab_tax = tr.children().eq(9).text(); //갑근세
                    var jumin_tax = tr.children().eq(10).text(); //주민세
                    var employ_tax = tr.children().eq(11).text(); //고용보험
                    var med_tax = tr.children().eq(12).text(); //의료보험
                    var pension = tr.children().eq(13).text(); //국민연금
                    var tax_total = tr.children().eq(14).text(); // 공제합계
                    var closing_money = tr.children().eq(15).text();  //차감된 지급액

                    sum_total_kongsu.push(parseInt(total_kongsu));
                    sum_danga.push(danga);
                    sum_total_income.push(total_income);
                    sum_gab_tax.push(gab_tax);
                    sum_jumin_tax.push(jumin_tax);
                    sum_employ_tax.push(employ_tax);
                    sum_med_tax.push(med_tax);
                    sum_pension.push(pension);
                    sum_tax_total.push(tax_total);
                    sum_closing_money.push(closing_money);
                    /* document에 출력 */
                    doc.setFont('HeadlineR');        // set font
                    doc.setTextColor(0,0,0);
                    doc.setCharSpace(1);

                    doc.setFontSize(6);
                    doc.drawText(7,(39+(11*i))-(1.4*i),[index]);
                    doc.drawText(13,(39+(11*i))-(1.4*i),[job]);

                    doc.setFontSize(7);
                    doc.drawText(20,(39+(11*i))-(1.4*i),[name]);

                    doc.setFontSize(5);
                    doc.setCharSpace(1);
                    doc.drawText(33,(37+(11*i))-(1.4*i),[jumin]);

                    for(var k=0; k<31; k++){
                        if(k<15){
                            doc.drawText(
                                60.5+(k*6)+(k*0.5)   //x position
                                ,(36+(11*i))-(1.4*i)  //y position
                                ,[kongsu.eq(k).text()]
                            );
                        }else{
                            doc.drawText(
                                60.5+((k-15)*6)+((k-15)*0.5) //x position
                                ,(41+(11*i))-(1.4*i)  //y position
                                ,[kongsu.eq(k).text()]
                            );
                        }
                    }/* text 값 잘못 찍으면 오류난다.*/

                    doc.drawText(165,(38+(11*i))-(1.4*i),[total_kongsu]);
                    doc.setFontSize(5);
                    doc.drawText(173,(38+(11*i))-(1.4*i),[danga]);
                    doc.setFontSize(4);
                    doc.drawText(187,(38+(11*i))-(1.4*i),[total_income]);
                    doc.setFontSize(5);
                    doc.drawText(203,(38+(11*i))-(1.4*i),[gab_tax]);
                    doc.drawText(215,(38+(11*i))-(1.4*i),[jumin_tax]);
                    doc.drawText(225,(38+(11*i))-(1.4*i),[employ_tax]);
                    doc.drawText(238,(38+(11*i))-(1.4*i),[med_tax]);
                    doc.drawText(251,(38+(11*i))-(1.4*i),[pension]);
                    doc.drawText(262,(38+(11*i))-(1.4*i),[tax_total]);
                    doc.setFontSize(4);
                    doc.drawText(276,(38+(11*i))-(1.4*i),[closing_money]);



                }
                //alert(sum_closing_money);
                var res_closing_money = 0;
                for (var i = 0; i < sum_closing_money.length; i++)
                {
                    res_closing_money += sum_closing_money[i];
                    //alert(res_closing_money);


                }
               // alert(res_closing_money);
                /*toLocaleString을 변환시켜줘야한다. */



                doc.save('dailyMeber_payList.pdf');

            });
            img.src = '../../docs/dailyMemberMedical.png';





        },
        work_pdf : function(){

            alert('근로 내역서');
            var img = new Image();
            img.addEventListener('load', function() {
                var doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4-horizontal'

                });
                //doc.setPage(2);
                //doc.addPage(500, 270);  //w,h

                //doc.internal.getNumberOfPages(2);
                doc.addImage(img, 'png', 0, 0, 298, 210);  //  x,y,w,h,

                doc.addFont('HMKMMAG.TTF', 'MagicR', 'normal', 'Identity-H');
                doc.addFont('HMKMRHD.TTF', 'HeadlineR', 'normal', 'Identity-H');
                doc.addFont('msgothic.ttf', 'MsGothic', 'normal', 'Identity-H');
                doc.addFont('gothic.ttf', 'LiLing', 'normal', 'Identity-H');
                doc.addFont('HARLOWSI.TTF', 'WMLWQI+HarlowSolid', 'normal', 'WinAnsiEncoding');
                doc.addFont('ITCBLKAD.TTF','a','normal','WinAnsiEncoding');
                doc.addFont('BOD_PSTC.TTF','b','normal','WinAnsiEncoding');
                doc.addFont('GADUGI.TTF', 'GADUGI', 'normal', 'WinAnsiEncoding');





                //doc.setDefaultFonts(0, 'Times');    //English default
                doc.setDefaultFonts(1, 'normal');    //Korean default
                doc.setDefaultFonts(3, 'LiLing');         //Chinese default
                doc.setDefaultFonts(2, 'MsGothic');        //Japanese default

                //var name = $('#kongsu_table_body').children().children().eq(2).text();
                //var job = $('#kongsu_table_body').children().children().eq(3).text();

                var total_row = $('#kongsu_table_body tr').length;  //table의 총 row 수

                //var hyunjang = $('#hyunjang_select').text();
                var balju_company = $('#balju_company').text();
                var bogoja = $('#bogoja').text();
                var hyun_jang_name = $('#hyun_jang_name').text();
                var date = $('#toMonth').val();

                //alert(hyun_jang_name);

                doc.setFont('HeadlineR');        // set font

                doc.setTextColor(0,0,0);
                doc.setCharSpace(1);


                doc.setFontSize(6);
                //doc.drawText(33,11,[balju_company]);
                //doc.drawText(33,15,[hyun_jang_name]);
                //doc.drawText(33,20,[hyun_jang_name]);
                doc.drawText(155,26,[date]);





                for(var i=0; i<total_row; i++){
                    if(i>7){
                        continue;
                    }else{
                        var tr = $('#kongsu_table_body tr').eq(i);
                        var index = tr.children().eq(1).text();
                        var name = tr.children().eq(2).text();
                        var job = tr.children().eq(3).text();
                        var jumin = tr.children().eq(4).text();


                        var kongsu = tr.children().eq(5).find('div');
                        //alert(kongsu.length);
                        var kongsuLeg = kongsu.length;

                        var total_kongsu = tr.children().eq(6).text();
                        var danga = tr.children().eq(7).text();
                        var total_income = tr.children().eq(8).text(); //노무비 총액
                        var gab_tax = tr.children().eq(9).text(); //갑근세
                        var jumin_tax = tr.children().eq(10).text(); //주민세
                        var employ_tax = tr.children().eq(11).text(); //고용보험
                        var med_tax = tr.children().eq(12).text(); //의료보험
                        var pension = tr.children().eq(13).text(); //국민연금
                        var tax_total = tr.children().eq(14).text(); // 공제합계
                        var closing_money = tr.children().eq(15).text();  //차감된 지급액


                        /* document에 출력 */
                        doc.setFont('HeadlineR');        // set font
                        doc.setTextColor(0,0,0);
                        doc.setCharSpace(1);

                        doc.setFontSize(6);
                        //doc.drawText(7,(39+(11*i))-(1.4*i),[index]);
                        //doc.drawText(13,(39+(11*i))-(1.4*i),[job]);

                        doc.setFontSize(7);
                        doc.drawText(18,(83+(11*i))-(1.4*i),[name]);

                        doc.setFontSize(6);
                        doc.setCharSpace(1);
                        doc.drawText(33,(83+(11*i))-(1.4*i),[jumin]);

                        doc.setFontSize(5);
                        doc.setCharSpace(0);

                        for(var k=0; k<31; k++){
                            if(k<15){
                                doc.drawText(
                                    139.5+(k*3)+(k*0.9)   //x position
                                    ,(82+(11*i))-(1.4*i)  //y position
                                    ,[kongsu.eq(k).text()]
                                );
                            }else{
                                doc.drawText(
                                    139.5+((k-15)*3)+((k-15)*0.9) //x position
                                    ,(87+(11*i))-(1.4*i)  //y position
                                    ,[kongsu.eq(k).text()]
                                );
                            }
                        }/* text 값 잘못 찍으면 오류난다.*/

                        //doc.drawText(165,(38+(11*i))-(1.4*i),[total_kongsu]);
                        //doc.setFontSize(5);
                        //doc.drawText(173,(38+(11*i))-(1.4*i),[danga]);
                        //doc.setFontSize(4);
                        //doc.drawText(187,(38+(11*i))-(1.4*i),[total_income]);
                        //doc.setFontSize(5);
                        //doc.drawText(203,(38+(11*i))-(1.4*i),[gab_tax]);
                        //doc.drawText(215,(38+(11*i))-(1.4*i),[jumin_tax]);
                        //doc.drawText(225,(38+(11*i))-(1.4*i),[employ_tax]);
                        //doc.drawText(238,(38+(11*i))-(1.4*i),[med_tax]);
                        //doc.drawText(251,(38+(11*i))-(1.4*i),[pension]);
                        //doc.drawText(262,(38+(11*i))-(1.4*i),[tax_total]);
                        //doc.setFontSize(4);
                        //doc.drawText(276,(38+(11*i))-(1.4*i),[closing_money]);

                    }





                }
                 doc.save('job-1.pdf');

            });
            img.src = '../../docs/job-1.png';





        },






    };

}();



