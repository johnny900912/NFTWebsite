$(document).ready(function () {
    // 卡片動畫
    $(".NFTCard").hover(function () {
        $(this).animate({
            top: "-10px"
        }, 150);
    }, function () {
        $(this).animate({
            top: "0px"
        }, 150);
    });

    $(".shopcart").click(function () {
        // 顯示
        $("#NFTContent").fadeIn("fast");

        // 抓圖片
        var index = $(".shopcart").index(this);

        // 抓圖片
        var getPoster = $(this).parent().parent().find(".NFT_img").attr("src");

        // 資訊
        // 資訊儲存 "/scripts/movieInfo.js"
        $("#poster img").attr("src", getPoster);
        $(".chineseName p").text(NFTInfo[index].chineseName);
        $(".englishName p").text(NFTInfo[index].englishName);
        $(".releaseDate span").text(NFTInfo[index].releaseDate);
        $(".category span").text(NFTInfo[index].category);
        $(".description #desc").text(NFTInfo[index].description);

    });

    // 關閉介面
    $("#close, .close").click(function () {
        $("#NFTContent").fadeOut("fast");
    });

    // 篩選
    $("#All").click(function () {
        $.NF("TCard").show();
    });

    $("#Art").click(function () {
        $(".NFTCard").hide();
        $(".art").show();
    });

    $("#Music").click(function () {
        $(".NFTCard").hide();
        $(".music").show();
    });
});