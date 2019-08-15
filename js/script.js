$(function(){
    
    $("#datepicker").datepicker({
        changeMonth: true,  // 月の切り替え
        dateFormat:"yy/mm/dd",  // フォーマット
        monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        dayNamesMin:["日","月","火","水","木","金","土"],
    
    });

});