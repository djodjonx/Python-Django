webpackJsonp([1],[,,,,,,,,,function(t,e,n){n(35);var s=n(2)(n(31),n(43),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(10),u=n(9),r=n.n(u);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<student-table></student-table>",components:{StudentTable:r.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["student"],methods:{remove:function(){this.$emit("remove")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),u=n.n(s),r=n(41),i=n.n(r),o=n(42),a=n.n(o);e.default={components:{addStudent:a.a,StudentLine:i.a},data:function(){return{students:[]}},methods:{getAll:function(){var t=this;u.a.get("/api/students").then(function(e){t.students=e.data})},addOne:function(t){var e=this,n={first_name:t};u.a.post("/api/students/",n).then(function(t){e.students.push(t.data)})},remove:function(t){var e=this;u.a.delete("/api/students/"+this.students[t].id).then(function(){e.students.splice(t,1)})}},mounted:function(){this.getAll()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{first_name:""}},methods:{addOne:function(){this.$emit("addOne",this.first_name)}}}},,,function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){n(37);var s=n(2)(n(30),n(45),null,null);t.exports=s.exports},function(t,e,n){n(36);var s=n(2)(n(32),n(44),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.students,function(e,s){return n("student-line",{attrs:{student:e},on:{remove:function(e){t.remove(s)}}})}),t._v(" "),n("add-student",{on:{addOne:t.addOne}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",placeholder:"prenom"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.addOne}},[t._v("Ajouter")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.student.first_name)),n("button",{on:{click:t.remove}},[t._v("Supprimer")])])},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.dd5396da6452b580a305.js.map