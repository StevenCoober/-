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
    	if (target['onEditDialogShow_Member_Record']) { this.__OnListener(target, 'onEditDialogShow_Member_Record', target['onEditDialogShow_Member_Record'].bind(target));}
    	if (target['onNewObj_Member_Record']) { this.__OnListener(target, 'onNewObj_Member_Record', target['onNewObj_Member_Record'].bind(target));}
    	if (target['onEditObj_Member_Record']) { this.__OnListener(target, 'onEditObj_Member_Record', target['onEditObj_Member_Record'].bind(target));}
    	if (target['onQueryTableDialogShow_Member_Record']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Record', target['onQueryTableDialogShow_Member_Record'].bind(target));}
    	if (target['onSendQueryTableItem_Member_Record']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Record', target['onSendQueryTableItem_Member_Record'].bind(target));}
    	if (target['onSendUpdateTableItem_Member_Record']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Record', target['onSendUpdateTableItem_Member_Record'].bind(target));}
    	if (target['onSelectTableItem_Member_Record']) { this.__OnListener(target, 'onSelectTableItem_Member_Record', target['onSelectTableItem_Member_Record'].bind(target));}
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

    // xxevent.emit("EditDialogShow_Member_Record"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Member_Record")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Member_Record() {
    // },

    // xxevent.emit("NewObj_Member_Record"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Member_Record")); // 新增数据
    // // 新增数据
    // onNewObj_Member_Record() {
    // },

    // xxevent.emit("EditObj_Member_Record"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Member_Record")); // 编辑数据
    // // 编辑数据 | Member_Record | 
    // onEditObj_Member_Record() {
    // },

    // xxevent.emit("QueryTableDialogShow_Member_Record"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Member_Record")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Member_Record |
    // onQueryTableDialogShow_Member_Record() {
    // },

    // xxevent.emit("SendQueryTableItem_Member_Record"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Record")); // 查询数据项
    // // 查询数据项 | Member_Record |
    // onSendQueryTableItem_Member_Record() {
    // },

    // xxevent.emit("SendUpdateTableItem_Member_Record"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Member_Record")); // 更新查询数据项
    // // 更新查询数据项 | Member_Record |
    // onSendUpdateTableItem_Member_Record() {
    // },

    // xxevent.emit("SelectTableItem_Member_Record"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Member_Record")); // 选中查询结果某项
    // // 选中查询结果某项 | Member_Record |
    // onSelectTableItem_Member_Record() {
    // },
  // },

}
export default new xxevent

