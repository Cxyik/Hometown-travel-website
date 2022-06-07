// var map = new BMap.Map("myMap"); 
// var point = new BMap.Point(116.404, 39.915);
// map.centerAndZoom(point, 15); 
// 创建地图实例 
		var map = new BMapGL.Map("container");
		// 创建点坐标 	
		var point = new BMapGL.Point(108.767109,28.852101);//中心点坐标
		// 初始化地图，设置中心点坐标和地图级别
		map.centerAndZoom(point, 13);
		//开启鼠标滚轮缩放地图
		map.enableScrollWheelZoom(true);
		//我在这里设计了两个点来做导航示例
		var p1 = new BMapGL.Point(108.76021,28.858428);//华大图书馆
		var p2 = new BMapGL.Point(108.76021,28.858428);//华大大门

		var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
		map.addControl(scaleCtrl);
		var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
		map.addControl(zoomCtrl);
		var LocationControl1 = new BMapGL.LocationControl();
		map.addControl(LocationControl1);

		map.setHeading(64.5);   //设置地图旋转角度
		map.setTilt(73);       //设置地图的倾斜角度

		//导航功能
		var walking = new BMapGL.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
		walking.search(p2, p1);
		//具体操作中也可以直接文字检索
		walking.search('酉阳','酉阳');//相当于百度地图中直接输入起点和终点
		//文本信息
		var content = "<h4>桃花源</h4>";
		var label = new BMapGL.Label(content, {       	 // 创建文本标注
		    position: p1,                         		 // 设置标注的地理位置
		    offset: new BMapGL.Size(-10, -60)         	 // 设置标注的偏移量
		})  
		map.addOverlay(label); 
