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
    	if (target['onEditDialogShow_Leave']) { this.__OnListener(target, 'onEditDialogShow_Leave', target['onEditDialogShow_Leave'].bind(target));}
    	if (target['onNewObj_Leave']) { this.__OnListener(target, 'onNewObj_Leave', target['onNewObj_Leave'].bind(target));}
    	if (target['onEditObj_Leave']) { this.__OnListener(target, 'onEditObj_Leave', target['onEditObj_Leave'].bind(target));}
    	if (target['onQueryTableDialogShow_Leave']) { this.__OnListener(target, 'onQueryTableDialogShow_Leave', target['onQueryTableDialogShow_Leave'].bind(target));}
    	if (target['onSendQueryTableItem_Leave']) { this.__OnListener(target, 'onSendQueryTableItem_Leave', target['onSendQueryTableItem_Leave'].bind(target));}
    	if (target['onSendUpdateTableItem_Leave']) { this.__OnListener(target, 'onSendUpdateTableItem_Leave', target['onSendUpdateTableItem_Leave'].bind(target));}
    	if (target['onSendUpdateItem_Leave']) { this.__OnListener(target, 'onSendUpdateItem_Leave', target['onSendUpdateItem_Leave'].bind(target));}
    	if (target['onSelectTableItem_Leave']) { this.__OnListener(target, 'onSelectTableItem_Leave', target['onSelectTableItem_Leave'].bind(target));}

      if (target['onEditDialogShow_Member_Card']) { this.__OnListener(target, 'onEditDialogShow_Member_Card', target['onEditDialogShow_Member_Card'].bind(target));}
      if (target['onNewObj_Member_Card']) { this.__OnListener(target, 'onNewObj_Member_Card', target['onNewObj_Member_Card'].bind(target));}
      if (target['onEditObj_Member_Card']) { this.__OnListener(target, 'onEditObj_Member_Card', target['onEditObj_Member_Card'].bind(target));}
      if (target['onQueryTableDialogShow_Member_Card']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card', target['onQueryTableDialogShow_Member_Card'].bind(target));}
      if (target['onSendQueryTableItem_Member_Card']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card', target['onSendQueryTableItem_Member_Card'].bind(target));}
      if (target['onSendUpdateTableItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card', target['onSendUpdateTableItem_Member_Card'].bind(target));}
      if (target['onSelectTableItem_Member_Card']) { this.__OnListener(target, 'onSelectTableItem_Member_Card', target['onSelectTableItem_Member_Card'].bind(target));}
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

    // xxevent.emit("EditDialogShow_Leave"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Leave")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Leave() {
    // },

    // xxevent.emit("NewObj_Leave"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Leave")); // 新增数据
    // // 新增数据
    // onNewObj_Leave() {
    // },

    // xxevent.emit("EditObj_Leave"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Leave")); // 编辑数据
    // // 编辑数据 | Leave | 
    // onEditObj_Leave() {
    // },

    // xxevent.emit("QueryTableDialogShow_Leave"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Leave")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Leave |
    // onQueryTableDialogShow_Leave() {
    // },

    // xxevent.emit("SendQueryTableItem_Leave"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Leave")); // 查询数据项
    // // 查询数据项 | Leave |
    // onSendQueryTableItem_Leave() {
    // },

    // xxevent.emit("SendUpdateTableItem_Leave"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Leave")); // 更新查询数据项
    // // 更新查询数据项 | Leave |
    // onSendUpdateTableItem_Leave() {
    // },

    // xxevent.emit("SelectTableItem_Leave"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Leave")); // 选中查询结果某项
    // // 选中查询结果某项 | Leave |
    // onSelectTableItem_Leave() {
    // },
  // },

}
export default new xxevent

