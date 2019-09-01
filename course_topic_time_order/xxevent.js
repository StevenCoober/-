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
    	if (target['onEditDialogShow_Course_Topic_Time_Order']) { this.__OnListener(target, 'onEditDialogShow_Course_Topic_Time_Order', target['onEditDialogShow_Course_Topic_Time_Order'].bind(target));}
    	if (target['onNewObj_Course_Topic_Time_Order']) { this.__OnListener(target, 'onNewObj_Course_Topic_Time_Order', target['onNewObj_Course_Topic_Time_Order'].bind(target));}
    	if (target['onEditObj_Course_Topic_Time_Order']) { this.__OnListener(target, 'onEditObj_Course_Topic_Time_Order', target['onEditObj_Course_Topic_Time_Order'].bind(target));}
    	if (target['onQueryTableDialogShow_Course_Topic_Time_Order']) { this.__OnListener(target, 'onQueryTableDialogShow_Course_Topic_Time_Order', target['onQueryTableDialogShow_Course_Topic_Time_Order'].bind(target));}
    	if (target['onSendQueryTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSendQueryTableItem_Course_Topic_Time_Order', target['onSendQueryTableItem_Course_Topic_Time_Order'].bind(target));}
    	if (target['onSendUpdateTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSendUpdateTableItem_Course_Topic_Time_Order', target['onSendUpdateTableItem_Course_Topic_Time_Order'].bind(target));}
    	if (target['onSelectTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSelectTableItem_Course_Topic_Time_Order', target['onSelectTableItem_Course_Topic_Time_Order'].bind(target));}
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

    // xxevent.emit("EditDialogShow_Course_Topic_Time_Order"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Course_Topic_Time_Order")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("NewObj_Course_Topic_Time_Order"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Course_Topic_Time_Order")); // 新增数据
    // // 新增数据
    // onNewObj_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("EditObj_Course_Topic_Time_Order"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Course_Topic_Time_Order")); // 编辑数据
    // // 编辑数据 | Course_Topic_Time_Order | 
    // onEditObj_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("QueryTableDialogShow_Course_Topic_Time_Order"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Course_Topic_Time_Order")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Course_Topic_Time_Order |
    // onQueryTableDialogShow_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("SendQueryTableItem_Course_Topic_Time_Order"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_Topic_Time_Order")); // 查询数据项
    // // 查询数据项 | Course_Topic_Time_Order |
    // onSendQueryTableItem_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("SendUpdateTableItem_Course_Topic_Time_Order"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Course_Topic_Time_Order")); // 更新查询数据项
    // // 更新查询数据项 | Course_Topic_Time_Order |
    // onSendUpdateTableItem_Course_Topic_Time_Order() {
    // },

    // xxevent.emit("SelectTableItem_Course_Topic_Time_Order"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Course_Topic_Time_Order")); // 选中查询结果某项
    // // 选中查询结果某项 | Course_Topic_Time_Order |
    // onSelectTableItem_Course_Topic_Time_Order() {
    // },
  // },

}
export default new xxevent

