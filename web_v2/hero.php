<?php
    require_once './include/header.php';

    $name = $_GET['name'];
    if ($name == '接口' || $name == '') {
        exit('
            <script src="./include/layuiadmin/layui/layui.js"></script>
                    <script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
                    <script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
                    <script type="text/javascript">
                        layui.use(["laydate", "laypage", "layer", "table", "carousel", "upload", "element"], function() {
                            var laydate = layui.laydate
                            ,laypage = layui.laypage
                            ,layer = layui.layer
                            ,table = layui.table
                            ,carousel = layui.carousel
                            ,upload = layui.upload
                            ,element = layui.element;
                            
                            parent.layui.admin.events.closeThisTabs();
                        });
                    </script>
                    <script>
                        layui.config({
                            base: "./include/layuiadmin/"
                            }).extend({
                                index: "lib/index"
                            }).use(["index", "console"]);
                    </script>
                    
                </body>
            </html>
        ');
    }
    $s = file_get_contents("https://www.sapi.run/hero/select.php?hero=".$name."&type=qq");
    $qqHero = json_decode($s, true);
    
    $s = file_get_contents("https://www.sapi.run/hero/select.php?hero=".$name."&type=wx");
    $wxHero = json_decode($s, true);
    
    $s = file_get_contents("https://www.sapi.run/hero/select.php?hero=".$name."&type=ios_qq");
    $iosqqHero = json_decode($s, true);
    
    $s = file_get_contents("https://www.sapi.run/hero/select.php?hero=".$name."&type=ios_wx");
    $ioswxHero = json_decode($s, true);
    
    if ($qqHero['code'] != 200 || $wxHero['code'] != 200 || $iosqqHero['code'] != 200 || $ioswxHero['code'] != 200) {
        exit('
            <script src="./include/layuiadmin/layui/layui.js"></script>
            <script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
            <script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
            <script type="text/javascript">
                layui.use(["laydate", "laypage", "layer", "table", "carousel", "upload", "element"], function() {
                    var laydate = layui.laydate
                    ,laypage = layui.laypage
                    ,layer = layui.layer
                    ,table = layui.table
                    ,carousel = layui.carousel
                    ,upload = layui.upload
                    ,element = layui.element;
                    
                    layer.alert(
                        "英雄不存在",
                        {
                            title: "提示",
                            end: function() {
                                parent.layui.admin.events.closeThisTabs()
                            }
                        }
                    );
                });
            </script>
            <script>
                layui.config({
                    base: "./include/layuiadmin/"
                    }).extend({
                        index: "lib/index"
                    }).use(["index", "console"]);
            </script>
            
        </body>
    </html>
        ');
    }
?>
    <body>
        <div class="layui-fluid">
            <div class="layui-row layui-col-space15">
                
                <div class="layui-col-md8">
                    <div class="layui-row layui-col-space15">
                        
                        <div class="layui-col-md6">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">英雄名称</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p><?php echo $qqHero['data']['alias']; ?></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md6">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">采集时间</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p><?php echo date("Y/m/d H:i:s"); ?></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md6">
                            
                            <div class="layui-card">
                                
                                <div class="layui-tab layui-tab-brief layadmin-latestData">
                                    <div class="layui-card-header" style="color:#009688;font-weight:600;">安卓QQ区</div>
                                    <div class="layui-card-body">
                    
                                        <table class="layui-table">
                                            <colgroup>
                                                <col width="30%">
                                                <col width="30%">
                                                <col width="30%">
                                                <col>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>行政区</th>
                                                    <th>地区</th>
                                                    <th>分数</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>省级</td>
                                                    <td><?php echo $qqHero['data']['province']; ?></td>
                                                    <td><?php echo $qqHero['data']['provincePower']; ?></td>
                                                </tr>
                                                <tr>
                                                    <td>市级</td>
                                                    <td><?php echo $qqHero['data']['city']; ?></td>
                                                    <td><?php echo $qqHero['data']['cityPower']; ?></td>   
                                                </tr>
                                                <tr>
                                                    <td>区级</td>
                                                    <td><?php echo $qqHero['data']['area']; ?></td>
                                                    <td><?php echo $qqHero['data']['areaPower']; ?></td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md6">
                            
                            <div class="layui-card">
                                
                                <div class="layui-tab layui-tab-brief layadmin-latestData">
                                    <div class="layui-card-header" style="color:#009688;font-weight:600;">安卓VX区</div>
                                    <div class="layui-card-body">
                                        
                                        <table class="layui-table">
                                            <colgroup>
                                                <col width="30%">
                                                <col width="30%">
                                                <col width="30%">
                                                <col>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>行政区</th>
                                                    <th>地区</th>
                                                    <th>分数</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>省级</td>
                                                    <td><?php echo $wxHero['data']['province']; ?></td>
                                                    <td><?php echo $wxHero['data']['provincePower']; ?></td>
                                                </tr>
                                                <tr>
                                                    <td>市级</td>
                                                    <td><?php echo $wxHero['data']['city']; ?></td>
                                                    <td><?php echo $wxHero['data']['cityPower']; ?></td>   
                                                </tr>
                                                <tr>
                                                    <td>区级</td>
                                                    <td><?php echo $wxHero['data']['area']; ?></td>
                                                    <td><?php echo $wxHero['data']['areaPower']; ?></td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md6">
                            
                            <div class="layui-card">
                                
                                <div class="layui-tab layui-tab-brief layadmin-latestData">
                                    <div class="layui-card-header" style="color:#009688;font-weight:600;">苹果QQ区</div>
                                    <div class="layui-card-body">
                    
                                        <table class="layui-table">
                                            <colgroup>
                                                <col width="30%">
                                                <col width="30%">
                                                <col width="30%">
                                                <col>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>行政区</th>
                                                    <th>地区</th>
                                                    <th>分数</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>省级</td>
                                                    <td><?php echo $iosqqHero['data']['province']; ?></td>
                                                    <td><?php echo $iosqqHero['data']['provincePower']; ?></td>
                                                </tr>
                                                <tr>
                                                    <td>市级</td>
                                                    <td><?php echo $iosqqHero['data']['city']; ?></td>
                                                    <td><?php echo $iosqqHero['data']['cityPower']; ?></td>   
                                                </tr>
                                                <tr>
                                                    <td>区级</td>
                                                    <td><?php echo $iosqqHero['data']['area']; ?></td>
                                                    <td><?php echo $iosqqHero['data']['areaPower']; ?></td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md6">
                            
                            <div class="layui-card">
                                
                                <div class="layui-tab layui-tab-brief layadmin-latestData">
                                    <div class="layui-card-header" style="color:#009688;font-weight:600;">苹果VX区</div>
                                    <div class="layui-card-body">
                                        
                                        <table class="layui-table">
                                            <colgroup>
                                                <col width="30%">
                                                <col width="30%">
                                                <col width="30%">
                                                <col>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>行政区</th>
                                                    <th>地区</th>
                                                    <th>分数</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>省级</td>
                                                    <td><?php echo $ioswxHero['data']['province']; ?></td>
                                                    <td><?php echo $ioswxHero['data']['provincePower']; ?></td>
                                                </tr>
                                                <tr>
                                                    <td>市级</td>
                                                    <td><?php echo $ioswxHero['data']['city']; ?></td>
                                                    <td><?php echo $ioswxHero['data']['cityPower']; ?></td>   
                                                </tr>
                                                <tr>
                                                    <td>区级</td>
                                                    <td><?php echo $ioswxHero['data']['area']; ?></td>
                                                    <td><?php echo $ioswxHero['data']['areaPower']; ?></td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <div class="layui-row layui-col-space15">
                        
                        <div class="layui-col-md3">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">战区修改</div>
                                <div class="layui-card-body" style="text-align:center">
                                    <div class="layadmin-backlog">
                                        <p>扫码查看改战区教程</p>
                                        <img src='https://z3.ax1x.com/2021/09/29/449g4P.jpg' style="height:120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md3">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">微信打赏</div>
                                <div class="layui-card-body" style="text-align:center">
                                    <div class="layadmin-backlog">
                                        <p>一分也是爱</p>
                                        <img src='https://z3.ax1x.com/2021/09/29/44AFXT.jpg' style="height:120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md3">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">战力小程序</div>
                                <div class="layui-card-body" style="text-align:center">
                                    <div class="layadmin-backlog">
                                        <p>小程序功能更多 谢谢支持</p>
                                        <img src='https://z3.ax1x.com/2021/09/29/44ksYR.jpg' style="height:120px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="layui-col-md3">
                            <div class="layui-card">
                                <div class="layui-card-header" style="color:#009688;font-weight:600;">王者交流群</div>
                                <div class="layui-card-body">
                                    <div class="layadmin-backlog">
                                        <a class="layadmin-backlog-body">
                                            <p>一群：519605531(满)</p>
                                            <p>二群：797843704</p>
                                            <p>二群：797843704</p>
                                            <p>二群：797843704</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="layui-col-md4">
                    <div class="layui-card">
                        <div class="layui-card-header" style="color:#009688;font-weight:600;">注意事项</div>
                        <div class="layui-card-body">
                            <div class="layadmin-backlog">
                                <a class="layadmin-backlog-body">
                                    <p>1、支持安卓、苹果四大战区</p>
                                    <p>2、注意查看采集时间</p>
                                    <p>3、数据来自官方实时数据</p>
                                    <p>4、每周一5点后可改战区</p>
                                    <p>Tips：</p>
                                    <p>接口、源码、小程序、机器人等业务</p>
                                    <p>联系qq727338622</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="layui-col-md4">
                    <div class="layui-card">
                        <div class="layui-card-header" style="color:#009688;font-weight:600;">支付宝红包</div>
                        <div class="layui-card-body" style="text-align:center">
                            <div class="layadmin-backlog">
                                <p>每天可领一次 最高88</p>
                                <img src='https://z3.ax1x.com/2021/09/29/44AAnU.png' style="width:300px" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
<?php
    require_once './include/footer.php';
?>