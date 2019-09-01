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
    	if (target['onEditDialogShow_Coach_Request']) { this.__OnListener(target, 'onEditDialogShow_Coach_Request', target['onEditDialogShow_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Coach_Request']) { this.__OnListener(target, 'onNewObj_Coach_Request', target['onNewObj_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Coach_Request']) { this.__OnListener(target, 'onEditObj_Coach_Request', target['onEditObj_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Coach_Request']) { this.__OnListener(target, 'onQueryTableDialogShow_Coach_Request', target['onQueryTableDialogShow_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Coach_Request']) { this.__OnListener(target, 'onSendQueryTableItem_Coach_Request', target['onSendQueryTableItem_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Coach_Request']) { this.__OnListener(target, 'onSendUpdateTableItem_Coach_Request', target['onSendUpdateTableItem_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Coach_Request']) { this.__OnListener(target, 'onSelectTableItem_Coach_Request', target['onSelectTableItem_Coach_Request'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Coach_Request"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Coach_Request")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Coach_Request() {
    // },

    // xxevent.emit("NewObj_Coach_Request"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Coach_Request")); // 新增数据
    // // 新增数据
    // onNewObj_Coach_Request() {
    // },

    // xxevent.emit("EditObj_Coach_Request"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Coach_Request")); // 编辑数据
    // // 编辑数据 | Coach_Request | 
    // onEditObj_Coach_Request() {
    // },

    // xxevent.emit("QueryTableDialogShow_Coach_Request"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Coach_Request")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Coach_Request |
    // onQueryTableDialogShow_Coach_Request() {
    // },

    // xxevent.emit("SendQueryTableItem_Coach_Request"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach_Request")); // 查询数据项
    // // 查询数据项 | Coach_Request |
    // onSendQueryTableItem_Coach_Request() {
    // },

    // xxevent.emit("SendUpdateTableItem_Coach_Request"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Coach_Request")); // 更新查询数据项
    // // 更新查询数据项 | Coach_Request |
    // onSendUpdateTableItem_Coach_Request() {
    // },

    // xxevent.emit("SelectTableItem_Coach_Request"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Coach_Request")); // 选中查询结果某项
    // // 选中查询结果某项 | Coach_Request |
    // onSelectTableItem_Coach_Request() {
    // },
  // },

}
export default new xxevent

