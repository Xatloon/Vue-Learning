export interface paths {
  '/api/healthy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 健康检查判断 */
    get: operations['HomeController_signIn']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/auth/signIn': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 用户登录 */
    post: operations['AuthController_signIn']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/auth/signUp': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 用户注册 */
    post: operations['AuthController_signUp']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/auth/modifyPassword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 修改密码 */
    post: operations['AuthController_modifyPassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/auth/resetPassword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 重置密码 */
    post: operations['AuthController_resetPassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/auth/genCode': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 发送验证码 */
    post: operations['AuthController_genCode']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/file/launch': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 客户端预上传接口 */
    post: operations['FilesController_launch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/file/access': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 预览图片 */
    get: operations['FilesController_access']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/file/callback': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post: operations['FilesController_callback']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/file/parseXlsx': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post: operations['FilesController_parseXlsx']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/homepage/getHomepageConfig': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取首页配置数据 */
    get: operations['HomepageController_getHomepageConfig']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/homepage/setHomepage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置首页 */
    post: operations['HomepageController_countResourceByStatus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/homepage/getHomepageHotKeywords': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取首页热搜关键词(不区分类型且暂时过滤专利的关键词) */
    get: operations['HomepageController_getHomepageHotKeywords']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/homepage/getHomepageSearchResultByKeyword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 首页搜索返回关键词列表 */
    get: operations['HomepageController_getHomepageSearchResultByKeyword']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/homepage/getHomepageKeywordCharts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 首页知识图谱(关键词-项目/论文前两级自己拼接) */
    get: operations['HomepageController_getHomepageKeywordCharts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getArticleTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取文章类型 */
    get: operations['ConfigsController_getArticleTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getColumns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取栏目数据 */
    get: operations['ConfigsController_getColumns']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getFields': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取领域数据 */
    get: operations['ConfigsController_getFields']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getLanguages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取语种数据 */
    get: operations['ConfigsController_getLanguages']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getPatentTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取专利类型数据 */
    get: operations['ConfigsController_getPatentTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getPatentValidTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取专利有效性数据 */
    get: operations['ConfigsController_getPatentValidTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getPeriodicalPeriods': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取发刊周期数据 */
    get: operations['ConfigsController_getPeriodicalPeriods']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getPolicyTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取政策类型 */
    get: operations['ConfigsController_getPolicyTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getSubjects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取学科分类数据 */
    get: operations['ConfigsController_getSubjects']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getTermTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取政策类型 */
    get: operations['ConfigsController_getTermTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/setColumnsType': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置栏目状态 */
    post: operations['ConfigsController_setColumnsType']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/setColumnsOrder': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置栏目排序(同组) */
    post: operations['ConfigsController_setColumnsOrder']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getUniversities': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取学校数据 */
    get: operations['ConfigsController_getUniversities']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getTopicTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取主题类型数据 */
    get: operations['ConfigsController_getTopicTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getNSFDirectorateTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取美国项目学部类型数据 */
    get: operations['ConfigsController_getNSFDirectorateTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getSearchResultByKeyword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 搜索返回关键词列表(这里返回的结果集按照搜索频率第一排序和出现频率第二排序排，目前无搜索频率) */
    get: operations['ConfigsController_getSearchResultByKeyword']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getHotKeywords': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取热搜关键词(词云,目前只有项目、论文、政策、专利有关键词) */
    get: operations['ConfigsController_getHotKeywords']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/configs/getTreatiseLibraryTypes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取精选文库分类列表(不同栏目前端根据columnId自行过滤) */
    get: operations['ConfigsController_getTreatiseLibraryTypes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取项目详情 */
    get: operations['TermsController_getTermDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/saveTerm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑项目 */
    post: operations['TermsController_saveTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/listTerm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 项目列表 */
    get: operations['TermsController_listTerm']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/operateTerms': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作项目(发布、待发布) */
    post: operations['TermsController_operateTerms']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/removeTerms': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除项目 */
    post: operations['TermsController_removeTerms']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/listComplexTerm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 项目列表(c端) */
    post: operations['TermsController_listComplexTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermCountByUnit': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 依托单位分布(国家社会科学基金、教育部人文社科、国家自然科学基金项目) */
    get: operations['TermsController_getTermCountByUnit']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermCountByType': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 项目类型分布 */
    get: operations['TermsController_getTermCountByType']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermCountByYear': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 项目类型时间分析(这里目前仅有教育人文社科项目有~v0.2.0兼容且全国教育科学规划项目也有) */
    get: operations['TermsController_getTermCountByYear']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermPercentBySubject': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 不同研究方向资助率(仅目前国家自然科学基金有~但api均做方便以后拓展) */
    get: operations['TermsController_getTermPercentBySubject']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getMoneyByYear': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 资助金额分布(仅目前国家自然科学基金有~但api均做方便以后拓展) */
    get: operations['TermsController_getMoneyByYear']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermCountByProvince': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 资助地区分布(仅目前国家自然科学基金有~但api均做方便以后拓展) */
    get: operations['TermsController_getTermCountByProvince']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getTermPercentByYear': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 申请资助情况(仅目前国家自然科学基金,静态数据) */
    get: operations['TermsController_getTermPercentByYear']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getAmericaTermOverview': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 美国项目概览 */
    get: operations['TermsController_getAmericaTermOverview']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getAmericaTermDistribution': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 美国项目立项单位分布 */
    get: operations['TermsController_getAmericaTermDistribution']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getAmericaTermAmountByKeywords': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 三个学部热力图, 总数前10个关键字 */
    get: operations['TermsController_getAmericaTermAmountByKeywords']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/getAmericaTermHotOrganizationList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 热门研究单位 */
    get: operations['TermsController_getAmericaTermHotOrganizationList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/terms/listComplexAmericaTerm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 美国项目列表(c端) */
    post: operations['TermsController_listComplexAmericaTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/getPeriodicalDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取期刊详情 */
    get: operations['PeriodicalsController_getPeriodicalDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/savePeriodical': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑期刊 */
    post: operations['PeriodicalsController_savePeriodical']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/listPeriodical': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 期刊列表 */
    get: operations['PeriodicalsController_listPeriodical']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/operatePeriodicals': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作期刊(发布、待发布) */
    post: operations['PeriodicalsController_operatePeriodicals']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/removePeriodicals': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除期刊 */
    post: operations['PeriodicalsController_removePeriodicals']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/listComplexPeriodical': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 期刊列表(c端) */
    post: operations['PeriodicalsController_listComplexTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/recommendPeriodicals': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 期刊推荐列表(相关推荐) */
    post: operations['PeriodicalsController_recommendPeriodicals']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/periodicals/recommendPeriodicalsById': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 期刊推荐列表(为您推荐) */
    post: operations['PeriodicalsController_recommendPeriodicalsById']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/getPolicyDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取政策详情 */
    get: operations['PoliciesController_getPolicyDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/savePolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑政策 */
    post: operations['PoliciesController_savePolicy']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/listPolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 政策列表 */
    get: operations['PoliciesController_listPolicy']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/operatePolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作政策(发布、待发布) */
    post: operations['PoliciesController_operatePolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/removePolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除政策 */
    post: operations['PoliciesController_removePolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/getAnalysisPolicyDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取政策解读详情 */
    get: operations['PoliciesController_getAnalysisPolicyDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/saveAnalysisPolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑政策解读 */
    post: operations['PoliciesController_saveAnalysisPolicy']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/listAnalysisPolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 政策解读列表 */
    get: operations['PoliciesController_listAnalysisPolicy']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/operateAnalysisPolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作政策解读(发布、待发布) */
    post: operations['PoliciesController_operateAnalysisPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/removeAnalysisPolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除政策解读 */
    post: operations['PoliciesController_removeAnalysisPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/listComplexPolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 政策列表(c端:其中最新政策、专题政策得列表也共用该接口选择适当得入参即可) */
    post: operations['PoliciesController_listComplexPolicy']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/recommendPolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 政策推荐列表(相关政策) */
    post: operations['PoliciesController_recommendPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/listComplexAnalysisPolicy': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 政策解读列表(c端) */
    post: operations['PoliciesController_listComplexAnalysisPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/recommendAnalysisPolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 政策解读推荐列表(相关政策解读) */
    post: operations['PoliciesController_recommendAnalysisPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/getPolicyCountByRegion': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取国家下的政策数量(政策分布) */
    get: operations['PoliciesController_getPolicyCountByRegion']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/policies/listAssemblyPolicies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 政策汇编 */
    post: operations['PoliciesController_listAssemblyPolicies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getTreatiseDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取论文详情 */
    get: operations['TreatisesController_getTreatiseDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/saveTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑论文 */
    post: operations['TreatisesController_saveTreatise']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/listTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 论文列表 */
    get: operations['TreatisesController_listTreatises']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/operateTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作论文(发布、待发布) */
    post: operations['TreatisesController_operateTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/removeTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除论文 */
    post: operations['TreatisesController_removeTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getArticleCount': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取论文分类下的文章数量 */
    get: operations['TreatisesController_getArticleCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/listComplexTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 论文列表(c端) */
    post: operations['TreatisesController_listComplexTreatise']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/recommendTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 论文推荐列表(为您推荐) */
    post: operations['TreatisesController_recommendTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getInstitutionCharts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 文献发表机构排名(TOP10) */
    get: operations['TreatisesController_getInstitutionCharts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getKeywordCharts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 论文关键词TOP10(知识图谱) */
    get: operations['TreatisesController_getKeywordCharts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getCountryCooperationNetWorks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取国家间的合作关系(NS) */
    get: operations['TreatisesController_getCountryCooperationNetWorks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getTreatiseCountByYear': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取年份下的论文数量(NS,publication distribution over time) */
    get: operations['TreatisesController_getTreatiseCountByYear']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getResearchTopics': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取论文主题分布数据(NS,research topics) */
    get: operations['TreatisesController_getResearchTopics']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getResearchObjects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取研究对象下的论文数量(NS,research objects) */
    get: operations['TreatisesController_getResearchObjects']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getResearchParadigm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取研究范式的论文数量及占比(NS,research paradigm) */
    get: operations['TreatisesController_getResearchParadigm']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getResearchGoals': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取研究目标的论文数量及占比(NS,research objectives) */
    get: operations['TreatisesController_getResearchGoals']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getResearchAnalysisMethods': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取各分析方法的论文数量及占比(NS,research research analysis methods) */
    get: operations['TreatisesController_getResearchAnalysisMethods']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/listComplexTreatiseLibrary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 精选文库列表(c端) */
    post: operations['TreatisesController_listComplexTreatiseLibrary']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getTreatiseLibraryCountBySortAndYear': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取河流图表 */
    get: operations['TreatisesController_getTreatiseLibraryCountBySortAndYear']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/getTreatiseLibraryDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取精选文库详情 */
    get: operations['TreatisesController_getTreatiseLibraryDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/recommendTreatiseLibraries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 精选文库推荐列表(相关推荐) */
    post: operations['TreatisesController_recommendTreatiseLibraries']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/saveTreatiseLibrary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑精选文库 */
    post: operations['TreatisesController_saveTreatiseLibrary']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/listTreatiseLibrary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 精选文库列表 */
    get: operations['TreatisesController_listTreatiseLibrary']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/operateTreatiseLibraries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作精选文库(发布、待发布) */
    post: operations['TreatisesController_operateTreatiseLibraries']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/treatises/removeTreatiseLibraries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除精选文库 */
    post: operations['TreatisesController_removeTreatiseLibraries']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/getPatentDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取专利详情 */
    get: operations['PatentsController_getPatentDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/savePatent': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑专利 */
    post: operations['PatentsController_savePatent']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/listPatent': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 专利列表 */
    get: operations['PatentsController_listPatent']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/operatePatents': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作专利(发布、待发布) */
    post: operations['PatentsController_operatePatents']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/removePatents': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除专利 */
    post: operations['PatentsController_removePatents']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/listComplexPatent': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 专利列表(c端) */
    post: operations['PatentsController_listComplexTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/getPatentCountByAgent': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 高频发明人TOP10 */
    get: operations['PatentsController_getPatentCountByAgent']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/patents/getPatentCharts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 专利图表统计(申请单位统计、年份统计、类型统计) */
    get: operations['PatentsController_getPatentCharts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/getConferenceDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取会议详情 */
    get: operations['ConferencesController_getConferenceDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/saveConference': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑会议 */
    post: operations['ConferencesController_saveConference']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/listConference': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 会议列表 */
    get: operations['ConferencesController_listConference']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/operateConferences': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作会议(发布、待发布) */
    post: operations['ConferencesController_operateConferences']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/removeConferences': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除会议 */
    post: operations['ConferencesController_removeConferences']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/listComplexConference': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 会议列表(c端) */
    post: operations['ConferencesController_listComplexTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/listRecentConference': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 最近会议TOP4 */
    get: operations['ConferencesController_listRecentConference']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/recommendConferences': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 会议推荐列表(为您推荐) */
    post: operations['ConferencesController_recommendConferences']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/conferences/getParentConferences': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取所有parent会议(一级会议标签前端自己定义加入) */
    get: operations['ConferencesController_getParentConferences']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/getInstitutionDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取机构详情 */
    get: operations['InstitutionsController_getInstitutionDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/saveInstitution': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑机构 */
    post: operations['InstitutionsController_saveInstitution']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/listInstitution': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 机构列表 */
    get: operations['InstitutionsController_listInstitution']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/operateInstitutions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 操作机构(发布、待发布) */
    post: operations['InstitutionsController_operateInstitutions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/removeInstitutions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除机构 */
    post: operations['InstitutionsController_removeInstitutions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/listComplexInstitution': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 结构列表(c端) */
    post: operations['InstitutionsController_listComplexTerm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/recommendInstitutions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 机构推荐列表(为您推荐) */
    post: operations['InstitutionsController_recommendInstitutions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/institutions/getInstitutionsByCoordinate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取所有机构坐标(机构分布) */
    get: operations['InstitutionsController_getInstitutionsByCoordinate']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/getUserDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取用户详情 */
    get: operations['UsersController_getUserDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/modifyUserInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 编辑用户资料 */
    post: operations['UsersController_modifyUserInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/listHistory': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用户浏览历史 */
    get: operations['UsersController_listHistory']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/operateFavoriteTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 收藏/移除论文 */
    post: operations['UsersController_operateTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/operateLabelTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 收藏/移除论文标签 */
    post: operations['UsersController_operateLabelTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/saveNoteTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 添加/编辑论文笔记或用户添加评论 */
    post: operations['UsersController_saveNoteTreatise']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/removeNoteTreatises': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除论文笔记 */
    post: operations['UsersController_removeNoteTreatises']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/getNoteTreatiseDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取用户笔记详情 */
    get: operations['UsersController_getNoteTreatiseDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/listNoteTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取笔记列表 */
    get: operations['UsersController_listNoteTreatise']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/listFavoriteTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取收藏论文列表（论文集） */
    get: operations['UsersController_listFavoriteTreatise']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/listLabelTreatise': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取标签论文列表 */
    get: operations['UsersController_listLabelTreatise']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/getNoteTreatisesByTreatiseId': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取该论文下的笔记列表 */
    get: operations['UsersController_getNoteTreatisesByTreatiseId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/users/listUserSearchKeywords': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取用户搜索词云(排名前60个) */
    get: operations['UsersController_listUserSearchKeywords']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/getReportsDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取研究报告详情 */
    get: operations['ReportsController_getReportsDetail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/saveReports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增/编辑研究报告 */
    post: operations['ReportsController_saveReports']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/listReports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 研究报告列表（后台） */
    post: operations['ReportsController_listReports']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/operateReports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 研究报告(发布、待发布) */
    post: operations['ReportsController_operateReports']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/removeReports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除研究报告 */
    post: operations['ReportsController_removeReports']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/listResearchReports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 研究报告列表(c端) */
    post: operations['ReportsController_listResearchReports']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/reports/clicksReport': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 下载量上报 */
    post: operations['ReportsController_clicksReport']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    ResultData: {
      /**
       * @description 结果码, 200 表示成功
       * @default 200
       */
      code: number
      /**
       * @description 结果描述, ok 表示成功
       * @default ok
       */
      message: string
    }
    SignInResInfo: {
      /** @description 用户id */
      id: string
      /** @description 用户手机号 */
      mobile: string
      /** @description 用户昵称 */
      name?: Record<string, never>
      /**
       * @description 用户状态 是否有效:enabled,disabled 无效
       * @enum {string}
       */
      status: 'disabled' | 'enabled'
      /**
       * @description 用户类型:普通用户user,管理员admin,超级管理员administrator
       * @enum {string}
       */
      type: 'user' | 'admin' | 'administrator'
      /** @description token */
      token: string
    }
    signUpResInfo: {
      /** @description 用户id */
      id: string
      /** @description 用户手机号 */
      mobile: string
      /** @description 用户昵称 */
      name?: Record<string, never>
      /**
       * @description 用户状态 是否有效:enabled,disabled 无效
       * @enum {string}
       */
      status: 'disabled' | 'enabled'
      /**
       * @description 用户类型:普通用户user,管理员admin,超级管理员administrator
       * @enum {string}
       */
      type: 'user' | 'admin' | 'administrator'
      /** @description token */
      token: string
    }
    signInDto: {
      /** @description 用户手机号 */
      mobile: string
      /** @description 密码, 8~20位大小写字母或者数字 */
      password: string
      /** @description 登录平台 */
      provider?: string
    }
    signUpDto: {
      /** @description 用户手机号 */
      mobile: string
      /** @description 验证码 */
      code: string
      /** @description 密码, 8~20位大小写字母或者数字 */
      password: string
    }
    ModifyPasswordDto: {
      /** @description 用户手机号 */
      mobile: string
      /** @description 原密码, 8~20位大小写字母或者数字 */
      oldPassword: string
      /** @description 新密码, 8~20位大小写字母或者数字 */
      newPassword: string
    }
    ResetPasswordDto: {
      /** @description 用户手机号 */
      mobile: string
      /** @description 验证码 */
      code: string
      /** @description 新密码, 8~20位大小写字母或者数字 */
      password: string
    }
    GenCodeDto: {
      /** @description 用户手机号 */
      mobile: string
    }
    Multipart: {
      /** @description id */
      'id': string
      /** @description 用户id */
      'x:user_id': string
      /** @description key */
      'key': string
      /** @description 文件名 */
      'filename': string
      /** @description oss key */
      'OSSAccessKeyId': string
      /** @description policy base64 */
      'policy': string
      /** @description 签名 */
      'signature': string
      /** @description 回调 */
      'callback': string
    }
    OssUploadParams: {
      /** @description 上传域 */
      host: string
      /** @description 上传策略 */
      policy: Record<string, never>
      /** @description 其他部分参数 */
      multipart: components['schemas']['Multipart']
    }
    LaunchResult: {
      /** @description oss 上传参数 */
      ossUploadParams: components['schemas']['OssUploadParams']
    }
    LaunchDto: {
      /** @description 文件名 */
      filename: string
      /** @description 上传凭证 */
      uploadToken?: string
    }
    LinkInfo: {
      /** @description 链接地址 */
      url: string
      /** @description 标题 */
      title: string
    }
    GetHomepageConfigResult: {
      /** @description id */
      id: string
      /** @description 站点名称 */
      name?: string | null
      /** @description 网站备案号 */
      IPC?: string | null
      /** @description CDN地址 */
      CDN?: string | null
      /** @description 版本号 */
      versionNo?: string | null
      /** @description 黑名单:ip分号隔开 */
      blacklist?: string | null
      /** @description 标题 */
      title?: string | null
      /** @description 首页描述 */
      description?: string | null
      /** @description 版权所有 */
      ownership?: string | null
      /** @description 底部描述 */
      bottomDescription?: string | null
      /** @description 友情链接 数组[{url:,title:xxx }] */
      links?: components['schemas']['LinkInfo'][] | null
      /** @description logo */
      logo?: string | null
      /** @description 手机端二维码 */
      qrCode?: string | null
    }
    GetHotKeywordsInfo: {
      /** @description 名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy,精选文库treatiseLibrary */
      type: string
      /** @description 搜索次数(所有用户),默认0 */
      search: number
      /** @description 出现内容关键字的频率 */
      frequency: number
    }
    GetHomepageHotKeywordsResult: {
      /** @description 首页热搜关键词TOP10 */
      keywords: components['schemas']['GetHotKeywordsInfo'][]
    }
    GetHomepageSearchResultByKeywordResult: {
      /** @description 首页热搜关键词TOP10 */
      keywords: components['schemas']['GetHotKeywordsInfo'][]
    }
    DetailInfo: {
      /** @description 相关的实体id */
      id: string
      /** @description 相关的实体标题 */
      title: string
    }
    GetHomepageKeywordChartInfo: {
      /** @description 栏目id */
      id: string
      /** @description 栏目名称 */
      name: string
      /** @description 该栏目下该关键词的数量 */
      count: number
      /** @description 该栏目下的具体数据数组(目前仅展示前20)可以是论文数据/项目数据/政策数据根据在哪个数组里定义含义 */
      details: components['schemas']['DetailInfo'][]
    }
    GetHomepageKeywordChartsResult: {
      /** @description 项目栏目下的数据 */
      termColumns: components['schemas']['GetHomepageKeywordChartInfo'][]
      /** @description 论文栏目下的数据 */
      treatiseColumns: components['schemas']['GetHomepageKeywordChartInfo'][]
      /** @description 政策栏目下的数据 */
      policyColumns: components['schemas']['GetHomepageKeywordChartInfo'][]
    }
    SetHomepageDto: {
      /** @description id,有则传过来无则不传 */
      id?: string
      /** @description 站点名称 */
      name?: string | null
      /** @description 网站备案号 */
      IPC?: string | null
      /** @description CDN地址 */
      CDN?: string | null
      /** @description 版本号 */
      versionNo?: string | null
      /** @description 黑名单:ip分号隔开 */
      blacklist?: string | null
      /** @description 标题 */
      title?: string | null
      /** @description 首页描述 */
      description?: string | null
      /** @description 版权所有 */
      ownership?: string | null
      /** @description 底部描述 */
      bottomDescription?: string | null
      /** @description 友情链接 数组 */
      links?: components['schemas']['LinkInfo'][] | null
      /** @description logo */
      logo?: string | null
      /** @description 手机端二维码 */
      qrCode?: string | null
    }
    GetConfigsConfigResult: {
      /** @description id */
      id: string
      /** @description 站点名称 */
      name?: string | null
      /** @description 网站备案号 */
      IPC?: string | null
      /** @description CDN地址 */
      CDN?: string | null
      /** @description 版本号 */
      versionNo?: string | null
      /** @description 黑名单:ip分号隔开 */
      blacklist?: string | null
      /** @description 标题 */
      title?: string | null
      /** @description 首页描述 */
      description?: string | null
      /** @description 版权所有 */
      ownership?: string | null
      /** @description 底部描述 */
      bottomDescription?: string | null
      /** @description 友情链接 数组[{url:,title:xxx }] */
      links?: components['schemas']['LinkInfo'][] | null
      /** @description logo */
      logo?: string | null
      /** @description 手机端二维码 */
      qrCode?: string | null
    }
    ArticleTypes: {
      /** @description 主键id */
      id: string
      /** @description 名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy,论文下的ssci专用treatise_ssci */
      type: string
    }
    GetArticleTypesResult: {
      /** @description 文章类型数组 */
      articleTypes: components['schemas']['ArticleTypes'][]
    }
    Columns: {
      /** @description id */
      id: string
      /** @description 栏目名称 */
      name: string
      /** @description 父级id */
      parentId: string
      /** @description 排序 */
      sequenceNumber: number | null
      /** @description 是否隐藏:1是,0否 */
      isHide: number
      /** @description 栏目介绍 */
      introduction?: string | null
    }
    GetColumnsResult: {
      /** @description 栏目数组 */
      columns: components['schemas']['Columns'][]
    }
    Fields: {
      /** @description id */
      id: string
      /** @description 领域名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy,两者共用则用_连接:institution_conference */
      type: string
      /** @description 是否主领域:1是,0否 */
      isMain: number
    }
    GetFieldsResult: {
      /** @description 领域数组 */
      fields: components['schemas']['Fields'][]
    }
    Languages: {
      /** @description 主键id */
      id: string
      /** @description 名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy,论文下的ssci专用treatise_ssci */
      type: string
    }
    GetLanguagesResult: {
      /** @description 语种数组 */
      languages: components['schemas']['Languages'][]
    }
    PatentTypes: {
      /** @description 专利类型id */
      id: string
      /** @description 专利类型名称 */
      name: string
    }
    GetPatentTypesResult: {
      /** @description 专利类型数组 */
      patentTypes: components['schemas']['PatentTypes'][]
    }
    PatentValidTypes: {
      /** @description 专利类型id */
      id: string
      /** @description 专利类型名称 */
      name: string
    }
    GetPatentValidTypesResult: {
      /** @description 专利有效性数组 */
      patentValidTypes: components['schemas']['PatentValidTypes'][]
    }
    PeriodicalPeriods: {
      /** @description 主键id */
      id: string
      /** @description 名称 */
      name: string
    }
    GetPeriodicalPeriodsResult: {
      /** @description 专利有效性数组 */
      periodicalPeriods: components['schemas']['PeriodicalPeriods'][]
    }
    PolicyTypes: {
      /** @description 主键id */
      id: string
      /** @description 名称 */
      name: string
    }
    GetPolicyTypesResult: {
      /** @description 专利有效性数组 */
      policyTypes: components['schemas']['PolicyTypes'][]
    }
    Subjects: {
      /** @description 学科id */
      id: string
      /** @description 学科名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy */
      type: string
    }
    GetSubjectsResult: {
      /** @description 学科分类数组 */
      subjects: components['schemas']['Subjects'][]
    }
    TermTypes: {
      /** @description 项目类型id */
      id: string
      /** @description 项目类型名称 */
      name: string
    }
    GetTermTypesResult: {
      /** @description 项目类型数组 */
      termTypes: components['schemas']['TermTypes'][]
    }
    SetColumnsTypeResult: {
      /** @description 成功数量 */
      success: number
      /** @description 失败数量 */
      failed: number
    }
    Universities: {
      /** @description 主键id */
      id: string
      /** @description 学校名称 */
      name: string
    }
    GetUniversitiesResult: {
      /** @description 学校数组 */
      universities: components['schemas']['Universities'][]
    }
    TopicTypes: {
      /** @description 主键id */
      id: string
      /** @description 名称 */
      name: string
    }
    GetTopicTypesResult: {
      /** @description 主题类型数组(这块数据数据方还没给到所以为空) */
      topicTypes: components['schemas']['TopicTypes'][]
    }
    NSFDirectorateTypes: {
      /** @description 主键id */
      id: string
      /** @description 学部名称 */
      name: string
    }
    GetNSFDirectorateTypesResult: {
      /** @description 美国数据学部类型数组 */
      nsfDirectorateTypes: components['schemas']['NSFDirectorateTypes'][]
    }
    GetSearchResultByKeywordInfo: {
      /** @description 名称 */
      name: string
      /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy,精选文库treatiseLibrary */
      type: string
      /** @description 搜索次数(所有用户),默认0 */
      search: number
      /** @description 出现内容关键字的频率 */
      frequency: number
    }
    GetSearchResultByKeywordResult: {
      /** @description 搜索返回关键词列表 */
      keywords: components['schemas']['GetSearchResultByKeywordInfo'][]
    }
    GetHotKeywordsResult: {
      /** @description 热搜关键词TOP50 */
      keywords: components['schemas']['GetHotKeywordsInfo'][]
    }
    TreatiseLibraryTypes: {
      /** @description 主键id */
      id: string
      /** @description 分类名称 */
      name: string
      /** @description 栏目id,精选文库只能选择精选文库相关的栏目且不为空 */
      columnId?: string
    }
    GetTreatiseLibraryTypesResult: {
      /** @description 热搜关键词TOP50 */
      treatiseLibraryTypes: components['schemas']['TreatiseLibraryTypes'][]
    }
    SetColumnsTypeDto: {
      /** @description 栏目id数组 */
      ids: string[]
      /** @description 是否隐藏 1是，0否，默认0 */
      isHide: number
    }
    SetColumnsOrderDto: {
      /** @description 栏目id数组 */
      ids: string[]
    }
    GetTermDetailResult: {
      /** @description id */
      id: string
      /** @description 项目编号 */
      termNumber?: string | null
      /** @description 项目负责人 */
      principal?: string | null
      /** @description 依托单位 */
      unit?: string | null
      /** @description 省份 */
      province?: string | null
      /** @description 金额(万元) */
      money?: number | null
      /** @description 项目类型 */
      type?: string | null
      /** @description 学部 */
      department?: string | null
      /**
       * Format: date-time
       * @description 批准时间(年份)
       */
      authorizedAt?: string | null
      /** @description 项目名称 */
      name: string
      /** @description 学科分类 */
      subject?: string | null
      /** @description 学科代码 */
      subjectNo?: string | null
      /**
       * Format: date-time
       * @description 执行时间,开始时间
       */
      startedAt?: string | null
      /**
       * Format: date-time
       * @description 执行时间,结束时间
       */
      endedAt?: string | null
      /** @description 关键字 */
      keyword?: string | null
      /** @description 栏目id,项目只能选择相关的栏目id */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /**
       * Format: date-time
       * @description 发布时间
       */
      publishedAt?: string | null
      /** @description 项目类型名称 */
      typeName?: string
      /** @description 学科分类名称 */
      subjectName?: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 责任人 */
      owner?: string
    }
    ListTermInfo: {
      /** @description id */
      id: string
      /** @description 项目名称 */
      name: string
      /** @description 栏目id,项目只能选择相关的栏目id */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListTermResult: {
      /** @description 项目数组 */
      terms: components['schemas']['ListTermInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateTermsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveTermsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveTermResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexTermInfo: {
      /** @description id */
      id: string
      /** @description 项目编号 */
      termNumber?: string | null
      /** @description 项目负责人 */
      principal?: string | null
      /** @description 依托单位 */
      unit?: string | null
      /** @description 项目类型 */
      type?: string | null
      /**
       * Format: date-time
       * @description 批准时间(年份)
       */
      authorizedAt?: string | null
      /** @description 项目名称 */
      name: string
      /** @description 类型名称 */
      typeName: string
    }
    ListComplexTermResult: {
      /** @description 项目数组 */
      terms: components['schemas']['ListComplexTermInfo'][]
      /** @description 总数 */
      count: number
    }
    UnitInfo: {
      /** @description 依托单位名称 */
      unit: string
      /** @description 该依托单位的项目总数 */
      count: number
      /** @description 年份(这里没啥用就是字段冗余出来没单独处理顺便文档写上了) */
      year: number
      /** @description 与从左往右的排序一致(这里的值是top10的值来排序无其他作用字段) */
      order: number
    }
    GetTermCountByUnitInfo: {
      /** @description 年份 */
      year: number
      /** @description 该年份下的项目的总数 */
      count: number
      /** @description top10单位项目的总数(这个y坐标高度可能需要展示这个值) */
      topCount: number
      /** @description 该年份下的依托单位数量分布(根据需求目前只展示top10) */
      units: components['schemas']['UnitInfo'][]
    }
    YearCountInfo: {
      /** @description 依托单位名称(这里没啥用就是字段冗余出来没单独处理顺便文档写上了) */
      unit: string
      /** @description 该依托单位的项目总数 */
      count: number
      /** @description 年份 */
      year: number
    }
    UnitTop10Info: {
      /** @description 依托单位名称 */
      unit: string
      /** @description 该年份下的项目的总数 */
      count: number
      /** @description 该依托单位下不同年份的分布情况 */
      yearCount: components['schemas']['YearCountInfo'][]
    }
    GetTermCountByUnitResult: {
      /** @description 依托单位分布数组(这里需要注意下国家社会科学基金、教育部人文社科项目基金主要拿这个数组展示就够了) */
      yearCounts: components['schemas']['GetTermCountByUnitInfo'][]
      /** @description 依托单位top10顺序已经排好(国家自然科学基金项目(F0701)这个图表主要在这个数组里yearCount展示,这里会有yearCount具体你看下ui的xy轴就清楚了),另外两个图表这个top10主要是在x轴上要显示哪top10 */
      unitTop10: components['schemas']['UnitTop10Info'][]
    }
    TypeCountInfo: {
      /** @description 项目类型id */
      id: string
      /** @description 项目类型名称 */
      name: string
      /** @description 该类型下项目的总数 */
      count: number
      /** @description 该类型下项目占比(目前保留一位小数) */
      percent: number
    }
    YearCountByTypeInfo: {
      /** @description 年份 */
      year: number
      /** @description 该年份下项目的总数 */
      count: number
      /** @description 该年份下项目占比(目前保留一位小数) */
      percent: number
      /** @description 该年份下的类型项目占比(目前保留一位小数) */
      types: components['schemas']['TypeCountInfo'][]
    }
    GetTermCountByTypeResult: {
      /** @description 类型分布占比,(这里只展示前7,这边全下发因为有百分比) */
      typeCounts: components['schemas']['TypeCountInfo'][]
      /** @description 年份类型分布占比,(目前仅国家自然科学基金项目需要用到) */
      yearCounts: components['schemas']['YearCountByTypeInfo'][]
    }
    TypeInfo: {
      /** @description 项目类型id */
      id: string
      /** @description 项目类型名称 */
      name: string
      /** @description 该类型下项目的总数 */
      count: number
    }
    GetTermCountByYearInfo: {
      /** @description 年份 */
      year: number
      /** @description 该年份下的项目的总数(这里的总数不一定与数组下的总和一致如果项目没类型的情况下无类型的会在types里过滤掉) */
      count: number
      /** @description 该年份下不同类型的项目数据统计 */
      types: components['schemas']['TypeInfo'][]
    }
    GetTermCountByYearResult: {
      /** @description 项目类别时间分析(教育部人文社科项目基金有),这里0.2.0的图表types需要分组不含“教育”一组柱状图展示,含“教育”类型的一组折线图展示前端自行分组，总数就是分组后之和 */
      yearCounts: components['schemas']['GetTermCountByYearInfo'][]
    }
    YearInfo: {
      /** @description 年份 */
      year: number
      /** @description 资助率(学科项目总数/总项目数目前保留以为小数) */
      percent: number
    }
    GetTermPercentBySubjectInfo: {
      /** @description 学科id */
      subject: string
      /** @description 学科名称 */
      subjectName: string
      /** @description 学科代码(这里没有用到~只是需要用这个代码排序进行了冗余) */
      subjectNo: string
      /** @description 该学科下不同年份年份的项目数据统计 */
      years: components['schemas']['YearInfo'][]
    }
    GetTermPercentBySubjectResult: {
      /** @description 不同研究方向资助率数组(国家自然科学基金有) */
      subjectCounts: components['schemas']['GetTermPercentBySubjectInfo'][]
    }
    MoneyTypeInfo: {
      /** @description 项目类型id */
      id: string
      /** @description 项目类型名称 */
      name: string
      /** @description 该类型下项目的总数 */
      count: number
      /** @description 该类型下项目占比(目前保留一位小数) */
      percent: number
      /** @description 资助金额 */
      money: number
    }
    GetMoneyByYearInfo: {
      /** @description 年份 */
      year: number
      /** @description 资助金额 */
      money: number
      /** @description 该年份下项目数量 */
      count: number
      /** @description 该年份下不同类型的项目资助金额(这边的排序已经按照需求id排序好) */
      types: components['schemas']['MoneyTypeInfo'][]
    }
    GetMoneyByYearResult: {
      /** @description 资助金额分布数组(国家自然科学基金有) */
      moneyCounts: components['schemas']['GetMoneyByYearInfo'][]
    }
    ProvinceInfo: {
      /** @description 年份,该字段这里是冗余 */
      year: number
      /** @description 省份code,这里省份名称前端自主对照本地code码表 */
      province: string
      /** @description 项目数量 */
      count: number
    }
    GetTermCountByProvinceInfo: {
      /** @description 年份 */
      year: number
      /** @description 项目总数 */
      count: number
      /** @description 该年份下不同省份的项目数 */
      provinces: components['schemas']['ProvinceInfo'][]
    }
    GetTermCountByProvinceResult: {
      /** @description 资助金额分布数组(国家自然科学基金有) */
      provinceCounts: components['schemas']['GetTermCountByProvinceInfo'][]
    }
    GetTermPercentByPercentInfo: {
      /** @description 年份 */
      year: number
      /** @description 申请数量 */
      applicantCount: number
      /** @description 资助数量 */
      count: number
      /** @description 资助率 */
      percent: number
    }
    GetTermPercentByYearResult: {
      /** @description 申请资助情况数组(国家自然科学基金有) */
      yearCounts: components['schemas']['GetTermPercentByPercentInfo'][]
    }
    AmericaTermOverviewInfo: {
      /** @description 年份 */
      year: number
      /** @description 项目数量 */
      termCount: number
      /** @description 资助金额 */
      amount: number
    }
    GetAmericaTermOverviewResult: {
      /** @description 美国项目概览 */
      americaTerms: components['schemas']['AmericaTermOverviewInfo'][]
    }
    AmericaTermDistributionInfo: {
      /** @description 美国州名称 */
      state: string
      /** @description 项目数量 */
      count: number
    }
    GetAmericaTermDistributionResult: {
      /** @description 美国项目立项单位分布 */
      americaTerms: components['schemas']['AmericaTermDistributionInfo'][]
    }
    AmericaTermAmountByKeywordsInfo: {
      /** @description 年份 */
      year: number
      /** @description 关键字 */
      keyword: string
      /** @description 金额 */
      amount: number
    }
    GetAmericaTermAmountByKeywordsResult: {
      /** @description 三个学部热力图 */
      americaTerms: components['schemas']['AmericaTermAmountByKeywordsInfo'][]
    }
    AmericaTermHotOrganizationInfo: {
      /** @description 组织 */
      organization: string
      /** @description 项目数量 */
      count: number
    }
    GetAmericaTermHotOrganizationListResult: {
      /** @description 热门研究单位 */
      americaTerms: components['schemas']['AmericaTermHotOrganizationInfo'][]
    }
    ListComplexAmericaTermInfo: {
      /** @description awardNumber, 资助编号, 作为id */
      awardNumber: string
      /** @description title */
      title?: string
      /**
       * Format: date-time
       * @description 开始时间
       */
      startDate?: string | null
      /**
       * Format: date-time
       * @description 结束时间
       */
      endDate?: string | null
      /** @description 项目负责人 */
      principalInvestigator: string
      /** @description 组织 */
      organization: string
      /** @description 资助金额 */
      awardedAmountToDate: number
      /** @description 学部 */
      nsfDirectorate: string
    }
    ListComplexAmericaTermResult: {
      /** @description 美国项目数组 */
      americaTerms: components['schemas']['ListComplexAmericaTermInfo'][]
      /** @description 总数 */
      count: number
    }
    SaveTermDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 项目名称 */
      name: string
      /** @description 栏目id */
      columnId: string
      /** @description 项目类型 */
      type?: string | null
      /** @description 省份code */
      province?: string | null
      /** @description 依托单位 */
      unit?: string | null
      /** @description 项目负责人 */
      principal?: string | null
      /** @description 项目编号 */
      termNumber?: string | null
      /** @description 关键词 */
      keyword?: string | null
      /** @description 金额(万元,保留到整数) */
      money?: number | null
      /** @description 学部 */
      department?: string | null
      /** @description 学科分类id */
      subject?: string | null
      /** @description 学科代码 */
      subjectNo?: string | null
      /**
       * Format: date-time
       * @description 批准年份
       */
      authorizedAt?: string | null
      /**
       * Format: date-time
       * @description 执行开始时间
       */
      startedAt?: string | null
      /**
       * Format: date-time
       * @description 执行开始时间,前端需要判断结束时间>开始时间
       */
      endedAt?: string | null
    }
    OperateTermsDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveTermsDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexTermDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /** @description 栏目id */
      columnId?: string
      /** @description 项目类型 */
      type?: string | null
      /** @description 批准年份 */
      authorizedAt?: string | null
      /** @description 依托单位,模糊搜索 */
      unit?: string | null
      /** @description 项目负责人,模糊搜索 */
      principal?: string | null
      /** @description 省份code */
      province?: string | null
      /** @description 学科分类id */
      subject?: string | null
    }
    ListComplexAmericaTermDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /**
       * Format: date-time
       * @description 立项时间
       */
      year?: string
      /** @description 热门研究单位,模糊搜索 */
      organization?: string
      /**
       * @description 学部
       * @enum {string}
       */
      nsfDirectorate?: 'nsfdirectorate_ehr' | 'nsfdirectorate_sbe' | 'nsfdirectorate_cse' | 'nsfdirectorate_bio' | 'nsfdirectorate_eng' | 'nsfdirectorate_geo' | 'nsfdirectorate_mps'
      /** @description 项目负责人,模糊搜索 */
      principalInvestigator?: string
    }
    GetPeriodicalDetailResult: {
      /** @description id */
      id: string
      /** @description 栏目id,期刊只能选择期刊相关的栏目id */
      columnId: string
      /** @description 期刊名称 */
      name: string
      /** @description 期刊类型:期刊 periodical */
      type?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 语种,格式:[string,string] */
      language?: string[] | null
      /** @description 地区(刊物国别),国别之间用;隔开 */
      region?: string | null
      /** @description 主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 子领域(大领域之间用“;”隔开) */
      minorField?: string | null
      /** @description 网址 */
      url?: string | null
      /** @description 详细地址 */
      address?: string | null
      /** @description 检索情况 */
      search?: string | null
      /** @description 影响因子 */
      impactFactor?: number | null
      /**
       * Format: date-time
       * @description 创刊时间
       */
      establishedAt?: string | null
      /** @description 出版商 */
      publisher?: string | null
      /** @description 刊发周期 */
      period?: string | null
      /** @description 主管单位 */
      manager?: string | null
      /** @description 主办单位 */
      organizer?: string | null
      /** @description ISSN,国际标准期刊编号 */
      ISSN?: string | null
      /** @description 国内统一刊号 */
      CN?: string | null
      /** @description 中文核心期刊(北大) 类型:核心期刊journals_001,1级权威journals_002,2级权威journals_003 格式 [string,string] */
      pekingUnit?: string[] | null
      /** @description 期刊荣誉 */
      honor?: string | null
      /** @description 载文量 */
      articleNumber?: number | null
      /** @description 引用量 */
      quote?: number | null
      /** @description 下载次数(统计CNKI中国知网) */
      downloads?: number | null
      /** @description 学科分类(CNKI中国知网),格式:[string,string] */
      subject?: string[] | null
      /** @description 综合影响因子 */
      compositeImpactFactor?: number | null
      /** @description 审稿周期 */
      checkPeriod?: string | null
      /** @description 发稿周期 */
      releasePeriod?: string | null
      /** @description 录用率 */
      recordRate?: number | null
      /** @description 审稿费,单位:元 */
      checkFee?: number | null
      /** @description 版面费,单位:元 */
      pageFee?: number | null
      /** @description 稿酬,单位:元 */
      reward?: number | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 引用分 */
      citeScore?: number | null
      /** @description 被引用率 */
      citeRate?: number | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /**
       * Format: date-time
       * @description 发布时间
       */
      publishedAt?: string | null
      /** @description 学科分类名称 */
      subjectName?: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 发刊周期名称 */
      periodName?: string
      /** @description 语种名称 */
      languageName?: string
      /** @description 责任人 */
      owner?: string
    }
    ListPeriodicalInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,期刊只能选择期刊相关的栏目id */
      columnId: string
      /** @description 期刊名称 */
      name: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListPeriodicalResult: {
      /** @description 期刊数组 */
      periodicals: components['schemas']['ListPeriodicalInfo'][]
      /** @description 总数 */
      count: number
    }
    OperatePeriodicalsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemovePeriodicalsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SavePeriodicalResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexPeriodicalInfo: {
      /** @description id */
      id: string
      /** @description 期刊名称 */
      name: string
      /** @description 期刊类型:期刊 periodical */
      type?: string | null
      /** @description 主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 子领域(大领域之间用“;”隔开) */
      minorField?: string | null
      /** @description 刊发周期 */
      period?: string | null
      /** @description ISSN,国际标准期刊编号 */
      ISSN?: string | null
      /** @description 载文量 */
      articleNumber?: number | null
      /** @description 引用量 */
      quote?: number | null
      /** @description 学科分类(CNKI中国知网),格式:[string,string] */
      subject?: string[] | null
      /** @description 综合影响因子 */
      compositeImpactFactor?: number | null
      /** @description 引用分 */
      citeScore?: number | null
      /** @description 被引用率 */
      citeRate?: number | null
      /** @description 发刊周期名称 */
      periodName?: string
      /** @description 学科分类名称 */
      subjectName?: string
    }
    ListComplexPeriodicalResult: {
      /** @description 期刊数组 */
      periodicals: components['schemas']['ListComplexPeriodicalInfo'][]
      /** @description 总数 */
      count: number
    }
    RecommendPeriodicalInfo: {
      /** @description id */
      id: string
      /** @description 期刊名称 */
      name: string
      /** @description 期刊类型:期刊 periodical */
      type?: string | null
      /** @description 主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 子领域(大领域之间用“;”隔开) */
      minorField?: string | null
      /** @description ISSN,国际标准期刊编号 */
      ISSN?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
    }
    RecommendPeriodicalsResult: {
      /** @description 期刊数组 */
      periodicals: components['schemas']['RecommendPeriodicalInfo'][]
    }
    RecommendPeriodicalByIdInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,期刊只能选择期刊相关的栏目id */
      columnId: string
      /** @description 期刊名称 */
      name: string
      /** @description 栏目名称 */
      columnName: string
    }
    RecommendPeriodicalsByIdResult: {
      /** @description 期刊数组 */
      periodicals: components['schemas']['RecommendPeriodicalByIdInfo'][]
    }
    SavePeriodicalDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 期刊名称 */
      name: string
      /** @description 栏目id */
      columnId: string
      /** @description 期刊类型 :期刊 periodical */
      type?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 语种,格式:[string,string] */
      language?: string[] | null
      /** @description 地区(刊物国别),国别之间用;隔开 */
      region?: string | null
      /** @description 主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 子领域(大领域之间用“;”隔开) */
      minorField?: string | null
      /** @description 网址 */
      url?: string | null
      /** @description 详细地址 */
      address?: string | null
      /** @description 检索情况 */
      search?: string | null
      /** @description 影响因子 */
      impactFactor?: number | null
      /**
       * Format: date-time
       * @description 创刊时间
       */
      establishedAt?: string | null
      /** @description 出版商 */
      publisher?: string | null
      /** @description 刊发周期 */
      period?: string | null
      /** @description 主管单位 */
      manager?: string | null
      /** @description 主办单位 */
      organizer?: string | null
      /** @description ISSN,国际标准期刊编号 */
      ISSN?: string | null
      /** @description CN,国内统一刊号 */
      CN?: string | null
      /** @description 中文核心期刊(北大) 类型:核心期刊journals_001,1级权威journals_002,2级权威journals_003 格式 [string,string] */
      pekingUnit?: string[] | null
      /** @description 期刊荣誉 */
      honor?: string | null
      /** @description 载文量 */
      articleNumber?: number | null
      /** @description 引用量 */
      quote?: number | null
      /** @description 下载次数(统计CNKI中国知网) */
      downloads?: number | null
      /** @description 学科分类(CNKI中国知网),格式:[string,string] */
      subject?: string[] | null
      /** @description 综合影响因子 */
      compositeImpactFactor?: number | null
      /** @description 审稿周期 */
      checkPeriod?: string | null
      /** @description 发稿周期 */
      releasePeriod?: string | null
      /** @description 录用率 */
      recordRate?: number | null
      /** @description 审稿费,单位:元 */
      checkFee?: number | null
      /** @description 版面费,单位:元 */
      pageFee?: number | null
      /** @description 稿酬,单位:元 */
      reward?: number | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 引用分 */
      citeScore?: number | null
      /** @description 被引用率 */
      citeRate?: number | null
    }
    OperatePeriodicalsDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemovePeriodicalsDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexPeriodicalDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /** @description 栏目id */
      columnId?: string
    }
    RecommendPeriodicalsDto: {
      /** @description 栏目id */
      columnId?: string
    }
    RecommendPeriodicalsByIdDto: {
      /** @description 期刊id */
      id: string
    }
    GetPolicyDetailResult: {
      /** @description id */
      id: string
      /** @description 栏目id,政策只能选择政策相关的栏目id */
      columnId: string
      /** @description 政策名称 */
      name: string
      /** @description 政策类型 */
      type?: string | null
      /** @description 主题类型 */
      topicType?: string[] | null
      /** @description 政策层级:国家级policy_level_001 */
      level?: string | null
      /** @description 发布机构/部门 */
      institution?: string | null
      /** @description 发文号 */
      announceNo?: string | null
      /** @description 教育层次:基础教育basic,高等教育higher,职业教育vocation,格式:[basic,higher] */
      educationLevel?: string[] | null
      /** @description 关键字 */
      keyword?: string | null
      /**
       * Format: date-time
       * @description 政策发布时间(出台时间)
       */
      announcedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 正文 */
      content?: string | null
      /** @description 政策来源(网址) */
      url?: string | null
      /** @description 国家 */
      region?: string | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /**
       * Format: date-time
       * @description 发布时间
       */
      publishedAt?: string | null
      /** @description 政策类型名称 */
      typeName?: string
      /** @description 主题类型名称 */
      topicTypeName?: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 责任人 */
      owner?: string
    }
    ListPolicyInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,政策只能选择政策相关的栏目id */
      columnId: string
      /** @description 政策名称 */
      name: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListPolicyResult: {
      /** @description 政策数组 */
      policies: components['schemas']['ListPolicyInfo'][]
      /** @description 总数 */
      count: number
    }
    OperatePoliciesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemovePoliciesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SavePolicyResult: {
      /** @description 主键id */
      id: string
    }
    GetAnalysisPolicyDetailResult: {
      /** @description id */
      id: string
      /** @description 栏目id,政策解读只能选择政策相关的栏目id */
      columnId: string
      /** @description 标题 */
      title: string
      /** @description 文章来源 */
      source?: string | null
      /** @description 正文 */
      content?: string | null
      /** @description 链接 */
      url?: string | null
      /**
       * Format: date-time
       * @description 发布时间
       */
      announcedAt?: string | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /**
       * Format: date-time
       * @description 发布时间
       */
      publishedAt?: string | null
      /** @description 栏目名称 */
      columnName: string
      /** @description 责任人 */
      owner?: string
    }
    ListAnalysisPolicyInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,政策解读只能选择政策相关的栏目id */
      columnId: string
      /** @description 标题 */
      title: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListAnalysisPolicyResult: {
      /** @description 政策解读数组 */
      analysisPolicies: components['schemas']['ListAnalysisPolicyInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateAnalysisPoliciesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveAnalysisPoliciesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveAnalysisPolicyResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexPolicyInfo: {
      /** @description id */
      id: string
      /** @description 政策名称 */
      name: string
      /** @description 政策类型 */
      type?: string | null
      /** @description 政策层级:国家级policy_level_001 */
      level?: string | null
      /** @description 发布机构/部门 */
      institution?: string | null
      /** @description 发文号 */
      announceNo?: string | null
      /** @description 教育层次:基础教育basic,高等教育higher,职业教育vocation,格式:[basic,higher] */
      educationLevel?: string[] | null
      /** @description 关键字 */
      keyword?: string | null
      /**
       * Format: date-time
       * @description 政策发布时间(出台时间)
       */
      announcedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 正文 */
      content?: string | null
      /** @description 政策来源(网址) */
      url?: string | null
      /** @description 国家 */
      region?: string | null
      /** @description 政策类型名称 */
      typeName?: string
    }
    ListComplexPolicyResult: {
      /** @description 政策数组 */
      policies: components['schemas']['ListComplexPolicyInfo'][]
      /** @description 总数 */
      count: number
    }
    RecommendPoliciesInfo: {
      /** @description id */
      id: string
      /** @description 政策名称 */
      name: string
    }
    RecommendPoliciesResult: {
      /** @description 推荐政策数组 */
      policies: components['schemas']['RecommendPoliciesInfo'][]
    }
    ListComplexAnalysisPolicyInfo: {
      /** @description id */
      id: string
      /** @description 标题 */
      title: string
      /** @description 文章来源 */
      source?: string | null
      /** @description 正文 */
      content?: string | null
      /**
       * Format: date-time
       * @description 发布时间
       */
      announcedAt?: string | null
    }
    ListComplexAnalysisPolicyResult: {
      /** @description 政策解读数组 */
      analysisPolicies: components['schemas']['ListComplexAnalysisPolicyInfo'][]
      /** @description 总数 */
      count: number
    }
    RegionInfo: {
      /** @description 政策数量 */
      count: number
      /** @description 国家/地区 */
      region: string
    }
    GetPolicyCountByRegionResult: {
      /** @description 政策分布数组 */
      regions: components['schemas']['RegionInfo'][]
    }
    RecommendAnalysisPoliciesInfo: {
      /** @description id */
      id: string
      /** @description 标题 */
      title: string
      /** @description 文章来源 */
      source?: string | null
      /**
       * Format: date-time
       * @description 发布时间
       */
      announcedAt?: string | null
    }
    RecommendAnalysisPoliciesResult: {
      /** @description 推荐政策解读数组 */
      analysisPolicies: components['schemas']['RecommendAnalysisPoliciesInfo'][]
    }
    AssemblyPoliciesInfo: {
      /** @description id */
      id: string
      /** @description 名称 */
      title: string
      /** @description 下载次数 */
      downloads: number
      /** @description 页数 */
      page?: number
      /**
       * Format: date-time
       * @description 发布时间
       */
      publishedAt?: string | null
      /** @description 下载链接 */
      url: string
      /** @description 封面链接 */
      coverUrl: string
    }
    ListAssemblyPoliciesResult: {
      /** @description 汇编列表 */
      assemblyPolicies: components['schemas']['AssemblyPoliciesInfo'][]
    }
    SavePolicyDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 政策名称 */
      name: string
      /** @description 栏目id */
      columnId: string
      /** @description 政策类型 */
      type?: string | null
      /** @description 主题类型 */
      topicType?: string[] | null
      /** @description 政策层级:国家级policy_level_001 */
      level?: string | null
      /** @description 发布政策/部门 */
      institution?: string | null
      /** @description 发文号 */
      announceNo?: string | null
      /** @description 教育层次:基础教育basic,高等教育higher,职业教育vocation,格式:[basic,higher] */
      educationLevel?: string[] | null
      /** @description 关键字 */
      keyword?: string | null
      /**
       * Format: date-time
       * @description 政策发布时间(出台时间)
       */
      announcedAt?: string | null
      /** @description 政策发布时间不为空，该字段不能为空,日期格式:year、month、date */
      picker?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 正文 */
      content?: string | null
      /** @description 政策来源(网址) */
      url?: string | null
      /** @description 国家 */
      region?: string | null
    }
    OperatePoliciesDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemovePoliciesDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    SaveAnalysisPolicyDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 政策解读标题 */
      title: string
      /** @description 栏目id */
      columnId: string
      /** @description 文章来源 */
      source?: string | null
      /** @description 正文 */
      content?: string | null
      /** @description 链接 */
      url?: string | null
      /**
       * Format: date-time
       * @description 发布时间
       */
      announcedAt?: string | null
    }
    OperateAnalysisPoliciesDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveAnalysisPoliciesDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexPolicyDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /** @description 政策类型 */
      type?: string | null
      /** @description 主题类型 */
      topicType?: string
      /** @description 教育层次:基础教育basic,高等教育higher,职业教育vocation */
      educationLevel?: string
      /**
       * Format: date-time
       * @description 政策发布时间(出台时间)
       */
      announcedAt?: string | null
      /** @description 政策发布时间不为空，该字段不能为空,日期格式:year、month、date(当前需求只有year) */
      picker?: string | null
      /** @description 栏目id */
      columnId?: string
    }
    RecommendPoliciesDto: {
      /** @description 政策id */
      id: string
    }
    ListComplexAnalysisPolicyDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 栏目id */
      columnId?: string
    }
    RecommendAnalysisPoliciesDto: {
      /** @description 政策id */
      id: string
    }
    ListAssemblyPoliciesDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
    }
    LabelCountInfo: {
      /** @description 标签id */
      id: string
      /** @description 标记数量 */
      count: number
    }
    GetTreatiseDetailResult: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /**
       * Format: date-time
       * @description 发表时间,单位:年
       */
      deliveryAt?: string | null
      /** @description 科研人员所属国家或地区 */
      region?: string | null
      /** @description 发表途径:期刊way_001,会议way_002,EDM会议way003,书way_004 */
      channel?: string | null
      /** @description 语种 */
      language?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 作者缩写 */
      authorAbbreviation?: string | null
      /** @description 第一作者单位 */
      authorUnit?: string | null
      /** @description 作者地址 */
      authorAddress?: string | null
      /** @description 通讯作者 */
      correspondingAuthor?: string | null
      /** @description 通讯作者单位 */
      correspondingAuthorUnit?: string | null
      /** @description 通讯作者地址 */
      correspondingAuthorAddress?: string | null
      /** @description 通讯作者邮箱 */
      correspondingAuthorEmail?: string | null
      /** @description 其他作者 */
      otherAuthor?: string | null
      /** @description 其他作者单位 */
      otherAuthorUnit?: string | null
      /** @description 文章主领域 */
      field?: string | null
      /** @description 文章子领域 */
      minorField?: string | null
      /** @description 文章类型 */
      sort?: string[] | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 检索情况 */
      search?: string | null
      /** @description 参考文献 */
      references?: string | null
      /** @description 参考文献量 */
      referencesNumber?: number | null
      /** @description 引用情况(次数)/被引频合计 */
      quote?: number | null
      /** @description 所获得资助项目 */
      fundedProject?: string | null
      /** @description 论文链接 */
      url?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 出版商 */
      publisher?: string | null
      /** @description 出版商地址 */
      publisherAddress?: string | null
      /** @description 期刊名称 */
      periodical?: string | null
      /** @description 期刊简称 */
      periodicalAbbreviation?: string | null
      /**
       * Format: date-time
       * @description 出版年
       */
      releasedAt?: string | null
      /** @description doi 论文唯一id */
      doi?: string | null
      /** @description 研究方向 */
      studyField?: string | null
      /** @description 栏目id,期刊论文只能选择期刊相关的栏目且不为空 */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 关键字 */
      keyword?: string | null
      /** @description 一级主题 */
      topic?: string | null
      /** @description 二级主题 */
      childTopic?: string | null
      /** @description 研究目标 */
      goal?: string | null
      /** @description 研究对象,这里会是多个分号隔开 */
      object?: string | null
      /** @description 研究范式 */
      paradigm?: string | null
      /** @description 数据分析方式,这里会是多个分号隔开 */
      method?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 文章类型名称 */
      sortName?: string
      /** @description 语种名称 */
      languageName?: string
      /** @description 责任人 */
      owner?: string
      /** @description 标签统计数,仅在C端请求进行统计 */
      labels?: components['schemas']['LabelCountInfo'][]
      /** @description 用户标签,当前用户登录时有贴就有 */
      label: string
      /** @description 是否被收藏:1是,0否(用户未登录默认都是0) */
      isFavorite: number
    }
    ListTreatiseInfo: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /** @description 栏目id,期刊论文只能选择期刊相关的栏目且不为空 */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListTreatiseResult: {
      /** @description 论文数组 */
      treatises: components['schemas']['ListTreatiseInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateTreatisesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveTreatisesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveTreatiseResult: {
      /** @description 主键id */
      id: string
    }
    ArticleCountInfo: {
      /** @description id */
      id: string
      /** @description 栏目名称 */
      name: string
      /** @description 父级id */
      parentId: string
      /** @description 排序 */
      sequenceNumber: number | null
      /** @description 是否隐藏:1是,0否 */
      isHide: number
      /** @description 栏目介绍 */
      introduction?: string | null
      /** @description 文章数量 */
      count: number
      /**
       * Format: date-time
       * @description 最新更新时间
       */
      updatedAt: string
    }
    GetArticleCountResult: {
      /** @description 论文下栏目的文章数量数组 */
      columns: components['schemas']['ArticleCountInfo'][]
    }
    ListComplexTreatiseInfo: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /**
       * Format: date-time
       * @description 发表时间,单位:年
       */
      deliveryAt?: string | null
      /** @description 发表途径:期刊way_001,会议way_002,EDM会议way003,书way_004 */
      channel?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 作者缩写 */
      authorAbbreviation?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 期刊名称 */
      periodical?: string | null
      /**
       * Format: date-time
       * @description 出版年
       */
      releasedAt?: string | null
      /** @description 关键字 */
      keyword?: string | null
      /** @description 标签,列表标签是所有用户贴的最多的 */
      label: string
      /** @description 是否被收藏:1是,0否(用户未登录默认都是0) */
      isFavorite: number
    }
    ListComplexTreatiseResult: {
      /** @description 论文数组 */
      treatises: components['schemas']['ListComplexTreatiseInfo'][]
      /** @description 总数 */
      count: number
    }
    RecommendTreatiseInfo: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /** @description 栏目id,期刊论文只能选择期刊相关的栏目且不为空 */
      columnId: string
    }
    RecommendTreatisesResult: {
      /** @description 推荐论文数组 */
      treatises: components['schemas']['RecommendTreatiseInfo'][]
    }
    InstitutionChartInfo: {
      /** @description 机构名称 */
      name: string
      /** @description 文章数量 */
      count: number
    }
    GetInstitutionChartsResult: {
      /** @description 机构排名数组 */
      institutionCharts: components['schemas']['InstitutionChartInfo'][]
    }
    KeywordChartTreatiseInfo: {
      /** @description 关键词名称字段冗余 */
      name: string
      /** @description 论文id,以防未来需要跳转需要用 */
      treatiseId: string
      /** @description 论文标题 */
      title: string
    }
    KeywordChartInfo: {
      /** @description 关键词名称 */
      name: string
      /** @description 出现的频率数量 */
      frequency: number
      /** @description 用户论文数据(目前展示10条,这个数量可由PM的需求调整) */
      treatises: components['schemas']['KeywordChartTreatiseInfo'][]
    }
    GetKeywordChartsResult: {
      /** @description 关键词数组 */
      keywordCharts: components['schemas']['KeywordChartInfo'][]
    }
    RegionTreatiseInfo: {
      /** @description 论文id,以防未来需要跳转需要用 */
      id: string
      /** @description 论文标题 */
      title: string
    }
    CountryCooperationNetWorksRegionInfo: {
      /** @description 国家名/地区 */
      region: string
      /** @description 用户论文数据(该地区下的论文数据) */
      treatises: components['schemas']['RegionTreatiseInfo'][]
    }
    GetCountryCooperationNetWorksResult: {
      /** @description 国家数组 */
      regions: components['schemas']['CountryCooperationNetWorksRegionInfo'][]
    }
    GetTreatiseCountByYearInfo: {
      /** @description x坐标轴名称,可用也可自己拼接展示 */
      name: string
      /** @description x坐标轴区间起始年份,由PM需求定义 */
      startYear: number
      /** @description x坐标轴区间结束年份,由PM需求定义 */
      endYear: number
      /** @description 该区间年份下的论文数量 */
      count: number
    }
    GetTreatiseCountByYearResult: {
      /** @description 年份下的论文数量 */
      yearCounts: components['schemas']['GetTreatiseCountByYearInfo'][]
    }
    GetResearchChildTopicsInfo: {
      /** @description 二级主题名称 */
      topic: string
      /** @description 该主题下的论文数量 */
      count: number
    }
    GetResearchTopicsInfo: {
      /** @description 一级主题名称 */
      topic: string
      /** @description 该主题下的论文数量 */
      count: number
      /** @description 二级主题字符串数组 */
      childTopics: components['schemas']['GetResearchChildTopicsInfo'][]
    }
    GetResearchTopicsResult: {
      /** @description 主题数组 */
      topics: components['schemas']['GetResearchTopicsInfo'][]
    }
    GetResearchObjectsInfo: {
      /** @description 研究对象名 */
      object: string
      /** @description 该研究对象下的论文数 */
      count: number
    }
    GetResearchObjectsResult: {
      /** @description 研究对象数组 */
      objects: components['schemas']['GetResearchObjectsInfo'][]
    }
    GetResearchParadigmInfo: {
      /** @description 研究范式名 */
      paradigm: string
      /** @description 该研究范式下的论文数 */
      count: number
      /** @description 该研究范式下的占比(保留两位小数) */
      percent: number
    }
    GetResearchParadigmResult: {
      /** @description 研究范式数组 */
      paradigm: components['schemas']['GetResearchParadigmInfo'][]
    }
    GetResearchGoalsInfo: {
      /** @description 研究目标 */
      goal: string
      /** @description 该研究目标下的论文数 */
      count: number
      /** @description 该研究目标下的占比(保留两位小数) */
      percent: number
    }
    GetResearchGoalsResult: {
      /** @description 研究目标数组 */
      goals: components['schemas']['GetResearchGoalsInfo'][]
    }
    GetResearchAnalysisMethodsInfo: {
      /** @description 分析方法 */
      method: string
      /** @description 该分析方法下的论文数 */
      count: number
      /** @description 该分析方法下的占比(保留两位小数) */
      percent: number
    }
    GetResearchAnalysisMethodsResult: {
      /** @description 分析方法数据 */
      methods: components['schemas']['GetResearchAnalysisMethodsInfo'][]
    }
    ListComplexTreatiseLibraryInfo: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /**
       * Format: date-time
       * @description 发表时间,单位:年
       */
      deliveryAt?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 第一作者单位 */
      authorUnit?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 关键字 */
      keyword?: string | null
    }
    ListComplexTreatiseLibraryResult: {
      /** @description 精选文库数组 */
      treatiseLibraries: components['schemas']['ListComplexTreatiseLibraryInfo'][]
      /** @description 总数 */
      count: number
    }
    SortCountsInfo: {
      /** @description 分类id */
      sort: string
      /** @description 分类名称 */
      sortName: string
      /** @description 精选文库数量 */
      count: number
    }
    YearCountsInfo: {
      /** @description 年份 */
      year: number
      /** @description 年份下分类数据 */
      sortCounts: components['schemas']['SortCountsInfo'][]
      /** @description 精选文库数量 */
      count: number
    }
    GetTreatiseLibraryCountBySortAndYearResult: {
      /** @description 分类下数据统计 */
      sortCounts: components['schemas']['SortCountsInfo'][]
      /** @description 年份下数据统计 */
      yearCounts: components['schemas']['YearCountsInfo'][]
    }
    GetTreatiseLibraryDetailResult: {
      /** @description id */
      id: string
      /** @description 分类 */
      sort: string
      /** @description 论文标题 */
      title: string
      /**
       * Format: date-time
       * @description 发表时间,单位:年
       */
      deliveryAt?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 第一作者单位 */
      authorUnit?: string | null
      /** @description 通讯作者 */
      correspondingAuthor?: string | null
      /** @description 通讯作者单位 */
      correspondingAuthorUnit?: string | null
      /** @description 通讯作者邮箱 */
      correspondingAuthorEmail?: string | null
      /** @description 其他作者 */
      otherAuthor?: string | null
      /** @description 其他作者单位 */
      otherAuthorUnit?: string | null
      /** @description 文章主领域 */
      field?: string | null
      /** @description 文章子领域 */
      minorField?: string | null
      /** @description 杂志会议所属主领域 */
      magazineField?: string | null
      /** @description 杂志会议所属子领域 */
      magazineMinorField?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 论文链接 */
      url?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 栏目id,精选文库只能选择精选文库相关的栏目且不为空 */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 关键字 */
      keyword?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 类型名称 */
      sortName: string
      /** @description 责任人 */
      owner?: string
    }
    RecommendTreatiseLibrariesResult: {
      /** @description 推荐精选文库数组 */
      treatiseLibraries: components['schemas']['RecommendTreatiseInfo'][]
    }
    SaveTreatiseLibraryResult: {
      /** @description 主键id */
      id: string
    }
    ListTreatiseLibraryInfo: {
      /** @description id */
      id: string
      /** @description 论文标题 */
      title: string
      /** @description 栏目id,精选文库只能选择精选文库相关的栏目且不为空 */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListTreatiseLibraryResult: {
      /** @description 精选文库数组 */
      treatiseLibraries: components['schemas']['ListTreatiseLibraryInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateTreatiseLibrariesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveTreatiseLibrariesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveTreatiseDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 论文标题 */
      title: string
      /** @description 栏目id */
      columnId: string
      /**
       * Format: date-time
       * @description 发表时间
       */
      deliveryAt?: string | null
      /** @description 科研人员所属国家或地区 */
      region?: string | null
      /** @description 发表途径:期刊way_001,会议way_002,EDM会议way003,书way_004 */
      channel?: string | null
      /** @description 语种 */
      language?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 作者缩写 */
      authorAbbreviation?: string | null
      /** @description 第一作者单位 */
      authorUnit?: string | null
      /** @description 作者地址 */
      authorAddress?: string | null
      /** @description 通讯作者 */
      correspondingAuthor?: string | null
      /** @description 通讯作者单位 */
      correspondingAuthorUnit?: string | null
      /** @description 通讯作者地址 */
      correspondingAuthorAddress?: string | null
      /** @description 通讯作者邮箱 */
      correspondingAuthorEmail?: string | null
      /** @description 其他作者 */
      otherAuthor?: string | null
      /** @description 其他作者单位 */
      otherAuthorUnit?: string | null
      /** @description 文章主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 文章子领域(大领域之间用“;”隔开) */
      minorField?: string | null
      /** @description 文章类型 */
      sort?: string[] | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 检索情况 */
      search?: string | null
      /** @description 参考文献 */
      references?: string | null
      /** @description 参考文献量 */
      referencesNumber?: number | null
      /** @description 引用情况(次数)/被引频合计 */
      quote?: number | null
      /** @description 所获得资助项目 */
      fundedProject?: string | null
      /** @description 论文链接 */
      url?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 关键字 */
      keyword?: string | null
      /** @description 出版商 */
      publisher?: string | null
      /** @description 出版商地址 */
      publisherAddress?: string | null
      /** @description 期刊名称 */
      periodical?: string | null
      /** @description 期刊简称 */
      periodicalAbbreviation?: string | null
      /**
       * Format: date-time
       * @description 出版年
       */
      releasedAt?: string | null
      /** @description doi 论文唯一id */
      doi?: string | null
      /** @description 研究方向 */
      studyField?: string | null
      /** @description 一级主题 */
      topic?: string | null
      /** @description 二级主题 */
      childTopic?: string | null
      /** @description 研究目标 */
      goal?: string | null
      /** @description 研究对象 */
      object?: string | null
      /** @description 研究范式 */
      paradigm?: string | null
      /** @description 数据分析方式 */
      method?: string | null
    }
    OperateTreatisesDto: {
      /** @description 论文id数组 */
      ids: unknown[][]
      /** @description 操作类型:add 添加,remove 移出 */
      type: string
    }
    RemoveTreatisesDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexTreatiseDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /** @description 栏目id */
      columnId?: string
      /**
       * Format: date-time
       * @description 发表时间
       */
      deliveryAt?: string | null
      /**
       * Format: date-time
       * @description 出版年份
       */
      releasedAt?: string | null
      /** @description 出版年份起始年份且endYear不为空(仅ns图表跳转使用) */
      startYear?: number | null
      /** @description 出版年份结束年份与startYear使用(仅ns图表跳转使用) */
      endYear?: number | null
      /** @description 一级主题(目前仅有ns图表跳转使用) */
      topic?: string | null
      /** @description 二级主题(目前仅有ns图表跳转使用) */
      childTopic?: string | null
      /** @description 研究目标(目前仅有ns图表跳转使用) */
      goal?: string | null
      /** @description 研究对象(目前仅有ns图表跳转使用) */
      object?: string | null
      /** @description 研究范式(目前仅有ns图表跳转使用) */
      paradigm?: string | null
      /** @description 数据分析方式 */
      method?: string | null
    }
    RecommendTreatisesDto: {
      /** @description 论文id */
      id?: string
    }
    ListComplexTreatiseLibraryDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /** @description 栏目id */
      columnId?: string
      /** @description 分类 */
      sort?: string | null
    }
    RecommendTreatiseLibrariesDto: {
      /** @description 论文id */
      id?: string
    }
    SaveTreatiseLibraryDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 论文标题 */
      title: string
      /** @description 栏目id */
      columnId: string
      /** @description 分类id */
      sort: string
      /**
       * Format: date-time
       * @description 发表时间(年)
       */
      deliveryAt?: string | null
      /** @description 第一作者/作者全称 */
      author?: string | null
      /** @description 第一作者单位 */
      authorUnit?: string | null
      /** @description 通讯作者 */
      correspondingAuthor?: string | null
      /** @description 通讯作者单位 */
      correspondingAuthorUnit?: string | null
      /** @description 通讯作者邮箱 */
      correspondingAuthorEmail?: string | null
      /** @description 其他作者 */
      otherAuthor?: string | null
      /** @description 其他作者单位 */
      otherAuthorUnit?: string | null
      /** @description 文章所属主领域(大领域之间用“;”隔开) */
      field?: string | null
      /** @description 文章所属子领域(子领域之间用“;”隔开) */
      minorField?: string | null
      /** @description 杂志会议所属主领域(大领域之间用“;”隔开) */
      magazineField?: string | null
      /** @description 杂志会议所属子领域(大领域之间用“;”隔开) */
      magazineMinorField?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 论文链接 */
      url?: string | null
      /** @description 期刊/会议名 */
      name?: string | null
      /** @description 关键字 */
      keyword?: string | null
    }
    OperateTreatiseLibrariesDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveTreatiseLibrariesDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    GetPatentDetailResult: {
      /** @description id */
      id: string
      /** @description 专利标题 */
      title: string
      /** @description 关键字 */
      keyword?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 申请人(单位) */
      applicant?: string | null
      /** @description 公开(公告)号 */
      announcedNo?: string | null
      /**
       * Format: date-time
       * @description 公开(公告)日
       */
      announcedAt?: string | null
      /** @description 申请号 */
      appliedNo?: string | null
      /**
       * Format: date-time
       * @description 申请日
       */
      appliedAt?: string | null
      /** @description 专利类型 */
      type?: string | null
      /** @description 公开国别 */
      country?: string | null
      /** @description 代理机构 */
      agency?: string | null
      /** @description 代理人 */
      agent?: string | null
      /** @description 专利有效性 */
      validStatus?: string | null
      /** @description 栏目id,专利只能选择专利相关的栏目id */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 专利类型名称 */
      typeName?: string
      /** @description 专利有效性名称 */
      validStatusName?: string
      /** @description 责任人 */
      owner?: string
    }
    ListPatentInfo: {
      /** @description id */
      id: string
      /** @description 专利标题 */
      title: string
      /** @description 栏目id,专利只能选择专利相关的栏目id */
      columnId: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListPatentResult: {
      /** @description 专利数组 */
      patents: components['schemas']['ListPatentInfo'][]
      /** @description 总数 */
      count: number
    }
    OperatePatentsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemovePatentsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SavePatentResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexPatentInfo: {
      /** @description id */
      id: string
      /** @description 专利标题 */
      title: string
      /** @description 关键字 */
      keyword?: string | null
      /** @description 摘要 */
      abstract?: string | null
      /** @description 申请人(单位) */
      applicant?: string | null
      /**
       * Format: date-time
       * @description 公开(公告)日
       */
      announcedAt?: string | null
      /** @description 专利类型 */
      type?: string | null
      /** @description 类型名称 */
      typeName?: string
    }
    ListComplexPatentResult: {
      /** @description 专利数组 */
      patents: components['schemas']['ListComplexPatentInfo'][]
    }
    AgentInfo: {
      /** @description 发明数量 */
      count: number
      /** @description 代理人,如果发明数相同代理人用分号隔开 */
      agent: string
    }
    GePatentCountByAgentResult: {
      /** @description 代理人下发明专利数量 */
      agents: components['schemas']['AgentInfo'][]
    }
    GetPatentChartsInfo: {
      /** @description 专利数量 */
      count: number
      /** @description 百分比当位专利类型分布时这个值不为空 */
      percent?: number
      /** @description 不同类型的type对应不同的含义,year 即年份,applicant 申请人年份,type 专利类型名称 */
      name: string
    }
    GetPatentChartsResult: {
      /** @description 专利图表数组 */
      patents: components['schemas']['GetPatentChartsInfo'][]
    }
    SavePatentDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 专利标题 */
      title: string
      /** @description 关键字 */
      keyword?: string | null
      /** @description 栏目id */
      columnId: string
      /** @description 摘要 */
      abstract?: string | null
      /** @description 申请人(单位) */
      applicant?: string | null
      /** @description 公开(公告)号 */
      announcedNo?: string | null
      /**
       * Format: date-time
       * @description 公开(公告)日
       */
      announcedAt?: string | null
      /** @description 申请号 */
      appliedNo?: string | null
      /**
       * Format: date-time
       * @description 申请日
       */
      appliedAt?: string | null
      /**
       * Format: date-time
       * @description 专利类型
       */
      type?: string | null
      /** @description 公开国别 */
      country?: string | null
      /** @description 代理机构 */
      agency?: string | null
      /** @description 代理人 */
      agent?: string | null
      /** @description 专利有效性 */
      validStatus?: string | null
    }
    OperatePatentsDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemovePatentsDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexPatentDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /**
       * Format: date-time
       * @description 专利类型
       */
      type?: string | null
    }
    ChildConferencesInfo: {
      /** @description id */
      id: string
      /** @description 会议名称 */
      name: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 届 */
      period?: number | null
      /** @description 会议简介/主题 */
      introduction?: string | null
      /** @description 网站 */
      website?: string | null
    }
    GetConferenceDetailResult: {
      /** @description id */
      id: string
      /** @description 父级会议id,一级为0,默认值0 */
      parentId: string
      /** @description 栏目id,会议只能选择会议相关的栏目id */
      columnId: string
      /** @description 会议缩写 */
      abbreviation: string | null
      /** @description 会议名称 */
      name: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 届 */
      period?: number | null
      /** @description 地点 */
      location?: string | null
      /** @description 会议简介/主题 */
      introduction?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 主领域,格式 [string,string] */
      field?: string[] | null
      /** @description 子领域,格式 [string,string] */
      minorField?: string[] | null
      /** @description 网站 */
      website?: string | null
      /** @description 联络人 */
      contact?: string | null
      /** @description 联络人邮箱 */
      email?: string | null
      /** @description 举办单位 */
      unit?: string | null
      /**
       * Format: date-time
       * @description 送稿截止时间
       */
      deliveryEndedAt?: string | null
      /**
       * Format: date-time
       * @description 提前注册截止时间
       */
      preregisterEndedAt?: string | null
      /**
       * Format: date-time
       * @description 注册截止时间
       */
      registerEndedAt?: string | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 子领域名称 */
      minorFieldName?: string
      /** @description 主领域名称 */
      fieldName?: string
      /** @description 责任人 */
      owner?: string
      /** @description 当该会议为一级会议,则子会议数组一般不为空(目前这个只有c端请求才下发) */
      childConferences?: components['schemas']['ChildConferencesInfo'][]
    }
    ChildConferences: {
      /** @description id */
      id: string
      /** @description 父级会议id,一级为0,默认值0 */
      parentId: string
      /** @description 栏目id,会议只能选择会议相关的栏目id */
      columnId: string
      /** @description 会议名称 */
      name: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
    }
    ListConferenceInfo: {
      /** @description id */
      id: string
      /** @description 父级会议id,一级为0,默认值0 */
      parentId: string
      /** @description 栏目id,会议只能选择会议相关的栏目id */
      columnId: string
      /** @description 会议名称 */
      name: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 当该会议为一级会议,则子会议数组一般不为空 */
      childConferences?: components['schemas']['ChildConferences'][]
    }
    ListConferenceResult: {
      /** @description 会议数组 */
      conferences: components['schemas']['ListConferenceInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateConferencesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveConferencesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveConferenceResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexConferenceInfo: {
      /** @description id */
      id: string
      /** @description 会议名称 */
      name: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 届 */
      period?: number | null
      /** @description 地点 */
      location?: string | null
      /** @description 会议简介/主题 */
      introduction?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 主领域,格式 [string,string] */
      field?: string[] | null
      /** @description 子领域,格式 [string,string] */
      minorField?: string[] | null
      /** @description 网站 */
      website?: string | null
      /** @description 子领域名称(这里拼接好下发用;隔开如果样式问题可以根据分号进行切割展示) */
      minorFieldName?: string
      /** @description 主领域名称(这里拼接好下发用;隔开如果样式问题可以根据分号进行切割展示) */
      fieldName?: string
    }
    ListComplexConferenceResult: {
      /** @description 会议数组 */
      conferences: components['schemas']['ListComplexConferenceInfo'][]
      /** @description 总数 */
      count: number
    }
    ListRecentConferenceInfo: {
      /** @description id */
      id: string
      /** @description 会议名称 */
      name: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
      /** @description 日期格式:year、month、date */
      picker?: string | null
      /** @description 届 */
      period?: number | null
      /** @description 地点 */
      location?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
    }
    ListRecentConferenceResult: {
      /** @description 会议数组 */
      conferences: components['schemas']['ListRecentConferenceInfo'][]
    }
    RecommendConferencesInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,会议只能选择会议相关的栏目id */
      columnId: string
      /** @description 会议名称 */
      name: string
      /** @description 栏目名称 */
      columnName: string
    }
    RecommendConferencesResult: {
      /** @description 会议数组 */
      conferences: components['schemas']['RecommendConferencesInfo'][]
    }
    GetParentConferencesInfo: {
      /** @description id */
      id: string
      /** @description 会议名称 */
      name: string
    }
    GetParentConferencesResult: {
      /** @description parent会议数组 */
      conferences: components['schemas']['GetParentConferencesInfo'][]
    }
    SaveConferenceDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 会议名称 */
      name: string
      /** @description 会议级别,默认为0 */
      parentId: string
      /** @description 会议缩写 */
      abbreviation?: string | null
      /** @description 栏目id */
      columnId: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /** @description 会议举办不为空，该字段不能为空,日期格式:year、month、date */
      picker?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
      /**
       * Format: date-time
       * @description 届
       */
      period?: string | null
      /** @description 地点 */
      location?: string | null
      /** @description 会议简介/主题 */
      introduction?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 主领域 */
      field?: string[] | null
      /** @description 子领域 */
      minorField?: string[] | null
      /** @description 网站 */
      website?: string | null
      /** @description 联络人 */
      contact?: string | null
      /** @description 联络人邮箱 */
      email?: string | null
      /** @description 举办单位 */
      unit?: string | null
      /**
       * Format: date-time
       * @description 送稿截止时间
       */
      deliveryEndedAt?: string | null
      /**
       * Format: date-time
       * @description 提前注册截止时间
       */
      preregisterEndedAt?: string | null
      /**
       * Format: date-time
       * @description 注册截止时间
       */
      registerEndedAt?: string | null
    }
    OperateConferencesDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveConferencesDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexConferenceDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
      /**
       * Format: date-time
       * @description 举办时间
       */
      conductedAt?: string | null
      /** @description 会议举办不为空，该字段不能为空,日期格式:year、month、date */
      picker?: string | null
      /**
       * Format: date-time
       * @description 举办结束时间(个别数据有)
       */
      endedAt?: string | null
    }
    RecommendConferencesDto: {
      /** @description 会议id */
      id: string
    }
    GetInstitutionDetailResult: {
      /** @description id */
      id: string
      /** @description 栏目id,机构只能选择机构相关的栏目id */
      columnId: string
      /** @description 中文机构名称 */
      name: string
      /** @description 外文机构名称 */
      foreignName?: string | null
      /** @description 详细地址 */
      address?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 网站 */
      website?: string | null
      /** @description 主办单位 */
      unit?: string | null
      /** @description 主领域,格式 [string,string] */
      field?: string[] | null
      /** @description 子领域,格式 [string,string] */
      minorField?: string[] | null
      /** @description 经度 */
      longitude?: number | null
      /** @description 纬度 */
      latitude?: number | null
      /** @description 图片链接 */
      url?: string | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 录入人id */
      ownerId?: string | null
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 子领域名称 */
      minorFieldName?: string
      /** @description 主领域名称 */
      fieldName?: string
      /** @description 责任人 */
      owner?: string
    }
    ListInstitutionInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,机构只能选择机构相关的栏目id */
      columnId: string
      /** @description 中文机构名称 */
      name: string
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /** @description 点击量 */
      clicks?: number
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
    }
    ListInstitutionResult: {
      /** @description 机构数组 */
      institutions: components['schemas']['ListInstitutionInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateInstitutionsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveInstitutionsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveInstitutionResult: {
      /** @description 主键id */
      id: string
    }
    ListComplexInstitutionInfo: {
      /** @description id */
      id: string
      /** @description 中文机构名称 */
      name: string
      /** @description 外文机构名称 */
      foreignName?: string | null
      /** @description 详细地址 */
      address?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 网站 */
      website?: string | null
      /** @description 主办单位 */
      unit?: string | null
      /** @description 主领域,格式 [string,string] */
      field?: string[] | null
      /** @description 子领域,格式 [string,string] */
      minorField?: string[] | null
      /** @description 图片链接 */
      url?: string | null
      /** @description 子领域名称(这里拼接好下发用;隔开如果样式问题可以根据分号进行切割展示) */
      minorFieldName?: string
      /** @description 主领域名称(这里拼接好下发用;隔开如果样式问题可以根据分号进行切割展示) */
      fieldName?: string
    }
    ListComplexInstitutionResult: {
      /** @description 机构数组 */
      institutions: components['schemas']['ListComplexInstitutionInfo'][]
      /** @description 总数 */
      count: number
    }
    RecommendInstitutionsInfo: {
      /** @description id */
      id: string
      /** @description 栏目id,机构只能选择机构相关的栏目id */
      columnId: string
      /** @description 中文机构名称 */
      name: string
      /** @description 栏目名称 */
      columnName: string
    }
    RecommendInstitutionsResult: {
      /** @description 推荐机构数组 */
      institutions: components['schemas']['RecommendInstitutionsInfo'][]
    }
    GetInstitutionsByCoordinateInfo: {
      /** @description 中文机构名称 */
      name: string
      /** @description 经度 */
      longitude?: number | null
      /** @description 纬度 */
      latitude?: number | null
    }
    GetInstitutionsByCoordinateResult: {
      /** @description 推荐机构数组 */
      institutions: components['schemas']['GetInstitutionsByCoordinateInfo'][]
    }
    SaveInstitutionDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 机构名称 */
      name: string
      /** @description 外文机构名称 */
      foreignName?: string | null
      /** @description 栏目id */
      columnId: string
      /** @description 详细地址 */
      address?: string | null
      /** @description 简介 */
      introduction?: string | null
      /** @description 网站 */
      website?: string | null
      /** @description 主办单位 */
      unit?: string | null
      /** @description 主领域 */
      field?: string[] | null
      /** @description 子领域 */
      minorField?: string[] | null
      /** @description 经度:360.000000 */
      longitude?: number | null
      /** @description 纬度:360.000000 */
      latitude?: number | null
      /** @description 图片链接 */
      url?: string | null
    }
    OperateInstitutionsDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveInstitutionsDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListComplexInstitutionDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 关键词,多标签需要分号隔开才能进行分词在进行模糊搜索 如果为空则不传或者传null */
      keyword?: string
    }
    RecommendInstitutionsDto: {
      /** @description 机构id */
      id: string
    }
    GetUsersDetailResult: {
      /** @description 用户id */
      id: string
      /** @description 用户手机号 */
      mobile: string
      /** @description 用户昵称 */
      name?: Record<string, never>
      /** @description 用户拓展信息 */
      info?: Record<string, never>
      /** @description 创建时间 */
      createdAt: string
      /**
       * @description 用户类型:普通用户user,管理员admin,超级管理员administrator
       * @enum {string}
       */
      type: 'user' | 'admin' | 'administrator'
      /** @description 用户头像 */
      avatar?: string | null
      /** @description 用户学校 */
      university?: string | null
      /** @description 学校名称 */
      universityName?: string | null
    }
    UserHistoryInfo: {
      /** @description id */
      id: string
      /** @description 用户id */
      userId: string
      /** @description 关联的id(指的是内容管理相关的项目、论文等id根据类型区分) */
      relatedId: string
      /** @description 关联的id的类型,方便后续查询具体数据,类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy */
      type: string
      /** @description 标题 */
      title: string
      /** @description 栏目id */
      columnId: string
    }
    ListHistoryResult: {
      /** @description 用户浏览历史数组 */
      userHistory: components['schemas']['UserHistoryInfo'][]
      /** @description 总数 */
      count: number
    }
    SaveNoteTreatiseResult: {
      /** @description 主键id */
      id: string
    }
    RemoveNoteTreatisesResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    GetNoteTreatiseDetailResult: {
      /** @description id */
      id: string
      /** @description 论文id */
      treatiseId: string
      /** @description 笔记内容 */
      content: string
      /** @description 评论 */
      comment?: string | null
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /**
       * Format: date-time
       * @description 评论时间
       */
      commentedAt?: string | null
      /** @description 论文标题 */
      title: string
      /** @description 论文链接 */
      url?: string
      /** @description 栏目id */
      columnId: string
    }
    ListNoteTreatiseResult: {
      /** @description 笔记数组 */
      noteTreatises: components['schemas']['GetNoteTreatiseDetailResult'][]
      /** @description 数量 */
      count: number
    }
    UserFavoriteTreatisesInfo: {
      /** @description 论文id */
      treatiseId: string
      /**
       * Format: date-time
       * @description 创建时间
       */
      createdAt: string
      /** @description 标题 */
      title: string
      /** @description 标签 */
      label: string
      /** @description 栏目id */
      columnId: string
    }
    ListFavoriteTreatiseResult: {
      /** @description 收藏论文数组 */
      favoriteTreatises: components['schemas']['UserFavoriteTreatisesInfo'][]
      /** @description 总数 */
      count: number
    }
    UserLabelTreatiseInfo: {
      /** @description 论文id */
      treatiseId: string
      /** @description 标签:label_001 强烈推荐,label_002 写得好,label_003 有深度,label_004 很实用 */
      label: string
      /** @description 标题 */
      title: string
      /** @description 作者 */
      author?: string
      /**
       * Format: date-time
       * @description 发表时间
       */
      deliveryAt?: string
      /**
       * Format: date-time
       * @description 出版时间
       */
      releasedAt?: string
      /** @description 栏目id */
      columnId: string
    }
    ListLabelTreatiseResult: {
      /** @description 标签论文数组 */
      labelTreatises: components['schemas']['UserLabelTreatiseInfo'][]
      /** @description 用户标签并带标签数量 */
      labels?: components['schemas']['LabelCountInfo'][]
      /** @description 总数 */
      count: number
    }
    GetNoteTreatisesByTreatiseIdResult: {
      /** @description 笔记数组 */
      noteTreatises: components['schemas']['GetNoteTreatiseDetailResult'][]
    }
    UserHotKeywordsResult: {
      /** @description 关键词 */
      keyword: string
      /** @description 搜索次数 */
      count: number
    }
    ListUserSearchKeywordsResult: {
      /** @description 云词数组 */
      keywords: components['schemas']['UserHotKeywordsResult'][]
    }
    ModifyUserInfoDto: {
      /** @description 用户id */
      id: string
      /** @description 用户头像 */
      avatar?: string | null
      /** @description 学校id */
      university?: string | null
    }
    OperateLabelTreatisesDto: {
      /** @description 论文id数组 */
      ids: unknown[][]
      /** @description 操作类型:add 添加,remove 移出 */
      type: string
      /** @description 标签id */
      label: string
    }
    SaveNoteTreatiseDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 笔记内容 */
      content: string
      /** @description 笔记评论(自己) */
      comment?: string | null
      /** @description 论文id */
      treatiseId: string
    }
    RemoveNoteTreatisesDto: {
      /** @description 笔记id数组 */
      ids: string[]
    }
    ListResearchReportInfo: {
      /** @description id */
      id: string
      /** @description 标题(报告名称) */
      title: string
      /** @description 作者(发布机构) */
      author: string | null
      /** @description 摘要叙述(报告内容) */
      abstract?: string | null
      /** @description 报告网址 */
      website?: string | null
      /** @description 封面图片地址 */
      coverUrl?: string | null
      /** @description 下载次数 */
      downloads: number
      /**
       * Format: date-time
       * @description 发表时间(格式 2022-09,精确到月)
       */
      releasedTime?: string | null
      /** @description 下载链接 */
      url?: string
      /** @description 标签名(这里写死) */
      label?: string
    }
    ListResearchReportsResult: {
      /** @description 报告数组 */
      reports: components['schemas']['ListResearchReportInfo'][]
      /** @description 总数 */
      count: number
    }
    GetReportsDetailResult: {
      /** @description id */
      id: string
      /** @description 标题(报告名称) */
      title: string
      /** @description 作者(发布机构) */
      author: string | null
      /** @description 摘要叙述(报告内容) */
      abstract?: string | null
      /** @description 报告主题 */
      topic?: string | null
      /** @description 报告网址 */
      website?: string | null
      /** @description 封面图片地址 */
      coverUrl?: string | null
      /** @description 下载链接,pdf链接(文件id) */
      url?: string | null
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /**
       * Format: date-time
       * @description 发表时间(格式 2022-09,精确到月)
       */
      releasedTime?: string | null
      /** @description 栏目名称 */
      columnName: string
      /** @description 责任人 */
      owner?: string
    }
    SaveReportsResult: {
      /** @description 主键id */
      id: string
    }
    ListReportInfo: {
      /** @description id */
      id: string
      /** @description 标题(报告名称) */
      title: string
      /** @description 下载次数 */
      downloads: number
      /** @description 状态:待发布ready,已发布active,已下架inactive */
      status: string
      /**
       * Format: date-time
       * @description 更新时间
       */
      updatedAt: string
      /** @description 栏目名称 */
      columnName: string
      /** @description 附件类型 */
      ext: string
    }
    ListReportsResult: {
      /** @description 报告数组 */
      reports: components['schemas']['ListReportInfo'][]
      /** @description 总数 */
      count: number
    }
    OperateReportsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    RemoveReportsResult: {
      /** @description 成功数量 */
      succeed: number
      /** @description 失败数量 */
      failed: number
    }
    SaveReportsDto: {
      /** @description id,传表示编辑不传新增 */
      id?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 标题(报告名称) */
      title: string
      /** @description 栏目id */
      columnId: string
      /** @description 附件 */
      url: string
      /** @description 作者(发布机构) */
      author?: string | null
      /** @description 摘要(报告内容) */
      abstract?: string | null
      /** @description 报告主题 */
      topic?: string | null
      /** @description 报告网址 */
      website?: string | null
      /** @description 封面链接 */
      coverUrl?: string | null
      /** @description 发表时间(格式 2022-09,精确到月) */
      releasedTime?: string | null
    }
    ListReportsDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
      /** @description 报告名称,支持模糊搜索 如果为空则不传或者传null */
      title?: string
      /** @description 状态,待发布,已发布 */
      status?: string
      /** @description 栏目id */
      columnId?: string
    }
    OperateReportsDto: {
      /** @description ids 数组 */
      ids: string[]
      /** @description 状态 */
      status: string
    }
    RemoveReportsDto: {
      /** @description ids 数组 */
      ids: string[]
    }
    ListResearchReportsDto: {
      /** @description 显示页数 */
      page: number
      /** @description 每页显示条数 */
      size: number
    }
    ClicksReportDto: {
      /** @description id, */
      id: string
      /**
       * @description 下载类型, Report-报告, Assembly_Policy-政策汇编
       * @enum {string}
       */
      type: 'report' | 'assembly_policy'
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  HomeController_signIn: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  AuthController_signIn: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['signInDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SignInResInfo']
          }
        }
      }
    }
  }
  AuthController_signUp: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['signUpDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['signUpResInfo']
          }
        }
      }
    }
  }
  AuthController_modifyPassword: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyPasswordDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  AuthController_resetPassword: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ResetPasswordDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  AuthController_genCode: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GenCodeDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  FilesController_launch: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['LaunchDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['LaunchResult']
          }
        }
      }
    }
  }
  FilesController_access: {
    parameters: {
      query: {
        /** @description 文件id */
        file_id: string
        /** @description 文件预览还是下载，默认是:inline,attachment链接强制下载 */
        contentDisposition?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  FilesController_callback: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  FilesController_parseXlsx: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  HomepageController_getHomepageConfig: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetHomepageConfigResult']
          }
        }
      }
    }
  }
  HomepageController_countResourceByStatus: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SetHomepageDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  HomepageController_getHomepageHotKeywords: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetHomepageHotKeywordsResult']
          }
        }
      }
    }
  }
  HomepageController_getHomepageSearchResultByKeyword: {
    parameters: {
      query: {
        /** @description 搜索文本 */
        keyword: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetHomepageSearchResultByKeywordResult']
          }
        }
      }
    }
  }
  HomepageController_getHomepageKeywordCharts: {
    parameters: {
      query: {
        /** @description 搜索文本 */
        keyword: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetHomepageKeywordChartsResult']
          }
        }
      }
    }
  }
  ConfigsController_getArticleTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetArticleTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getColumns: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetColumnsResult']
          }
        }
      }
    }
  }
  ConfigsController_getFields: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetFieldsResult']
          }
        }
      }
    }
  }
  ConfigsController_getLanguages: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetLanguagesResult']
          }
        }
      }
    }
  }
  ConfigsController_getPatentTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPatentTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getPatentValidTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPatentValidTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getPeriodicalPeriods: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPeriodicalPeriodsResult']
          }
        }
      }
    }
  }
  ConfigsController_getPolicyTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPolicyTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getSubjects: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetSubjectsResult']
          }
        }
      }
    }
  }
  ConfigsController_getTermTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_setColumnsType: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SetColumnsTypeDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SetColumnsTypeResult']
          }
        }
      }
    }
  }
  ConfigsController_setColumnsOrder: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SetColumnsOrderDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  ConfigsController_getUniversities: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetUniversitiesResult']
          }
        }
      }
    }
  }
  ConfigsController_getTopicTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTopicTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getNSFDirectorateTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetNSFDirectorateTypesResult']
          }
        }
      }
    }
  }
  ConfigsController_getSearchResultByKeyword: {
    parameters: {
      query: {
        /** @description 搜索文本 */
        keyword: string
        /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy */
        type: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetSearchResultByKeywordResult']
          }
        }
      }
    }
  }
  ConfigsController_getHotKeywords: {
    parameters: {
      query: {
        /** @description 类型:项目term,论文treatise,会议:conference,期刊periodical,机构institution,专利patent,政策policy */
        type: string
        /** @description 栏目id(项目、论文必填否则出错这里不做校验前端记得要传) */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetHotKeywordsResult']
          }
        }
      }
    }
  }
  ConfigsController_getTreatiseLibraryTypes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTreatiseLibraryTypesResult']
          }
        }
      }
    }
  }
  TermsController_getTermDetail: {
    parameters: {
      query: {
        /** @description id */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermDetailResult']
          }
        }
      }
    }
  }
  TermsController_saveTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveTermDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveTermResult']
          }
        }
      }
    }
  }
  TermsController_listTerm: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 项目名称,支持模糊搜索 如果为空则不传或者传null */
        name?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListTermResult']
          }
        }
      }
    }
  }
  TermsController_operateTerms: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateTermsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateTermsResult']
          }
        }
      }
    }
  }
  TermsController_removeTerms: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveTermsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveTermsResult']
          }
        }
      }
    }
  }
  TermsController_listComplexTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexTermDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexTermResult']
          }
        }
      }
    }
  }
  TermsController_getTermCountByUnit: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermCountByUnitResult']
          }
        }
      }
    }
  }
  TermsController_getTermCountByType: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermCountByTypeResult']
          }
        }
      }
    }
  }
  TermsController_getTermCountByYear: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermCountByYearResult']
          }
        }
      }
    }
  }
  TermsController_getTermPercentBySubject: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermPercentBySubjectResult']
          }
        }
      }
    }
  }
  TermsController_getMoneyByYear: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetMoneyByYearResult']
          }
        }
      }
    }
  }
  TermsController_getTermCountByProvince: {
    parameters: {
      query: {
        /** @description 栏目id,这里栏目id直接对应统计相关的栏目的图表不能出错否则数据统计不对齐 */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermCountByProvinceResult']
          }
        }
      }
    }
  }
  TermsController_getTermPercentByYear: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTermPercentByYearResult']
          }
        }
      }
    }
  }
  TermsController_getAmericaTermOverview: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetAmericaTermOverviewResult']
          }
        }
      }
    }
  }
  TermsController_getAmericaTermDistribution: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetAmericaTermDistributionResult']
          }
        }
      }
    }
  }
  TermsController_getAmericaTermAmountByKeywords: {
    parameters: {
      query: {
        /** @description 学部 */
        nsfDirectorate: 'nsfdirectorate_ehr' | 'nsfdirectorate_sbe' | 'nsfdirectorate_cse' | 'nsfdirectorate_bio' | 'nsfdirectorate_eng' | 'nsfdirectorate_geo' | 'nsfdirectorate_mps'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetAmericaTermAmountByKeywordsResult']
          }
        }
      }
    }
  }
  TermsController_getAmericaTermHotOrganizationList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetAmericaTermHotOrganizationListResult']
          }
        }
      }
    }
  }
  TermsController_listComplexAmericaTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexAmericaTermDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexAmericaTermResult']
          }
        }
      }
    }
  }
  PeriodicalsController_getPeriodicalDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPeriodicalDetailResult']
          }
        }
      }
    }
  }
  PeriodicalsController_savePeriodical: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SavePeriodicalDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SavePeriodicalResult']
          }
        }
      }
    }
  }
  PeriodicalsController_listPeriodical: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 期刊名称,支持模糊搜索 如果为空则不传或者传null */
        name?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListPeriodicalResult']
          }
        }
      }
    }
  }
  PeriodicalsController_operatePeriodicals: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperatePeriodicalsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperatePeriodicalsResult']
          }
        }
      }
    }
  }
  PeriodicalsController_removePeriodicals: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemovePeriodicalsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemovePeriodicalsResult']
          }
        }
      }
    }
  }
  PeriodicalsController_listComplexTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexPeriodicalDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexPeriodicalResult']
          }
        }
      }
    }
  }
  PeriodicalsController_recommendPeriodicals: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendPeriodicalsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendPeriodicalsResult']
          }
        }
      }
    }
  }
  PeriodicalsController_recommendPeriodicalsById: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendPeriodicalsByIdDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendPeriodicalsByIdResult']
          }
        }
      }
    }
  }
  PoliciesController_getPolicyDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPolicyDetailResult']
          }
        }
      }
    }
  }
  PoliciesController_savePolicy: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SavePolicyDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SavePolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_listPolicy: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 政策名称,支持模糊搜索 如果为空则不传或者传null */
        name?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListPolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_operatePolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperatePoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperatePoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_removePolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemovePoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemovePoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_getAnalysisPolicyDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetAnalysisPolicyDetailResult']
          }
        }
      }
    }
  }
  PoliciesController_saveAnalysisPolicy: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveAnalysisPolicyDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveAnalysisPolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_listAnalysisPolicy: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 政策名称,支持模糊搜索 如果为空则不传或者传null */
        title?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListAnalysisPolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_operateAnalysisPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateAnalysisPoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateAnalysisPoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_removeAnalysisPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveAnalysisPoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveAnalysisPoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_listComplexPolicy: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexPolicyDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexPolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_recommendPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendPoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendPoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_listComplexAnalysisPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexAnalysisPolicyDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexAnalysisPolicyResult']
          }
        }
      }
    }
  }
  PoliciesController_recommendAnalysisPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendAnalysisPoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendAnalysisPoliciesResult']
          }
        }
      }
    }
  }
  PoliciesController_getPolicyCountByRegion: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPolicyCountByRegionResult']
          }
        }
      }
    }
  }
  PoliciesController_listAssemblyPolicies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListAssemblyPoliciesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListAssemblyPoliciesResult']
          }
        }
      }
    }
  }
  TreatisesController_getTreatiseDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTreatiseDetailResult']
          }
        }
      }
    }
  }
  TreatisesController_saveTreatise: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveTreatiseDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveTreatiseResult']
          }
        }
      }
    }
  }
  TreatisesController_listTreatises: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 论文名称,支持模糊搜索 如果为空则不传或者传null */
        title?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListTreatiseResult']
          }
        }
      }
    }
  }
  TreatisesController_operateTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateTreatisesResult']
          }
        }
      }
    }
  }
  TreatisesController_removeTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveTreatisesResult']
          }
        }
      }
    }
  }
  TreatisesController_getArticleCount: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetArticleCountResult']
          }
        }
      }
    }
  }
  TreatisesController_listComplexTreatise: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexTreatiseDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexTreatiseResult']
          }
        }
      }
    }
  }
  TreatisesController_recommendTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendTreatisesResult']
          }
        }
      }
    }
  }
  TreatisesController_getInstitutionCharts: {
    parameters: {
      query: {
        /** @description 论文的栏目id */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetInstitutionChartsResult']
          }
        }
      }
    }
  }
  TreatisesController_getKeywordCharts: {
    parameters: {
      query: {
        /** @description 论文的栏目id */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetKeywordChartsResult']
          }
        }
      }
    }
  }
  TreatisesController_getCountryCooperationNetWorks: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetCountryCooperationNetWorksResult']
          }
        }
      }
    }
  }
  TreatisesController_getTreatiseCountByYear: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTreatiseCountByYearResult']
          }
        }
      }
    }
  }
  TreatisesController_getResearchTopics: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetResearchTopicsResult']
          }
        }
      }
    }
  }
  TreatisesController_getResearchObjects: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetResearchObjectsResult']
          }
        }
      }
    }
  }
  TreatisesController_getResearchParadigm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetResearchParadigmResult']
          }
        }
      }
    }
  }
  TreatisesController_getResearchGoals: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetResearchGoalsResult']
          }
        }
      }
    }
  }
  TreatisesController_getResearchAnalysisMethods: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetResearchAnalysisMethodsResult']
          }
        }
      }
    }
  }
  TreatisesController_listComplexTreatiseLibrary: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexTreatiseLibraryDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexTreatiseLibraryResult']
          }
        }
      }
    }
  }
  TreatisesController_getTreatiseLibraryCountBySortAndYear: {
    parameters: {
      query: {
        /** @description 精选文库的栏目id */
        columnId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTreatiseLibraryCountBySortAndYearResult']
          }
        }
      }
    }
  }
  TreatisesController_getTreatiseLibraryDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetTreatiseLibraryDetailResult']
          }
        }
      }
    }
  }
  TreatisesController_recommendTreatiseLibraries: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendTreatiseLibrariesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendTreatiseLibrariesResult']
          }
        }
      }
    }
  }
  TreatisesController_saveTreatiseLibrary: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveTreatiseLibraryDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveTreatiseLibraryResult']
          }
        }
      }
    }
  }
  TreatisesController_listTreatiseLibrary: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 论文名称,支持模糊搜索 如果为空则不传或者传null */
        title?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListTreatiseLibraryResult']
          }
        }
      }
    }
  }
  TreatisesController_operateTreatiseLibraries: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateTreatiseLibrariesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateTreatiseLibrariesResult']
          }
        }
      }
    }
  }
  TreatisesController_removeTreatiseLibraries: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveTreatiseLibrariesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveTreatiseLibrariesResult']
          }
        }
      }
    }
  }
  PatentsController_getPatentDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPatentDetailResult']
          }
        }
      }
    }
  }
  PatentsController_savePatent: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SavePatentDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SavePatentResult']
          }
        }
      }
    }
  }
  PatentsController_listPatent: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 专利名称,支持模糊搜索 如果为空则不传或者传null */
        title?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListPatentResult']
          }
        }
      }
    }
  }
  PatentsController_operatePatents: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperatePatentsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperatePatentsResult']
          }
        }
      }
    }
  }
  PatentsController_removePatents: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemovePatentsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemovePatentsResult']
          }
        }
      }
    }
  }
  PatentsController_listComplexTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexPatentDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexPatentResult']
          }
        }
      }
    }
  }
  PatentsController_getPatentCountByAgent: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GePatentCountByAgentResult']
          }
        }
      }
    }
  }
  PatentsController_getPatentCharts: {
    parameters: {
      query: {
        /** @description 图标类型:申请人(单位)applicant,年份year,类型type */
        type: string | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetPatentChartsResult']
          }
        }
      }
    }
  }
  ConferencesController_getConferenceDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetConferenceDetailResult']
          }
        }
      }
    }
  }
  ConferencesController_saveConference: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveConferenceDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveConferenceResult']
          }
        }
      }
    }
  }
  ConferencesController_listConference: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 会议名称,支持模糊搜索 如果为空则不传或者传null */
        name?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListConferenceResult']
          }
        }
      }
    }
  }
  ConferencesController_operateConferences: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateConferencesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateConferencesResult']
          }
        }
      }
    }
  }
  ConferencesController_removeConferences: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveConferencesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveConferencesResult']
          }
        }
      }
    }
  }
  ConferencesController_listComplexTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexConferenceDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexConferenceResult']
          }
        }
      }
    }
  }
  ConferencesController_listRecentConference: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListRecentConferenceResult']
          }
        }
      }
    }
  }
  ConferencesController_recommendConferences: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendConferencesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendConferencesResult']
          }
        }
      }
    }
  }
  ConferencesController_getParentConferences: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetParentConferencesResult']
          }
        }
      }
    }
  }
  InstitutionsController_getInstitutionDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
        /** @description 是否C端请求:是 true */
        flag?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetInstitutionDetailResult']
          }
        }
      }
    }
  }
  InstitutionsController_saveInstitution: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveInstitutionDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveInstitutionResult']
          }
        }
      }
    }
  }
  InstitutionsController_listInstitution: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 机构名称,支持模糊搜索 如果为空则不传或者传null */
        name?: string
        /** @description 状态,待发布,已发布 */
        status?: string
        /** @description 栏目id */
        columnId?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListInstitutionResult']
          }
        }
      }
    }
  }
  InstitutionsController_operateInstitutions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateInstitutionsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateInstitutionsResult']
          }
        }
      }
    }
  }
  InstitutionsController_removeInstitutions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveInstitutionsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveInstitutionsResult']
          }
        }
      }
    }
  }
  InstitutionsController_listComplexTerm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListComplexInstitutionDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListComplexInstitutionResult']
          }
        }
      }
    }
  }
  InstitutionsController_recommendInstitutions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RecommendInstitutionsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RecommendInstitutionsResult']
          }
        }
      }
    }
  }
  InstitutionsController_getInstitutionsByCoordinate: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetInstitutionsByCoordinateResult']
          }
        }
      }
    }
  }
  UsersController_getUserDetail: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetUsersDetailResult']
          }
        }
      }
    }
  }
  UsersController_modifyUserInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyUserInfoDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
  UsersController_listHistory: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListHistoryResult']
          }
        }
      }
    }
  }
  UsersController_operateTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateTreatisesResult']
          }
        }
      }
    }
  }
  UsersController_operateLabelTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateLabelTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateTreatisesResult']
          }
        }
      }
    }
  }
  UsersController_saveNoteTreatise: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveNoteTreatiseDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveNoteTreatiseResult']
          }
        }
      }
    }
  }
  UsersController_removeNoteTreatises: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveNoteTreatisesDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveNoteTreatisesResult']
          }
        }
      }
    }
  }
  UsersController_getNoteTreatiseDetail: {
    parameters: {
      query: {
        /** @description id,笔记id */
        id: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetNoteTreatiseDetailResult']
          }
        }
      }
    }
  }
  UsersController_listNoteTreatise: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListNoteTreatiseResult']
          }
        }
      }
    }
  }
  UsersController_listFavoriteTreatise: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListFavoriteTreatiseResult']
          }
        }
      }
    }
  }
  UsersController_listLabelTreatise: {
    parameters: {
      query: {
        /** @description 显示页数 */
        page: number
        /** @description 每页显示条数 */
        size: number
        /** @description 是否获取用户标签,是true,否:false */
        flag?: string
        /** @description 标签id */
        label?: string | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListLabelTreatiseResult']
          }
        }
      }
    }
  }
  UsersController_getNoteTreatisesByTreatiseId: {
    parameters: {
      query: {
        /** @description 论文id */
        id: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetNoteTreatisesByTreatiseIdResult']
          }
        }
      }
    }
  }
  UsersController_listUserSearchKeywords: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListUserSearchKeywordsResult']
          }
        }
      }
    }
  }
  ReportsController_getReportsDetail: {
    parameters: {
      query: {
        /** @description id, */
        id: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['GetReportsDetailResult']
          }
        }
      }
    }
  }
  ReportsController_saveReports: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SaveReportsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['SaveReportsResult']
          }
        }
      }
    }
  }
  ReportsController_listReports: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListReportsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListReportsResult']
          }
        }
      }
    }
  }
  ReportsController_operateReports: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OperateReportsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['OperateReportsResult']
          }
        }
      }
    }
  }
  ReportsController_removeReports: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveReportsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['RemoveReportsResult']
          }
        }
      }
    }
  }
  ReportsController_listResearchReports: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListResearchReportsDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            data?: components['schemas']['ListResearchReportsResult']
          }
        }
      }
    }
  }
  ReportsController_clicksReport: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ClicksReportDto']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResultData'] & {
            /** @default null */
            data: null
          }
        }
      }
    }
  }
}
