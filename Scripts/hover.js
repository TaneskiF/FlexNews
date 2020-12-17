$("#news1, #news2, #news3, #news4").hover(
	function () {
		$(this).css("background-color", "rgb(38, 4, 94)");
		$(this).css("color", "white");
	},
	function () {
		$(this).css("background-color", "rgb(131, 216, 212)");
		$(this).css("color", "black");
	}
);
$("#form1").hover(
	function () {
		$("#form1").css("background-color", "rgb(38, 4, 94)");
		$("#form1").css("color", "white");
		$("#error").css("color", "white");
		$("#subm").css("color", "rgb(38, 4, 94)");
		$("#subm").css("background-color", "rgb(131, 216, 212)");
	},
	function () {
		$("#form1").css("background-color", "rgb(131, 216, 212)");
		$("#form1").css("color", "black");
		$("#error").css("color", "black");
		$("#subm").css("color", "#9ccb40");
		$("#subm").css("background-color", "rgb(38, 4, 94)");
	}
);
$("#subm").hover(
	function () {
		$("#subm").css("background-color", "RGB(156, 203, 64)");
	},
	function () {
		$("#subm").css("background-color", "rgb(131, 216, 212)");
	}
);
