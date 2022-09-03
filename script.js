$(document).ready(function () {

	// dynamic Web
	$('#nav-list').click(function (e) {
		console.log("e: ", e);
		console.log("$(this) : ", $(this));
		var click_tag = e.target.getAttribute('id');
		console.log(click_tag);
		switch (click_tag) {
			case "Business Card":
				$("#photo").html(
					`<div class="b1">
					<img class="img_B" src="../0720_Final/image/works/A_3.jpg" width="100%" height="auto">
					</div>
                    <div class="b2">
					<img class="img_B" src="../0720_Final/image/works/A_1.jpg" width="100%" height="auto">
					</div>
                    <div class="b3">
					<img class="img_B" src="../0720_Final/image/works/A_2.jpg" width="100%" height="auto">
					</div>
                    <div class="b4">
					<img class="img_B" src="../0720_Final/image/works/B_1.jpg" width="100%" height="auto">
					</div>`
				);
				break;
			case "CIS":
				$("#photo").html(
					`<div class="b1">
					<img class="img_B" src="../0720_Final/image/works/D_1.jpg" width="100%" height="auto">
					</div>
                    <div class="b2">
					<img class="img_B" src="../0720_Final/image/works/D_2.jpg" width="100%" height="auto">
					</div>
                    <div class="b3">
					<img class="img_B" src="../0720_Final/image/works/C_1.jpg" width="100%" height="auto">
					</div>
                    <div class="b4">
					<img class="img_B" src="../0720_Final/image/works/M_1.jpg" width="100%" height="auto">
					</div>`
				);
				break;
			case "Poster":
				$("#photo").html(
					`<div class="b1">
					<img class="img_B" src="../0720_Final/image/works/海報_3.jpg" width="100%" height="auto">
					</div>
                    <div class="b2">
					<img class="img_B" src="../0720_Final/image/works/海報_1.jpg" width="100%" height="auto">
					</div>
                    <div class="b3">
					<img class="img_B" src="../0720_Final/image/works/海報_2.jpg" width="100%" height="auto">
					</div>
                    <div class="b4">
					<img class="img_B" src="../0720_Final/image/works/雜誌_1.jpg" width="100%" height="auto">
					</div>`
				);
		}
	})

});