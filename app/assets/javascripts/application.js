// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
	$(".block").hide();
	$('.button_plus').click(function(){
		$(".block").show()});
	$('.my_button_link_cancel').click(function(event){
		event.preventDefault();
		$('.block').hide()});
	$('.my_button_link_ok').click(function(event){
		event.preventDefault();
		$(".form_ok").submit()});
	//document.getElementById('ppp').innerHTML = document.getElementById("task_project_id").options[0].text;
});

function f(){
		//document.getElementById("task_project_id").options[0].disabled=true;
		var selind=document.getElementById('task_project_id').options.selectedIndex;
		var txt= document.getElementById("task_project_id").options[selind].text;
		//var total = document.getElementById('ppp').innerHTML = document.getElementById("task_project_id").value;
		//alert(txt)};
		document.getElementById('onchange_label').innerHTML = txt};
		//return txt};
function f2(){
		var a=document.body.block.form_ok.task_project_id.options[2].selected = true;
		alert(a)};




