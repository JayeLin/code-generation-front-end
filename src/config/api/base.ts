// import MS from "../../config/msConfig";
import MS from "@/config/msConfig";
const BASE = {
  USER: {
    LOGIN: MS.BASE + "/csmslogin",
    USER: MS.BASE + "/user",
    GET_BY_ACCOUNT: MS.BASE + "/user/getByAccount"
  },
  DICTIONARY_ADJUST: {
    GET_LIST: MS.BASE + '/dictionaryAdjust/getList',
    UPDATE: MS.BASE + '/dictionaryAdjust/update',
    SAVE: MS.BASE + '/dictionaryAdjust/save',
    DELETE: MS.BASE + '/dictionaryAdjust/deleteId',
    SELECT_BY_ID_INFO: MS.BASE + '/dictionaryAdjust/selectByIdInfo',
    GET_UNREFERENCED_IDS: MS.BASE + '/dictionaryAdjustDetail/getUnreferencedIds',
    BATCH_UPDATE_ENV: MS.BASE + '/dictionaryAdjust/batchUpdateEnv',
    UPDATE_ID_LIST: MS.BASE + '/dictionaryAdjustDetail/updateIdList',
    GET_SQL: MS.BASE + '/dictionaryAdjust/getSql',
    GET_PART_SQL: MS.BASE + '/dictionaryAdjust/getPartSql'
  },
  CRON: {
    LISTBYCLASSIFY: MS.BASE + "/n/cronplan/v1/listbyclassify",
    CRONPLANDELETE: MS.BASE + "/n/cronplan/v1/delete",
    CRONPLANINSERT: MS.BASE + "/n/cronplan/v1/insert",
    CRONPLANLIST: MS.BASE + "/n/cronclassify/v1/list",
    CRONPLANDETAIL: MS.BASE + "/n/cronplan/v1/detail",
    CRONCLASSIFYINSERT: MS.BASE + "/n/cronclassify/v1/insert",
    CRONCLASSIFYLIST: MS.BASE + "/n/cronclassify/v1/list",
    CRONCLASSIFYDELETE: MS.BASE + "/n/cronclassify/v1/delete",
    CRONPLANLOGLIST: MS.BASE + "/n/cronplanlog/v1/list",
    CRONPLANMANUAL: MS.BASE + "/n/cronplan/v1/manualTrigger"
  },
  SMS: {
    LIST_SMS: MS.BASE + "/smsTemplate/list",
    BASE_SMS: MS.BASE + "/smsTemplate"
  },
  EMAIL: {
    LIST_EMAIL: MS.BASE + "/mailTemplate/list",
    BASE_EMAIL: MS.BASE + "/mailTemplate"
  },
  DICTIONARY: {
    DICTIONARYGROUPPAGE: MS.BASE + "/n/dictionaryGroup/page",
    DICTIONARYGROUPDELETE: MS.BASE + "/n/dictionaryGroup",
    DICTIONARYGROUPSAVE: MS.BASE + "/n/dictionaryGroup",
    DICTIONARYCATEGORYLIST: MS.BASE + "/dictionaryCategory/list",
    DICTIONARYCATEGORYSELECTED: MS.BASE + "/dictionaryGroupLink",
    DICTIONARYGROUPUPDATE: MS.BASE + "/n/dictionaryGroup",
    CLEARDICTIONARYCACHEDATA: MS.BASE + "/n/dictionaryItem/clearDictionaryCacheData",
  },
  ATTACHMENT: {
    ATTACHMENT_DOWNLOAD: MS.BASE + "/attachment/download",
    ATTACHMENT_UPLOAD: MS.BASE + "/attachment/upload",
    ATTACHMENT_IMAGE: MS.BASE + "/attachment/image",
    ATTACHMENT_IMAGE_UPLOAD: MS.BASE + "/attachment/image/upload",
    N_ATTACHMENT_ONLINEVIEW: MS.BASE + "/n/attachment/onlineview",
    N_ATTACHMENT_DOWNLOAD: MS.BASE + "/n/attachment/download",
    N_ATTACHMENT_UPLOAD: MS.BASE + "/n/attachment/upload",
    N_ATTACHMENT_IMAGE: MS.BASE + "/n/attachment/image",
    N_ATTACHMENT_IMAGE_UPLOAD: MS.BASE + "/n/attachment/image/upload",
    N_ATTACHMENT_GET: MS.BASE + "/n/attachment",
    N_ATTACHMENT_UPLOAD_LIMIT: MS.BASE + "/n/attachment/upload/limit",
  },
  SOALOG: {
    SOALOGLIST: MS.BASE + "/n/sisoalog/v1/list",
    SOALOGEXPORTLIST: MS.BASE + "/n/sisoalog/v1/exportlist",
    SOALOGBYEXTENDID: MS.BASE + "/n/sisoalog/v1/listByExtendId",
    SOALOGBYEBUSINESSINFO: MS.BASE + "/n/sisoalog/v1/byAppNameAndBusinessInfo"
  },
  THIRDPARTYLOG: {
    THIRDPARTYLOGLIST: MS.BASE + "/n/sithirdpartylog/v1/list",
    THIRDPARTYLOGEXPORTLIST: MS.BASE + "/n/sithirdpartylog/v1/exportlist"
  },
  SCYPERMISSION: {
    SCYPERMISSION: MS.BASE + "/scyPermission",
    SCYPERMISSION_ACCOUNTPERMISSION: MS.BASE + "/scyPermission/accountPermission",
    SCYPERMISSION_PERMISSION: MS.BASE + "/scyPermission/permission",
    SCYPERMISSION_PERMISSIONLIST: MS.BASE + "/scyPermission/permissionList",
    SCYPERMISSION_PERMISSIONTREE: MS.BASE + "/scyPermission/permissionTree",
    SCYPERMISSION_ROLEPERMISSIONTREE: MS.BASE + "/scyPermission/rolePermissionTree",
    SCYPERMISSION_ALLMENUPERMISSION: MS.BASE + "/n/menurpermission/selectAllMenuPermission",
    SCYPERMISSION_DELETEPERMISSION: MS.BASE + "/n/menurpermission/deleteMenuPremission",
    SCYPERMISSION_SAVEPERMISSION: MS.BASE + "/n/menurpermission/saveOrUpdatePremission",
    SCYPERMISSION_MENURMISSION: MS.BASE + "/n/menurpermission/selectPremissionByMenuCode",
    SCYPERMISSION_USERMENURMISSION: MS.BASE + "/n/menurpermission/selectAllMenuPermissionByUserId"
  },
  MENUCONTROLLER: {
    MENUTREE: MS.BASE + "/menuItem/itemTree",
    MENUOPERAT: MS.BASE + "/menuItem",
  },
  SCYROLE: {
    SCYROLE: MS.BASE + "/scyRole",
    SCYROLE_GETALL: MS.BASE + "/scyRole/getAll",
    SCYROLE_GETSCYROLEBYSCYUSERID: MS.BASE + "/scyRole/getScyRoleByscyUserId",
    SCYROLE_SCYUSER: MS.BASE + "/scyRole/scyUser"
  },
  SCYROLERPERMISSION: {
    SCYROLERPERMISSION: MS.BASE + "/scyRoleRPermission",
    SCYROLERPERMISSION_ROLERPERMISSIONLIST: MS.BASE + "/scyRoleRPermission/roleRPermissionList"
  },
  SCYUSERRROLE: {
    SCYUSERRROLE: MS.BASE + "/scyUserRRole",
    SCYUSERRROLE_DELETEBYSCYUSERID: MS.BASE + "/scyUserRRole/deleteByScyUserId",
    SCYUSERRROLE_USERRROLESLIST: MS.BASE + "/scyUserRRole/userRRolesList"
  },
  DICTIONARYCATEGORY: {
    DICTIONARYCATEGORY: MS.BASE + "/dictionaryCategory",
    DICTIONARYCATEGORY_PAGE: MS.BASE + "/dictionaryCategory/page",
    DICTIONARYCATEGORY_BY_APPNAME: MS.BASE + "/dictionaryCategory/page",
  },
  DICTIONARYITEM: {
    DICTIONARYITEM: MS.BASE + "/dictionaryItem",
    DICTIONARYITEM_ALLITEMS: MS.BASE + "/dictionaryItem/allItems",
    DICTIONARYITEM_ITEMSLIST: MS.BASE + "/dictionaryItem/itemsList",
    DICTIONARYITEM_ITEMSMAP: MS.BASE + "/dictionaryCategory",
    DICTIONARYTAG: MS.BASE + "/dictionaryTag",
    BYCODE: MS.BASE + '/dictionary/list',
  },
  MSGRECORD: {
    CUSTOMER_GET_BY_CONDITION: MS.BASE + "/systemCustomerMsgRecord/getByCondition",
    EMPLOYEE_GET_BY_CONDITION: MS.BASE + "/systemEmployeeMsgRecord/getByCondition"
  },
  USEREXT: {
    USEREXT: MS.BASE + "/userext",
    USEREXT_LIST: MS.BASE + "/userext/list",
    USEREXT_LIST_SEARCH: MS.BASE + "/userext/list/search",
    USEREXT_GETSELECTION: MS.BASE + "/userext/getSelection",
    USEREXT_GETUSERSBYPROPERTY: MS.BASE + "/userext/getUsersByProperty",
    USEREXT_RESETPWD: MS.BASE + "/userext/resetpwd",
    USEREXT_SETUSERSTOBO: MS.BASE + "/userext/setUsersToBo",
    USEREXT_SETUSERSTOCSR: MS.BASE + "/userext/setUsersToCsr",
    USEREXT_STATE: MS.BASE + "/userext/state",
    SEARCH: MS.BASE + "/userext/search",
    SEARCHNOLIMITED: MS.BASE + "/userext/searchNoLimited",
    USEREXT_GETSCYROLEBYSCYUSERID: MS.BASE + "/userext/getScyRoleByscyUserId",
    USEREXT_INSERTBATCHSCYUSERRROLE: MS.BASE + "/userext/insertBatchScyUserRRole",
    SEARCHPAGE: MS.BASE + "/userext/searchPage",
    USERS: MS.BASE + "/userext/users",
    USEREXT_GETUSEREXTINFOBYEMPLOYEENO: MS.BASE + "/userext/getUserExtInfoByEmployeeNo"
  },
  DEPARTMENT: {
    DEPARTMENT: MS.BASE + "/department",
    DEPARTMENT_LIST: MS.BASE + "/department/list"
  },
  USERTRANSFER: {
    USER_TRANSFER: MS.BASE + "/userTransfer",
    CHECK_AUTH_USER: MS.BASE + "/userTransfer/checkAuthUser"
  },
  MULTILINGUAL: {
    MULTILINGUAL: MS.BASE + "/multilingual",
    MULTILINGUALTAG: MS.BASE + "/multilingualTag"
  },
  LANGUAGE: {
    GET_COMPONENT_LANG: MS.BASE + '/n/langsByCode'
  },
  SYSTEMTRACELOG: {
    SYSTEMTRACELOGS: MS.BASE + '/traceLogs'
  },
  PASSWORD: {
    PUBLIC_KEY: MS.BASE + '/pw/publicKey',
  },
  MULTILANGUAGE: {
    MULTILANGUAGE: MS.BASE + '/public/multiLanguage'
  },
}
export default BASE