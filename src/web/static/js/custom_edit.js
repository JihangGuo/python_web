/**
 * Created by hang on 16-12-20.
 */
$(document).ready(function () {
    $("#cheCk2").click(function () {
        var ccid = $("#cheCk1").val();
        $.get("/api/custom/info",
            {
                cid: ccid//发送当前用户的号码
            },
            function (data) {
                $(":text:eq(1)").val(data.result.name);
                $(":text:eq(2)").val(data.result.address);
                $(":text:eq(3)").val(data.result.phone);
                $(":text:eq(4)").val(data.result.remark);
                $("dt:contains('新')").text(data.result.ctype);//客户类型
                $("dt:contains('A')").text(data.result.class);//客户等级
                $("dt:contains('正常')").text(data.result.status);//客户状态
                $("tr:contains(客户类型) dt:eq(0)").html($("tr:contains(客户类型) dt:eq(0)").html().replace(/O/g, "新"));
                $("tr:contains(客户类型) dt:eq(0)").html($("tr:contains(客户类型) dt:eq(0)").html().replace(/N/g, "老"));
                $("tr:contains(客户状态) dt:eq(0)").html($("tr:contains(客户状态) dt:eq(0)").html().replace(/normal/g, "正常"));
                $("tr:contains(客户状态) dt:eq(0)").html($("tr:contains(客户状态) dt:eq(0)").html().replace(/delete/g, "取消"));
            })
    });


    //客户类型换值模块
    var custom_type;
    $("tr:contains(客户类型) li:eq(0)").click(function () {
        custom_type = "N";
        return custom_type;
    });
    $("tr:contains(客户类型) li:eq(1)").click(function () {
        custom_type = "O";
        return custom_type;
    });
    //客户等级换值模块
    var custom_class;
    $("tr:contains(客户等级) li:eq(0)").click(function () {
        custom_class = 3;
        return custom_class;
    });
    $("tr:contains(客户等级) li:eq(1)").click(function () {
        custom_class = 2;
        return custom_class;
    });
    $("tr:contains(客户等级) li:eq(2)").click(function () {
        custom_class = 1;
        return custom_class;
    });
    //客户状态换值模块
    var custom_status;
    $("tr:contains(客户状态) li:eq(1)").click(function () {
        custom_class = "normal";
        return custom_status;
    });
    $("tr:contains(客户状态) li:eq(0)").click(function () {
        custom_class = "delete";
        return custom_status;
    });

    $(":button:eq(1)").click(function () {
        $.post("/api/custom/update",
            {
                cid:ccid,
                name: $(":text:eq(1)").val(),
                address: $(":text:eq(2)").val(),
                phone: $(":text:eq(3)").val(),
                remark: $(":text:eq(4)").val(),
                ctype:custom_type,//客户类型
                class:custom_class,//客户等级
                status:custom_status//客户状态
            },
            function (data, status) {
                alert("提交情况：" + status +"\n"+ "数据结果："+ data);
            });
    })
});