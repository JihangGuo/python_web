/**
 * Created by hang on 16-12-13.
 */
/*添加客户接口 /api/custom/add*/

/*全部订单列表*/
$(document).ready(function (){
    $.get("/api/order/list", function(data) {
        $("table tr:last").html("");
        $.each(data.result.order_list, function(i, item) {
            $("table").append(
                "<tr><td>"+ item.oid +"</td>"+
                "<td>"+ item.cid +"</td>"+
                "<td>"+ item.name +"</td>"+
                "<td>"+ item.order_tm +"</td>"+
                "<td>"+ item.start_tm +"</td>"+
                "<td>"+ item.end_tm +"</td>"+
                "<td>"+ item.amount +"</td>"+
                "<td>"+ item.cash +"</td>"+
                "<td>"+ item.remark +"</td>"+
                "<td>"+ item.insert_tm +"</td>"+
                "<td><a href='#'>编辑</a> | <a href='#'>删除</a></td></tr>"
            );
        });
    });
})
