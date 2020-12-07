import MS from "@/config/msConfig";

const CSO = {
  ORDER: {
    ORDER: MS.CSO + "/order",
    ORDEREDITABLE: MS.CSO + "/orderEditAble",
    QUERYORDERS: MS.CSO + "/queryOrders",
    // 後續刪除 ORDERSPAGE ORDERINFOPAGE
    // ORDERSPAGE: MS.CSO + "/ordersPage",
    // ORDERINFOPAGE: MS.CSO + "/orderInfoPage",
    GET_CSRWEBORDER: MS.CSO + "/getCSRWbOrder",
    GET_BOWBORDER: MS.CSO + "/getBOWbOrder",
    SORT_BOWBORDER: MS.CSO + "/sortBOWbOrder",
    ORDERSPARTPAGE: MS.CSO + "/ordersOnlySuspendedAndReturnedPage",
    ORDERDETAILS: MS.CSO + "/order/orderDetails",
    CHATLOG: MS.CSO + "/order/note",
    CHATLOGPAGE: MS.CSO + "/order/note/list",
    PENDINGLISTPAGE: MS.CSO + "/order/listPendingPage",
    HANDLE: MS.CSO + "/order/handle",
    TOPPING: MS.CSO + "/order/topping",
    BO_PROCESSING_HANDLE: MS.CSO + "/order/boProcessingHandle",
    WORKINSTANCEPAGE: MS.CSO + "/order/workorder/listWorkInstancePage",
    MYTASKSPAGE: MS.CSO + "/order/listMyTasksPage",
    PROCESSRECORDPAGE: MS.CSO + "/order/note/listStatusChangesLogPage",
    SUSPENDED: MS.CSO + "/order/suspended",
    TURNBACK: MS.CSO + "/order/turnBack",
    PAUSED: MS.CSO + "/order/paused",
    GIVE_UP: MS.CSO + "/order/giveUp",
    SUBMIT: MS.CSO + "/order/submit",
    HAS_SUBMITED: MS.CSO + "/order/hasSubmited",
    CANCEL: MS.CSO + "/order/cancel",
    PORTION: MS.CSO + "/order/portion",
    DRAFT: MS.CSO + "/order/draft",
    REMOVE: MS.CSO + "/order/remove",
    WORKORDERSUBMIT: MS.CSO + "/order/workorder/submit",
    WORKORDERMARK: MS.CSO + "/order/workorder/mark",
    WORKORDERFORCEDPUSH: MS.CSO + "/order/workorder/forcedPush",
    RESETWORKTOARTIFICIAL: MS.CSO + "/order/resetWorkToArtificial",
    CSR_ORDERQUERY: MS.CSO + "/order/wbCSROrderQuantity",
    BO_ORDERQUERY: MS.CSO + "/order/wbBOOrderQuantity",
    BO_ORDER_SERVICETYPE_QUERY: MS.CSO + "/order/wbBOOrderServiceTypeQuantity",
    OTHERS_ORDERQUERY: MS.CSO + "/order/wbOthersOrderQuantity",
    CALLAPPSUBSCRIBER: MS.CSO + "/order/callAppSubscriber",
    CALLAPPCONTRACT: MS.CSO + "/order/callAppContract",
    CALLAPPPHOTO: MS.CSO + "/order/callAppPhotograph",
    PREVIEWIMAGE: MS.CSO + "/order/contract/all",
    SIGN: MS.CSO + "/order/callAppContract",
    APPOINTMENTTIMESLOT: MS.CSO + "/getFiveDayTimeSlot",
    NEWAPPOINTMENT: MS.CSO + "/newAppointment",
    CANCELAPPOINTMENT: MS.CSO + "/cancelAppointment",
    GETVOBYORDERCODE: MS.CSO + "/getVOByOrderCode",
    GETAPPOINTMENT: MS.CSO + "/getAppointment",
    RE_INIT: MS.CSO + "/reInit",
    CANCEL_WORK: MS.CSO + "/order/workorder/cancel",
    WORK_ERROR_LOG: MS.CSO + "/getWorkErrorLog",
    ORDER_REDIS: MS.CSO + "/orderRedis",
    UPDATE_REDIS: MS.CSO + "/orderRedis/updateRedis",
    DELETE_REDIS: MS.CSO + "/orderRedis/deleteRedis",
    LIST_ORDER_BILL_ADDRESS: MS.CSO + "/order/workorder/listOrderBillAddress",
    LIST_ORDER_BILL_ADDRESS_COUNT: MS.CSO + "/order/workorder/listOrderBillAddressCount",
    GET_REQUIRED_SIM: MS.CSO + "/order/changeplan/getRequiredSIM",
    RESERVESIM: MS.CSO + "/order/changeplan/reserveSIM",
    RELEASESIM: MS.CSO + "/order/changeplan/releaseSIM",
    CONFLICT_VALIDATE: MS.CSO + "/order/changeplan/conflictValidate",
    ATTACHMENTAPPEND: MS.CSO + "/order/attachmentappend",
    ATTACHMENTAPPEND_BATCHINSERT: MS.CSO + "/order/attachmentappend/batchInsert",
    ORDER_EXT: MS.CSO + "/orderExt",
    PREPAID_IDENTITY_REGISTER: MS.CSO + "/prepaid/identityRegister",
    GET_LOG_BY_ORDERID: MS.CSO + "/levelChangeLog/getLogByOrderId",
    FILL_IN_GF: MS.CSO + "/order/fillInGF",
    GET_INSTANCE_OFFER_BY_ORDERID_AND_WORKER_INSTID: MS.CSO + "/order/workorder/getInstanceOfferByOrderIdAndWorkerInstId",
    SIGN_VIEW: MS.CSO + "/order/sign/view",
    CHECK_ENOUGH_IP_NUMBERS: MS.CSO + "/checkEnoughIpNumbers"
  },
  ID_CARD_REGISTER: {
    CALL_APP_PHOTOGRAPH: MS.CSO + "/n/orders/app/idCardRegister/callAppPhotograph",
  },
  ORDER_ATTACHMENT_RECORD: {
    GET_ATTACHMENT_RECORD: MS.CSO + "/orderAttachmentRecord/getByOrderNumber",
  },
  PLANCHANGE_ORDER: {
    PROGRAM: MS.CSO + "/order/program",
    ORIGINAL_PROGRAM: MS.CSO + "/order/program/original",
    VAS_VASBUNDLE: MS.CSO + "/order/vas",
    OTHER_OFFER: MS.CSO + "/order/offer",
    CHANGE_PLAN_PROGRAM: MS.CSO + '/order/changeplan',
    DEPOSIT: MS.CSO + '/order/changeplan/deposit',
    PENALTYSETTING: MS.CSO + '/changeplan/penaltysetting',
    COMPUTE_CHANGEPLAN_LEVEL_BY_PRODUCT: MS.CSO + '/order/changeplan/computeChangePlanLevelByProduct',
    COMPUTE_CHANGEPLAN_LEVEL_BY_OFFER: MS.CSO + '/order/changeplan/computeChangePlanLevelByOffer'
  },
  ORDERPREPAIDREPROVIDE: {
    UPDATE_INVENTORY_STATUS: MS.CSO + "/orderPrepaidReprovide/updateInventoryStatus",
    SIM_INFO: MS.CSO + "/orderPrepaidReprovide/simInfo",
    CHECK_SERVICE_STATUS: MS.CSO + "/orderPrepaidReprovide/checkServiceStatus",
    CHECK_INVENTORY_STATUS: MS.CSO + "/orderPrepaidReprovide/checkInventoryStatus",
  },
  ORDEROPERATIONLOG: {
    ORDEROPERATIONLOG: MS.CSO + "/orderOperationLog",
    ORDEROPERATIONLOGSPAGE: MS.CSO + "/orderOperationLogsPage",
    ORDEROPERATIONLOGS: MS.CSO + "/orderOperationLogs"
  },
  CHANGENUMBER: {
    NUMBER_LIST: MS.CSO + "/n/orders/app/loadSubscriberNumber",
    PC_NUMBER_LIST: MS.CSO + "/subscriber/loadSubscriberNumber",
    CHANGE_PHONE_NUM_INFO: MS.CSO + "/subscriber/changePhoneNumInfo",
    OBLIGATE_NUMBER: MS.CSO + "/n/orders/app/obligateNumber"
  },
  BOUGTHPLAN: {
    CREATEORDEROFFERWAIVE: MS.CSO + "/closeaccountplan/createOrderOfferWaive"
  },
  CUSTOMER: {
    QUERY_OLDADDRESS: MS.CSO + "/customer/queryInstallationAddress",
    INFOBYIDNUM: MS.CSO + "/customer/infoByIdNum",
    PENALTYDETAIL: MS.CSO + "/customer/penaltyDetail",
    BLACKLISTINFO: MS.CSO + "/customer/blackListInfo",
    INFOBYSERVICENUM: MS.CSO + "/customer/infoByServiceNum",
    RESERVED_INVENTORY_LIST: MS.CSO + "/customer/reservedInventoryList",
    GET_PENDING_ORDER_DETAIL: MS.CSO + "/customer/getPendingOrderDetail",
    PHONE_NUMBER: MS.CSO + "/customer/getDisReAssemablyInfoByNum",
    ID_NUMBER_INFO: MS.CSO + "/customer/getDisReAssemablyInfoByID",
    INFO_BY_IDENTITY_NUM_NEW: MS.CSO + "/customer/infoByIdentityNumNew",
    INFO_BY_SERVICE_NUM_NEW: MS.CSO + "/customer/infoByServiceNumNew",
    QUERY_GOVID_HAS_ACCOUNT: MS.CSO + "/customer/queryGovIdHasAccount",
    QUERY_BY_SERVICE_NUMBER: MS.CSO + "/customer/byServiceNumber",
    QUERY_SUSPENDED_REASON: MS.CSO + "/customer/querySuspendedReason",
    INFO_BY_SERVICE_NUM_NEW_CACHE: MS.CSO + "/customer/infoByServiceNumCache",
    HAS_TO_BE_PROCESSED_FOR_C1: MS.CSO + "/customer/hasToBeProcessedForC1",
  },
  ACCOUNT: {
    ACCOUNT: MS.CSO + "/account",
    ACCOUNT_CHANGEACCOUNT: MS.CSO + "/account/changeAccount",
    RESET_ACCOUNT_CHANGEACCOUNT: MS.CSO + "/account/resetChangeAccount",
    ACCOUNT_DETAIL: MS.CSO + "/account/detail",
    ACCOUNT_LOADSELECTIONS: MS.CSO + "/account/loadSelections",
    CHILDACCOUNT: MS.CSO + "/account/childAccount",
    DEBT_DETAIL: MS.CSO + "/account/debtDetail",
    TRANSFERING_PAYMENT: MS.CSO + "/account/transferingPayment",
    PENDING_C1DETAIL: MS.CSO + "/account/pendingC1Detail",
    SERIVE_PROFILE: MS.CSO + "/account/queryPhoneNoServiceProfile",
    TODO_ORDER_LIST: MS.CSO + "/account/listTodoOrder",
    SAVE: MS.CSO + "/account/save",
    ORDER_UPDATE_PAY_METHOD: MS.CSO + "/orderUpdatePayMethod/getAccountInfo"
  },
  SUBSCRIBER: {
    SUBSCRIBER_CHECKRESERVEDPHONENUM: MS.CSO + "/subscriber/checkReservedPhoneNum",
    SUBSCRIBER_CHECKRESERVEDBROADBANDNUM: MS.CSO + "/subscriber/checkReservedBroadbandNum",
    GET_PAD_SELECTED_NUMBER: MS.CSO + "/subscriber/getPadSelectedNumber"
  },
  SIMHISTORY: {
    SIMHISTORY: MS.CSO + "/simhistory",
    SIMHISTORY_CHECK: MS.CSO + "/simhistory/check",
    SIMHISTORY_QUERY: MS.CSO + "/simhistory/query",
    SIMHISTORY_SAVE: MS.CSO + "/simhistory/save"
  },
  CHANGESIM: {
    CHANGESIM: MS.CSO + "/changeSIM",
    CHANGESIM_CHECK: MS.CSO + "/changeSIM/check",
    CHANGESIM_QUERY: MS.CSO + "/changeSIM/query",
    CHANGESIM_SAVE: MS.CSO + "/changeSIM/save"
  },
  SETTLEMENT: {
    SETTLEMENT: MS.CSO + "/settlement",
    SETTLEMENT_LIST: MS.CSO + "/settlement/list",
    SETTLEMENT_SAVE: MS.CSO + "/settlement/save",
    SETTLEMENT_PRINTINFO: MS.CSO + "/settlement/printInfo",
    SETTLEMENT_HOLDPRODUCT: MS.CSO + "/settlement/holdProduct",
    SETTLEMENT_RELEASEPRODUCT: MS.CSO + "/settlement/releaseProduct",
    VALIDATE_PLU_CODE: MS.CSO + "/settlement/validatePluCode",
    SETTLEMENT_TRANSFER_PRINTINFO: MS.CSO + "/settlement/transfer/printInfo"
  },
  PRODUCT: {
    PRODUCT_GOODS: MS.CSO + "/product/goods",
    PRODUCT_GOODS_CHECK: MS.CSO + "/product/goods/check",
    PRODUCT_GOODS_SAVE: MS.CSO + "/product/goods/save",
    PRODUCT_GOODS_LIST: MS.CSO + "/product/goods/list"
  },
  PRINT: {
    PRINT_LIST: MS.CSO + "/print/list",
    GET_SIGNED_CONTRACT: MS.CSO + "/print/contract",
    SAVE_PRINT_LIST: MS.CSO + "/print/save"
  },
  REUSE: {
    HISTORY: MS.CSO + "/program/viewHistory",
    PHONENUMBER: MS.CSO + "/newapply/getDisReAssemablyInfoByNum",
    IDNUMBERINFO: MS.CSO + "/newapply/getDisReAssemablyInfoByID",
    BOOKINGNUMBER: MS.CSO + "/subscriber/lockPhoneNum",
    LOCK_PHONE_NUMBERS: MS.CSO + "/subscriber/lockPhoneNumbers",
    CHECK_AND_CHANGE_PHONE_NO_FOR_NICE_NUMBER: MS.CSO + "/subscriber/checkAndChangePhoneNoForNiceNumber",
    RELEASE_PHONE_NUMBER_FOR_NICE_NUMBER: MS.CSO + "/subscriber/releasePhoneNumberForNiceNumber"
  },
  COMPONENT: {
    LIST: MS.CSO + "/component/list",
    DEL: MS.CSO + "/component/del",
    FINDCOMPONENTWITHITEMVO: MS.CSO + "/component/findcomponentwithitemvo",
    ADD: MS.CSO + "/component/add",
    EDIT: MS.CSO + "/component/edit",
    ORDERVARLIST: MS.CSO + "/orderVar/list"
  },
  APPLICANTSETTING: {
    LIST: MS.CSO + "/applicantSetting/getAll",
    GET: MS.CSO + "/applicantSetting/get",
    DEL: MS.CSO + "/applicantSetting/delete",
    ADD: MS.CSO + "/applicantSetting/create",
    EDIT: MS.CSO + "/applicantSetting/create",
    GET_BY_SERVICEACTION: MS.CSO + "/applicantSetting/getByServiceAction",
  },
  HandleImage: {
    SentMSG: MS.CSO + "/n/orders/app/handleImage/callAppPhotograph",
    HANDLEIMAGE_UPLOADPHOTO: MS.CSO + "/n/orders/app/handleImage/uploadPhoto",
    HANDLEIMAGE_UPLOADATTACHMENT: MS.CSO + '/n/orders/app/handleImage/uploadAttachment'
  },
  JOSWATERMARKSETTING: {
    GET: MS.CSO + "/josWatermark/get",
    SAVE: MS.CSO + "/josWatermark/save",
  },
  SERVICEACTION: {
    SELECTEDWORKER: MS.CSO + "/page/getselectedWorker",
    UNSELECTEDWORKER: MS.CSO + "/page/getunselectedWorker",
    SAVEACTION2WORKERLIST: MS.CSO + "/page/saveaction2workerlist",
    UPDATEACTION2WORKER: MS.CSO + "/page/updateaction2worker",
    SAVEWORKERLINK: MS.CSO + "/page/saveWorkerlink",
    SAVELINK: MS.CSO + "/page/savelink",
    LIST: MS.CSO + "/page/list",
    ADD: MS.CSO + "/page/add",
    DEL: MS.CSO + "/page/del",
    SELECTEDCOMPONENT: MS.CSO + "/page/getselectedComponent",
    UNSELECTEDCOMPONENT: MS.CSO + "/page/getunselectedComponent",
    SAVEPAGE2COMPONENT: MS.CSO + "/page/savepage2component",
    SAVEPAGE2COMPONENTIN: MS.CSO + "/page/savepage2componentin",
    ADDPAGE2COMPONENT: MS.CSO + "/page/addpage2component",
    REMOVEPAGE2COMPONENT: MS.CSO + "/page/removepage2component",
    UPDATEPAGE2COMPONENT: MS.CSO + "/page/updownpage2components",
    SELECTEDBYID: MS.CSO + "/serviceaction/selectedbyid",
    INSERT: MS.CSO + "/serviceaction/insert",
    UPDATE: MS.CSO + "/serviceaction/update",
    FINDSCHEMEWITHITEMVO: MS.CSO + "/worker/findschemewithitemvo",
    ADDSCHEME: MS.CSO + "/worker/addscheme",
    EDITSCHEME: MS.CSO + "/worker/editscheme",
    ALLLIST: MS.CSO + "/worker/alllist",
    SOAALLLIST: MS.CSO + "/worker/soaalllist",
    FINDPAGEBYID: MS.CSO + "/page/findpagebyid",
    EDIT: MS.CSO + "/page/edit",
    ACTIONLIST: MS.CSO + "/serviceaction/list",
    ACTIONDELETE: MS.CSO + "/serviceaction/delete",
    LISTSCHEME: MS.CSO + "/worker/listscheme",
    DELSCHEME: MS.CSO + "/worker/delscheme",
    PUBLISH: MS.CSO + "/serviceaction/publish",
    LISTSERVICEACTION: MS.CSO + "/serviceaction/listServiceActionForDesktop",
    GET_ALL_SERVICEACTION: MS.CSO + "/serviceaction/getAllServiceAction",
    LIST_ACTION_COMPONENT_OUT: MS.CSO + "/serviceaction/listActionComponentOutDTO"
  },
  SERVICEACTIONEXT: {
    SAVE_SERVICE_ACTION_EXT: MS.CSO + "/serviceActionExt/saveServiceActionExt",
    LIST_SERVICE_ACTION_EXT: MS.CSO + "/serviceActionExt/listServiceActionExt",
    REMOVE_SERVICE_ACTION_EXT: MS.CSO + "/serviceActionExt/removeServiceActionExt",
    UPDATE_SERVICE_ACTION_EXT: MS.CSO + "/serviceActionExt/updateServiceActionExt",
    SUBSCRIBER_EXT_INFO: MS.CSO + "/serviceActionExt/subscriberExtInfo",
    SUBSCRIBER_TYPE: MS.CSO + "/serviceActionExt/listSubscriberType",
    SUBSCRIBER_EXT_INFO_TO_FORM: MS.CSO + "/serviceActionExt/subscriberExtInfoToForm",
  },
  WORKCUSTOM: {
    FINDWORKERWITHITEMVO: MS.CSO + "/worker/findworkerwithitemvo",
    ADD: MS.CSO + "/worker/add",
    EDIT: MS.CSO + "/worker/edit",
    LIST: MS.CSO + "/worker/list",
    DEL: MS.CSO + "/worker/del"
  },
  SOAINTERFACE: {
    FINDSOA: MS.CSO + "/worker/findsoa",
    ADDSOA: MS.CSO + "/worker/addsoa",
    EDITSOA: MS.CSO + "/worker/editsoa",
    SOALIST: MS.CSO + "/worker/soalist",
    DELSOA: MS.CSO + "/worker/delsoa"
  },
  PRODOFFER: {
    CREATE_ORDER_OFFER_WAIVE: MS.CSO + "/prodoffer/createOrderOfferWaive",
    QUERY_PROGRAMVO: MS.CSO + "/prodoffer/getNotffective"
  },
  TRANSFER: {
    CREATE_ORDER_OFFER_WAIVE: MS.CSO + "/transfer/createOrderOfferWaive",
    QUERY_PROGRAMVO: MS.CSO + "/transfer/getNotffective"
  },
  RESUMEMACHINE: {
    GET_STOP_HISTORY: MS.CSO + "/resumemachine/getStopHistory"
  },
  STOPMACHINE: {
    CREATE_ORDER_OFFER: MS.CSO + "/stopmachine/createOrderOffer",
    GET_ACCOUNT_TTOS_HISTORY: MS.CSO + "/stopmachine/getAccountTTOSHistory"
  },
  PENALTYSETTING: {
    GET_ORDER_OFFER_WAIVE: MS.CSO + "/penaltysetting/getOrderOfferWaive"
  },
  SERVICEACTIONCTRLINK: {
    SELECT_SACL_BY_ACTIONID: MS.CSO + "/serviceactionctrlink/selectSaclByActionId",
    UPDATE_BATCH: MS.CSO + "/serviceactionctrlink/updateBatch"
  },
  TOPUP: {
    GET_SERVICENUM_INFO: MS.CSO + '/topup/getServiceNumInfo',
    GET_FRONT_INFO: MS.CSO + '/topup/getFrontInfo',
    NEW_PREPAID_NON_VOUCHER_TOPUP: MS.CSO + '/topup/newPrepaidNonVoucherTopup',
    NEW_PREPAID_VOUCHER_TOPUP: MS.CSO + '/topup/newPrepaidVoucherTopup',
    NEW_PREPAID_VOUCHER_TOPUP_CHECK: MS.CSO + '/topup/newPrepaidVoucherTopupCheck'
  },
  APPOINTMENT: {
    FIND_NUMBER_TYPE: MS.CSO + '/appointment/findNumberType'
  },
  PREPAIDMENT: {
    PREPAID: MS.CSO + "/prepaidAdjust",
    CREATE_PREPAID: MS.CSO + "/prepaidAdjust/create",
    SUBMIT_PREPAID: MS.CSO + "/prepaidAdjust/submit",
    QUERY_TYPE: MS.CSO + "/prepaidAdjust/getTypeByOrderId",
  },
  // 最新需求调整接口
  ADJUSTMENT: {
    ADJUSTMENT: MS.CSO + '/order/adjustment',
    CREATE_ADJUSTMENT: MS.CSO + '/order/adjustment/create',
    SUBMIT_ADJUSTMENT: MS.CSO + '/order/adjustment/submit'
  },
  DISPUTE: {
    DISPUTE: MS.CSO + '/order/adjustment/dispute',
    CREATE_DISPUTE: MS.CSO + '/order/adjustment/dispute/create',
    SUBMIT_DISPUTE: MS.CSO + '/order/adjustment/dispute/submit'
  },
  BALANCETRANSFER: {
    BALANCETRANSFER: MS.CSO + '/order/adjustment/balanceTransfer',
    CREATE_BALANCETRANSFER: MS.CSO + '/order/adjustment/balanceTransfer/create',
    SUBMIT_BALANCETRANSFER: MS.CSO + '/order/adjustment/balanceTransfer/submit'
  },
  BILLING: {
    BILLING: MS.CSO + '/order/adjustment/billing',
    CREATE_BILLING: MS.CSO + '/order/adjustment/billing/create',
    SUBMIT_BILLING: MS.CSO + '/order/adjustment/billing/submit'
  },
  RECURRINGCHARGE: {
    RECURRINGCHARGE: MS.CSO + '/order/adjustment/recurringCharge',
    CREATE_RECURRINGCHARGE: MS.CSO + '/order/adjustment/recurringCharge/create',
    SUBMIT_RECURRINGCHARGE: MS.CSO + '/order/adjustment/recurringCharge/submit'
  },
  PENALTY: {
    PENALTY: MS.CSO + '/order/adjustment/penalty',
    CREATE_PENALTY: MS.CSO + '/order/adjustment/penalty/create',
    SUBMIT_PENALTY: MS.CSO + '/order/adjustment/penalty/submit'
  },
  PAYMENTTRNSFER: {
    PAYMENTTRNSFER: MS.CSO + '/order/adjustment/paymentTransfer',
    CREATE_PAYMENTTRNSFER: MS.CSO + '/order/adjustment/paymentTransfer/create',
    SUBMIT_PAYMENTTRNSFER: MS.CSO + '/order/adjustment/paymentTransfer/submit'
  },
  ROSFEE: {
    ROSFEE: MS.CSO + '/order/adjustment/ros',
    CREATE_ROSFEE: MS.CSO + '/order/adjustment/ros/create',
    SUBMIT_ROSFEE: MS.CSO + '/order/adjustment/ros/submit'
  },
  USAGE: {
    USAGE: MS.CSO + '/order/adjustment/usage',
    CREATE_USAGE: MS.CSO + '/order/adjustment/usage/create',
    SUBMIT_USAGE: MS.CSO + '/order/adjustment/usage/submit'
  },
  ONETIME: {
    ONETIME: MS.CSO + '/order/adjustment/onetime',
    CREATE_ONETIME: MS.CSO + '/order/adjustment/onetime/create',
    SUBMIT_ONETIME: MS.CSO + '/order/adjustment/onetime/submit'
  },
  OTHERINFO: {
    OTHERINFO: MS.CSO + '/order/adjustment/other',
    CREATE_OTHERINFO: MS.CSO + '/order/adjustment/other/create',
    SUBMIT_OTHERINFO: MS.CSO + '/order/adjustment/other/submit'
  },
  // 预付费组件接口
  RELOAD: {
    RELOAD: MS.CSO + "/prepaidAdjustReload",
    RELOAD_CREATE: MS.CSO + "/prepaidAdjustReload/create",
    RELOAD_SUBMIT: MS.CSO + "/prepaidAdjustReload/submit",
  },
  BOC: {
    BOC: MS.CSO + "/prepaidAdjustBoc",
    BOC_CREATE: MS.CSO + "/prepaidAdjustBoc/create",
    BOC_SUBMIT: MS.CSO + "/prepaidAdjustBoc/submit",
  },
  VAS: {
    VAS: MS.CSO + "/prepaidAdjustVas",
    VAS_CREATE: MS.CSO + "/prepaidAdjustVas/create",
    VAS_SUBMIT: MS.CSO + "/prepaidAdjustVas/submit",
  },
  PREDISPUTE: {
    PREDISPUTE: MS.CSO + "/prepaidAdjustDispute",
    PREDISPUTE_CREATE: MS.CSO + "/prepaidAdjustDispute/create",
    PREDISPUTE_SUBMIT: MS.CSO + "/prepaidAdjustDispute/submit",
  },
  COMPLAINT: {
    COMPLAINT: MS.CSO + '/order/complaint',
    CREATE_COMPLAINT: MS.CSO + '/order/complaint/create',
    SUBMIT_COMPLAINT: MS.CSO + '/order/complaint/submit'
  },
  REFUNDINSTANTCASH: {
    REFUNDINSTANTCASH: MS.CSO + '/orderRefundInstantCash',
    CREATE_REFUNDINSTANTCASH: MS.CSO + '/orderRefundInstantCash/create',
    SUBMIT_REFUNDINSTANTCASH: MS.CSO + '/orderRefundInstantCash/submit',
  },
  PREPAIDCHANGEPLAN: {
    PREPAIDCHANGEPLAN: MS.CSO + '/orderPrepaidChangePlan/simInfo',
    GET_GIVEN_SO_BY_PO_OFFER_ID: MS.CSO + '/orderPrepaidChangePlan/getGivenSoByPoOfferId'
  },
  REFUNDCHEQUE: {
    REFUNDCHEQUE: MS.CSO + '/orderRefundCheque',
    CREATE_REFUNDCHEQUE: MS.CSO + '/orderRefundCheque/create',
    SUBMIT_REFUNDCHEQUE: MS.CSO + '/orderRefundCheque/submit',
  },
  QUERYORDERBILL: {
    QUERYORDERBILL: MS.CSO + '/orderBill',
    CREATE_ORDERBILL: MS.CSO + '/orderBill/create',
    SUBMIT_ORDERBILL: MS.CSO + '/orderBill/submit'
  },
  WORKFLOW: {
    OTHERSORDERPAGE: MS.CSO + "/othersOrderPage",
    SUBMIT: MS.CSO + '/order/workflow/submit',
    CLAIM: MS.CSO + '/order/workflow/claim',
    DELEGATE: MS.CSO + '/order/workflow/delegate',
    LISTUSER: MS.CSO + "/order/workflow/listUser",
  },
  EXTERNALTYPESET: {
    ADD: MS.CSO + "/external/type/setting",
    EDIT: MS.CSO + "/external/type/setting/update",
    LIST: MS.CSO + "/external/type/setting/all",
    DEL: MS.CSO + "/external/type/setting",
    GETBYID: MS.CSO + "/external/type/setting"
  },
  NOTES: {
    LIST: MS.CSO + "/note",
    ADD: MS.CSO + "/note"
  },
  LOG: {
    LIST: MS.CSO + "/logForOrder",
  },
  NOTETYPEREASONLINK: {
    GETALLREASON: MS.CSO + "/noteTypeReasonLink",
    GETBYREASONID: MS.CSO + "/noteTypeReasonLink/getByReasonId"
  },
  SPECIALOFFERSETTING: {
    ADD: MS.CSO + "/specialOfferSetting",
    EDIT: MS.CSO + "/specialOfferSetting/update",
    LIST: MS.CSO + "/specialOfferSetting",
    DEL: MS.CSO + "/specialOfferSetting",
    GETBYID: MS.CSO + "/specialOfferSetting/bySpecialOfferSettingId"
  },
  WORKORDER: {
    GETADDRESSBYID: MS.CSO + "/order/workorder/getInstallAddress",
    GETQUERYADDRESS: MS.CSO + "/order/workorder/queryInstallationAddress",
    EDITADDRESS: MS.CSO + "/order/workorder/editInstallAddress",
    QUERY_BILLING_ADDRESS: MS.CSO + "/order/account/queryBillingAddress",
    UPDATE_BILLING_ADDRESS: MS.CSO + "/order/account/updateBillingAddress"
  },
  ERRORORDERS: {
    LIST: MS.CSO + "/order/queryFailOrders",
    UPDATE_C1_ORDER: MS.CSO + "/order/workorder/updateC1Order",
    REPLAY_ERROR_WORK: MS.CSO + "/order/workorder/replayErrorWork"
  },
  RESERVEDHIS: {
    LIST: MS.CSO + "/reservedHis"
  },
  EXTERNALTYPE: {
    ADD: MS.CSO + "/order/external/type/info/setting",
    CHANGEPLANWB: MS.CSO + "/order/external/type/info/changePlanWB",
    EXTERNBYINTCHANGENUM: MS.CSO + "/order/external/type/info/externByIntChangeNum",
  },
  COMMON: {
    QUERY_INVENTORY: MS.CSO + "/common/queryInventory",
    CHECK_SERVICE_NUMBER_IS_USED: MS.CSO + "/common/checkServiceNumberIsUsed",
    GENERATE_QUOTATION_RECORD: MS.CSO + "/common/generateQuotationRecord",
    BOOKINGNUMBER: MS.CSO + "/common/reservedOtherBusinessTypeServiceNumber",
    HOLD_PRODUCT: MS.CSO + "/common/holdProduct",
    CHECK_SERVICE_NUMBER_IS_RESERVED: MS.CSO + "/common/checkServiceNumberIsReserved",
    CHECK_PRODUCT_QUANTITY: MS.CSO + "/common/checkProductQuantity",
    CHECK_QUOTATION_RECORD: MS.CSO + "/common/checkQuotationRecord",
    JUDGE_LIABLILITY_ACCOUNT: MS.CSO + "/common/judgeLiabilityAccount"
  },
  QUOTATION: {
    CHECK_INVOICENUMBER: MS.CSO + "/orderQuotationRecord/getSmNumberAndInvoiceNumber",
    CHECK_PRODUCT_HAS_CHANGE: MS.CSO + "/orderQuotation/checkProductHasChange",
    CANCEL_QUOTATION_RECORD: MS.CSO + "/orderQuotation/cancelQuotationRecord",
    TRANSFEROR_SETTLEMENT: MS.CSO + "/orderQuotation/transferorSettlement",
    TRANSFEROR_QUOTATION_RECORD: MS.CSO + "/orderQuotation/transferorQuotationRecord",
    ADD: MS.CSO + "/orderQuotationRecord/add",
    GET_ORDER_QUOTATION_RECODE: MS.CSO + "/orderQuotationRecord/getOrderQuotationRecord",
    CLEAR_QUOTATION_RECORD: MS.CSO + "/orderQuotationRecord/clearQuotationRecord",
    TRANSFEROR_JUDGE_LIABILITY_ACCOUNT: MS.CSO + "/orderQuotation/transferorJudgeLiabilityAccount"
  },
  SIMSETTING: {
    INSERT: MS.CSO + "/simSetting",
    UPDATE: MS.CSO + "/simSetting",
    GETBYID: MS.CSO + "/simSetting",
    GETALL: MS.CSO + "/simSetting/getAll",
    DELETE: MS.CSO + "/simSetting",
    GET_SIMTYPE: MS.CSO + "/simSetting/getSimTypes"
  },
  PROGRAMOFFER: {
    CONFLICTVALIDATE: MS.CSO + "/program/offer/conflictValidate",
    CONFLICT_VALIDATE_INFO: MS.CSO + "/program/offer/conflictValidateInfo"
  },
  PHOTO: {
    PHOTO: MS.CSO + "/photo"
  },
  OFFEREXTERNALTYPE: {
    ADD: MS.CSO + "/offerExternalType",
    DELETE: MS.CSO + "/offerExternalType",
    LIST_OFFER_EXTERNAL_TYPE_DTO: MS.CSO + "/offerExternalType/listOfferExternalTypeDTO"
  },
  ORDEREDOFFER: {
    DEFAULT_UNSUBSCRIBE_OFFER_UNDER_TTOS: MS.CSO + "/orderedOffer/defaultUnsubscribeOfferUnderTTOS",
    GET_ORDERED_SERVICE: MS.CSO + "/orderedOffer/getOrderedService",
    AUTOCOMPUTEPENALTY: MS.CSO + "/orderedOffer/autoComputePenalty"
  },
  ORDEREDOFFERPORTIN: {
    AUTO_FREE_TO_GO_UNDER_POST2PREPAID: MS.CSO + "/orderedOfferPortIn/autoFreeToGoUnderPost2prepaid"
  },
  MOVEMACHINEINSTALLFEE: {
    ACTION: MS.CSO + "/moveMachineInstallFee",
    GET_List: MS.CSO + "/moveMachineInstallFee/list",
    ALL: MS.CSO + "/moveMachineInstallFee/all",
    CASCADE_LIST: MS.CSO + "/moveMachineInstallFee/cascadeList"
  },
  SUBSCRIBEREQUIPMENT: {
    ACTION: MS.CSO + "/subscriberEquipmentInfo",
    List: MS.CSO + "/subscriberEquipmentInfo/list",
    ALL: MS.CSO + "/subscriberEquipmentInfo/all",
    ALL_TYPE: MS.CSO + "/subscriberEquipmentInfo/allType",
  },
  GOVIDTYPEMAPACCCAT: {
    GOVIDTYPEMAPACCCAT: MS.CSO + "/govIdTypeMapAccCat",
    GOVIDTYPEMAPACCCAT_LIST: MS.CSO + "/govIdTypeMapAccCat/list",
    VALIDGOVIDTYPEMAPPING: MS.CSO + "/govIdTypeMapAccCat/validGovIdTypeMapping",
  },
  OIB: {
    PLAN_ITEM: MS.CSO + "/oib/plan/item",
    EQUIPMENT: MS.CSO + "/oib/equipment",
    BRAND: MS.CSO + "/oib/plan/item/brand",
    CONTRACT: MS.CSO + "/oib/plan/item/contract",
    CHILD: MS.CSO + "/oib/plan/item/child",
    SETTLEMENT: MS.CSO + "/oib/plan/item/settlement",
    FIXEDLINEINCR: MS.CSO + "/oib/kindClear/fixedLineIncr",
    INTERNETINCR: MS.CSO + "/oib/kindClear/internetIncr",
    SEARCHSERVICEPLAN: MS.CSO + "/oib/plan/item/searchServicePlan",
    DELETESERVICEPLAN: MS.CSO + "/oib/plan/item/deleteServicePlan",
    UPDATESERVICEPLAN: MS.CSO + "/oib/plan/item/updateServicePlan",
    ADDSERVICEPLAN: MS.CSO + "/oib/plan/item/addServicePlan"
  },
  CONFERENCECALLPLAN: {
    ALL: MS.CSO + "/conferenceCallPlan/all"
  },
  ORDEROFFERTEMPLATE: {
    ORDER_OFFER_ID: MS.CSO + "/orderOfferSms/offerId",
    UPDATE_OFFER_TEMPLATE: MS.CSO + "/orderOfferSms/updateOfferTemplate",
    INSERT_OFFER_TEMPLATE: MS.CSO + "/orderOfferSms/insetOfferTemplate",
    TEMPLATES: MS.CSO + "/orderOfferSms/temeplates",
    DELOFFERTEMPLATE: MS.CSO + "/orderOfferSms/delOfferTemplate"
  },
  SECONDSIMSERVERPLAN: {
    ACTION: MS.CSO + "/secondSimServerPlan",
    LIST: MS.CSO + "/secondSimServerPlan/list",
    SEARCH: MS.CSO + "/secondSimServerPlan/search"
  },
  HANDSET: {
    LIST: MS.CSO + "/importHandset/getAll",
    IMPORT: MS.CSO + "/importHandset/importEformHandsetData"
  },
  SECONDSIM: {
    GETOPTIONS: MS.CSO + "/secondSim/getByQueryType",
    GETHANDSET: MS.CSO + "/importHandset/getAll",
    IMPORTDATA: MS.CSO + "/importHandset/importEformHandsetData"
  },
  CONTRACTPHONEOFFER: {
    CONTRACTPHONEOFFER: MS.CSO + "/ContractPhoneOffer",
    BATCH: MS.CSO + "/ContractPhoneOffer/batch"
  },
  POSPEEDOMETER: {
    POSPEEDOMETER: MS.CSO + "/PoSpeedController"
  },
  TRANSFERACCOUNT: {
    VALIDATE_OFFER_CONFLICT_TRANSFEROR: MS.CSO + "/transferAccount/validateOfferConflictTransferor"
  },
  ORDER_ATTACHMENT_QUERY: {
    QUERY_BY_ORDER_NUMBER: MS.CSO + "/orderattachmentquery/queryByOrderNumber",
  },
  SCRIPT_UPDATE_INFO: {
    ADD: MS.CSO + "/scriptUpdateInfo",
    UPDATE: MS.CSO + "/scriptUpdateInfo",
    SEARCH: MS.CSO + "/scriptUpdateInfo/getByCondition",
    ABANDON: MS.CSO + "/scriptUpdateInfo/abandon",
    APPROVE: MS.CSO + "/scriptUpdateInfo/approve",
    EXECUTE: MS.CSO + "/scriptUpdateInfo/execute",
  },
  NICE_NUMBER: {
    DELETE: MS.CSO + "/niceNumber",
    ADD: MS.CSO + "/niceNumber",
    GET_NICE_NUMBER_LIST: MS.CSO + "/niceNumber/getNiceNumberList",
    GET_NICE_NUMBER_LIST_PAGE: MS.CSO + "/niceNumber/getNiceNumberListPage",
    DELETE_NICENUMBER: MS.CSO + "/niceNumber/deleteNiceNumber",
    INSERT: MS.CSO + "/niceNumber/insert",
    DELETE_NICE_NUMBER: MS.CSO + "/niceNumber/delete"
  },
  // 號碼預留管理
  RESERVE: {
    // 添加預留號碼
    ADD_RESERVE_NUMBER: MS.CSO + "/reserve/addReserveNumber",
    // 條件查詢獲取預留號碼列表
    GET_RESERVE_LIST: MS.CSO + "/reserve/getList",
    // 查看預留號碼詳情
    GET_RESERVE_NUMBER_INFO: MS.CSO + "/reserve/getReserveNumberInfo",
    // 預留號碼釋放
    RELEASE_RESERVED_NUMBER: MS.CSO + "/reserve/releaseReserveNumber",
    // 編輯預留號碼
    UPDATE_RESERVE_NUMBER: MS.CSO + "/reserve/updateReserveNumber",
  },
  // 重置Zimbra 密码
  RESET_MAIL_PASSWORD: {
    GET_EXTERNAL_OBJECT_LIST: MS.CSO + "/resetMailPassword/getExternalObjectList",
  },
  PROMOTION_PRODUCTION: {
    CHECK_TIMES: MS.CSO + "/promotionProduction/checkTimes",
    CHECK_TIMES_BEFORE_SUBMIT: MS.CSO + "/promotionProduction/checkTimesBeforeSubmit",
    // 促销商品设置PLU获取积分
    GET_POINTS: MS.CSO + "/promotionProduction/getPoints",
  },
  ORDER_STORE_CSR_SET: {
    CHECK_IS_STORE_CSR: MS.CSO + "/orderStoreCsrSet/checkisStoreCsr",
  },
  // esim
  ORDER_ESIM: {
    RESERVE: MS.CSO + "/orderEsim/reserve",
    RESEND_MAIL: MS.CSO + "/orderEsim/resendMail",
  },
  // 自动续约权限设置
  AUTO_RENEWAL_SETTING: {
    HAS_AUTO_RENEWAL_PERMISSION: MS.CSO + "/autoRenewalSetting/hasAutoRenewalPermission"
  }
}

export default CSO