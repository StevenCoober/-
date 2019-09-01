var Emitter = require('events').EventEmitter;
class xxevent extends Emitter
{
	constructor() {
		super();
		this.objs = {};
	}

	__OnListener(target, evtname, func) {
        if (this.objs[target] == null) {
            this.objs[target] = {};
        }
        
        if (this.objs[target][evtname] == null) {
            this.objs[target][evtname] = [];
        }
        this.objs[target][evtname].push(func);
        this.addListener(evtname, func);
    }

    bindtarget(target) {
    	if (target['onEditDialogShow_Private_Course']) { this.__OnListener(target, 'onEditDialogShow_Private_Course', target['onEditDialogShow_Private_Course'].bind(target));}
    	if (target['onNewObj_Private_Course']) { this.__OnListener(target, 'onNewObj_Private_Course', target['onNewObj_Private_Course'].bind(target));}
    	if (target['onEditObj_Private_Course']) { this.__OnListener(target, 'onEditObj_Private_Course', target['onEditObj_Private_Course'].bind(target));}
    	if (target['onQueryTableDialogShow_Private_Course']) { this.__OnListener(target, 'onQueryTableDialogShow_Private_Course', target['onQueryTableDialogShow_Private_Course'].bind(target));}
    	if (target['onSendQueryTableItem_Private_Course']) { this.__OnListener(target, 'onSendQueryTableItem_Private_Course', target['onSendQueryTableItem_Private_Course'].bind(target));}
    	if (target['onSendUpdateTableItem_Private_Course']) { this.__OnListener(target, 'onSendUpdateTableItem_Private_Course', target['onSendUpdateTableItem_Private_Course'].bind(target));}
    	if (target['onSendUpdateItem_Private_Course']) { this.__OnListener(target, 'onSendUpdateItem_Private_Course', target['onSendUpdateItem_Private_Course'].bind(target));}
    	if (target['onSelectTableItem_Private_Course']) { this.__OnListener(target, 'onSelectTableItem_Private_Course', target['onSelectTableItem_Private_Course'].bind(target));}

      if (target['onEditDialogShow_Member_Card']) { this.__OnListener(target, 'onEditDialogShow_Member_Card', target['onEditDialogShow_Member_Card'].bind(target));}
      if (target['onNewObj_Member_Card']) { this.__OnListener(target, 'onNewObj_Member_Card', target['onNewObj_Member_Card'].bind(target));}
      if (target['onEditObj_Member_Card']) { this.__OnListener(target, 'onEditObj_Member_Card', target['onEditObj_Member_Card'].bind(target));}
      if (target['onQueryTableDialogShow_Member_Card']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card', target['onQueryTableDialogShow_Member_Card'].bind(target));}
      if (target['onSendQueryTableItem_Member_Card']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card', target['onSendQueryTableItem_Member_Card'].bind(target));}
      if (target['onSendUpdateTableItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card', target['onSendUpdateTableItem_Member_Card'].bind(target));}
      if (target['onSelectTableItem_Member_Card']) { this.__OnListener(target, 'onSelectTableItem_Member_Card', target['onSelectTableItem_Member_Card'].bind(target));}
    }

    emit(evtname, ...args) {
      super.emit('on'+evtname, ...args);
    }

    unbindtarget(target) {
        let oevents = this.objs[target];
        for(let evtname in oevents) {
            for (let i = 0; i < oevents[evtname].length; i++) {
                let func = oevents[evtname][i];
                this.removeListener(evtname, func);
            }
        }
        delete this.objs[target];
    }

  // import xxevent from "./xxevent.js";

  // // 组件
  // components: {
  // },
  // // 属性
  // props: {
  // },
  // // 监视
  // watch: {
  // }
  // // 数据
  // data() {
  //   return {
  //   };
  // },

  //// 创建的时候
  //async created() {
  //  xxevent.bindtarget(this);
  //},

  //// 销毁的时候
  //async destroyed() {
  //  xxevent.unbindtarget(this);
  //},

  // methods: {

    /////////////////////////////////////////////////////

    // xxevent.emit("EditDialogShow_Private_Course"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Private_Course")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Private_Course() {
    // },

    // xxevent.emit("NewObj_Private_Course"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Private_Course")); // 新增数据
    // // 新增数据
    // onNewObj_Private_Course() {
    // },

    // xxevent.emit("EditObj_Private_Course"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Private_Course")); // 编辑数据
    // // 编辑数据 | Private_Course | 
    // onEditObj_Private_Course() {
    // },

    // xxevent.emit("QueryTableDialogShow_Private_Course"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Private_Course")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Private_Course |
    // onQueryTableDialogShow_Private_Course() {
    // },

    // xxevent.emit("SendQueryTableItem_Private_Course"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Private_Course")); // 查询数据项
    // // 查询数据项 | Private_Course |
    // onSendQueryTableItem_Private_Course() {
    // },

    // xxevent.emit("SendUpdateTableItem_Private_Course"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Private_Course")); // 更新查询数据项
    // // 更新查询数据项 | Private_Course |
    // onSendUpdateTableItem_Private_Course() {
    // },

    // xxevent.emit("SelectTableItem_Private_Course"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Private_Course")); // 选中查询结果某项
    // // 选中查询结果某项 | Private_Course |
    // onSelectTableItem_Private_Course() {
    // },
  // },

}
export default new xxevent

