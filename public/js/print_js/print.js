

// JavaScript Document

var print = function ()
{

    var test = "test_var";

    return {

        pdf : function(){

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
                doc.addImage(img, 'png', 1, 1, 298, 210);  //  x,y,w,h,

                doc.addFont('HMKMMAG.TTF', 'MagicR', 'normal', 'Identity-H');
                doc.addFont('HMKMRHD.TTF', 'HeadlineR', 'normal', 'Identity-H');
                doc.addFont('msgothic.ttf', 'MsGothic', 'normal', 'Identity-H');
                doc.addFont('gothic.ttf', 'LiLing', 'normal', 'Identity-H');
                //doc.addFont('HARLOWSI.TTF', 'WMLWQI+HarlowSolid', 'normal', 'WinAnsiEncoding');
                //doc.addFont('ITCBLKAD.TTF','a','normal','WinAnsiEncoding');
                //doc.addFont('BOD_PSTC.TTF','b','normal','WinAnsiEncoding');
                //doc.addFont('GADUGI.TTF', 'GADUGI', 'normal', 'WinAnsiEncoding');



                doc.setFont('LiLing');        // set font
                //doc.setFont('MsGothic');        // set font
                doc.setFontSize(8);
                doc.setTextColor(153,051,102);
                doc.setCharSpace(1);

                //doc.setDefaultFonts(0, 'Times');    //English default
                doc.setDefaultFonts(1, 'MagicR');    //Korean default
                doc.setDefaultFonts(3, 'LiLing');         //Chinese default
                doc.setDefaultFonts(2, 'MsGothic');        //Japanese default



                var name = $('#kongsu_table_body').children().children().eq(2).text();
                //alert(name);
                var total_row = $('#kongsu_table_body tr').length;

                for(var i=0; i<total_row; i++){

                    var tr = $('#kongsu_table_body tr').eq(i);
                    var td_name = tr.children().eq(2).text();
                    //alert(td_name);

                    doc.drawText(30,30+(i*10), [td_name])

                }
                /*
                doc.drawText(100, 201, ['(주)해인엔지니어링 ', {
                    text: '홍A平길Bお동安C'
                    , fontSize: 30
                    , TextColor: [255, 0, 0]
                    , charSpace: 3
                    , font: 'HeadlineR'
                },' 입니다.']);
                */

                doc.save('dailyMeber_payList.pdf');

            });
            img.src = '../../docs/01.png';





        },






    };

}();



