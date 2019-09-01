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

    // xxevent.emit("EditDialogShow_Adviser"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Adviser")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Adviser() {
    // },

    // xxevent.emit("NewObj_Adviser"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Adviser")); // 新增数据
    // // 新增数据
    // onNewObj_Adviser() {
    // },

    // xxevent.emit("EditObj_Adviser"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Adviser")); // 编辑数据
    // // 编辑数据 | Adviser | 
    // onEditObj_Adviser() {
    // },

    // xxevent.emit("QueryTableDialogShow_Adviser"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Adviser")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Adviser |
    // onQueryTableDialogShow_Adviser() {
    // },

    // xxevent.emit("SendQueryTableItem_Adviser"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Adviser")); // 查询数据项
    // // 查询数据项 | Adviser |
    // onSendQueryTableItem_Adviser() {
    // },

    // xxevent.emit("SendUpdateTableItem_Adviser"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Adviser")); // 更新查询数据项
    // // 更新查询数据项 | Adviser |
    // onSendUpdateTableItem_Adviser() {
    // },

    // xxevent.emit("SelectTableItem_Adviser"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Adviser")); // 选中查询结果某项
    // // 选中查询结果某项 | Adviser |
    // onSelectTableItem_Adviser() {
    // },
  // },

}
export default new xxevent

