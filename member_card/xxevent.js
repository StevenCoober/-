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

    // xxevent.emit("EditDialogShow_Member_Card"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Member_Card")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Member_Card() {
    // },

    // xxevent.emit("NewObj_Member_Card"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Member_Card")); // 新增数据
    // // 新增数据
    // onNewObj_Member_Card() {
    // },

    // xxevent.emit("EditObj_Member_Card"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Member_Card")); // 编辑数据
    // // 编辑数据 | Member_Card | 
    // onEditObj_Member_Card() {
    // },

    // xxevent.emit("QueryTableDialogShow_Member_Card"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Member_Card")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Member_Card |
    // onQueryTableDialogShow_Member_Card() {
    // },

    // xxevent.emit("SendQueryTableItem_Member_Card"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member_Card")); // 查询数据项
    // // 查询数据项 | Member_Card |
    // onSendQueryTableItem_Member_Card() {
    // },

    // xxevent.emit("SendUpdateTableItem_Member_Card"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Member_Card")); // 更新查询数据项
    // // 更新查询数据项 | Member_Card |
    // onSendUpdateTableItem_Member_Card() {
    // },

    // xxevent.emit("SelectTableItem_Member_Card"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Member_Card")); // 选中查询结果某项
    // // 选中查询结果某项 | Member_Card |
    // onSelectTableItem_Member_Card() {
    // },
  // },

}
export default new xxevent

