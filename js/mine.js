function Startquery() {
	var hero = $('#yxname').val();
	var type = $('#seltname').val();
	if (hero.length == 0) {
		alert("请输入需要查询的英雄名称");
	} else {
		var url = "https://www.sapi.run/hero/select.php?hero=" + hero + "&type=" + type;
		$.ajax({
			url:url,
			type:'get',
			dataType:'json',
			success: function(res){

				if(res.code == 200){
					var html = '<div class="panel panel-primary"><div class="panel-heading" style="background: linear-gradient(to right,#b221ff,#14b7ff,#8ae68a);"><center><font color="#000000"><b> 查询结果展示 </b></font></center></div>';
					html = html + '<table class="table table-striped table-condensed">';
					
					html = html + '<tr align="center">';
					html = html + '<td class="info" style="font-weight:600;">奖励</td>';
					html = html + '<td class="info" style="font-weight:600;">区域</td>';
					html = html + '<td class="info" style="font-weight:600;">分数</td>';
					html = html + '</tr>';
					
					html = html + '<tr align="center">';
					html = html + '<td class="success">金牌</td>';
					html = html + '<td class="success">'+res.data.province+'</td>';
					html = html + '<td class="success">'+res.data.provincePower+'</td>';
					html = html + '</tr>';
					
					html = html + '<tr align="center">';
					html = html + '<td class="warning">银牌</td>';
					html = html + '<td class="warning">'+res.data.city+'</td>';
					html = html + '<td class="warning">'+res.data.cityPower+'</td>';
					html = html + '</tr>';	
					
					html = html + '<tr align="center">';
					html = html + '<td class="success">铜牌</td>';
					html = html + '<td class="success">'+res.data.area+'</td>';
					html = html + '<td class="success">'+res.data.areaPower+'</td>';
					html = html + '</tr>';	
					
					html = html + '<tr align="center">';
					html = html + '<td class="warning" colspan="3">时间：'+res.data.updatetime+'</td>';
					html = html + '</tr>';	
									
					html = html + '</table></div>';
					$("#mydiv").html(html);
					
					$('#alias').text(res.data.alias);
					$('#photo').attr('src', res.data.photo);
					
				} else {
					alert("查询失败");
				}
			}
		})
	}
}