var headArea=document.getElementsByClassName('head')[1];
var htmlArea=document.getElementsByClassName('html')[0];
var cssArea=document.getElementsByClassName('css')[0];
var jsArea=document.getElementsByClassName('js')[0];
var resultHtml=document.getElementById('result').attributes.getNamedItem('srcdoc');
var closeTag='<\/';
var befCss='<style type="text/css">';
var aftCss=closeTag+'style>';
var befJs='<script>';
var aftJs=closeTag+'script>'+closeTag+'body>'+closeTag+'html>';
resultHtml.value='test'
if (navigator.userAgent.match('Trident|Edge')){
  alert(' This pen does not work with Microsoft Internet Explorer / Edge');
  throw'';
};
function run(){
	resultHtml.value=headArea.value+befCss+cssArea.value+aftCss+htmlArea.value+befJs+jsArea.value+aftJs;
};
function save(){
	var fullpage = new Blob([resultHtml.value], {type : 'text/html'});
	var pageUrl= URL.createObjectURL(fullpage);
	document.getElementById('save').href=pageUrl;
	document.getElementById('save').download='index.html';
};

function showhead(){
	document.getElementsByClassName('textarea')[1].style.cssText=(this.checked?'z-index:-1':'z-index:0');
	run()
};
htmlArea.addEventListener("input",run);
cssArea.addEventListener("input",run);
jsArea.addEventListener("input",run);
document.getElementById('save').addEventListener('click',save);
document.getElementById("showhead").addEventListener('change',showhead);
showhead.call(document.getElementById("showhead"));