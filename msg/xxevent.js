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
    	if (target['onEditDialogShow_Msg']) { this.__OnListener(target, 'onEditDialogShow_Msg', target['onEditDialogShow_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Msg']) { this.__OnListener(target, 'onNewObj_Msg', target['onNewObj_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Msg']) { this.__OnListener(target, 'onEditObj_Msg', target['onEditObj_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Msg']) { this.__OnListener(target, 'onQueryTableDialogShow_Msg', target['onQueryTableDialogShow_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Msg']) { this.__OnListener(target, 'onSendQueryTableItem_Msg', target['onSendQueryTableItem_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Msg']) { this.__OnListener(target, 'onSendUpdateTableItem_Msg', target['onSendUpdateTableItem_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Msg']) { this.__OnListener(target, 'onSelectTableItem_Msg', target['onSelectTableItem_Msg'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Msg"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Msg")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Msg() {
    // },

    // xxevent.emit("NewObj_Msg"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Msg")); // 新增数据
    // // 新增数据
    // onNewObj_Msg() {
    // },

    // xxevent.emit("EditObj_Msg"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Msg")); // 编辑数据
    // // 编辑数据 | Msg | 
    // onEditObj_Msg() {
    // },

    // xxevent.emit("QueryTableDialogShow_Msg"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Msg")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Msg |
    // onQueryTableDialogShow_Msg() {
    // },

    // xxevent.emit("SendQueryTableItem_Msg"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Msg")); // 查询数据项
    // // 查询数据项 | Msg |
    // onSendQueryTableItem_Msg() {
    // },

    // xxevent.emit("SendUpdateTableItem_Msg"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Msg")); // 更新查询数据项
    // // 更新查询数据项 | Msg |
    // onSendUpdateTableItem_Msg() {
    // },

    // xxevent.emit("SelectTableItem_Msg"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Msg")); // 选中查询结果某项
    // // 选中查询结果某项 | Msg |
    // onSelectTableItem_Msg() {
    // },
  // },

}
export default new xxevent

