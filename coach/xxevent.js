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
    	if (target['onEditDialogShow_Coach']) { this.__OnListener(target, 'onEditDialogShow_Coach', target['onEditDialogShow_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Coach']) { this.__OnListener(target, 'onNewObj_Coach', target['onNewObj_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Coach']) { this.__OnListener(target, 'onEditObj_Coach', target['onEditObj_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Coach']) { this.__OnListener(target, 'onQueryTableDialogShow_Coach', target['onQueryTableDialogShow_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Coach']) { this.__OnListener(target, 'onSendQueryTableItem_Coach', target['onSendQueryTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Coach']) { this.__OnListener(target, 'onSendUpdateTableItem_Coach', target['onSendUpdateTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
	    if (target['onSendUpdateItem_Coach']) { this.__OnListener(target, 'onSendUpdateItem_Coach', target['onSendUpdateItem_Coach'].bind(target));}
    	if (target['onSelectTableItem_Coach']) { this.__OnListener(target, 'onSelectTableItem_Coach', target['onSelectTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Coach_Reserve']) { this.__OnListener(target, 'onEditDialogShow_Coach_Reserve', target['onEditDialogShow_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Coach_Reserve']) { this.__OnListener(target, 'onNewObj_Coach_Reserve', target['onNewObj_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Coach_Reserve']) { this.__OnListener(target, 'onEditObj_Coach_Reserve', target['onEditObj_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Coach_Reserve']) { this.__OnListener(target, 'onQueryTableDialogShow_Coach_Reserve', target['onQueryTableDialogShow_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSendQueryTableItem_Coach_Reserve', target['onSendQueryTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSendUpdateTableItem_Coach_Reserve', target['onSendUpdateTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSelectTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSelectTableItem_Coach_Reserve', target['onSelectTableItem_Coach_Reserve'].bind(target));}
      if (target['onSelectTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSelectTableItem_Coach_Reserve', target['onSelectTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member']) { this.__OnListener(target, 'onEditDialogShow_Member', target['onEditDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member']) { this.__OnListener(target, 'onNewObj_Member', target['onNewObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member']) { this.__OnListener(target, 'onEditObj_Member', target['onEditObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member']) { this.__OnListener(target, 'onQueryTableDialogShow_Member', target['onQueryTableDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member']) { this.__OnListener(target, 'onSendQueryTableItem_Member', target['onSendQueryTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member']) { this.__OnListener(target, 'onSendUpdateTableItem_Member', target['onSendUpdateTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Member']) { this.__OnListener(target, 'onSendUpdateItem_Member', target['onSendUpdateItem_Member'].bind(target));}
      if (target['onSelectTableItem_Member']) { this.__OnListener(target, 'onSelectTableItem_Member', target['onSelectTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }      
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

    // xxevent.emit("EditDialogShow_Coach"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Coach")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Coach() {
    // },

    // xxevent.emit("NewObj_Coach"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Coach")); // 新增数据
    // // 新增数据
    // onNewObj_Coach() {
    // },

    // xxevent.emit("EditObj_Coach"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Coach")); // 编辑数据
    // // 编辑数据
    // onEditObj_Coach() {
    // },

    // xxevent.emit("QueryTableDialogShow_Coach"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Coach")); // 显示查询数据项窗体
    // // 显示查询数据项窗体
    // onQueryTableDialogShow_Coach() {
    // },

    // xxevent.emit("SendQueryTableItem_Coach"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach")); // 查询数据项
    // // 查询数据项
    // onSendQueryTableItem_Coach() {
    // },

    // xxevent.emit("SendUpdateTableItem_Coach"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Coach")); // 更新查询数据项
    // // 更新查询数据项
    // onSendUpdateTableItem_Coach() {
    // },

    // xxevent.emit("SelectTableItem_Coach"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Coach")); // 选中查询结果某项
    // // 选中查询结果某项
    // onSelectTableItem_Coach() {
    // },
  // },

}
export default new xxevent
