const state = {
  loginInfo: {
     loginName: '',
     loginId: '',
     loginCode: '',
     systemId: '',
     name: '',
     deptName: '',
     deptId: '',
     empTagKey: '',
     empTagValue: '',
     menuTagKey: '',
     accessToken: '',
     refreshToken: '',
  },
  /*loginInfo: {
    loginName: 'zhongkeyuan',
    loginId: '240134765410390023',
    loginCode: '240134765410390023',
    systemId: '1084653534291812354',
    name: '中科院',
    deptName: '公交分局',
    deptId: '440396660000',
    empTagKey: 'BK_FJ_EMP',
    empTagValue: '分局人员',
    menuTagKey: 'SYSTEM_ROLE_MENU_TAG_1',
    accessToken: 'dsd',
    refreshToken: 'dsds',
  },*/
  setting: {//声音设置
    A: true,
    B: true,
    C: true,
    D: true
  },
  isDuty: false, //值守
  dutyList: [], //值守期间数据
  approvalProcessData: [], //审批流程
  ownerMenuData: {}, //拥有的菜单数据
  refreshSign: '',

  executeControlList: [], //新增任务所选的人员列表
  BKPSList: [], //新增任务布控的派出所列表
  addTaskEarlyWarnType: '',//新增布控任务的预警类型
  updateAddTaskInfo: {},//修改存任务信息
};

export default state;
