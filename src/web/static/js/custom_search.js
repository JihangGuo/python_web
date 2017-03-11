/**
 * Created by hang on 16-12-13.
 */
/*客户查找接口*/
$(document).ready(function (){
    $.post("/api/custom/list",
        {
            page: 1,
            length: 20,
            status: "normal",
            search: "123"
        },
        function(data) {
        $("table tr:last").html("");
        $.each(data.result, function(i, item) {
            $("table").append(
                "<tr><td>"+ item.cid +"</td>"+
                "<td>"+ item.name +"</td>"+
                "<td>"+ item.address +"</td>"+
                "<td>"+ item.phone +"</td>"+
                "<td>"+ item.ctype +"</td>"+
                "<td>"+ item.class_priv +"</td>"+
                "<td>"+ item.status +"</td>"+
                "<td>"+ item.remark +"</td>"+
                "<td><a href='#'>编辑</a> | <a href='#'>删除</a></td></tr>"
            );
        });
    });
})
