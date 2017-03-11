/**
 * Created by hang on 16-12-12.
 */
/*客户列表接口*/
$(document).ready(function (){
    $.get("/api/custom/list", function(data) {
        $.each(data.result.custom_list, function( a, item) {
            $("table").append(
                "<tr><td>"+ item.cid +"</td>"+
                "<td>"+ item.name +"</td>"+
                "<td>"+ item.address +"</td>"+
                "<td>"+ item.phone +"</td>"+
                "<td>"+ item.ctype +"</td>"+
                "<td>"+ item.class_priv + "</td>"+
                "<td>"+ item.status +"</td>"+
                "<td>"+ item.remark +"</td>"+
                "<td>"+ item.insert_tm +"</td>"+
                "<td><div class='popup01'><a href='javascript:'>编辑</a></div> | <a href='#'>删除</a></td></tr>"
            );
            $("table").html($("table").html().replace(/normal/g,"正常"));
            $("table").html($("table").html().replace(/delete/g,"取消"));
            $(".popup01 a").click(function () {
                /*alert($($(this).parent().parent().parent().find("td:eq(0)")).text());//取得当前用户号码
                ccid = $($(this).parent().parent().parent().find("td:eq(0)")).text();*/
                popWin.showWin("500","480","客户编辑","custom_edit.html");
            });
        });

    });
});
