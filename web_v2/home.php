<?php
    require_once './include/header.php';
    
    $s = file_get_contents("https://www.sapi.run/hero/herolist.json");
    $heroList = json_decode($s, true);
    $heroList = $heroList['data'];
?>
    <body>
        <div class="layui-fluid">
            <div class="layui-row layui-col-space15">
                
                <div class="layui-col-md12">
                    <div class="layui-row layui-col-space15">
                        
                        <div class="layui-col-md4">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">系统公告</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p>采集官方实时数据，有少许时间差</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md4">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">英雄数量</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p><?php echo count($heroList); ?></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md4">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">关于作者</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p>微信公众号：干货助手</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        <div class="layui-col-md12">
                            
                            <div class="layui-card">
                                
                                <div class="layui-tab layui-tab-brief layadmin-latestData">
                                    <div class="layui-card-header">英雄</div>
                                    <div class="layui-tab-content">
                                        <?php
                                            $html = '
                                              <div class="layui-row">
                                            ';
                                            foreach ($heroList as $item) {
                                                $html .= '
                                                <div style="text-align:center;" class="layui-col-xs3 layui-col-sm2 layui-col-md1" lay-href="./hero.php?name='.$item['cname'].'">
                                                    <img style="height:60px;width:60px;border-radius:15%;" src="'.$item['iconUrl'].'">
                                                    <div style="margin-top: 10px;margin-bottom: 20px;">
                                                        <span class="layui-badge layui-bg-green">'.$item['cname'].'</span>
                                                    </div>
                                                </div>
                                                ';
                                            }
                                            $html .= '
                                                </div>
                                            ';
                                            echo $html;
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
<?php
    require_once './include/footer.php';
?>