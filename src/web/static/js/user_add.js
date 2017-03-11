/**
 * Created by hang on 16-12-18.
 */
$(document).ready(function () {
    var user_type;
    $(".select li:eq(0)").click(function () {
        user_type = 3 ;
        return user_type;
    });
    $(".select li:eq(1)").click(function () {
        user_type = 2 ;
        return user_type;
    });
    $(".select li:eq(2)").click(function () {
        user_type = 1 ;
        return user_type;
    });
    $(":button:eq(1)").click(function () {
        $.post("/api/user/add",
            {
                nickname: $(":text:eq(0)").val(),
                username: $(":text:eq(1)").val(),
                password: $(":text:eq(2)").val(),
                phone: $(":text:eq(3)").val(),
                priv: user_type
            },
            function (data, status) {
                alert("提交情况：" + status +"\n"+ "数据结果："+ data);
            });
        alert(user_type);
    })
});