// categories.js

const categories = [
  {
    id: 9,
    type: 1,
    handle: "copywriting",
    name: "Copywriting",
    name_locales: {
      de: "Copywriting",
      en: "Copywriting",
      es: "Redacción publicitaria",
      fr: "L'écriture publicitaire",
      ja: "コピーライティング",
      ko: "콘텐츠 제작",
      pt: "Redação publicitária",
      tw: "文案寫作",
      vi: "Viết quảng cáo",
      zh: "文案写作",
    },
    tool_count: 435,
    group_id: 1,
    top_tool_count: 411,
    top_visited_count: 56477017,
  },
  {
    id: 10,
    type: 1,
    handle: "email-assistant",
    name: "Email assistant",
    name_locales: {
      de: "E-Mail-Assistent",
      en: "Email assistant",
      es: "Asistente de correo electrónico",
      fr: "Assistant de messagerie électronique",
      ja: "電子メールアシスタント",
      ko: "이메일 도우미",
      pt: "Assistente de e-mail",
      tw: "電子郵件助手",
      vi: "Trợ lý email",
      zh: "电子邮件助手",
    },
    tool_count: 187,
    group_id: 1,
    top_tool_count: 163,
    top_visited_count: 25464816,
  },
  {
    id: 11,
    type: 1,
    handle: "general-writing",
    name: "General writing",
    name_locales: {
      de: "Allgemeine Schreibarbeit",
      en: "General writing",
      es: "Escritura general",
      fr: "Écriture générale",
      ja: "一般的な文章",
      ko: "일반적인 작성",
      pt: "Escrita geral",
      tw: "一般寫作",
      vi: "Viết chung",
      zh: "常规写作",
    },
    tool_count: 343,
    group_id: 1,
    top_tool_count: 296,
    top_visited_count: 250119210,
  },
  {
    id: 12,
    type: 1,
    handle: "paraphraser",
    name: "Paraphraser",
    name_locales: {
      de: "Paraphrasierungsprogramm",
      en: "Paraphraser",
      es: "Paráfrasis",
      fr: "Paraphraseur",
      ja: "パラフレーザー",
      ko: "바꾸기 도구",
      pt: "Paráfrase",
      tw: "改寫工具",
      vi: "Công cụ thay đổi văn bản",
      zh: "改写工具",
    },
    tool_count: 38,
    group_id: 1,
    top_tool_count: 35,
    top_visited_count: 65768721,
  },
  {
    id: 13,
    type: 1,
    handle: "prompts",
    name: "Prompts",
    name_locales: {
      de: "Aufforderungen",
      en: "Prompts",
      es: "Indicaciones",
      fr: "Messages",
      ja: "プロンプト",
      ko: "알림",
      pt: "Instruções",
      tw: "提示",
      vi: "Lời nhắc",
      zh: "提示",
    },
    tool_count: 173,
    group_id: 1,
    top_tool_count: 150,
    top_visited_count: 17526391,
  },
  {
    id: 14,
    type: 1,
    handle: "seo",
    name: "SEO",
    name_locales: {
      de: "SEO",
      en: "SEO",
      es: "SEO",
      fr: "SEO",
      ja: "検索エンジン最適化",
      ko: "검색 엔진 최적화",
      pt: "SEO",
      tw: "搜尋引擎最佳化",
      vi: "tối ưu hóa công cụ tìm kiếm",
      zh: "搜索引擎优化",
    },
    tool_count: 264,
    group_id: 1,
    top_tool_count: 251,
    top_visited_count: 28347535,
  },
  {
    id: 15,
    type: 1,
    handle: "social-media-assistant",
    name: "Social media assistant",
    name_locales: {
      de: "Social-Media-Assistent",
      en: "Social media assistant",
      es: "Asistente de redes sociales",
      fr: "Assistant de médias sociaux",
      ja: "ソーシャルメディアアシスタント",
      ko: "소셜미디어 어시스턴트",
      pt: "Assistente de mídia social",
      tw: "社交媒體助理",
      vi: "Trợ lý truyền thông xã hội",
      zh: "社交媒体助理",
    },
    tool_count: 396,
    group_id: 1,
    top_tool_count: 343,
    top_visited_count: 23960997,
  },
  {
    id: 16,
    type: 1,
    handle: "story-teller",
    name: "Story teller",
    name_locales: {
      de: "Geschichtenerzähler",
      en: "Story teller",
      es: "Cuentacuentos",
      fr: "Conteur d'histoires",
      ja: "語り部",
      ko: "이야기꾼",
      pt: "Contador de histórias",
      tw: "故事講述者",
      vi: "Người kể chuyện",
      zh: "讲故事人",
    },
    tool_count: 126,
    group_id: 1,
    top_tool_count: 105,
    top_visited_count: 19892499,
  },
  {
    id: 17,
    type: 1,
    handle: "summarizer",
    name: "Summarizer",
    name_locales: {
      de: "Summarizer",
      en: "Summarizer",
      es: "Generador de resúmenes",
      fr: "Résumeur",
      ja: "要約作成ツール",
      ko: "요약 생성기",
      pt: "Resumidor",
      tw: "摘要產生器",
      vi: "Trình tóm tắt",
      zh: "摘要生成器",
    },
    tool_count: 196,
    group_id: 1,
    top_tool_count: 167,
    top_visited_count: 23281060,
  },
  {
    id: 18,
    type: 1,
    handle: "art",
    name: "Art",
    name_locales: {
      de: "Kunst",
      en: "Art",
      es: "Arte",
      fr: "Art",
      ja: "芸術",
      ko: "예술",
      pt: "Arte",
      tw: "藝術",
      vi: "Nghệ thuật",
      zh: "艺术",
    },
    tool_count: 398,
    group_id: 2,
    top_tool_count: 336,
    top_visited_count: 137118700,
  },
  {
    id: 19,
    type: 1,
    handle: "avatars",
    name: "Avatars",
    name_locales: {
      de: "Avatare",
      en: "Avatars",
      es: "Avatares",
      fr: "Avatars",
      ja: "アバター",
      ko: "아바타",
      pt: "Avatares",
      tw: "頭像",
      vi: "Ảnh đại diện",
      zh: "头像",
    },
    tool_count: 95,
    group_id: 2,
    top_tool_count: 83,
    top_visited_count: 14546789,
  },
  {
    id: 20,
    type: 1,
    handle: "design-assistant",
    name: "Design assistant",
    name_locales: {
      de: "Design-Assistent",
      en: "Design assistant",
      es: "Asistente de diseño",
      fr: "Assistant de conception",
      ja: "デザインアシスタント",
      ko: "디자인 어시스턴트",
      pt: "Assistente de design",
      tw: "設計助手",
      vi: "Trợ lý thiết kế",
      zh: "设计助手",
    },
    tool_count: 306,
    group_id: 2,
    top_tool_count: 288,
    top_visited_count: 82143240,
  },
  {
    id: 21,
    type: 1,
    handle: "image-editing",
    name: "Image editing",
    name_locales: {
      de: "Bildbearbeitung",
      en: "Image editing",
      es: "Edición de imágenes",
      fr: "Édition d'images",
      ja: "画像編集",
      ko: "이미지 편집",
      pt: "Edição de imagem",
      tw: "影像編輯",
      vi: "Chỉnh sửa ảnh",
      zh: "影像编辑",
    },
    tool_count: 221,
    group_id: 2,
    top_tool_count: 193,
    top_visited_count: 181810935,
  },
  {
    id: 22,
    type: 1,
    handle: "image-generator",
    name: "Image generator",
    name_locales: {
      de: "Bildgenerator",
      en: "Image generator",
      es: "Generador de imágenes",
      fr: "Générateur d'images",
      ja: "画像生成器",
      ko: "이미지 생성기",
      pt: "Gerador de imagens",
      tw: "圖像生成器",
      vi: "Trình tạo hình ảnh",
      zh: "图像生成器",
    },
    tool_count: 298,
    group_id: 2,
    top_tool_count: 258,
    top_visited_count: 56326024,
  },
  {
    id: 23,
    type: 1,
    handle: "logo-generator",
    name: "Logo generator",
    name_locales: {
      de: "Logo-Generator",
      en: "Logo generator",
      es: "Generador de logotipos",
      fr: "Générateur de logo",
      ja: "ロゴジェネレーター",
      ko: "로고 생성기",
      pt: "Gerador de logotipo",
      tw: "Logo產生器",
      vi: "Trình tạo logo",
      zh: "Logo生成器",
    },
    tool_count: 25,
    group_id: 2,
    top_tool_count: 25,
    top_visited_count: 14398717,
  },
  {
    id: 24,
    type: 1,
    handle: "code-assistant",
    name: "Code assistant",
    name_locales: {
      de: "Code-Assistent",
      en: "Code assistant",
      es: "Asistente de código",
      fr: "Assistant de code",
      ja: "コードアシスタント",
      ko: "코드 어시스턴트",
      pt: "Assistente de código",
      tw: "代碼助手",
      vi: "Trợ lý mã",
      zh: "代码辅助工具",
    },
    tool_count: 165,
    group_id: 3,
    top_tool_count: 149,
    top_visited_count: 27189768,
  },
  {
    id: 25,
    type: 1,
    handle: "developer-tools",
    name: "Developer tools",
    name_locales: {
      de: "Entwickler-Tools",
      en: "Developer tools",
      es: "Developer tools",
      fr: "Outils de développement",
      ja: "開発者ツール",
      ko: "개발자 도구",
      pt: "Developer tools",
      tw: "開發人員工具",
      vi: "Công cụ phát triển",
      zh: "开发者工具",
    },
    tool_count: 562,
    group_id: 3,
    top_tool_count: 530,
    top_visited_count: 25639950,
  },
  {
    id: 26,
    type: 1,
    handle: "low-code-no-code",
    name: "Low-code/no-code",
    name_locales: {
      de: "Low-Code/No-Code",
      en: "Low-code/no-code",
      es: "Low-code/No-code",
      fr: "Low-code/No-code",
      ja: "Low-code/No-code",
      ko: "로우코드/노코드",
      pt: "Low-code/no-code",
      tw: "低代码/无代码",
      vi: "Low-code/No-code",
      zh: "低代码/无代码",
    },
    tool_count: 228,
    group_id: 3,
    top_tool_count: 227,
    top_visited_count: 18436041,
  },
  {
    id: 27,
    type: 1,
    handle: "spreadsheets",
    name: "Spreadsheets",
    name_locales: {
      de: "Tabellenkalkulation",
      en: "Spreadsheets",
      es: "Hojas de cálculo",
      fr: "Tableurs",
      ja: "スプレッドシート",
      ko: "스프레드시트",
      pt: "Planilhas",
      tw: "試算表",
      vi: "Bảng tính",
      zh: "电子表格",
    },
    tool_count: 54,
    group_id: 3,
    top_tool_count: 49,
    top_visited_count: 2406163,
  },
  {
    id: 28,
    type: 1,
    handle: "sql",
    name: "SQL",
    name_locales: {
      de: "SQL",
      en: "SQL",
      es: "SQL",
      fr: "SQL",
      ja: "SQL",
      ko: "SQL",
      pt: "SQL",
      tw: "結構化查詢語言",
      vi: "SQL",
      zh: "结构化查询语言",
    },
    tool_count: 45,
    group_id: 3,
    top_tool_count: 45,
    top_visited_count: 1160888,
  },
  {
    id: 29,
    type: 1,
    handle: "audio-editing",
    name: "Audio editing",
    name_locales: {
      de: "Audiobearbeitung",
      en: "Audio editing",
      es: "Edición de audio",
      fr: "Montage audio",
      ja: "オーディオ編集",
      ko: "오디오 편집",
      pt: "Edição de áudio",
      tw: "音訊編輯",
      vi: "Chỉnh sửa âm thanh",
      zh: "音频编辑",
    },
    tool_count: 109,
    group_id: 4,
    top_tool_count: 101,
    top_visited_count: 28431420,
  },
  {
    id: 30,
    type: 1,
    handle: "music",
    name: "Music",
    name_locales: {
      de: "Musik",
      en: "Music",
      es: "Música",
      fr: "Musique",
      ja: "音楽",
      ko: "음악",
      pt: "Música",
      tw: "音樂",
      vi: "Âm nhạc",
      zh: "音乐",
    },
    tool_count: 84,
    group_id: 4,
    top_tool_count: 76,
    top_visited_count: 20998595,
  },
  {
    id: 31,
    type: 1,
    handle: "text-to-speech",
    name: "Text to speech",
    name_locales: {
      de: "Text-zu-Sprache",
      en: "Text to speech",
      es: "Texto a voz",
      fr: "Texte à parole",
      ja: "テキスト読み上げ",
      ko: "문장 읽어주기",
      pt: "Texto para fala",
      tw: "文本轉語音",
      vi: "Văn bản thành giọng nói",
      zh: "文本转语音",
    },
    tool_count: 181,
    group_id: 4,
    top_tool_count: 152,
    top_visited_count: 51560705,
  },
  {
    id: 32,
    type: 1,
    handle: "transcriber",
    name: "Transcriber",
    name_locales: {
      de: "Transkriptor",
      en: "Transcriber",
      es: "Transcriptor",
      fr: "Transcripteur",
      ja: "音声認識者",
      ko: "전사자",
      pt: "Transcritor",
      tw: "轉錄員",
      vi: "Người chuyển văn bản",
      zh: "转录员",
    },
    tool_count: 134,
    group_id: 4,
    top_tool_count: 122,
    top_visited_count: 12368549,
  },
  {
    id: 33,
    type: 1,
    handle: "personalized-videos",
    name: "Personalized videos",
    name_locales: {
      de: "Personalisierte Videos",
      en: "Personalized videos",
      es: "Videos personalizados",
      fr: "Vidéos personnalisées",
      ja: "パーソナライズ動画",
      ko: "맞춤형 비디오",
      pt: "Vídeos personalizados",
      tw: "個人化影片",
      vi: "Video cá nhân hóa",
      zh: "个性化视频",
    },
    tool_count: 129,
    group_id: 5,
    top_tool_count: 107,
    top_visited_count: 38625722,
  },
  {
    id: 34,
    type: 1,
    handle: "video-editing",
    name: "Video editing",
    name_locales: {
      de: "Videobearbeitung",
      en: "Video editing",
      es: "Edición de vídeo",
      fr: "Montage vidéo",
      ja: "ビデオ編集",
      ko: "비디오 편집",
      pt: "Edição de vídeo",
      tw: "影片剪輯",
      vi: "Chỉnh sửa video",
      zh: "视频剪辑",
    },
    tool_count: 114,
    group_id: 5,
    top_tool_count: 112,
    top_visited_count: 30353618,
  },
  {
    id: 35,
    type: 1,
    handle: "video-generator",
    name: "Video generator",
    name_locales: {
      de: "Video-Generator",
      en: "Video generator",
      es: "Generador de videos",
      fr: "Générateur de vidéo",
      ja: "ビデオジェネレーター",
      ko: "비디오 생성기",
      pt: "Gerador de vídeos",
      tw: "影片產生器",
      vi: "Trình tạo video",
      zh: "视频生成器",
    },
    tool_count: 107,
    group_id: 5,
    top_tool_count: 101,
    top_visited_count: 57065208,
  },
  {
    id: 36,
    type: 1,
    handle: "3d-1",
    name: "3D",
    name_locales: {
      de: "3D",
      en: "3D",
      es: "3D",
      fr: "3D",
      ja: "3D",
      ko: "3D",
      pt: "3D",
      tw: "3D",
      vi: "3D",
      zh: "3D",
    },
    tool_count: 54,
    group_id: 6,
    top_tool_count: 54,
    top_visited_count: 23940767,
  },
  {
    id: 37,
    type: 1,
    handle: "customer-support",
    name: "Customer support",
    name_locales: {
      de: "Kundensupport",
      en: "Customer support",
      es: "Soporte al cliente",
      fr: "Support client",
      ja: "カスタマーサポート",
      ko: "고객 지원",
      pt: "Suporte ao cliente",
      tw: "客戶支援",
      vi: "Hỗ trợ khách hàng",
      zh: "客户支持",
    },
    tool_count: 260,
    group_id: 7,
    top_tool_count: 256,
    top_visited_count: 5150533,
  },
  {
    id: 38,
    type: 1,
    handle: "e-commerce",
    name: "E-commerce",
    name_locales: {
      de: "E-Commerce",
      en: "E-commerce",
      es: "Comercio electrónico",
      fr: "Commerce électronique",
      ja: "Eコマース",
      ko: "전자상거래",
      pt: "Comércio eletrônico",
      tw: "電子商務",
      vi: "Thương mại điện tử",
      zh: "电子商务",
    },
    tool_count: 215,
    group_id: 7,
    top_tool_count: 208,
    top_visited_count: 10831367,
  },
  {
    id: 39,
    type: 1,
    handle: "education-assistant",
    name: "Education assistant",
    name_locales: {
      de: "Bildungsassistent",
      en: "Education assistant",
      es: "Asistente de educación",
      fr: "Assistant d'éducation",
      ja: "教育アシスタント",
      ko: "교육 조수",
      pt: "Assistente de educação",
      tw: "教育助理",
      vi: "Trợ lý giáo dục",
      zh: "教育助理",
    },
    tool_count: 337,
    group_id: 7,
    top_tool_count: 303,
    top_visited_count: 86883688,
  },
  {
    id: 40,
    type: 1,
    handle: "fashion",
    name: "Fashion",
    name_locales: {
      de: "Mode",
      en: "Fashion",
      es: "Moda",
      fr: "Mode",
      ja: "ファッション",
      ko: "패션",
      pt: "Moda",
      tw: "時尚",
      vi: "Thời trang",
      zh: "时尚",
    },
    tool_count: 42,
    group_id: 7,
    top_tool_count: 38,
    top_visited_count: 410809,
  },
  {
    id: 41,
    type: 1,
    handle: "finance",
    name: "Finance",
    name_locales: {
      de: "Finanzen",
      en: "Finance",
      es: "Finanzas",
      fr: "Finance",
      ja: "財務",
      ko: "금융",
      pt: "Finanças",
      tw: "財務",
      vi: "Tài chính",
      zh: "金融",
    },
    tool_count: 158,
    group_id: 7,
    top_tool_count: 154,
    top_visited_count: 4901707,
  },
  {
    id: 42,
    type: 1,
    handle: "human-resources",
    name: "Human resources",
    name_locales: {
      de: "Personalwesen",
      en: "Human resources",
      es: "Recursos humanos",
      fr: "Ressources humaines",
      ja: "人事",
      ko: "인사",
      pt: "Recursos humanos",
      tw: "人力資源",
      vi: "Nhân sự",
      zh: "人力资源",
    },
    tool_count: 147,
    group_id: 7,
    top_tool_count: 145,
    top_visited_count: 9280215,
  },
  {
    id: 43,
    type: 1,
    handle: "legal-assistant",
    name: "Legal assistant",
    name_locales: {
      de: "Rechtsanwaltsassistent",
      en: "Legal assistant",
      es: "Asistente legal",
      fr: "Assistant juridique",
      ja: "法律アシスタント",
      ko: "법률조수",
      pt: "Assistente jurídico",
      tw: "法律助理",
      vi: "Trợ lý pháp lý",
      zh: "法律助理",
    },
    tool_count: 41,
    group_id: 7,
    top_tool_count: 38,
    top_visited_count: 9896699,
  },
  {
    id: 44,
    type: 1,
    handle: "presentations",
    name: "Presentations",
    name_locales: {
      de: "Präsentationen",
      en: "Presentations",
      es: "Presentaciones",
      fr: "Présentations",
      ja: "プレゼンテーション",
      ko: "프레젠테이션",
      pt: "Apresentações",
      tw: "簡報",
      vi: "Bài thuyết trình",
      zh: "演示文稿",
    },
    tool_count: 35,
    group_id: 7,
    top_tool_count: 34,
    top_visited_count: 20108517,
  },
  {
    id: 45,
    type: 1,
    handle: "productivity",
    name: "Productivity",
    name_locales: {
      de: "Produktivität",
      en: "Productivity",
      es: "Productividad",
      fr: "Productivité",
      ja: "生産性",
      ko: "생산성",
      pt: "Produtividade",
      tw: "生產力",
      vi: "Năng suất",
      zh: "生产力",
    },
    tool_count: 775,
    group_id: 7,
    top_tool_count: 686,
    top_visited_count: 489812912,
  },
  {
    id: 46,
    type: 1,
    handle: "real-estate",
    name: "Real estate",
    name_locales: {
      de: "Immobilien",
      en: "Real estate",
      es: "Bienes raíces",
      fr: "Immobilier",
      ja: "不動産",
      ko: "부동산",
      pt: "Imobiliário",
      tw: "房地產",
      vi: "Bất động sản",
      zh: "房地产",
    },
    tool_count: 66,
    group_id: 7,
    top_tool_count: 61,
    top_visited_count: 2483092,
  },
  {
    id: 47,
    type: 1,
    handle: "sales",
    name: "Sales",
    name_locales: {
      de: "Verkauf",
      en: "Sales",
      es: "Venta",
      fr: "Vente",
      ja: "セールス",
      ko: "판매",
      pt: "Vendas",
      tw: "銷售",
      vi: "Bán hàng",
      zh: "销售",
    },
    tool_count: 158,
    group_id: 7,
    top_tool_count: 152,
    top_visited_count: 6873046,
  },
  {
    id: 48,
    type: 1,
    handle: "startup-tools",
    name: "Startup tools",
    name_locales: {
      de: "Startup-Tools",
      en: "Startup tools",
      es: "Herramientas para startups",
      fr: "Outils de démarrage",
      ja: "スタートアップツール",
      ko: "스타트업 도구",
      pt: "Ferramentas para startups",
      tw: "啟動工具",
      vi: "Công cụ khởi nghiệp",
      zh: "初创企业工具",
    },
    tool_count: 188,
    group_id: 7,
    top_tool_count: 188,
    top_visited_count: 16548927,
  },
  {
    id: 49,
    type: 1,
    handle: "experiments",
    name: "Experiments",
    name_locales: {
      de: "Experimente",
      en: "Experiments",
      es: "Experimentos",
      fr: "Expériences",
      ja: "実験",
      ko: "실험",
      pt: "Experimentos",
      tw: "實驗",
      vi: "Thí nghiệm",
      zh: "实验",
    },
    tool_count: 49,
    group_id: 8,
    top_tool_count: 44,
    top_visited_count: 1246102,
  },
  {
    id: 50,
    type: 1,
    handle: "fun-tools",
    name: "Fun tools",
    name_locales: {
      de: "Spaßwerkzeuge",
      en: "Fun tools",
      es: "Herramientas divertidas",
      fr: "Outils amusants",
      ja: "楽しいツール",
      ko: "재미있는 도구",
      pt: "Ferramentas divertidas",
      tw: "有趣工具",
      vi: "Công cụ vui nhộn",
      zh: "趣味工具",
    },
    tool_count: 197,
    group_id: 8,
    top_tool_count: 167,
    top_visited_count: 243908209,
  },
  {
    id: 51,
    type: 1,
    handle: "gaming",
    name: "Gaming",
    name_locales: {
      de: "Spielen",
      en: "Gaming",
      es: "Juegos",
      fr: "Jeux",
      ja: "ゲーム",
      ko: "게임",
      pt: "Jogos",
      tw: "遊戲",
      vi: "Chơi game",
      zh: "游戏",
    },
    tool_count: 80,
    group_id: 8,
    top_tool_count: 76,
    top_visited_count: 23143888,
  },
  {
    id: 52,
    type: 1,
    handle: "gift-ideas",
    name: "Gift ideas",
    name_locales: {
      de: "Geschenkideen",
      en: "Gift ideas",
      es: "Ideas de regalos",
      fr: "Idées cadeaux",
      ja: "プレゼントのアイデア",
      ko: "선물 아이디어",
      pt: "Ideias de presente",
      tw: "禮品推薦",
      vi: "Ý tưởng quà tặng",
      zh: "礼品推荐",
    },
    tool_count: 36,
    group_id: 8,
    top_tool_count: 33,
    top_visited_count: 149968,
  },
  {
    id: 53,
    type: 1,
    handle: "healthcare",
    name: "Healthcare",
    name_locales: {
      de: "Gesundheitsversorgung",
      en: "Healthcare",
      es: "Atención médica",
      fr: "Soins de santé",
      ja: "ヘルスケア",
      ko: "의료",
      pt: "Cuidados de saúde",
      tw: "醫療保健",
      vi: "Chăm sóc sức khỏe",
      zh: "医疗保健",
    },
    tool_count: 145,
    group_id: 8,
    top_tool_count: 116,
    top_visited_count: 4734588,
  },
  {
    id: 54,
    type: 1,
    handle: "life-assistant",
    name: "Life assistant",
    name_locales: {
      de: "Lebensassistent",
      en: "Life assistant",
      es: "Asistente de vida",
      fr: "Assistant de vie",
      ja: "ライフアシスタント",
      ko: "라이프 어시스턴트",
      pt: "Assistente de vida",
      tw: "生活助理",
      vi: "Trợ lý cuộc sống",
      zh: "生活助手",
    },
    tool_count: 121,
    group_id: 8,
    top_tool_count: 110,
    top_visited_count: 17701740,
  },
  {
    id: 55,
    type: 1,
    handle: "memory",
    name: "Memory",
    name_locales: {
      de: "Erinnerung",
      en: "Memory",
      es: "Memoria",
      fr: "Mémoire",
      ja: "メモリ",
      ko: "기억",
      pt: "Memória",
      tw: "記憶",
      vi: "Ký ức",
      zh: "记忆",
    },
    tool_count: 38,
    group_id: 8,
    top_tool_count: 34,
    top_visited_count: 4338004,
  },
  {
    id: 56,
    type: 1,
    handle: "research",
    name: "Research",
    name_locales: {
      de: "Forschung",
      en: "Research",
      es: "Investigación",
      fr: "Recherche",
      ja: "研究",
      ko: "연구",
      pt: "Pesquisa",
      tw: "研究",
      vi: "Nghiên cứu",
      zh: "研究",
    },
    tool_count: 161,
    group_id: 8,
    top_tool_count: 156,
    top_visited_count: 1568521588,
  },
  {
    id: 57,
    type: 1,
    handle: "resources",
    name: "Resources",
    name_locales: {
      de: "Ressourcen",
      en: "Resources",
      es: "Recursos",
      fr: "Ressources",
      ja: "リソース",
      ko: "자원",
      pt: "Recursos",
      tw: "資源",
      vi: "Tài nguyên",
      zh: "资源",
    },
    tool_count: 67,
    group_id: 8,
    top_tool_count: 61,
    top_visited_count: 22262733,
  },
  {
    id: 58,
    type: 1,
    handle: "search-engine",
    name: "Search engine",
    name_locales: {
      de: "Suchmaschine",
      en: "Search engine",
      es: "Motor de búsqueda",
      fr: "Moteur de recherche",
      ja: "検索エンジン",
      ko: "검색 엔진",
      pt: "Motor de busca",
      tw: "搜尋引擎",
      vi: "Máy tìm kiếm",
      zh: "搜索引擎",
    },
    tool_count: 172,
    group_id: 8,
    top_tool_count: 152,
    top_visited_count: 212521331,
  },
  {
    id: 61,
    type: 1,
    handle: "dating",
    name: "Dating",
    name_locales: {
      de: "Dating",
      en: "Dating",
      es: "Citas",
      fr: "Rendez-vous amoureux",
      ja: "デート",
      ko: "데이트",
      pt: "Encontros",
      tw: "約會",
      vi: "Hẹn hò",
      zh: "约会",
    },
    tool_count: 63,
    group_id: 8,
    top_tool_count: 49,
    top_visited_count: 7337597,
  },
  {
    id: 59,
    type: 1,
    handle: "ai-chatbots",
    name: "AI Chatbots",
    name_locales: {
      de: "AI-Chatbots",
      en: "AI Chatbots",
      es: "Chatbots de IA",
      fr: "Chatbots d'IA",
      ja: "AIチャットボット",
      ko: "AI 챗봇",
      pt: "Chatbots de IA",
      tw: "人工智能聊天機器人",
      vi: "Trò chuyện với Chatbots AI",
      zh: "人工智能聊天机器人",
    },
    tool_count: 2421,
    group_id: 1,
    top_tool_count: 2116,
    top_visited_count: 1890139530,
  },
  {
    id: 60,
    type: 1,
    handle: "language-learning",
    name: "Language learning",
    name_locales: {
      de: "Sprachenlernen",
      en: "Language learning",
      es: "Aprendizaje de idiomas",
      fr: "Apprentissage des langues",
      ja: "言語学習",
      ko: "언어 학습",
      pt: "Aprendizagem de idiomas",
      tw: "語言學習",
      vi: "Học ngôn ngữ",
      zh: "语言学习",
    },
    tool_count: 235,
    group_id: 8,
    top_tool_count: 189,
    top_visited_count: 19024320,
  },
  {
    id: 62,
    type: 1,
    handle: "travel",
    name: "Travel",
    name_locales: {
      de: "Reisen",
      en: "Travel",
      es: "Viajar",
      fr: "Voyage",
      ja: "旅行する",
      ko: "여행",
      pt: "Viagem",
      tw: "旅遊",
      vi: "Du lịch",
      zh: "旅行",
    },
    tool_count: 78,
    group_id: 8,
    top_tool_count: 72,
    top_visited_count: 622733,
  },
  {
    id: 63,
    type: 1,
    handle: "ai-content-detector",
    name: "AI Content Detector",
    name_locales: {
      de: "AI-Detektor",
      en: "AI Content Detector",
      es: "Detector de IA",
      fr: "Détecteur d'IA",
      ja: "AI検出器",
      ko: "인공지능 감지기",
      pt: "Detector de IA",
      tw: "AI檢測器",
      vi: "Bộ phát hiện trí tuệ nhân tạo",
      zh: "人工智能检测器",
    },
    tool_count: 489,
    group_id: 8,
    top_tool_count: 453,
    top_visited_count: 42475114,
  },
  {
    id: 65,
    type: 1,
    handle: "document-assistant",
    name: "Document Assistant",
    name_locales: {
      de: "Dokumentenassistent",
      en: "Document Assistant",
      es: "Asistente de documentos",
      fr: "Assistant de document",
      ja: "文書アシスタント",
      ko: "문서 도우미",
      pt: "Assistente de documentos",
      tw: "文件助手",
      vi: "Trợ lý tài liệu",
      zh: "文档助手",
    },
    tool_count: 187,
    group_id: 7,
    top_tool_count: 175,
    top_visited_count: 8768902,
  },
];

export default categories;
