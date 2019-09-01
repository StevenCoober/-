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
      if (target['onEditDialogShow_Member']) { this.__OnListener(target, 'onEditDialogShow_Member', target['onEditDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member']) { this.__OnListener(target, 'onNewObj_Member', target['onNewObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member']) { this.__OnListener(target, 'onEditObj_Member', target['onEditObj_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member']) { this.__OnListener(target, 'onQueryTableDialogShow_Member', target['onQueryTableDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member']) { this.__OnListener(target, 'onSendQueryTableItem_Member', target['onSendQueryTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member']) { this.__OnListener(target, 'onSendUpdateTableItem_Member', target['onSendUpdateTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Member']) { this.__OnListener(target, 'onSendUpdateItem_Member', target['onSendUpdateItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSelectTableItem_Member']) { this.__OnListener(target, 'onSelectTableItem_Member', target['onSelectTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }


    	if (target['onEditDialogShow_Visitor']) { this.__OnListener(target, 'onEditDialogShow_Visitor', target['onEditDialogShow_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Visitor']) { this.__OnListener(target, 'onNewObj_Visitor', target['onNewObj_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Visitor']) { this.__OnListener(target, 'onEditObj_Visitor', target['onEditObj_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Visitor']) { this.__OnListener(target, 'onQueryTableDialogShow_Visitor', target['onQueryTableDialogShow_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Visitor']) { this.__OnListener(target, 'onSendQueryTableItem_Visitor', target['onSendQueryTableItem_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Visitor']) { this.__OnListener(target, 'onSendUpdateTableItem_Visitor', target['onSendUpdateTableItem_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Visitor']) { this.__OnListener(target, 'onSendUpdateItem_Visitor', target['onSendUpdateItem_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Visitor']) { this.__OnListener(target, 'onSelectTableItem_Visitor', target['onSelectTableItem_Visitor'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member_Card']) { this.__OnListener(target, 'onEditDialogShow_Member_Card', target['onEditDialogShow_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member_Card']) { this.__OnListener(target, 'onNewObj_Member_Card', target['onNewObj_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member_Card']) { this.__OnListener(target, 'onEditObj_Member_Card', target['onEditObj_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member_Card']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card', target['onQueryTableDialogShow_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member_Card']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card', target['onSendQueryTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card', target['onSendUpdateTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateItem_Member_Card', target['onSendUpdateItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSelectTableItem_Member_Card']) { this.__OnListener(target, 'onSelectTableItem_Member_Card', target['onSelectTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      

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

    // xxevent.emit("EditDialogShow_Visitor"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Visitor")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Visitor() {
    // },

    // xxevent.emit("NewObj_Visitor"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Visitor")); // 新增数据
    // // 新增数据
    // onNewObj_Visitor() {
    // },

    // xxevent.emit("EditObj_Visitor"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Visitor")); // 编辑数据
    // // 编辑数据 | Visitor | 
    // onEditObj_Visitor() {
    // },

    // xxevent.emit("QueryTableDialogShow_Visitor"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Visitor")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Visitor |
    // onQueryTableDialogShow_Visitor() {
    // },

    // xxevent.emit("SendQueryTableItem_Visitor"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Visitor")); // 查询数据项
    // // 查询数据项 | Visitor |
    // onSendQueryTableItem_Visitor() {
    // },

    // xxevent.emit("SendUpdateTableItem_Visitor"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Visitor")); // 更新查询数据项
    // // 更新查询数据项 | Visitor |
    // onSendUpdateTableItem_Visitor() {
    // },

    // xxevent.emit("SelectTableItem_Visitor"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Visitor")); // 选中查询结果某项
    // // 选中查询结果某项 | Visitor |
    // onSelectTableItem_Visitor() {
    // },
  // },

}
export default new xxevent

