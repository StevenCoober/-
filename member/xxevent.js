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

      if (target['onEditDialogShow_MemberMore']) { this.__OnListener(target, 'onEditDialogShow_MemberMore', target['onEditDialogShow_MemberMore'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_MemberMore']) { this.__OnListener(target, 'onNewObj_MemberMore', target['onNewObj_MemberMore'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_MemberMore']) { this.__OnListener(target, 'onEditObj_MemberMore', target['onEditObj_MemberMore'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }


    	if (target['onQueryTableDialogShow_Member']) { this.__OnListener(target, 'onQueryTableDialogShow_Member', target['onQueryTableDialogShow_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendQueryTableItem_Member']) { this.__OnListener(target, 'onSendQueryTableItem_Member', target['onSendQueryTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
    	if (target['onSendUpdateTableItem_Member']) { this.__OnListener(target, 'onSendUpdateTableItem_Member', target['onSendUpdateTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
	    if (target['onSendUpdateItem_Member']) { this.__OnListener(target, 'onSendUpdateItem_Member', target['onSendUpdateItem_Member'].bind(target));}
    	if (target['onSelectTableItem_Member']) { this.__OnListener(target, 'onSelectTableItem_Member', target['onSelectTableItem_Member'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member_Card']) { this.__OnListener(target, 'onEditDialogShow_Member_Card', target['onEditDialogShow_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member_Card']) { this.__OnListener(target, 'onNewObj_Member_Card', target['onNewObj_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member_Card']) { this.__OnListener(target, 'onEditObj_Member_Card', target['onEditObj_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member_Card']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card', target['onQueryTableDialogShow_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member_Card']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card', target['onSendQueryTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card', target['onSendUpdateTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member_Card']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card', target['onSendUpdateTableItem_Member_Card'].bind(target));}
      if (target['onSelectTableItem_Member_Card']) { this.__OnListener(target, 'onSelectTableItem_Member_Card', target['onSelectTableItem_Member_Card'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member_Card_Type']) { this.__OnListener(target, 'onEditDialogShow_Member_Card_Type', target['onEditDialogShow_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onNewObj_Member_Card_Type']) { this.__OnListener(target, 'onNewObj_Member_Card_Type', target['onNewObj_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onEditObj_Member_Card_Type']) { this.__OnListener(target, 'onEditObj_Member_Card_Type', target['onEditObj_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onQueryTableDialogShow_Member_Card_Type']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Card_Type', target['onQueryTableDialogShow_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendQueryTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Card_Type', target['onSendQueryTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Card_Type', target['onSendUpdateTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }
      if (target['onSendUpdateItem_Member_Card_Type']) { this.__OnListener(target, 'onSendUpdateItem_Member_Card_Type', target['onSendUpdateItem_Member_Card_Type'].bind(target));}
      if (target['onSelectTableItem_Member_Card_Type']) { this.__OnListener(target, 'onSelectTableItem_Member_Card_Type', target['onSelectTableItem_Member_Card_Type'].bind(target)); } else { console.log('[WARN] target has no method with onBeforeTo_STATE_BEFORE'); }

      if (target['onEditDialogShow_Member_Record']) { this.__OnListener(target, 'onEditDialogShow_Member_Record', target['onEditDialogShow_Member_Record'].bind(target));}
      if (target['onNewObj_Member_Record']) { this.__OnListener(target, 'onNewObj_Member_Record', target['onNewObj_Member_Record'].bind(target));}
      if (target['onEditObj_Member_Record']) { this.__OnListener(target, 'onEditObj_Member_Record', target['onEditObj_Member_Record'].bind(target));}
      if (target['onQueryTableDialogShow_Member_Record']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Record', target['onQueryTableDialogShow_Member_Record'].bind(target));}
      if (target['onSendQueryTableItem_Member_Record']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Record', target['onSendQueryTableItem_Member_Record'].bind(target));}
      if (target['onSendUpdateTableItem_Member_Record']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Record', target['onSendUpdateTableItem_Member_Record'].bind(target));}
      if (target['onSendUpdateItem_Member_Record']) { this.__OnListener(target, 'onSendUpdateItem_Member_Record', target['onSendUpdateItem_Member_Record'].bind(target));}
      if (target['onSelectTableItem_Member_Record']) { this.__OnListener(target, 'onSelectTableItem_Member_Record', target['onSelectTableItem_Member_Record'].bind(target));}

      if (target['onEditDialogShow_Member_Record_More']) { this.__OnListener(target, 'onEditDialogShow_Member_Record_More', target['onEditDialogShow_Member_Record_More'].bind(target));}
      if (target['onNewObj_Member_Record_More']) { this.__OnListener(target, 'onNewObj_Member_Record_More', target['onNewObj_Member_Record_More'].bind(target));}
      if (target['onEditObj_Member_Record_More']) { this.__OnListener(target, 'onEditObj_Member_Record_More', target['onEditObj_Member_Record_More'].bind(target));}
      if (target['onQueryTableDialogShow_Member_Record_More']) { this.__OnListener(target, 'onQueryTableDialogShow_Member_Record_More', target['onQueryTableDialogShow_Member_Record_More'].bind(target));}
      if (target['onSendQueryTableItem_Member_Record_More']) { this.__OnListener(target, 'onSendQueryTableItem_Member_Record_More', target['onSendQueryTableItem_Member_Record_More'].bind(target));}
      if (target['onSendUpdateTableItem_Member_Record_More']) { this.__OnListener(target, 'onSendUpdateTableItem_Member_Record_More', target['onSendUpdateTableItem_Member_Record_More'].bind(target));}
      if (target['onSelectTableItem_Member_Record_More']) { this.__OnListener(target, 'onSelectTableItem_Member_Record_More', target['onSelectTableItem_Member_Record_More'].bind(target));}      

      if (target['onEditDialogShow_Leave']) { this.__OnListener(target, 'onEditDialogShow_Leave', target['onEditDialogShow_Leave'].bind(target));}
      if (target['onNewObj_Leave']) { this.__OnListener(target, 'onNewObj_Leave', target['onNewObj_Leave'].bind(target));}
      if (target['onEditObj_Leave']) { this.__OnListener(target, 'onEditObj_Leave', target['onEditObj_Leave'].bind(target));}
      if (target['onQueryTableDialogShow_Leave']) { this.__OnListener(target, 'onQueryTableDialogShow_Leave', target['onQueryTableDialogShow_Leave'].bind(target));}
      if (target['onSendQueryTableItem_Leave']) { this.__OnListener(target, 'onSendQueryTableItem_Leave', target['onSendQueryTableItem_Leave'].bind(target));}
      if (target['onSendUpdateTableItem_Leave']) { this.__OnListener(target, 'onSendUpdateTableItem_Leave', target['onSendUpdateTableItem_Leave'].bind(target));}
      if (target['onSendUpdateItem_Leave']) { this.__OnListener(target, 'onSendUpdateItem_Leave', target['onSendUpdateItem_Leave'].bind(target));}
      if (target['onSelectTableItem_Leave']) { this.__OnListener(target, 'onSelectTableItem_Leave', target['onSelectTableItem_Leave'].bind(target));}

      if (target['onEditDialogShow_Private_Course']) { this.__OnListener(target, 'onEditDialogShow_Private_Course', target['onEditDialogShow_Private_Course'].bind(target));}
      if (target['onNewObj_Private_Course']) { this.__OnListener(target, 'onNewObj_Private_Course', target['onNewObj_Private_Course'].bind(target));}
      if (target['onEditObj_Private_Course']) { this.__OnListener(target, 'onEditObj_Private_Course', target['onEditObj_Private_Course'].bind(target));}
      if (target['onQueryTableDialogShow_Private_Course']) { this.__OnListener(target, 'onQueryTableDialogShow_Private_Course', target['onQueryTableDialogShow_Private_Course'].bind(target));}
      if (target['onSendQueryTableItem_Private_Course']) { this.__OnListener(target, 'onSendQueryTableItem_Private_Course', target['onSendQueryTableItem_Private_Course'].bind(target));}
      if (target['onSendUpdateTableItem_Private_Course']) { this.__OnListener(target, 'onSendUpdateTableItem_Private_Course', target['onSendUpdateTableItem_Private_Course'].bind(target));}
      if (target['onSendUpdateItem_Private_Course']) { this.__OnListener(target, 'onSendUpdateItem_Private_Course', target['onSendUpdateItem_Private_Course'].bind(target));}
      if (target['onSelectTableItem_Private_Course']) { this.__OnListener(target, 'onSelectTableItem_Private_Course', target['onSelectTableItem_Private_Course'].bind(target));}
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

    // xxevent.emit("EditDialogShow_Member"); // 新增或编辑界面显示
    // this.$nextTick(() => xxevent.emit("EditDialogShow_Member")); // 新增或编辑界面显示
    // // 新增或编辑界面显示
    // onEditDialogShow_Member() {
    // },

    // xxevent.emit("NewObj_Member"); // 新增数据
    // this.$nextTick(() => xxevent.emit("NewObj_Member")); // 新增数据
    // // 新增数据
    // onNewObj_Member() {
    // },

    // xxevent.emit("EditObj_Member"); // 编辑数据
    // this.$nextTick(() => xxevent.emit("EditObj_Member")); // 编辑数据
    // // 编辑数据 | Member | 
    // onEditObj_Member() {
    // },

    // xxevent.emit("QueryTableDialogShow_Member"); // 显示查询数据项窗体
    // this.$nextTick(() => xxevent.emit("QueryTableDialogShow_Member")); // 显示查询数据项窗体
    // // 显示查询数据项窗体 | Member |
    // onQueryTableDialogShow_Member() {
    // },

    // xxevent.emit("SendQueryTableItem_Member"); // 查询数据项
    // this.$nextTick(() => xxevent.emit("SendQueryTableItem_Member")); // 查询数据项
    // // 查询数据项 | Member |
    // onSendQueryTableItem_Member() {
    // },

    // xxevent.emit("SendUpdateTableItem_Member"); // 更新查询数据项
    // this.$nextTick(() => xxevent.emit("SendUpdateTableItem_Member")); // 更新查询数据项
    // // 更新查询数据项 | Member |
    // onSendUpdateTableItem_Member() {
    // },

    // xxevent.emit("SelectTableItem_Member"); // 选中查询结果某项
    // this.$nextTick(() => xxevent.emit("SelectTableItem_Member")); // 选中查询结果某项
    // // 选中查询结果某项 | Member |
    // onSelectTableItem_Member() {
    // },
  // },

}
export default new xxevent

