import * as types from './mutation-type.js';

export default {
  [types.SET_LOGIN_INFO](state, loginInfo) {
    state.loginInfo = loginInfo;
  },
  [types.SET_SETTING](state, setting) {
    let obj = JSON.stringify(setting);
    window.localStorage.setItem('setting',obj);
    state.setting = setting;
  },
  [types.SET_IS_DUTY](state, isDuty) {
    window.localStorage.setItem('isDuty',isDuty);
    state.isDuty = isDuty;
  },
  [types.SET_DUTY_LIST](state, dutyList) {
    let list = JSON.stringify(dutyList);
    window.sessionStorage.setItem('dutyList',list);
    state.dutyList = dutyList;
  },
  [types.SET_EXECUTE_CONTROL_LIST](state, list) {
    state.executeControlList = JSON.stringify(list);
  },
  [types.SET_BKPS_LIST](state, list) {
    state.BKPSList = JSON.stringify(list);
  },
  [types.SET_APPROVAL_PROCESS_DATA](state, list) {
    state.approvalProcessData = JSON.stringify(list);
  },
  [types.SET_ADD_TASk_EARLY_WARN_TYPE](state, value) {
    state.addTaskEarlyWarnType = value;
  },
  [types.SET_UPDATE_ADD_TASK_INFO](state, obj) {
    state.updateAddTaskInfo = JSON.stringify(obj);
  },
  [types.SET_OWNER_MENU_DATA](state, obj) {
    state.ownerMenuData = obj;
  },
  [types.SET_REFRESH_SIGN](state, str) {
    window.sessionStorage.setItem('refreshSign',str);
    state.refreshSign = str
  },
};
