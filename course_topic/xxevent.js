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
      
    	if (target['onEditDialogShow_Course_topic']) { this.__OnListener(target, 'onEditDialogShow_Course_topic', target['onEditDialogShow_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onNewObj_Course_topic']) { this.__OnListener(target, 'onNewObj_Course_topic', target['onNewObj_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onEditObj_Course_topic']) { this.__OnListener(target, 'onEditObj_Course_topic', target['onEditObj_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onQueryTableDialogShow_Course_topic']) { this.__OnListener(target, 'onQueryTableDialogShow_Course_topic', target['onQueryTableDialogShow_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Course_topic']) { this.__OnListener(target, 'onSendQueryTableItem_Course_topic', target['onSendQueryTableItem_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Course_topic']) { this.__OnListener(target, 'onSendUpdateTableItem_Course_topic', target['onSendUpdateTableItem_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Course_topic']) { this.__OnListener(target, 'onSendUpdateItem_Course_topic', target['onSendUpdateItem_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSelectTableItem_Course_topic']) { this.__OnListener(target, 'onSelectTableItem_Course_topic', target['onSelectTableItem_Course_topic'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }


      if (target['onEditDialogShow_Course_Topic_Time']) { this.__OnListener(target, 'onEditDialogShow_Course_Topic_Time', target['onEditDialogShow_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Course_Topic_Time']) { this.__OnListener(target, 'onNewObj_Course_Topic_Time', target['onNewObj_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Course_Topic_Time']) { this.__OnListener(target, 'onEditObj_Course_Topic_Time', target['onEditObj_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Course_Topic_Time']) { this.__OnListener(target, 'onQueryTableDialogShow_Course_Topic_Time', target['onQueryTableDialogShow_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Course_Topic_Time']) { this.__OnListener(target, 'onSendQueryTableItem_Course_Topic_Time', target['onSendQueryTableItem_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Course_Topic_Time']) { this.__OnListener(target, 'onSendUpdateTableItem_Course_Topic_Time', target['onSendUpdateTableItem_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Course_Topic_Time']) { this.__OnListener(target, 'onSendUpdateItem_Course_Topic_Time', target['onSendUpdateItem_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSelectTableItem_Course_Topic_Time']) { this.__OnListener(target, 'onSelectTableItem_Course_Topic_Time', target['onSelectTableItem_Course_Topic_Time'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onSendQueryTableItem_Course_Topic_Time_Topic_Type_Id']) { this.__OnListener(target, 'onSendQueryTableItem_Course_Topic_Time_Topic_Type_Id', target['onSendQueryTableItem_Course_Topic_Time'].bind(target)); }


      if (target['onEditDialogShow_Course_Topic_Type']) { this.__OnListener(target, 'onEditDialogShow_Course_Topic_Type', target['onEditDialogShow_Course_Topic_Type'].bind(target));}
      if (target['onNewObj_Course_Topic_Type']) { this.__OnListener(target, 'onNewObj_Course_Topic_Type', target['onNewObj_Course_Topic_Type'].bind(target));}
      if (target['onEditObj_Course_Topic_Type']) { this.__OnListener(target, 'onEditObj_Course_Topic_Type', target['onEditObj_Course_Topic_Type'].bind(target));}
      if (target['onQueryTableDialogShow_Course_Topic_Type']) { this.__OnListener(target, 'onQueryTableDialogShow_Course_Topic_Type', target['onQueryTableDialogShow_Course_Topic_Type'].bind(target));}
      if (target['onSendQueryTableItem_Course_Topic_Type']) { this.__OnListener(target, 'onSendQueryTableItem_Course_Topic_Type', target['onSendQueryTableItem_Course_Topic_Type'].bind(target));}
      if (target['onSendUpdateTableItem_Course_Topic_Type']) { this.__OnListener(target, 'onSendUpdateTableItem_Course_Topic_Type', target['onSendUpdateTableItem_Course_Topic_Type'].bind(target));}
      if (target['onSendUpdateItem_Course_Topic_Type']) { this.__OnListener(target, 'onSendUpdateItem_Course_Topic_Type', target['onSendUpdateItem_Course_Topic_Type'].bind(target));}
      if (target['onSelectTableItem_Course_Topic_Type']) { this.__OnListener(target, 'onSelectTableItem_Course_Topic_Type', target['onSelectTableItem_Course_Topic_Type'].bind(target));}
      
      if (target['onEditDialogShow_Course_Topic_Time_Order']) { this.__OnListener(target, 'onEditDialogShow_Course_Topic_Time_Order', target['onEditDialogShow_Course_Topic_Time_Order'].bind(target));}
      if (target['onNewObj_Course_Topic_Time_Order']) { this.__OnListener(target, 'onNewObj_Course_Topic_Time_Order', target['onNewObj_Course_Topic_Time_Order'].bind(target));}
      if (target['onEditObj_Course_Topic_Time_Order']) { this.__OnListener(target, 'onEditObj_Course_Topic_Time_Order', target['onEditObj_Course_Topic_Time_Order'].bind(target));}
      if (target['onQueryTableDialogShow_Course_Topic_Time_Order']) { this.__OnListener(target, 'onQueryTableDialogShow_Course_Topic_Time_Order', target['onQueryTableDialogShow_Course_Topic_Time_Order'].bind(target));}
      if (target['onSendQueryTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSendQueryTableItem_Course_Topic_Time_Order', target['onSendQueryTableItem_Course_Topic_Time_Order'].bind(target));}
      if (target['onSendUpdateTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSendUpdateTableItem_Course_Topic_Time_Order', target['onSendUpdateTableItem_Course_Topic_Time_Order'].bind(target));}
      if (target['onSendUpdateItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSendUpdateItem_Course_Topic_Time_Order', target['onSendUpdateItem_Course_Topic_Time_Order'].bind(target));}
      if (target['onSelectTableItem_Course_Topic_Time_Order']) { this.__OnListener(target, 'onSelectTableItem_Course_Topic_Time_Order', target['onSelectTableItem_Course_Topic_Time_Order'].bind(target));}
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

    // xxevent.emit("EditDialogShow_Course_topic"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Course_topic")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Course_topic() {
    // },

    // xxevent.emit("NewObj_Course_topic"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Course_topic")); // 新增数据
    // // 新增数据
    // onNewObj_Course_topic() {
    // },

    // xxevent.emit("EditObj_Course_topic"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Course_topic")); // 编辑数据
    // // 编辑数据 | Course_topic | 
    // onEditObj_Course_topic() {
    // },

    // xxevent.emit("QueryTableDialogShow_Course_topic"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Course_topic")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Course_topic |
    // onQueryTableDialogShow_Course_topic() {
    // },

    // xxevent.emit("SendQueryTableItem_Course_topic"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Course_topic")); // 查询数据项
    // // 查询数据项 | Course_topic |
    // onSendQueryTableItem_Course_topic() {
    // },

    // xxevent.emit("SendUpdateTableItem_Course_topic"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Course_topic")); // 更新查询数据项
    // // 更新查询数据项 | Course_topic |
    // onSendUpdateTableItem_Course_topic() {
    // },

    // xxevent.emit("SelectTableItem_Course_topic"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Course_topic")); // 选中查询结果某项
    // // 选中查询结果某项 | Course_topic |
    // onSelectTableItem_Course_topic() {
    // },
  // },

}
export default new xxevent

