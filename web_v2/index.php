<?php
    require_once './include/header.php';
?>
    <body class="layui-layout-body">
        
        <div id="LAY_app">
            
            <div class="layui-layout layui-layout-admin">
                
                <div class="layui-header">

                    <ul class="layui-nav layui-layout-left">
                        
                        <li class="layui-nav-item layadmin-flexible" lay-unselect>
                            <a href="javascript:;" layadmin-event="flexible">
                                <i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
                            </a>
                        </li>
                        
                        <li class="layui-nav-item " lay-unselect>
                            <input type="text" placeholder="搜索" autocomplete="off" class="layui-input layui-input-search" layadmin-event="serach" lay-action="./hero.php?name="> 
                        </li>
                    
                    </ul>
                    
                    <ul class="layui-nav layui-layout-right" lay-filter="layadmin-layout-right">
                      
                        <li class="layui-nav-item layui-hide-xs" lay-unselect>
                            <a href="javascript:;" layadmin-event="fullscreen">
                                <i class="layui-icon layui-icon-screen-full"></i>
                            </a>
                        </li>
                    
                    </ul>
                    
                </div>
                
                <div class="layui-side layui-side-menu">
                    <div class="layui-side-scroll">
                        
                        <div class="layui-logo" lay-href="./home.php">
                            <span>王者荣耀最低战力查询</span>
                        </div>
          
                        <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">
                            
                            <li data-name="home" class="layui-nav-item layui-nav-itemed ">
                                <a href="javascript:;" lay-href="./home.php" lay-direction="2">
                                    <i class="layui-icon layui-icon-home"></i>
                                    <cite>主页</cite>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            
                <div class="layadmin-pagetabs" id="LAY_app_tabs">
                        <div class="layui-icon layadmin-tabs-control layui-icon-prev" layadmin-event="leftPage"></div>
                        <div class="layui-icon layadmin-tabs-control layui-icon-next" layadmin-event="rightPage"></div>
                        <div class="layui-icon layadmin-tabs-control layui-icon-down">
                            <ul class="layui-nav layadmin-tabs-select" lay-filter="layadmin-pagetabs-nav">
                                <li class="layui-nav-item" lay-unselect>
                                    <a href="javascript:;"></a>
                                    <dl class="layui-nav-child layui-anim-fadein">
                                        <dd layadmin-event="closeThisTabs"><a href="javascript:;">关闭当前标签页</a></dd>
                                        <dd layadmin-event="closeOtherTabs"><a href="javascript:;">关闭其它标签页</a></dd>
                                        <dd layadmin-event="closeAllTabs"><a href="javascript:;">关闭全部标签页</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        
                    <div class="layui-tab" lay-unauto lay-allowClose="true" lay-filter="layadmin-layout-tabs">
                        <ul class="layui-tab-title" id="LAY_app_tabsheader">
                            <li lay-id="./home.php" lay-attr="./home.php" class="layui-this">
                                <i class="layui-icon layui-icon-home"></i>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            
                <div class="layui-body" id="LAY_app_body">
                    <div class="layadmin-tabsbody-item layui-show">
                        <iframe src="./home.php" frameborder="0" class="layadmin-iframe"></iframe>
                    </div>
                </div>
                
                <div class="layadmin-body-shade" layadmin-event="shade"></div>
                
            </div>
        </div>
<?php
    require_once './include/footer.php';
?>