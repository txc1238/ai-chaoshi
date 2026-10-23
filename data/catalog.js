export const categories = [
  { id: "video", name: "视频 / 数字人", blurb: "脚本、数字人和生成式视频" },
  { id: "voice", name: "配音 / 语音", blurb: "文字转语音、克隆和配音" },
  { id: "writing", name: "写作", blurb: "起草、改写和语法" },
  { id: "design", name: "设计 / 建站", blurb: "网站、演示和画面" },
  { id: "automation", name: "自动化 / 效率", blurb: "把应用和文档串起来" },
  { id: "chat", name: "聊天助手", blurb: "对话、搜索和办公问答" }
];

export const tools = [
  {
    id: "framer",
    name: "Framer",
    category: "design",
    hasReview: true,
    featured: true,
    oneLiner: "在浏览器里设计并发布网站，付费后可绑定自己的域名。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "年付视图 Basic $10/月",
    priceNote: "页面当时选的是年付。月付可能不同。",
    seoTitle: "Framer 测评：价格、适合谁、怎么付款",
    seoDescription: "Framer 测评与价格说明。整理自官网 2026年10月公开资料：免费档、Basic 与 Pro、中文支持情况和信用卡付款方式。不是亲手实测。",
    summary: "Framer 把网站的设计、内容和托管放在一起，画完就能发布。免费档可以试设计和少量 AI 额度；要绑定自己的域名，需要付费。",
    fit: "官网 FAQ 把免费档写成适合非商业用途，Basic 面向学生、自由职业者和小工作室，Pro 面向把营销站放在 Framer 上的团队，Enterprise 面向需要定制额度、正常运行时间承诺和单点登录的组织。只做幻灯片或社交图片的人，货架上有更对口的工具。",
    features: [
      "可视化设计页面并发布。免费档包含 Framer 子域名、1 GB 带宽和设计页面，另外有一项仍在预览的外部连接，官网名称是 MCP Server。",
      "帮助中心写明：免费项目可试用 10 个 CMS 集合、1,000 个页面、5 MB 上传和 1 个语言环境。定价表上 Basic 为 2 个集合、50 GB 带宽，Pro 为 10 个集合、100 GB 带宽，并包含跳转、预览分支和暂存环境。",
      "AI 功能消耗工作区共享的 credits。没有付费订阅时提供 500 点试用。年付视图中 Basic 为每月 1,000 点，Pro 为每月 3,000 点，用完可以加购。",
      "查看者免费。额外设计编辑为 $20/月，内容编辑为 $10/月。把网站译成更多语言是加购，每个语言环境 $20。"
    ],
    pricing: [
      "截至 2026年10月，定价页在 Yearly billing 视图下显示：Free $0、Basic $10/月、Pro $30/月、Enterprise 为定制。页面写明价格按结账时所选周期计费，因此月付不一定等于这个数字。",
      "免费档不能连接自定义域名。年付方案写明包含一个域名。带宽、页面数和 CMS 条目超出后，按定价表加价或升级。具体以结账页为准。"
    ],
    pros: [
      "可以先免费做设计和页面，FAQ 写明无订阅的工作区也能协作，最多三名编辑。",
      "付费后域名、托管和基础 SEO 在同一笔订阅里。",
      "只看不改的查看者不另收费。"
    ],
    cons: [
      "要用自己的域名做正式站点，就不能停在免费档。",
      "多一个设计编辑、多一种网站语言，都要另付。",
      "公开标价来自年付视图，不能直接当成月付价。"
    ],
    chinese: "定价页把网站多语言做成加购，没有写编辑器是否提供中文界面。网页上的中文文案是你的内容，不等于 Framer 界面有中文。",
    payment: "FAQ 写可用信用卡；部分地区可用 PayPal；Enterprise 可谈信用卡或银行转账。欧盟和土耳其用户若在购买后 14 天内，可按 FAQ 联系支持申请退款。本站不收款，也不代付。",
    alternatives: [
      { id: "gamma", text: "更偏演示文稿、文档和轻量页面，不是一套完整的网站托管。" },
      { id: "canva", text: "更偏图片、模板和简单页面，网站不是它的中心。" }
    ],
    sources: [
      { label: "Framer 定价页", url: "https://www.framer.com/pricing" }
    ]
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    hasReview: true,
    featured: true,
    oneLiner: "用可视化场景把多个应用串成自动流程，按 credits 计费。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Core 起，价格按国家",
    priceNote: "官网按账单国家显示不同美元价，目录不标单一月费。",
    seoTitle: "Make 测评：自动化价格、免费额度与怎么付款",
    seoDescription: "Make 自动化工具测评。免费档每月 1,000 credits，Core / Pro / Teams 差在功能，美元价格按国家显示。整理自 2026年10月官网，不是亲手实测。",
    summary: "Make 用一块可视化画布把应用连成「场景」：一件事发生，就按你排好的步骤去读、改、写入另一边。计费单位是 credits，多数普通动作消耗 1 点。",
    fit: "适合要把表格、邮箱、广告或数据库里的重复动作接起来、又不想先写一整套后端的人。官网把免费档写成用来熟悉界面并做出第一个场景，Core 写基础自动化，Pro 写更高性能和高级功能，Teams 写多人分工，Enterprise 写安全和定制。一个人偶尔跑一条流程，免费档的额度往往就够试。",
    features: [
      "免费档：每月 1,000 credits、无代码画布、定价页所列 3,500+ 应用、路由器和过滤器，两次运行之间最短间隔 15 分钟。定价页写免费档没有时间上限。",
      "Core 在免费档之上开放不限数量的活跃场景、可以把排程细到分钟，并提供 Make API。Pro 增加优先执行、自定义变量和执行日志的全文搜索。Teams 增加团队角色，以及创建和分享场景模板。",
      "帮助中心写：自 8 月 27 日起，credits 是计费单位。非 AI 应用里，1 次操作等于 1 credit；部分使用 Make 自带 AI 的功能会按 token 和操作一起计费。",
      "额度用完后场景会停，直到你加额度。帮助中心写额外 credits 比套餐内单价贵 25%，而且只用信用卡或借记卡购买。未用完的套餐额度在周期结束时失效。"
    ],
    pricing: [
      "截至 2026年10月，定价页能确认的档位是 Free、Core、Pro、Teams 和 Enterprise。付费档的美元价格按国家变化，页面上没有一个全球统一的起步价，所以这里不写成某一国的月费。",
      "请打开官网定价页，确认账单国家后再看 Core 的价格。那就是大多数人的付费起点。Enterprise 为销售报价。"
    ],
    pros: [
      "有不限时长的免费档，可以先接一条真实流程。",
      "应用数量多，普通步骤的计费方式在帮助中心写得很直白。",
      "付费后可以按分钟排程，而不必停在 15 分钟一档。"
    ],
    cons: [
      "标价随国家变，跨国团队不能只看别人截图里的价格。",
      "额度用完场景就停；额外额度更贵，而且不能用所有付款方式买。",
      "免费档的运行间隔和单次时长都更紧，不适合要随时响应的流程。"
    ],
    chinese: "定价页和付款帮助是英文，没有写界面是否提供中文，所以这里不写成已经支持中文界面。场景里的中文内容是否顺畅，取决于你连接的那个应用，而不是 Make 的标价页。",
    payment: "帮助中心列出：信用卡或借记卡；Apple Pay、Google Pay、Amazon Pay、Cash App Pay；Link；Klarna 分期；美国账户的 ACH 直接借记（仅月付和年付订阅）。可用方式随地区变化，结账页会列出你能用的那些。Enterprise 走客户经理发票。本站不代付。",
    alternatives: [
      { id: "notion", text: "若重复工作发生在文档和数据库内部，Notion 的自动化和 Agent 更贴着笔记走。" }
    ],
    sources: [
      { label: "Make 定价页", url: "https://www.make.com/en/pricing" },
      { label: "Make：credits 说明", url: "https://help.make.com/credits" },
      { label: "Make：付款方式", url: "https://help.make.com/change-payment-details" }
    ]
  },
  {
    id: "fliki",
    name: "Fliki",
    category: "video",
    hasReview: true,
    featured: false,
    oneLiner: "把想法、脚本或博客做成带 AI 配音的视频，有带水印的免费档。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Standard 起，美元价见官网",
    priceNote: "年付文案写可省 25%。具体美元价以定价页为准。",
    seoTitle: "Fliki 测评：免费额度、语言和怎么付款",
    seoDescription: "Fliki 文字转视频测评。免费档 3 credits、带水印；Standard 与 Premium 的额度和时长整理自官网 2026年10月。美元标价请以定价页为准。",
    summary: "Fliki 用文字生成带配音的视频：可以从想法、脚本、博客或 PPT 开始，再配库存画面和 AI 声音。免费档能试用，导出带水印。",
    fit: "适合想先把一篇稿子变成一条能看的视频、暂时不想学时间线剪辑的人。官网把 Standard 写成给开始做 AI 视频的创作者，Premium 写成给专业团队和工作室，Enterprise 为按年定制。若你要的是真人数字人口播或电影感生成视频，货架上还有别的工具。",
    features: [
      "免费档：每月 3 credits，无需信用卡；约 300 种声音、80 多种语言；可用想法、脚本、博客或 PPT 做视频；带库存图片、片段和音乐；可生成 AI 图片和封面；导出 720p，带 Fliki 水印。",
      "Standard：每月 180 credits，约 1,000 种声音（其中 500 种超写实），1080p，单条最长约 15 分钟，可译到 80 多种语言，含声音克隆、有限的库存虚拟形象、系列功能和商用权利。",
      "Premium：每月 600 credits，2,000 种以上声音，方案卡写单条最长约 40 分钟，并包含 AI 视频片段、照片虚拟形象、多套声音克隆、品牌套件和 API。Enterprise 为定制额度，按年开票。",
      "FAQ 写额度按生成的音频时长或导出的视频扣减，改脚本或换声音会重新处理并再次扣点。页面上的估算器对一条 5 分钟、用库存画面加 AI 配音的视频给出约 0.5 credit/分钟，并声明实际消耗会变。"
    ],
    pricing: [
      "截至 2026年10月，官网写明有免费档，付费从 Standard 起到 Premium，另有 Enterprise。页面元信息写年付可省 25%。",
      "Standard 和 Premium 的美元标价要在定价页上查看，说明文字里没有把月费写死。我们不转抄其他网站的价格。请以 fliki.ai/pricing 结账页为准。",
      "有一处口径不一致：方案卡写 Premium 视频最长约 40 分钟，FAQ 另一答写最长约 30 分钟。下单前以方案卡和账户里的限制为准。"
    ],
    pros: [
      "免费档不需要信用卡，能先听声音、看 720p 成片。",
      "语言覆盖在方案卡和 FAQ 里都写到 80 种以上。",
      "FAQ 写接受主流借记卡、信用卡，以及 GPay、Apple Pay 和部分国家的本地钱包，标价货币为美元。"
    ],
    cons: [
      "免费导出带水印，分辨率停在 720p。",
      "改一句台词就可能重新扣额度，短视频来回改会比估算更快用完。",
      "公开说明里没有把美元月费写清楚，价格必须以你打开的定价页为准。免费档「3 credits」和常见问题里的「每月约 5 分钟」也不是同一句话。"
    ],
    chinese: "官网写支持 80 多种语言、100 多种方言，常见问题另写语音库有 1,300 多种超写实声音。页面没有单独标出中文有多少个声音。定价页是英文，这里不把它写成已经有中文界面。",
    payment: "价格以美元列出。FAQ 写接受主流借记卡和信用卡，以及 GPay、Apple Pay，和支持的国家里的本地支付钱包。可在账户里取消后续续费。本站不代付。",
    alternatives: [
      { id: "pictory", text: "同样把文章或脚本转成视频，计费和试用方式不同。" },
      { id: "murf", text: "若你主要要配音而不是成片，Murf 更偏语音工作室。" }
    ],
    sources: [
      { label: "Fliki 定价页", url: "https://fliki.ai/pricing" }
    ]
  },
  {
    id: "rytr",
    name: "Rytr",
    category: "writing",
    hasReview: true,
    featured: false,
    oneLiner: "连接邮箱和日历，提醒该跟进谁，并按你的语气起草文字。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Lite $9/月",
    priceNote: "年付比月付标价省 20%。",
    seoTitle: "Rytr 测评：价格、写作额度和怎么用",
    seoDescription: "Rytr 测评。2026年10月官网把它写成关系跟进加写作：免费档、Lite $9、Personal $19、Pro $49。不是亲手实测。",
    summary: "Rytr 现在公开定位是关系跟进助手，写作还在。它读取你授权的邮件、日历和会议记录，告诉你该联系谁，并起草一封等你批准才发出的回复；Create 则继续用来写邮件、帖子和广告。",
    fit: "适合要同时记住客户承诺和写跟进信的人。官网写它连接的是你已经在用的 Gmail、Outlook、Slack、日历和会议笔记。若你不想把邮箱接进去，只想改一句英文，免费档里的写作次数有限，语法类工具可能更直接。",
    features: [
      "Engage：早报和晚报、会前简报、待批准的跟进草稿。官网强调没有你的批准不会把内容发出去。",
      "Create：首页写有 40 个写作场景、22 种语气、38 种语言，一次最多三稿。浏览器扩展可在 Gmail、Slack 和任意输入框里改写。",
      "定价页 FAQ：免费档每月 10,000 字符、1 个已连接来源、25 段活跃关系、25 次 Engage、3 次人物检索、每日简报，以及 40 多种写作场景和 30 多种语言。",
      "Lite 去掉每月字符上限。Personal 提到 2 个来源、250 段关系和 250 次 Engage。Pro 写全部来源、1,000 段关系、2,000 次 Engage、早晚简报和自定义场景。"
    ],
    pricing: [
      "截至 2026年10月，定价页标价为：Free $0、Lite $9/月、Personal $19/月、Pro $49/月。年付比这些月付标价省 20%，一次付清全年。",
      "可以随时换档或取消，已付周期内仍可使用。定价页 FAQ 没有写出接受哪些卡或钱包。"
    ],
    pros: [
      "有长期免费档，写作和跟进都能先试。",
      "官网反复写明：草稿要等你批准，邮箱里的指令不会被当成给 Rytr 的命令。",
      "年付折扣写在定价页上，数字清楚。"
    ],
    cons: [
      "付费档的差价主要在「能记住多少关系、能连接多少来源」，不是无限写作本身。Lite 已经不限字符。",
      "首页写 Create 支持 38 种语言，定价 FAQ 写 30 多种。两处都是官网，下单前看你账户里的语言列表。",
      "连接邮箱是比普通写作工具更大的授权。定价页的常见问题里没有列出付款方式。"
    ],
    chinese: "官网给出的是语言数量，没有在定价页点名中文。首页 Create 写 38 种语言，定价页常见问题写 30 多种。这些页面是英文，这里不把中文界面或中文写作质量写成已经核实。",
    payment: "定价页只说明可以月付或年付、可随时更换和取消，没有列出卡种。请以结账页显示的方式为准。本站不代付。",
    alternatives: [
      { id: "grammarly", text: "更集中在英文改错、语气和改写，不连接你的客户关系。" },
      { id: "quillbot", text: "更集中在改写和语法，有明确的免费字数上限。" }
    ],
    sources: [
      { label: "Rytr 首页", url: "https://rytr.me/" },
      { label: "Rytr 定价页", url: "https://rytr.me/pricing/" }
    ]
  },
  {
    id: "pictory",
    name: "Pictory",
    category: "video",
    hasReview: true,
    featured: false,
    oneLiner: "把脚本、文章链接或 PPT 转成带字幕和配音的视频。",
    freeLabel: "14 天试用",
    freeKind: "trial",
    startingPrice: "年付 Starter $25/月",
    priceNote: "下表价格是年付折合。没有长期免费档。",
    seoTitle: "Pictory 测评：价格、试用和怎么付款",
    seoDescription: "Pictory 测评与价格。2026年10月官网：14 天试用，Starter 年付 $25/月，Professional $35，Teams $119。支持信用卡和 PayPal。",
    summary: "Pictory 把脚本、文章链接或 PowerPoint 做成视频，并带自动字幕、库存素材和 AI 配音。它没有长期免费档，官网提供 14 天试用。",
    fit: "适合要把博客、讲稿或课件转成横版或竖版视频的人。试用只有 3 个视频项目、脚本视频最长约 5 分钟，并带品牌水印。需要长期每个月做大量视频的团队，才进入 Starter 以上的额度。",
    features: [
      "各付费档都包含：从脚本或网址生成视频、把 PPTX 转成视频、自动字幕（可导出 srt、vtt 或 txt）、Storyblocks 与 Getty 素材，以及 ElevenLabs 声音。",
      "试用：300 credits（页面写最多约 10 分钟）、3 个视频、500 MB、720p、带 Pictory 水印，编辑器最长约 15 分钟。",
      "付费档导出 1080p、不带该水印，脚本视频最长约 30 分钟。Starter 存储 5 GB、1 个品牌套件；Professional 20 GB、5 个品牌套件、2 个自定义虚拟形象；Teams 100 GB、10 个品牌套件，并含优先支持。",
      "定价页列出的生成模型包括 Veo 3.1、Veo 3.1 Fast、Pixverse、Omni Flash，以及若干图像模型。不同模型的 credit 单价写在对比表里。"
    ],
    pricing: [
      "截至 2026年10月，对比表注明价格为按月显示、按年计费：Starter $25/月，Professional $35/月，Teams $119/月。Enterprise 在表外，含单点登录、SCORM 等，需联系销售。",
      "年付额度一次性给齐。表内年额度：Starter 24,000 credits（最多约 360 分钟/年），Professional 72,000（约 1,080 分钟/年），Teams 216,000（约 3,600 分钟/年）。",
      "页面上方还有划掉的价格，和「按年计费」的表不完全是同一句话。本页只采用对比表里写明 billed annually 的数字。月付请以切换后的官网为准。"
    ],
    pros: [
      "脚本、链接和 PPT 都能作为入口，字幕可以单独导出。",
      "年付额度提前给，忙的月份不用等下一次刷新。",
      "付款方式写清楚：美元计价，主流借记卡和信用卡，以及 PayPal，由 Stripe 和 PayPal 处理。"
    ],
    cons: [
      "没有长期免费档。FAQ 写目前不对已付订阅退款，取消后下一周期不再扣款。",
      "取消后项目会从平台删除，视频要先下载。",
      "语言数量分档：Starter 为 7 种，Professional 和 Teams 为 29 种。页面没有逐个列出语种。"
    ],
    chinese: "官网只给出语言数量，没有在定价页点名中文是否在 Starter 的 7 种或更高档的 29 种之内。这里不把中文配音写成已经确认。定价页是英文。",
    payment: "价格为美元。FAQ 写接受主流借记卡、信用卡和 PayPal。不提供本次订阅的退款，但可以随时取消自动续费。本站不代付。",
    alternatives: [
      { id: "fliki", text: "同样是文字到视频，并且有长期免费档，但额度规则不同。" },
      { id: "synthesia", text: "更偏数字人出镜和培训视频，免费档按月给固定分钟数。" }
    ],
    sources: [
      { label: "Pictory 定价页", url: "https://pictory.ai/pricing" }
    ]
  },
  {
    id: "murf",
    name: "Murf AI",
    category: "voice",
    hasReview: true,
    featured: false,
    oneLiner: "做配音和语音 API。工作室按套餐给生成时长，API 按量计费。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Creator 年付 $19/月起",
    priceNote: "这句话来自官网文字转语音页，不是定价页上的全部档。",
    seoTitle: "Murf AI 测评：配音价格、免费分钟和怎么付款",
    seoDescription: "Murf AI 测评。工作室免费档 10 分钟；Creator、Growth、Business 的时长来自帮助中心。产品页写 Creator 年付 $19/月起。整理自 2026年10月官网。",
    summary: "Murf 做文字转语音：工作室里可以做配音项目，另外还有按量计费的 API 和配音翻译。免费工作区能生成声音，但帮助中心写明不能下载。",
    fit: "适合要给课件、演示或产品做旁白，又不想自己录音的人。若你是开发者，只想按字符调用接口，看 API 的按量价格，而不是工作室套餐。企业要多人协作时，帮助中心写只有 Enterprise 工作区可以邀请成员。",
    features: [
      "帮助中心：免费工作区为 10 分钟语音生成、2 个项目额度，不能下载项目。",
      "付费时长：Creator 月付 2 小时或年付 24 小时，5 个项目额度；Growth 月付 8 小时或年付 96 小时，50 个项目；Business 月付 20 小时或年付 240 小时，200 个项目。项目额度是同时能有多少个项目，不是每月刷新。",
      "官网文字转语音页写：免费档 $0；Creator 年付起价 $19/月；Business 年付起价 $66/月；Enterprise 定制。同一页还写到 200 多种声音和 35 种以上语言。帮助中心的档位名称里还有 Growth，产品页这句起步价没有单独写出 Growth 的美元价。",
      "API 定价页：试用含 $10 API 额度；Falcon 文字转语音 $0.01/1,000 字符，另一档工作室音质 $0.03/1,000 字符；语音转文字 $0.24/小时；变声 $0.10/分钟；翻译 $0.02/1,000 字符。购入的 API 额度不过期。"
    ],
    pricing: [
      "截至 2026年10月，工作室的公开起步价以文字转语音产品页为准：Creator 年付折合 $19/月起，Business 年付折合 $66/月起。Growth 的美元价以 murf.ai/pricing 的 Studio 栏显示为准。",
      "API 是另一套价目，按字符、小时或分钟，不走上面的月费。两套不要混成一个「最低 $19」。"
    ],
    pros: [
      "免费档不需要信用卡即可试听，帮助中心把分钟数写清楚了。",
      "官网语言列表点名了中文和粤语。",
      "API 可以按量买，购入额度不过期，适合调用量不稳定的开发。"
    ],
    cons: [
      "免费档不能下载，只适合试听。",
      "产品页和帮助中心对档位名称的写法不完全一样，Growth 的标价要以定价页为准。",
      "帮助中心写商业用途更建议 Business，而不是 Creator。是否符合你的授权范围，以下单页的许可说明为准。"
    ],
    chinese: "定价页底部的语言列表写明文字转语音包含 Chinese 和 Cantonese Chinese，同时也列出英、德、法、西、日、韩等。这是语音语言，不是界面语言。页面没有说明工作室界面是否为中文。",
    payment: "API 页和帮助中心没有列出工作室结账的卡种。升级说明写可以在定价页按比例升级，部分月付与年付的交叉更换要联系 support@murf.ai。请以结账页为准。本站不代付。",
    alternatives: [
      { id: "elevenlabs", text: "同样做文字转语音和克隆，套餐按 credits 而不是按小时。"},
      { id: "fliki", text: "若你要的是带画面的成片，而不只是一条音轨。" }
    ],
    sources: [
      { label: "Murf 定价页", url: "https://murf.ai/pricing" },
      { label: "Murf 文字转语音页", url: "https://murf.ai/text-to-speech" },
      { label: "Murf：工作区说明", url: "https://help.murf.ai/what-is-a-workspace" }
    ]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "voice",
    hasReview: true,
    featured: true,
    oneLiner: "文字转语音、克隆、音效和配音工作室，按月给 credits。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Starter $6/月",
    priceNote: "商用授权从 Starter 起。年付相当于付 10 个月。",
    seoTitle: "ElevenLabs 测评：价格、免费 credits 与怎么付款",
    seoDescription: "ElevenLabs 测评与价格。2026年10月官网：免费 1 万 credits，Starter $6/月，Creator $22/月。支持信用卡、Apple Pay 和 Google Pay。",
    summary: "ElevenLabs 用同一池 credits 做文字转语音、语音转文字、音效、音乐、变声和配音。免费档可以试，商用授权从付费的 Starter 才开始。",
    fit: "适合要做旁白、有声内容或把接口接进自己产品的人。官网把 Creator 标成常用档，Pro、Scale 和 Business 面向用量更大或要座位的团队。只是偶尔听一句合成语音，免费的 10,000 credits 可以先用。",
    features: [
      "免费档 $0：每月 10,000 credits，包含文字转语音、语音转文字、音效、声音设计、音乐和 3 个 Studio 项目。商用许可、即时声音克隆不在免费档。",
      "Starter $6/月：30,000 credits，加上商用许可、即时声音克隆、20 个 Studio 项目和配音工作室。Creator $22/月：121,000 credits，并包含专业声音克隆。",
      "Pro $99/月为 600,000 credits。Scale $299/月为 180 万 credits 和 3 个座位。Business $990/月为 600 万 credits 和 10 个座位。Enterprise 定制。",
      "对比表把语言数标为 74。FAQ 写 V2 多语言模型里 1 个字符约等于 1 credit，具体随模型变化。付费档未用完的额度最多滚存两个月；免费档不滚存。"
    ],
    pricing: [
      "截至 2026年10月，上面的月费是定价页 FAQ 列出的常规月付。年付等于付 10 个月的钱：折合 Starter $5、Creator $18.33、Pro $82.50、Scale $249.17、Business $825 每月。",
      "同一页在 2026年11月1日前对 Starter 和 Creator 显示首月折扣（页面写 Starter 首月 $1、Creator 首月 $11）。折扣结束后以页面上的常规价为准，不要把首月价当成长期价格。",
      "价格不含税。credits 在各项产品之间共用，做一分钟配音和读一长段文字扣的不是同一种数量。"
    ],
    pros: [
      "免费档不需要先付费，就能试合成和转写。",
      "从哪一档开始可以商用，定价页写在 Starter，而不是含糊带过。",
      "年付规则用「付 10 个月」写明了，付款方式也列出了卡、Apple Pay 和 Google Pay。"
    ],
    cons: [
      "免费档没有商用许可，也不能做即时声音克隆。",
      "同池额度意味着音乐、音效和配音会互相占用。",
      "首月折扣有截止日期，截图很容易过期。Scale 和 Business 的月费已经是数百到近千美元。"
    ],
    chinese: "方案对比表把支持语言数标为 74，没有逐个点名中文。这是语音语言数量，不是界面是否中文。这里不把中文配音质量写成已经试听过的结论。",
    payment: "FAQ 写接受信用卡、Apple Pay 和 Google Pay，按月或按年从订阅当天开始计费。可随时取消，当前周期结束前仍可使用；降档或取消后，未用完的付费额度在周期末失效。本站不代付。",
    alternatives: [
      { id: "murf", text: "工作室按生成时长分档，API 另按字符计费。" },
      { id: "fliki", text: "若目标是直接导出一条带画面的视频，而不只是音频。" }
    ],
    sources: [
      { label: "ElevenLabs 定价页", url: "https://elevenlabs.io/pricing" }
    ]
  },
  {
    id: "synthesia",
    name: "Synthesia",
    category: "video",
    hasReview: true,
    featured: true,
    oneLiner: "用 AI 数字人做培训和讲解视频，免费档每月约 10 分钟。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Starter 月付 $29",
    priceNote: "另有年付，金额以定价页切换后的卡片为准。",
    seoTitle: "Synthesia 测评：数字人视频价格和怎么付款",
    seoDescription: "Synthesia 测评。2026年10月官网：Basic 免费，Starter 月付 $29，Pro 月付 $89。含额度、语言和取消方式，不是亲手实测。",
    summary: "Synthesia 用 AI 数字人把脚本说成视频，也做配音翻译和简单问卷。Basic 免费，但成片带水印；要去掉限制并增加数字人，再进入 Starter 或 Pro。",
    fit: "官网把它写成给不用摄影机和演播室也能做业务视频的人，常见用途是培训、产品说明和内部沟通。偶尔做一条一分钟内的试片，可以用免费的每月 10 分钟。要品牌数字人或按年给很多学员看，才需要看 Pro 和 Enterprise。",
    features: [
      "Basic $0：每月 500 credits、约 10 分钟视频或配音、3 份问卷回复。视频带 Synthesia 水印。定价页写无需信用卡。",
      "Starter 月付 $29：每月另有 1,250 credits。FAQ 估算这大约再增加 12 分钟典型视频，和免费的 10 分钟加在一起约 22 分钟，若把额度花在配音或问卷上会更少。含 AI Video Assistant、3 位访客和 125 种以上数字人。",
      "Pro 月付 $89。对比表写它在 Starter 之上，并出现 5 个个人数字人、5 位访客、180 种以上数字人。FAQ 写 Pro 有多档额度可选。Enterprise 定制，含更多数字人、SCORM 和客户成功经理。",
      "方案页写数字人语言和声音为 140 种以上；翻译输出语言一栏写到 70 种以上，Enterprise 一栏写到 140 种以上。学员席位标为每个 $29。"
    ],
    pricing: [
      "截至 2026年10月，对比表的月付价格是：Basic $0、Starter $29/月、Pro $89/月、Enterprise 定制。常见问题写 Starter 和 Pro 也可以按年计费，年付金额以定价页上切换到年付后的数字为准。",
      "每月包含的 10 分钟、3 份问卷和 500 credits 不滚存。年付方案的年度额度预先可用。单独购买的 credits 有效期 12 个月。",
      "FAQ 写典型成片大约每分钟 100 credits，数字人全程出镜会更多；配音每分钟 80 credits（开对口型）或 40 credits（不开）。编辑预览不扣点。"
    ],
    pros: [
      "免费档按月刷新，不需要信用卡就能做一条带水印的短片。",
      "额度规则写得比较细：预览不扣费，重做只计算新生成的片段。",
      "可以在设置里换档、改年付或取消，不必一次买断。"
    ],
    cons: [
      "免费成片带水印，分钟数只够试，不够当频道更新。",
      "年付价格没有和月付写在同一张我们读到的卡片上，需要自己在官网切换。",
      "个人数字人的数量在不同段落里写成 3 个或 5 个，以下单时所选方案为准。"
    ],
    chinese: "方案页写 140 种以上语言和声音，翻译输出从 70 种以上到 Enterprise 的 140 种以上。没有单独核查「普通话」或「粤语」是否在你这一档里。界面语言未在 FAQ 中说明。",
    payment: "常见问题写这不是一次性买断。Starter 和 Pro 按月或按年续费，可在 Settings → Plan & billing 更换或取消。Basic 免费且页面写无需信用卡。常见问题没有列出具体卡种，请以结账页为准。本站不代付。",
    alternatives: [
      { id: "heygen", text: "同样做数字人视频，目录里有免费条数和起步价，尚无长测评。" },
      { id: "pictory", text: "更偏文章转视频和素材剪辑，数字人不是它的唯一入口。" }
    ],
    sources: [
      { label: "Synthesia 定价页", url: "https://www.synthesia.io/pricing" }
    ]
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "design",
    hasReview: true,
    featured: true,
    oneLiner: "用提示生成演示文稿、文档和轻量网页，免费档额度不按月刷新。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Plus $9/席/月",
    priceNote: "美元数字来自官网俄文定价页，请再核对英文页的月付/年付开关。",
    seoTitle: "Gamma 测评：演示文稿价格、免费额度与付款",
    seoDescription: "Gamma 测评。免费档约 400 起始积分；Plus、Pro、Ultra 的额度和官网美元标价，整理自 2026年10月公开页面。不是亲手实测。",
    summary: "Gamma 用一段提示生成演示文稿、文档、网页、社交图片和配图，也可以从 PDF 或 PPTX 导入，并导出成 PDF、PPTX、PNG 或 Google Slides。免费档能用，但 AI 额度不会按月刷新。",
    fit: "适合要很快做出一叠能讲的幻灯片或一份可分享文档的人。官网把 Plus 写成用于去掉 Gamma 品牌并提高生成上限，Pro 写成用于自定义品牌、分析和 API，Ultra 写成用于最高模型和更多自定义域名。要像素级控制网站动效的人，更可能去看建站工具。",
    features: [
      "英文定价页：免费档每次提示最多约 10 页，包含演示、文档、网站、社交内容和图片，可导入 PDF 与 PPTX，可导出 PDF、PPTX、PNG 和 Google Slides。页面写无需信用卡。",
      "帮助中心：新账户从免费档开始，带 400 点起始额度，这些点不按月刷新。邀请朋友可再得额度（文内写每位 200 点），免费账户同时持有的上限为 2,000 点。",
      "Plus 每月 1,000 点，可去掉「Made with Gamma」，高级图像模型，单次提示最多约 100 页。Pro 每月 4,000 点，另有 API、自定义品牌、详细分析和最多 10 个自定义域名。Ultra 每月 20,000 点，以及文本、图像、视频的更高模型和最多 100 个自定义域名。",
      "席位按人计费。帮助中心举例：工作区里两位 Pro 成员会收两份订阅。未用完的付费额度最多滚存到月额度的 2 倍。"
    ],
    pricing: [
      "截至 2026年10月，英文定价页要打开后才能看到金额。gamma.app 俄文定价页用美元标出：Plus $9/席/月（年付总额 $108）、Pro $18/席/月（年付 $216）、Ultra $90/席/月（年付 $1,080）。",
      "英文帮助中心写年付大约省 28%，并且写 Ultra 当时只提供月付。这和俄文页上的 Ultra 年付总额不完全一致。请在 gamma.app/pricing 切换 Monthly 和 Annual 后再付款。",
      "帮助中心还列出 Business 档，但升级文没有展开它的美元价格，所以这里不写 Business 的月费。"
    ],
    pros: [
      "免费档没有截止日期，也不需要信用卡，导出格式覆盖常见办公软件。",
      "去掉品牌、自定义域名和 API 分别落在不同档，方便按需要升级。",
      "订阅在设置里通过 Stripe 管理，取消后当前周期结束才降回免费档。"
    ],
    cons: [
      "免费额度不会每月恢复，用完要等邀请奖励或升级。",
      "英文页、帮助中心和俄文页对 Ultra 是否能年付的说法不完全一样。",
      "按席位计费，人一多比标价上的「每人」涨得快。"
    ],
    chinese: "官网有英文、西班牙文和俄文等定价页，说明界面提供多种语言。没有看到中文界面，所以这里不写成已经支持中文。中文成稿好不好，请你自己生成一版再判断。",
    payment: "帮助中心写在 Settings 里通过 Stripe 管理订阅，升级按剩余天数补差价，降级到本周期结束再生效。促销码只能在从免费档第一次付费时使用。具体卡种以 Stripe 结账页为准。本站不代付。",
    alternatives: [
      { id: "framer", text: "要自己的域名、托管和更细的页面设计时再看它。" },
      { id: "canva", text: "模板和图片更多，演示只是其中一块。" }
    ],
    sources: [
      { label: "Gamma 英文定价页", url: "https://gamma.app/pricing" },
      { label: "Gamma 俄文定价页（美元标价）", url: "https://gamma.app/ru/pricing" },
      { label: "Gamma 帮助中心：如何升级", url: "https://help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription" }
    ]
  },
  {
    id: "runway",
    name: "Runway",
    category: "video",
    hasReview: true,
    featured: true,
    oneLiner: "用 credits 生成视频和图像。免费档是一次性 125 点，不会每月刷新。",
    freeLabel: "一次性免费额度",
    freeKind: "trial",
    startingPrice: "年付 Standard $12/月",
    priceNote: "月付标价是 $15。免费额度用完不会自动补充。",
    seoTitle: "Runway 测评：视频生成价格、额度与怎么付款",
    seoDescription: "Runway 测评与价格。2026年10月官网：Standard 年付 $12/月或月付 $15。付款帮助中心列出信用卡、支付宝和微信支付（并非所有地区）。",
    summary: "Runway 按 credits 生成视频、图像和音频。付费档每月给一包额度；免费档是一次性的 125 credits，用完不会按月补。",
    fit: "适合要试生成式视频、并且能接受按秒扣额度的人。官网把 Standard 写成给正在提高手艺的创作者；更高的 Pro、Max 给需要更多秒数和更高模型的人。若你要的是数字人念稿，而不是生成镜头，货架上的数字人工具更对口。",
    features: [
      "定价页 FAQ：免费档一次性存入 125 credits，不过期，也不按月刷新。付费档才有每月额度。",
      "Standard 卡片：月付标价 $15，年付折合 $12/月，每月 625 credits（年付合计 7,500）。页面举例这大约等于 52 秒 Gen-4.5、104 秒 Gen-4 Turbo，或 78 张 1080p 的 Gen-4 图像。",
      "Pro：月付 $35，年付折合 $28/月，每月 2,250 credits（年付 27,000）。Max：月付 $95，年付折合 $76/月，每月 9,500 credits（年付 114,000）。年付相对 Pro 的月付，页面写一年少 $84。",
      "FAQ 写 Gen-4.5 为每秒 12 credits，与对比表「60 credits / 5 秒」一致。Standard 和 Pro 的每月额度不滚存；Max 最多滚存一个月。另购额度最少 1,000 点，且不过期。"
    ],
    pricing: [
      "截至 2026年10月，公开付费起点是 Standard：年付折合 $12/月，或月付 $15。Pro 与 Max 见上。页面标题也写 from $12/month。",
      "模型会改额度单价。生成前以产品里显示的扣点为准，不要只拿某一条 5 秒样例去推算整部片子。",
      "价格页写「Trusted by 60M+ creators」是厂商自己的说法，本站不把它当成独立统计。"
    ],
    pros: [
      "可以先用一次性免费额度看模型，不立刻订阅。",
      "月付和年付两套数字都写在定价页上，差价算得出来。",
      "帮助中心的付款方式里包括支付宝和微信支付，对部分读者比只收信用卡更直接。但不是每个地区都能用。"
    ],
    cons: [
      "免费额度不会每月回来，125 点只够很短的生成。",
      "Standard 和 Pro 的月度额度不滚存，当月不用就没了。",
      "按秒计费，多试几次镜头比订阅标价本身更容易超支。"
    ],
    chinese: "定价页和付款帮助是英文，没有写生成界面是否为中文。付款帮助列出 Alipay 和 WeChat Pay，这只说明结账方式，不说明产品界面语言。",
    payment: "帮助中心写 Runway 经 Stripe 收款，方式包括信用卡或借记卡、Amazon Pay、Apple Pay、Google Pay、仅限美国的即时银行支付、支付宝、Cash App Pay 和微信支付。并写明并非所有地区都支持全部方式。可在账单页升级，升级按剩余时间补差价。本站不代付。",
    alternatives: [
      { id: "synthesia", text: "数字人念稿和培训视频，不是同一类生成模型。" },
      { id: "pictory", text: "从现成脚本和素材拼视频，生成模型只是其中一部分。" }
    ],
    sources: [
      { label: "Runway 定价页", url: "https://runway.com/pricing" },
      { label: "Runway：付款方式", url: "https://help.runwayml.com/hc/en-us/articles/30657959470483-What-payment-methods-are-available" }
    ]
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "video",
    hasReview: false,
    oneLiner: "数字人出镜和视频翻译。免费档每月 3 条、最长约 1 分钟，带水印。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Creator $29/月",
    priceNote: "FAQ 写年付折合 $24/月。尚无长测评。",
    seoTitle: "HeyGen",
    seoDescription: ""
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "chat",
    hasReview: false,
    oneLiner: "OpenAI 的对话助手。有免费档；Plus 为 $20/月。另有 Go 和 Pro，Go 的标价见定价页。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Plus $20/月",
    priceNote: "帮助中心写 Plus 按月计费，没有年付。Pro 另有 $100、$200、$500 三档。",
    seoTitle: "ChatGPT",
    seoDescription: ""
  },
  {
    id: "claude",
    name: "Claude",
    category: "chat",
    hasReview: false,
    oneLiner: "Anthropic 的对话助手，含网页、文件和代码。免费可用，Pro 为月付 $20。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Pro 月付 $20",
    priceNote: "年付为一次 $200，折合 $17/月。Max 从 $100/月起。",
    seoTitle: "Claude",
    seoDescription: ""
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "chat",
    hasReview: false,
    oneLiner: "Google 的 Gemini 应用。有免费档；个人付费在 Google AI 方案里，美国标价 Plus 为 $4.99/月。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Google AI Plus $4.99/月",
    priceNote: "美国 Google One 标价。Pro $19.99/月，Ultra 5x $99.99/月。其他国家可能不同。",
    seoTitle: "Gemini",
    seoDescription: ""
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "writing",
    hasReview: false,
    oneLiner: "英文写作的语法、语气和改写。有免费档；方案卡把 Pro 标为 $12。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Pro $12",
    priceNote: "卡片未写明是月付还是年付折算，并提供 $0 试用。请以结账页为准。",
    seoTitle: "Grammarly",
    seoDescription: ""
  },
  {
    id: "quillbot",
    name: "QuillBot",
    category: "writing",
    hasReview: false,
    oneLiner: "改写、语法和摘要。免费档每次改写约 125 词；Premium 有更高上限。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "年付约 $8.33/月",
    priceNote: "官网博客写年付 $99.95、月付 $19.95。帮助中心说价格随地区变。",
    seoTitle: "QuillBot",
    seoDescription: ""
  },
  {
    id: "notion",
    name: "Notion AI",
    category: "automation",
    hasReview: false,
    oneLiner: "写在 Notion 文档和数据库里的 AI。免费档和 Plus 含试用，Notion Agent 在 Business。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Plus $10/成员/月",
    priceNote: "Business $20/成员/月才包含 Notion Agent。付款为主要信用卡和借记卡。",
    seoTitle: "Notion AI",
    seoDescription: ""
  },
  {
    id: "canva",
    name: "Canva",
    category: "design",
    hasReview: false,
    oneLiner: "模板化做图、演示和简单页面。有免费档，Pro 标价为每人每年 US$144。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Pro US$144/年",
    priceNote: "来自官网个人方案页。是否另有月付，以定价页开关为准。",
    seoTitle: "Canva",
    seoDescription: ""
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "design",
    hasReview: false,
    oneLiner: "用订阅生成图像和视频。官方方案文档没有列出免费档。",
    freeLabel: "无免费档",
    freeKind: "no",
    startingPrice: "Basic $10/月",
    priceNote: "年付 $96（折合 $8/月）。Standard $30/月，Pro $60/月，Mega $120/月。",
    seoTitle: "Midjourney",
    seoDescription: ""
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "chat",
    hasReview: false,
    oneLiner: "带引用的 AI 搜索和问答。有免费档；Pro 在不同官方页面上的标价不完全一致。",
    freeLabel: "有免费档",
    freeKind: "yes",
    startingPrice: "Pro 约 $20/月",
    priceNote: "帮助中心一篇文章写 $20/月或 $200/年；产品页写成年付折合 $17/月。以结账页为准。",
    seoTitle: "Perplexity",
    seoDescription: ""
  }
];
