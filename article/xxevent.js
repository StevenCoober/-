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
    	if (target['onEditDialogShow_Article']) { this.__OnListener(target, 'onEditDialogShow_Article', target['onEditDialogShow_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Article']) { this.__OnListener(target, 'onNewObj_Article', target['onNewObj_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Article']) { this.__OnListener(target, 'onEditObj_Article', target['onEditObj_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Article']) { this.__OnListener(target, 'onQueryTableDialogShow_Article', target['onQueryTableDialogShow_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Article']) { this.__OnListener(target, 'onSendQueryTableItem_Article', target['onSendQueryTableItem_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Article']) { this.__OnListener(target, 'onSendUpdateTableItem_Article', target['onSendUpdateTableItem_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Article']) { this.__OnListener(target, 'onSelectTableItem_Article', target['onSelectTableItem_Article'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Article"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Article")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Article() {
    // },

    // xxevent.emit("NewObj_Article"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Article")); // 新增数据
    // // 新增数据
    // onNewObj_Article() {
    // },

    // xxevent.emit("EditObj_Article"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Article")); // 编辑数据
    // // 编辑数据 | Article | 
    // onEditObj_Article() {
    // },

    // xxevent.emit("QueryTableDialogShow_Article"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Article")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Article |
    // onQueryTableDialogShow_Article() {
    // },

    // xxevent.emit("SendQueryTableItem_Article"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Article")); // 查询数据项
    // // 查询数据项 | Article |
    // onSendQueryTableItem_Article() {
    // },

    // xxevent.emit("SendUpdateTableItem_Article"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Article")); // 更新查询数据项
    // // 更新查询数据项 | Article |
    // onSendUpdateTableItem_Article() {
    // },

    // xxevent.emit("SelectTableItem_Article"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Article")); // 选中查询结果某项
    // // 选中查询结果某项 | Article |
    // onSelectTableItem_Article() {
    // },
  // },

}
export default new xxevent

