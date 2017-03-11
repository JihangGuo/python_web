/**
 * Created by hang on 16-12-13.
 */
/*当日订单列表*/
$(document).ready(function (){
    $.get("/api/order/today", function(data) {
        $("table tr:last").html("");
        $.each(data.result, function(i, item) {
            $("table").append(
                "<tr><td>"+ item.oid +"</td>"+
                "<td>"+ item.cid +"</td>"+
                "<td>"+ item.name +"</td>"+
                "<td>"+ item.address +"</td>"+
                "<td>"+ item.phone +"</td>"+
                "<td>"+ item.remark +"</td>"+
                "<td><a href='#'>编辑</a> | <a href='#'>删除</a></td></tr>"
            );
        });
    });

})