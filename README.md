# 抱学长的大腿　帮他的项目写了前端接口代码


## 修整代码在另一个hjs_cms仓库

## 1. 设计完成了前端页面的整改。


## 2. 使用Jquery的AJAX方法与后台Restapi进行json数据交互并进行前端页面的绘制渲染。


## 3. 在分开独立的开发环境下进行整个系统的调试修改。


### 1. 框架简述

该系统前端采用了RestAPI的设计，使用jQuery异步调取后端WEB接口的形式获取json的数据并渲染展示。
后端框架采用了base（基础类库层）、bean（后台逻辑层）、dao（数据持久层）、web（view展示层）的四层结构，代码结构清晰，高度模块化设计，使得开发起来高效、实用、可靠，并且便于扩展和维护。


下面是该系统的源码结构：
```
hjs_cms
├── bin/
├── conf/
├── src
│   ├── base/
│   ├── bean/
│   ├── dao/
│   ├── hjs_cfg.py
│   └── web
│       ├── sessions/
│       ├── static
│       │   ├── css/
│       │   ├── images/
│       │   └── js/
│       ├── templates/
│       ├── url.py
│       ├── viewset/
│       └── web_main.py
└── test/
```
### 2. 框架亮点

* 高度模块化、结构化设计
* 双返回值设计结构确保安全、可靠
* 采用fabric自动化部署
* 采用nose单元测试框架
* 实现了标准规范的log模块
* web.py 设计RestAPI
* 采用JQuery 调用WEB API渲染展示
* 采用nginx + gunicorn + web.py + supervisor 部署运行

### 3. 自动化部署

进入hjs_cms/install目录下，修改好远程服务器的业务配置环境（persion.conf）和远程服务器的ssh配置（secret.py），并行：
```
python publish_hjs_cms.py deploy $srv_ip
```

注意：  
1. 执行publish_hjs_cms.py之前需要将/tools/ssh.exp 添加到本地环变量中  
2. 在publish_hjs_cms.py脚本最后有重启supervisor的命令，这需要root权限才可以重启！  
3. 日志目录配置在根目录下logs下，重新部署后可能需要创建此目录  
