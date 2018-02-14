function form_contact_submit(frm){
    var form=$(frm).serialize();
    $.post(base_url+'index.php/pages/contact_submit',form,function(resp){
        //console.log(resp);
        var obj = JSON.parse(resp);
        $(".captcha-box").html(obj.captcha);
        $("input[name='"+obj.hash_data.name+"']").val(obj.hash_data.hash);
        if(obj.rs==1){
            $(frm)[0].reset();
            $(frm).find('.focused').removeClass('focused');
            $('.icon-check').css('opacity','0');
            $("#message_show").html(obj.msg);
            //$(".contact-form-container").hide();
        }else{
            $("#message_show").html(obj.msg);
        }
    });
    return false;
}


$(document).ready(function() {
	


	var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) 
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    
    $('textarea').blur(function () {
        $('#hire textarea').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('textarea + label + span').css({ 'opacity': 1 });
            } else {
                $this.removeClass('focused');
                $('textarea + label + span').css({ 'opacity': 0 });
            }
        });
    });
    $('#hire .field:first-child input').blur(function () {
        $('#hire .field:first-child input').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('.field:first-child input + label + span').css({ 'opacity': 1 });
            } else {
                $this.removeClass('focused');
                $('.field:first-child input + label + span').css({ 'opacity': 0 });
            }
        });
    });
    $('#hire .field:nth-child(2) input').blur(function () {
        $('#hire .field:nth-child(2) input').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
            } else {
                $this.removeClass('focused');
                $('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
            }
        });
    });
    $(document).on('click', '.contact-form', function(){
        $("#message_show").html('');
        $('.contact-form-container').show();
        //$('.carousel').carousel('pause');
        return false;
    });
    $('.close-popup').click(function(){
        $(this).closest('.contact-form-container').hide();
        //$('.carousel').carousel('cycle');
    });
    // $('[data-toggle="collapse"]').on('click', function(e) {
    //     e.preventDefault();
    //     var ww = $(document).width();
    //     console.log(ww);
    // });
	

});