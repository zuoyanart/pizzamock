define({ "api": [
  {
    "type": "get",
    "url": "/educate/:id",
    "title": "获取教育经历",
    "name": "________",
    "group": "Education",
    "version": "1.0.0",
    "description": "<p>获取教育经历信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/educate/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>教育经历id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          },
          {
            "group": "Success 200",
            "type": "bson.ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>主键id</p>"
          },
          {
            "group": "Success 200",
            "type": "bson.ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "school",
            "description": "<p>学校名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "major",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "start",
            "description": "<p>在校开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "end",
            "description": "<p>在校结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "educate",
            "description": "<p>获得的学历</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>教育情况描述</p>"
          }
        ]
      }
    },
    "filename": "controller/education.go",
    "groupTitle": "Education"
  },
  {
    "type": "get",
    "url": "/article/:id",
    "title": "get article",
    "name": "______by_path",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取文章信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "PUT",
    "url": "/article",
    "title": "update article",
    "name": "__article__",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>后台管理员更新文章信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article",
    "title": "create article",
    "name": "__article__1",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>创建文章信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>brief</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "delete",
    "url": "/article",
    "title": "delete article",
    "name": "delete_article",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>delete article by ids[]</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文章id，可传多个用逗号隔开</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/page",
    "title": "page article",
    "name": "page_article",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>page article</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article/page"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>cp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mp",
            "description": "<p>mp</p>"
          },
          {
            "group": "Parameter",
            "type": "nodeid",
            "optional": false,
            "field": "nodeid",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "post",
    "url": "/article/pass",
    "title": "pass article",
    "name": "pass_article",
    "group": "article",
    "version": "1.0.0",
    "description": "<p>delete article by ids[]</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/article/pass"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>pass状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/article.go",
    "groupTitle": "article"
  },
  {
    "type": "delete",
    "url": "/educate",
    "title": "删除教育经历",
    "name": "______",
    "group": "education",
    "version": "1.0.0",
    "description": "<p>delete education by ids[]</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/educate"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>教育经历id，可传多个用逗号隔开</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/education.go",
    "groupTitle": "education"
  },
  {
    "type": "post",
    "url": "/educate/page",
    "title": "获取教育经历列表",
    "name": "________",
    "group": "education",
    "version": "1.0.0",
    "description": "<p>page education</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/educate/page"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>cp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mp",
            "description": "<p>mp</p>"
          },
          {
            "group": "Parameter",
            "type": "nodeid",
            "optional": false,
            "field": "nodeid",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/education.go",
    "groupTitle": "education"
  },
  {
    "type": "PUT",
    "url": "/educate",
    "title": "更新教育经历",
    "name": "________",
    "group": "education",
    "version": "1.0.0",
    "description": "<p>更新教育经历信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/educate"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/education.go",
    "groupTitle": "education"
  },
  {
    "type": "post",
    "url": "/educate",
    "title": "创建教育经历",
    "name": "________",
    "group": "education",
    "version": "1.0.0",
    "description": "<p>创建教育经历信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/educate"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>brief</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>content</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Uid",
            "description": "<p>uid</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Nid",
            "description": "<p>nid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tag",
            "description": "<p>string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Des",
            "description": "<p>string</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Cat",
            "description": "<p>cat</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Imgs",
            "description": "<p>imgs</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Prov",
            "description": "<p>province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "City",
            "description": "<p>city</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/education.go",
    "groupTitle": "education"
  },
  {
    "type": "get",
    "url": "/need/:id",
    "title": "get need",
    "name": "______",
    "group": "need",
    "version": "1.0.0",
    "description": "<p>获取需求信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/need/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>需求id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "filename": "controller/need.go",
    "groupTitle": "need"
  },
  {
    "type": "PUT",
    "url": "/need",
    "title": "update need",
    "name": "__need__",
    "group": "need",
    "version": "1.0.0",
    "description": "<p>后台管理员更新需求信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/need"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/need.go",
    "groupTitle": "need"
  },
  {
    "type": "post",
    "url": "/need",
    "title": "create need",
    "name": "__need__1",
    "group": "need",
    "version": "1.0.0",
    "description": "<p>创建需求信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/need"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>brief</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>content</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Uid",
            "description": "<p>uid</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Nid",
            "description": "<p>nid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tag",
            "description": "<p>string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Des",
            "description": "<p>string</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Cat",
            "description": "<p>cat</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Imgs",
            "description": "<p>imgs</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Prov",
            "description": "<p>province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "City",
            "description": "<p>city</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.title",
            "description": "<p>title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.brief",
            "description": "<p>brief</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.content",
            "description": "<p>content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Uid",
            "description": "<p>uid</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "msg.Nid",
            "description": "<p>nid</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Title",
            "description": "<p>title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Tag",
            "description": "<p>string</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Des",
            "description": "<p>string</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "msg.Cat",
            "description": "<p>cat</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Imgs",
            "description": "<p>imgs</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "msg.Endtime",
            "description": "<p>最后更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "msg.Cmt",
            "description": "<p>评论总数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.Prov",
            "description": "<p>province</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg.City",
            "description": "<p>city</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "msg.State",
            "description": "<p>state</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/need.go",
    "groupTitle": "need"
  },
  {
    "type": "delete",
    "url": "/need",
    "title": "delete need",
    "name": "delete_need",
    "group": "need",
    "version": "1.0.0",
    "description": "<p>delete need by ids[]</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/need"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>需求id，可传多个用逗号隔开</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/need.go",
    "groupTitle": "need"
  },
  {
    "type": "post",
    "url": "/need/page",
    "title": "page need",
    "name": "page_need",
    "group": "need",
    "version": "1.0.0",
    "description": "<p>page need</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/need/page"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>cp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mp",
            "description": "<p>mp</p>"
          },
          {
            "group": "Parameter",
            "type": "nodeid",
            "optional": false,
            "field": "nodeid",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/need.go",
    "groupTitle": "need"
  },
  {
    "type": "get",
    "url": "/node/:id",
    "title": "获取节点信息",
    "name": "______by_path",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取节点信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "filename": "controller/node.go",
    "groupTitle": "node"
  },
  {
    "type": "get",
    "url": "/node/:id",
    "title": "获取节点信息",
    "name": "______by_path",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取节点信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "filename": "controller/sharerecord.go",
    "groupTitle": "node"
  },
  {
    "type": "post",
    "url": "/node/",
    "title": "创建node",
    "name": "__node",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>创建节点信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>brief</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pid",
            "description": "<p>pid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/node.go",
    "groupTitle": "node",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/node",
    "title": "更新node信息",
    "name": "__node__",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>后台管理员更新节点信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>节点名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>节点的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/node.go",
    "groupTitle": "node"
  },
  {
    "type": "get",
    "url": "/node/pageall",
    "title": "page all node",
    "name": "pageAll_node",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>page node</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/pageall"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/node.go",
    "groupTitle": "node"
  },
  {
    "type": "post",
    "url": "/node/page",
    "title": "page node",
    "name": "page_node",
    "group": "node",
    "version": "1.0.0",
    "description": "<p>page node</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/node/page"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "pid",
            "optional": false,
            "field": "pid",
            "description": "<p>节点id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/node.go",
    "groupTitle": "node"
  },
  {
    "type": "get",
    "url": "/user?id=:id",
    "title": "get user",
    "name": "______",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取用户信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息内容</p>"
          }
        ]
      }
    },
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "user login",
    "name": "________",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取用户信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>用户信息</p>"
          }
        ]
      }
    },
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "get user",
    "name": "______by_path",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>用于后台管理员获取用户信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "PUT",
    "url": "/user",
    "title": "update user info",
    "name": "__user__",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>后台管理员更新用户信息，如果传入密码，则更新密码，如果不传，则不更新</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "create user",
    "name": "__user__1",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>创建用户信息</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "delete User",
    "name": "delete_user",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>delete user by ids[]</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/user.go",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/page",
    "title": "page user",
    "name": "page_user",
    "group": "user",
    "version": "1.0.0",
    "description": "<p>page user</p>",
    "sampleRequest": [
      {
        "url": "http://192.168.1.134:3004/v1/user/page"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cp",
            "description": "<p>cp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mp",
            "description": "<p>mp</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "state",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "controller/user.go",
    "groupTitle": "user"
  }
] });
