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
    	if (target['onEditDialogShow_Config']) { this.__OnListener(target, 'onEditDialogShow_Config', target['onEditDialogShow_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Config']) { this.__OnListener(target, 'onNewObj_Config', target['onNewObj_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Config']) { this.__OnListener(target, 'onEditObj_Config', target['onEditObj_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Config']) { this.__OnListener(target, 'onQueryTableDialogShow_Config', target['onQueryTableDialogShow_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Config']) { this.__OnListener(target, 'onSendQueryTableItem_Config', target['onSendQueryTableItem_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Config']) { this.__OnListener(target, 'onSendUpdateTableItem_Config', target['onSendUpdateTableItem_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Config']) { this.__OnListener(target, 'onSelectTableItem_Config', target['onSelectTableItem_Config'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Config"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Config")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Config() {
    // },

    // xxevent.emit("NewObj_Config"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Config")); // 新增数据
    // // 新增数据
    // onNewObj_Config() {
    // },

    // xxevent.emit("EditObj_Config"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Config")); // 编辑数据
    // // 编辑数据 | Config | 
    // onEditObj_Config() {
    // },

    // xxevent.emit("QueryTableDialogShow_Config"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Config")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Config |
    // onQueryTableDialogShow_Config() {
    // },

    // xxevent.emit("SendQueryTableItem_Config"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Config")); // 查询数据项
    // // 查询数据项 | Config |
    // onSendQueryTableItem_Config() {
    // },

    // xxevent.emit("SendUpdateTableItem_Config"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Config")); // 更新查询数据项
    // // 更新查询数据项 | Config |
    // onSendUpdateTableItem_Config() {
    // },

    // xxevent.emit("SelectTableItem_Config"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Config")); // 选中查询结果某项
    // // 选中查询结果某项 | Config |
    // onSelectTableItem_Config() {
    // },
  // },

}
export default new xxevent

