// 設定輸入框初始值為0
let value = 0;
$("#Counter input").val(value);

$("#Counter #add").on("click", function () {
    value++;
    $("#Counter input").val(value);
});

$("#Counter #dec").on("click", function () {
    value--;
    $("#Counter input").val(value);
});

$("#Counter #reset").on("click", function () {
    value = 0;
    $("#Counter input").val(value);
});




function updateTaskCount() {
    let count = $("#list .list").length;
    $("#listCount span").text(`You have ${count} pending tasks`);
}

function addListItem() {
    let add = $("#addList textarea").val();

    if (add === "") {
        alert("請輸入文字");
        return;
    }

    $(`<li class='list'><span>${add}</span><button>🗑</button></li>`).insertBefore("#list li:last-child");
    updateTaskCount();
    $("#addList textarea").val("").focus();
}

function removeListItem() {
    $(this).closest("li").remove();
    updateTaskCount();
}

// 先顯示清單數量
updateTaskCount();

// 新增監聽事件(清單)
$("#addList button").on("click", addListItem);

// 移除監聽事件，使用事件委派
$("#list").on("click", ".list button", removeListItem);

// 清除所有清單，只保留最後一個 li
$("#listCount button").on("click", function () {
    $("#list li:not(:last-child)").remove();
    updateTaskCount();
});