$('#access-check').attr("style","opacity: 0.3;");

      $("input.i_fio").keyup(function(){
				 $("input.b_fio").val($(this).val());
				 if (!$(this).val() == '') {
				 	$("#check").removeAttr("disabled");
          $('#access-check').attr("style","opacity: 1;");
				 } else {
				    $("[name=send]").attr('disabled', true);
				    $("#check").attr('disabled', true);
            $('#access-check').attr("style","opacity: 0.3;");
				 }
			});

			$("input.b_fio").keyup(function(){
				 $("input.i_fio").val($(this).val());
            if (!$(this).val() == '') {
				 	$("#check").removeAttr("disabled");
          $('#access-check').attr("style","opacity: 1;");
				 } else {
				    $("[name=send]").attr('disabled', true);
				    $("#check").attr('disabled', true);
            $('#access-check').attr("style","opacity: 0.3;");
				 }
			});
			// $("input.i_data").keyup(function(){
			// 	 $("input.b_data").val($(this).val());
			// });
			// $("input.i_month").keyup(function(){
			// 	 $("input.b_month").val($(this).val());
			// });

// var href;
var div = $('#anim');
  $("input[name=confirm]").change(function(){
    if($(this).is(":checked")){
      // div = document.createElement('img');
      // img.src = "img/signature.gif";


/* Once the image has loaded, set it as the background-image */
      // $(div).load(function(){
      //   div.css({backgroundImage: 'url("img/signature.gif")'});
      // });

      setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 2500);

    }else{
      	// $(".btn_conf").addClass('disabled').removeAttr("href");
        $("[name=send]").attr('disabled', true);
      	div.css({backgroundImage: "none"});
      }
});
