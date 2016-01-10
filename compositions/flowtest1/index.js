define.class("$server/composition",function($server$, service, $ui$, screen, view, $flow$services$, map, omdb, webrequest, $flow$controllers$, xypad, knob, keyboard, dpad, $flow$displays$, labtext, inputs, outputs, album, $flow$devices$, estimote) {
	this.render = function() {
		return [
			map({name:"map0", flowdata:{x:385, y:13}, location:wire("this.rpc.outputs0.location"), zoomLevel:wire("this.rpc.knob0.value")}),
			outputs({name:"outputs0", flowdata:{x:21, y:7}}),
			omdb({name:"omdb0", flowdata:{x:340, y:444}, keyword:wire("this.rpc.outputs0.string")}),
			inputs({name:"inputs0", flowdata:{x:708, y:229}, string:wire("this.rpc.webrequest0.response"), number:wire("this.rpc.outputs0.number"), float:wire("this.rpc.outputs0.float"), int:wire("this.rpc.outputs0.int"), vec2:wire("this.rpc.outputs0.vec2"), vec3:wire("this.rpc.outputs0.vec3"), vec4:wire("this.rpc.outputs0.vec4"), array:wire("this.rpc.outputs0.array"), object:wire("this.rpc.album0.selecteditem")}),
			webrequest({name:"webrequest0", flowdata:{x:338, y:148}, url:wire("this.rpc.outputs0.url")}),
			album({name:"album0", flowdata:{x:696, y:33}, selection:wire("this.rpc.dpad0.value"), items:wire("this.rpc.omdb0.results")}),
			dpad({name:"dpad0", flowdata:{x:27, y:378}}),
			knob({name:"knob0", flowdata:{x:17, y:502}})
		]
	}
	
}
)