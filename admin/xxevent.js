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
    	if (target['onEditDialogShow_Admin']) { this.__OnListener(target, 'onEditDialogShow_Admin', target['onEditDialogShow_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Admin']) { this.__OnListener(target, 'onNewObj_Admin', target['onNewObj_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Admin']) { this.__OnListener(target, 'onEditObj_Admin', target['onEditObj_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Admin']) { this.__OnListener(target, 'onQueryTableDialogShow_Admin', target['onQueryTableDialogShow_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Admin']) { this.__OnListener(target, 'onSendQueryTableItem_Admin', target['onSendQueryTableItem_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Admin']) { this.__OnListener(target, 'onSendUpdateTableItem_Admin', target['onSendUpdateTableItem_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Admin']) { this.__OnListener(target, 'onSelectTableItem_Admin', target['onSelectTableItem_Admin'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Admin"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Admin")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Admin() {
    // },

    // xxevent.emit("NewObj_Admin"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Admin")); // 新增数据
    // // 新增数据
    // onNewObj_Admin() {
    // },

    // xxevent.emit("EditObj_Admin"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Admin")); // 编辑数据
    // // 编辑数据 | Admin | 
    // onEditObj_Admin() {
    // },

    // xxevent.emit("QueryTableDialogShow_Admin"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Admin")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Admin |
    // onQueryTableDialogShow_Admin() {
    // },

    // xxevent.emit("SendQueryTableItem_Admin"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Admin")); // 查询数据项
    // // 查询数据项 | Admin |
    // onSendQueryTableItem_Admin() {
    // },

    // xxevent.emit("SendUpdateTableItem_Admin"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Admin")); // 更新查询数据项
    // // 更新查询数据项 | Admin |
    // onSendUpdateTableItem_Admin() {
    // },

    // xxevent.emit("SelectTableItem_Admin"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Admin")); // 选中查询结果某项
    // // 选中查询结果某项 | Admin |
    // onSelectTableItem_Admin() {
    // },
  // },

}
export default new xxevent

