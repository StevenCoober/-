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
    	if (target['onEditDialogShow_Member_Card_Type']) { this.__OnListener(target, 'onEditDialogShow_Member_Card_Type', target['onEditDialogShow_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Member_Card_Type']) { this.__OnListener(target, 'onNewObj_Member_Card_Type', target['onNewObj_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Member_Card_Type']) { this.__OnListener(target, 'onEditObj_Member_Card_Type', target['onEditObj_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Member_Card_Type']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card_Type', target['onQueryTableDialogShow_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card_Type', target['onSendQueryTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card_Type', target['onSendUpdateTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSelectTableItem_Member_Card_Type', target['onSelectTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Member_Card_Type"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Member_Card_Type")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Member_Card_Type() {
    // },

    // xxevent.emit("NewObj_Member_Card_Type"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Member_Card_Type")); // 新增数据
    // // 新增数据
    // onNewObj_Member_Card_Type() {
    // },

    // xxevent.emit("EditObj_Member_Card_Type"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Member_Card_Type")); // 编辑数据
    // // 编辑数据 | Member_Card_Type | 
    // onEditObj_Member_Card_Type() {
    // },

    // xxevent.emit("QueryTableDialogShow_Member_Card_Type"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Member_Card_Type")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Member_Card_Type |
    // onQueryTableDialogShow_Member_Card_Type() {
    // },

    // xxevent.emit("SendQueryTableItem_Member_Card_Type"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Card_Type")); // 查询数据项
    // // 查询数据项 | Member_Card_Type |
    // onSendQueryTableItem_Member_Card_Type() {
    // },

    // xxevent.emit("SendUpdateTableItem_Member_Card_Type"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Member_Card_Type")); // 更新查询数据项
    // // 更新查询数据项 | Member_Card_Type |
    // onSendUpdateTableItem_Member_Card_Type() {
    // },

    // xxevent.emit("SelectTableItem_Member_Card_Type"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Member_Card_Type")); // 选中查询结果某项
    // // 选中查询结果某项 | Member_Card_Type |
    // onSelectTableItem_Member_Card_Type() {
    // },
  // },

}
export default new xxevent

