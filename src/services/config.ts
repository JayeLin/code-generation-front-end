interface Pagination {
  total: number
  pageNum: number
  pageSize: string | number
  pageSize2: string | number
  pageSize5: string | number
  pageSize_5: string | number
  pageSize_10: string | number
  sizeSet: any
  layout: string | number
  isGet(callback: () => void, pageSize: number): void
}

const config = {

  // 分頁配置
  pageConfig: () => {
    const page: Pagination = {
      total: 0,
      pageNum: 1,
      pageSize: 15,
      pageSize2: 20,
      pageSize5: 50,
      pageSize_5: 5,
      pageSize_10: 10,
      sizeSet: [5, 10, 15, 20, 30, 50],
      layout: "total, sizes, prev, pager, next, jumper",
      isGet(callback, val) {
        if (this.total > 0) {
          let count = this.total / val
          if (parseFloat(count + '') + 1 > this.pageNum) {
            callback()
          }
        }
      }
    }
    return page
  },

  // 語言(lang)與字段關係配置
  langConfig: (languageCurrent?: any) => {
    if (!languageCurrent || languageCurrent.type === "ZH_TW") {
      const lang: any = [
        {
          columnName: "繁體",
          langName: "ZH_TW",
          langText: "Tw"
        }, {
          columnName: "英文",
          langName: "EN",
          langText: "En"
        }, {
          columnName: "簡體",
          langName: "ZH_CN",
          langText: "Cn"
        }, {
          columnName: "葡文",
          langName: "PT",
          langText: "Pt"
        }
      ]
      return lang;
    } else if (languageCurrent.type === "EN") {
      const lang: any = [
        {
          columnName: "Traditional",
          langName: "ZH_TW",
          langText: "Tw"
        }, {
          columnName: "English",
          langName: "EN",
          langText: "En"
        }, {
          columnName: "Simplified",
          langName: "ZH_CN",
          langText: "Cn"
        }, {
          columnName: "Portuguese",
          langName: "PT",
          langText: "Pt"
        }
      ]
      return lang;
    }
  },

  // 業務類型選項
  serviceTypeConfig: (serviceTypeDictionary?: any, languageCurrent?: any) => {
    const serviceTypeOptions: any = []
    serviceTypeOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部業務类型", itemEnName: "serviceType", itemCnName: "全部业务类型" })
    for (let i of serviceTypeDictionary) {
      let Name: any = ''
      let val: any = ''
      val = Number(i.itemCode)
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        serviceTypeOptions[0].label = serviceTypeOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        serviceTypeOptions[0].label = serviceTypeOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        serviceTypeOptions[0].label = serviceTypeOptions[0].itemCnName
      }
      serviceTypeOptions.push({ value: val, label: Name })
    }
    // const serviceTypeOptions: any = [
    //   {
    //     value: val,
    //     label: Name
    //   }, {
    //     value: val,
    //     labelCn: Name
    //   }, {
    //     value: val,
    //     label: Name
    //   }, {
    //     value: val,
    //     label: Name
    //   }
    // ]
    // if (type && type === "all") {
    //   serviceTypeOptions.unshift({ value: "all", label: "全部業務類型" })
    // }
    // if (type && type === "whole") {
    //   serviceTypeOptions.unshift({ value: "whole", label: "全部" })
    // }
    return serviceTypeOptions
  },

  // 業務類型選項
  serviceTypeConfigTemp: (type?: string) => {
    const serviceTypeOptions: any = [
      {
        value: "MOBILE_PREPAID",
        label: "MOBILE_PREPAID"
      }, {
        value: "MOBILE_POSTPAID",
        label: "MOBILE_POSTPAID"
      }, {
        value: "FIX_LINE",
        label: "FIX_LINE"
      }, {
        value: "INTERNET",
        label: "INTERNET"
      }
    ]
    if (type && type === "all") {
      serviceTypeOptions.unshift({ value: "all", label: "全部業務類型" })
    }
    if (type && type === "whole") {
      serviceTypeOptions.unshift({ value: "whole", label: "全部" })
    }
    return serviceTypeOptions
  },
  // 規則類型選項
  ruleTypeConfig: (ruleTypeDictionary?: any, languageCurrent?: any) => {
    const ruleTypeOptions: any = []
    let Name: any = ''
    let val: any = ''
    for (let i of ruleTypeDictionary) {
      i.Name = Name
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
      }
      ruleTypeOptions.push({ value: val, label: Name })
    }
    // const ruleTypeOptions: any = [
    //   {
    //     value: "PREREQUISITE",
    //     label: "PREREQUISITE"
    //     // label: "前置"
    //   }, {
    //     value: "EXCLUSION",
    //     label: "EXCLUSION"
    //     // label: "互斥"
    //   }, {
    //     value: "OTHER",
    //     label: "OTHER"
    //     // label: "其他"
    //   }
    // ]
    return ruleTypeOptions
  },

  // 產品辦理渠道
  channelConfig: (channelDictionary?: any, languageCurrent?: any) => {
    const channelOptions: any = []
    let Name: any = ''
    let val: any = ''
    for (let i of channelDictionary) {
      i.Name = Name
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
      }
      channelOptions.push({ value: val, label: Name })
    }
    // const channelOptions: any = [
    //   {
    //     value: "CSMS",
    //     label: "CSMS"
    //   }, {
    //     value: "PORTAL",
    //     label: "PORTAL"
    //   }, {
    //     value: "BUDDY",
    //     label: "BUDDY"
    //   }
    // ]
    return channelOptions
  },

  // offer的需求類型
  requiredLevelConfig: (requiredTypeDictionary?: any, languageCurrent?: any) => {
    const requiredLevelOptions: any = []
    let Name: any = ''
    let val: any = ''
    for (let i of requiredTypeDictionary) {
      i.Name = Name
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
      }
      requiredLevelOptions.push({ value: val, label: Name })
    }
    // const requiredLevelOptions: any = [
    //   {
    //     value: "MANDATORY",
    //     label: "MANDATORY"
    //   }, {
    //     value: "DEFAULT",
    //     label: "DEFAULT"
    //   }, {
    //     value: "OPTIONAL",
    //     label: "OPTIONAL"
    //   }
    // ]
    return requiredLevelOptions
  },

  // offer的類型, 如果這個結構變了, 需要同步修改program中關聯服務的相關方法(this.offerTypeOptions[0])
  offerTypeConfig: (offerTypeDictionary?: any, languageCurrent?: any) => {
    const offerTypeOptions: any = []
    offerTypeOptions.unshift({ itemCode: "999", itemTwName: "全部服務類型", itemEnName: "all", itemCnName: "全部服务类型" })
    for (let i of offerTypeDictionary) {
      let Name: any = ''
      let val: any = ''
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        offerTypeOptions[0].label = offerTypeOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        offerTypeOptions[0].label = offerTypeOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        offerTypeOptions[0].label = offerTypeOptions[0].itemCnName
      }
      offerTypeOptions.push({ value: val, label: Name })
    }
    // const offerTypeOptions: any = [
    //   {
    //     value: "PO",
    //     label: "PO"
    //   }, {
    //     value: "SO",
    //     label: "SO"
    //   }, {
    //     value: "AO",
    //     label: "AO"
    //   }
    // ]
    // if (type && type === "all") {
    //   offerTypeOptions.unshift({ value: "all", label: "全部服務類型" })
    // }
    return offerTypeOptions
  },

  // 洲,國家或地區級聯選項臨時配置(未完成)
  destinationConfig: () => {
    const destinationOptions: object[] = [
      {
        id: "1",
        name: "亞洲",
        children: [
          {
            id: "2",
            name: "中國"
          }, {
            id: "3",
            name: "朝鮮"
          }, {
            id: "4",
            name: "日本"
          }, {
            id: "5",
            name: "韓國"
          }
        ]
      }, {
        id: "6",
        name: "歐洲",
        children: [
          {
            id: "7",
            name: "英國"
          }, {
            id: "8",
            name: "德國"
          }, {
            id: "9",
            name: "瑞士"
          }, {
            id: "10",
            name: "法國"
          }
        ]
      }
    ]
    return destinationOptions
  },

  // 產品辦理渠道
  chargeConfig: () => {
    const chargeOptions: any = [
      {
        value: "ALIPAY",
        label: "ALIPAY"
      }, {
        value: "M_PAY",
        label: "M_PAY"
      }, {
        value: "CASH",
        label: "CASH"
      }, {
        value: "WECHAT_PAY",
        label: "WECHAT_PAY"
      }, {
        value: "MACAUPASS_PHYSICAL_CARD",
        label: "MACAUPASS_PHYSICAL_CARD"
      }, {
        value: "CREDIT_CARD",
        label: "CREDIT_CARD"
      }, {
        value: "DEBIT_CARD",
        label: "DEBIT_CARD"
      }
    ]
    return chargeOptions
  },

  // 狀態配置(草稿,已發佈,已凍結)
  statusConfig: (statusDictionary?: any, languageCurrent?: any) => {

    // 狀態配置
    const statusOptions: any = []
    statusOptions.unshift({ itemCode: '999', itemTwName: "全部狀態", itemEnName: "allStatus", itemCnName: "全部状态" })
    for (let i of statusDictionary) {
      let Name: any = ''
      let val: any = ''
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        statusOptions[0].label = statusOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        statusOptions[0].label = statusOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        statusOptions[0].label = statusOptions[0].itemCnName
      }
      statusOptions.push({ value: val, label: Name })
    }

    // const statusOptions: any = [
    //   {
    //     value: "DRAFT",
    //     label: "DRAFT"
    //   }, {
    //     value: "ACTIVE",
    //     label: "ACTIVE"
    //   }, {
    //     value: "INACTIVE",
    //     label: "INACTIVE"
    //   }
    // ]
    // if (type && type === "all") {
    //   statusOptions.unshift({ value: "all", label: "全部狀態" })
    // }
    return statusOptions
  },
  // 訂單狀態選項
  orderStatusConfig: (orderStatusDictionary?: any, languageCurrent?: any) => {
    // 狀態配置
    const orderStatusOptions: any = []
    orderStatusOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部訂單狀態", itemEnName: "allOrderStatus", itemCnName: "全部订单状态" })
    for (let i of orderStatusDictionary) {
      let Name: any = ''
      let val: any = ''
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        orderStatusOptions[0].label = orderStatusOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        orderStatusOptions[0].label = orderStatusOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        orderStatusOptions[0].label = orderStatusOptions[0].itemCnName
      }
      orderStatusOptions.push({ value: val, label: Name })
    }
    return orderStatusOptions
  },
  // 工單狀態選項
  workerStatusConfig: (workerStatusDictionary?: any, languageCurrent?: any) => {
    // 狀態配置
    const statusOptions: any = []
    for (let i of workerStatusDictionary) {
      let Name: any = ''
      let val: any = ''
      val = i.itemCode
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
      }
      statusOptions.push({ value: val, label: Name })
    }
    return statusOptions
  },
  // 崗位
  userPropertyConfig: (userPropertyDictionary?: any, languageCurrent?: any) => {
    const userPropertyOptions: any = []
    for (let i of userPropertyDictionary) {
      userPropertyOptions.push({ value: i.code, label: i.name })
    }
    return userPropertyOptions
  },
  // 辦理類型選項
  serviceActionConfig: (type?: string) => {
    const serviceActionOptions: any = [
      {
        value: "NEW_ACCOUNT",
        label: "新開戶"
      }, {
        value: "PLAN_CHANGE",
        label: "計劃變更"
      }, {
        value: "TRANSFER",
        label: "過戶"
      }, {
        value: "HOUSEHOLD",
        label: "分戶"
      }, {
        value: "ACCOUNT_CANCELLATION",
        label: "銷戶"
      }, {
        value: "STOP/START_SERVICE",
        label: "停/復機"
      }
    ]
    if (type && type === "all") {
      serviceActionOptions.unshift({ value: "all", label: "全部辦理類型" })
    }
    if (type && type === "whole") {
      serviceActionOptions.unshift({ value: "whole", label: "全部" })
    }
    return serviceActionOptions
  },
  // 门店辦理渠道
  shopChannelConfig: (type?: string) => {
    const channelOptions: any = [
      {
        value: "CSMS",
        label: "CSMS"
      }, {
        value: "PORTAL",
        label: "PORTAL"
      }, {
        value: "BUDDY",
        label: "BUDDY"
      }
    ]
    if (type && type === "all") {
      channelOptions.unshift({ value: "all", label: "全部辦理類型" })
    }
    if (type && type === "whole") {
      channelOptions.unshift({ value: "whole", label: "全部" })
    }
    return channelOptions
  },
  // 業務類型選項
  sourceConfig: (sourceDictionary?: any, languageCurrent?: any) => {
    const sourceOptions: any = []
    sourceOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部", itemEnName: "sourceType", itemCnName: "全部" })
    for (let i of sourceDictionary) {
      let Name: any = ''
      let val: any = ''
      val = Number(i.itemCode)
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        sourceOptions[0].label = sourceOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        sourceOptions[0].label = sourceOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        sourceOptions[0].label = sourceOptions[0].itemCnName
      }
      sourceOptions.push({ value: val, label: Name })
    }
    return sourceOptions
  },
  // 證件類型選項
  govIdTypeConfig: (govIdTypeDictionary?: any, languageCurrent?: any) => {
    const govIdTypeOptions: any = []
    govIdTypeOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部證件類型", itemEnName: "govIdType", itemCnName: "全部证件类型" })
    for (let i of govIdTypeDictionary) {
      let Name: any = ''
      let val: any = ''
      val = Number(i.itemCode)
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        govIdTypeOptions[0].label = govIdTypeOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        govIdTypeOptions[0].label = govIdTypeOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        govIdTypeOptions[0].label = govIdTypeOptions[0].itemCnName
      }
      govIdTypeOptions.push({ value: val, label: Name })
    }
    return govIdTypeOptions
  },
  // 注意類型選項
  noteTypeConfig: (noteTypeDictionary?: any, languageCurrent?: any) => {
    const noteTypeOptions: any = []
    noteTypeOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部注意類型", itemEnName: "govIdType", itemCnName: "全部注意类型" })
    for (let i of noteTypeDictionary) {
      let Name: any = ''
      let val: any = ''
      val = Number(i.itemCode)
      if (languageCurrent.type === "ZH_TW") {
        Name = i.itemTwName
        noteTypeOptions[0].label = noteTypeOptions[0].itemTwName
      } else if (languageCurrent.type === "EN") {
        Name = i.itemEnName
        noteTypeOptions[0].label = noteTypeOptions[0].itemEnName
      } else if (languageCurrent.type === "ZH_CN") {
        Name = i.itemCnName
        noteTypeOptions[0].label = noteTypeOptions[0].itemCnName
      }
      noteTypeOptions.push({ value: val, label: Name })
    }
    return noteTypeOptions
  },
  // 投訴類型選項
  // complaintsTypeConfig: (noteTypeDictionary?: any, languageCurrent?: any) => {
  //   const complaintsTypeOptions: any = []
  //   complaintsTypeOptions.unshift({ itemCode: '999', label: "", itemTwName: "全部投訴類型", itemEnName: "govIdType", itemCnName: "全部投诉类型" })
  //   for (let i of noteTypeDictionary) {
  //     let Name: any = ''
  //     let val: any = ''
  //     val = Number(i.itemCode)
  //     if (languageCurrent.type === "ZH_TW") {
  //       Name = i.itemTwName
  //       complaintsTypeOptions[0].label = complaintsTypeOptions[0].itemTwName
  //     } else if (languageCurrent.type === "EN") {
  //       Name = i.itemEnName
  //       complaintsTypeOptions[0].label = complaintsTypeOptions[0].itemEnName
  //     } else if (languageCurrent.type === "ZH_CN") {
  //       Name = i.itemCnName
  //       complaintsTypeOptions[0].label = complaintsTypeOptions[0].itemCnName
  //     }
  //     complaintsTypeOptions.push({ value: val, label: Name})
  //   }
  //   return complaintsTypeOptions
  // },
}

export default config