/**
 * Created by hang on 16-12-13.
 */
/*用户列表*/
$(document).ready(function (){
    $.get("/api/user/list", function(data) {
        $("table tr:last").html("");
        $.each(data.result, function(i, item) {
            $("table").append(
                "<tr><td>"+ item.uid +"</td>"+
                "<td>"+ item.username +"</td>"+
                "<td>"+ item.nickname +"</td>"+
                "<td>"+ item.password +"</td>"+
                "<td>"+ item.email +"</td>"+
                "<td>"+ item.privilege +"</td>"+
                "<td>"+ item.lastlogin +"</td>"+
                "<td><div class='popup01'><a href='javascript:'>编辑</a></div> | <a href='#'>删除</a></td></tr>"
            );
            });
        $(".popup01 a").click(function () {
                popWin.showWin("500","430","用户编辑","user_edit.html");
        });
    });
});