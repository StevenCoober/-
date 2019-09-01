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
    	if (target['onEditDialogShow_Coach_Reserve']) { this.__OnListener(target, 'onEditDialogShow_Coach_Reserve', target['onEditDialogShow_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Coach_Reserve']) { this.__OnListener(target, 'onNewObj_Coach_Reserve', target['onNewObj_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Coach_Reserve']) { this.__OnListener(target, 'onEditObj_Coach_Reserve', target['onEditObj_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Coach_Reserve']) { this.__OnListener(target, 'onQueryTableDialogShow_Coach_Reserve', target['onQueryTableDialogShow_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSendQueryTableItem_Coach_Reserve', target['onSendQueryTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSendUpdateTableItem_Coach_Reserve', target['onSendUpdateTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Coach_Reserve']) { this.__OnListener(target, 'onSelectTableItem_Coach_Reserve', target['onSelectTableItem_Coach_Reserve'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
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

    // xxevent.emit("EditDialogShow_Coach_Reserve"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Coach_Reserve")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Coach_Reserve() {
    // },

    // xxevent.emit("NewObj_Coach_Reserve"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Coach_Reserve")); // 新增数据
    // // 新增数据
    // onNewObj_Coach_Reserve() {
    // },

    // xxevent.emit("EditObj_Coach_Reserve"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Coach_Reserve")); // 编辑数据
    // // 编辑数据 | Coach_Reserve | 
    // onEditObj_Coach_Reserve() {
    // },

    // xxevent.emit("QueryTableDialogShow_Coach_Reserve"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Coach_Reserve")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Coach_Reserve |
    // onQueryTableDialogShow_Coach_Reserve() {
    // },

    // xxevent.emit("SendQueryTableItem_Coach_Reserve"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Coach_Reserve")); // 查询数据项
    // // 查询数据项 | Coach_Reserve |
    // onSendQueryTableItem_Coach_Reserve() {
    // },

    // xxevent.emit("SendUpdateTableItem_Coach_Reserve"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Coach_Reserve")); // 更新查询数据项
    // // 更新查询数据项 | Coach_Reserve |
    // onSendUpdateTableItem_Coach_Reserve() {
    // },

    // xxevent.emit("SelectTableItem_Coach_Reserve"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Coach_Reserve")); // 选中查询结果某项
    // // 选中查询结果某项 | Coach_Reserve |
    // onSelectTableItem_Coach_Reserve() {
    // },
  // },

}
export default new xxevent

