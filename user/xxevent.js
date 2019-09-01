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
    	if (target['onEditDialogShow_User']) { this.__OnListener(target, 'onEditDialogShow_User', target['onEditDialogShow_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_User']) { this.__OnListener(target, 'onNewObj_User', target['onNewObj_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_User']) { this.__OnListener(target, 'onEditObj_User', target['onEditObj_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_User']) { this.__OnListener(target, 'onQueryTableDialogShow_User', target['onQueryTableDialogShow_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_User']) { this.__OnListener(target, 'onSendQueryTableItem_User', target['onSendQueryTableItem_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_User']) { this.__OnListener(target, 'onSendUpdateTableItem_User', target['onSendUpdateTableItem_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_User']) { this.__OnListener(target, 'onSelectTableItem_User', target['onSelectTableItem_User'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Coach']) { this.__OnListener(target, 'onEditDialogShow_Coach', target['onEditDialogShow_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Coach']) { this.__OnListener(target, 'onNewObj_Coach', target['onNewObj_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Coach']) { this.__OnListener(target, 'onEditObj_Coach', target['onEditObj_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Coach']) { this.__OnListener(target, 'onQueryTableDialogShow_Coach', target['onQueryTableDialogShow_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Coach']) { this.__OnListener(target, 'onSendQueryTableItem_Coach', target['onSendQueryTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Coach']) { this.__OnListener(target, 'onSendUpdateTableItem_Coach', target['onSendUpdateTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Coach']) { this.__OnListener(target, 'onSendUpdateItem_Coach', target['onSendUpdateItem_Coach'].bind(target));}
      if (target['onSelectTableItem_Coach']) { this.__OnListener(target, 'onSelectTableItem_Coach', target['onSelectTableItem_Coach'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member']) { this.__OnListener(target, 'onEditDialogShow_Member', target['onEditDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member']) { this.__OnListener(target, 'onNewObj_Member', target['onNewObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member']) { this.__OnListener(target, 'onEditObj_Member', target['onEditObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member']) { this.__OnListener(target, 'onQueryTableDialogShow_Member', target['onQueryTableDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member']) { this.__OnListener(target, 'onSendQueryTableItem_Member', target['onSendQueryTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member']) { this.__OnListener(target, 'onSendUpdateTableItem_Member', target['onSendUpdateTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Member']) { this.__OnListener(target, 'onSendUpdateItem_Member', target['onSendUpdateItem_Member'].bind(target));}
      if (target['onSelectTableItem_Member']) { this.__OnListener(target, 'onSelectTableItem_Member', target['onSelectTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }      

      if (target['onEditDialogShow_Adviser']) { this.__OnListener(target, 'onEditDialogShow_Adviser', target['onEditDialogShow_Adviser'].bind(target));}
      if (target['onNewObj_Adviser']) { this.__OnListener(target, 'onNewObj_Adviser', target['onNewObj_Adviser'].bind(target));}
      if (target['onEditObj_Adviser']) { this.__OnListener(target, 'onEditObj_Adviser', target['onEditObj_Adviser'].bind(target));}
      if (target['onQueryTableDialogShow_Adviser']) { this.__OnListener(target, 'onQueryTableDialogShow_Adviser', target['onQueryTableDialogShow_Adviser'].bind(target));}
      if (target['onSendQueryTableItem_Adviser']) { this.__OnListener(target, 'onSendQueryTableItem_Adviser', target['onSendQueryTableItem_Adviser'].bind(target));}
      if (target['onSendUpdateTableItem_Adviser']) { this.__OnListener(target, 'onSendUpdateTableItem_Adviser', target['onSendUpdateTableItem_Adviser'].bind(target));}
      if (target['onSendUpdateItem_Adviser']) { this.__OnListener(target, 'onSendUpdateItem_Adviser', target['onSendUpdateItem_Adviser'].bind(target));}
      if (target['onSelectTableItem_Adviser']) { this.__OnListener(target, 'onSelectTableItem_Adviser', target['onSelectTableItem_Adviser'].bind(target));}
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

    // xxevent.emit("EditDialogShow_User"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_User")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_User() {
    // },

    // xxevent.emit("NewObj_User"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_User")); // 新增数据
    // // 新增数据
    // onNewObj_User() {
    // },

    // xxevent.emit("EditObj_User"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_User")); // 编辑数据
    // // 编辑数据 | User | 
    // onEditObj_User() {
    // },

    // xxevent.emit("QueryTableDialogShow_User"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_User")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | User |
    // onQueryTableDialogShow_User() {
    // },

    // xxevent.emit("SendQueryTableItem_User"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_User")); // 查询数据项
    // // 查询数据项 | User |
    // onSendQueryTableItem_User() {
    // },

    // xxevent.emit("SendUpdateTableItem_User"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_User")); // 更新查询数据项
    // // 更新查询数据项 | User |
    // onSendUpdateTableItem_User() {
    // },

    // xxevent.emit("SelectTableItem_User"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_User")); // 选中查询结果某项
    // // 选中查询结果某项 | User |
    // onSelectTableItem_User() {
    // },
  // },

}
export default new xxevent

