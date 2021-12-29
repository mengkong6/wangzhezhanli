// 在页面中定义激励视频广告
let videoAd = null

Page({
    data: {
        appConfig: null,
        nameType: [ "空白名", "重复名", "符号名" ],
        kongBaiData: [ "⁠", "⁡", "⁢", "⁣", "​", "　", " " ],
        shuruNu: "",
        cfm: [ "⁠", "⁡", "⁢", "⁣", "​" ],
        upFhRandom: "",
        fhRandom: [ "༺爱༒情༻❦", "✿大白莎҉", "太白 ζั͡~", "奶我 ღ ҉҉҉҉҉҉҉҉҉҉", "✾͡安啦oೄ೨", "挽留 گق", "七爷ღ", "呆猪้๊้๊", "Ꮙ·朝暮", "﹏﹌浪子", "〆乀追风〆乀", "╰☆秋水oO", "ღ҉ 萌哭", "别̶闹̶", "≮错過≯", "﹏๓₯゛妖尾", "ﻬق、ゞ勿忘", "木兰ړ₊", "こ春郎こ", "ৡ蔠嚸 ೄ೨", "演้็员ۣ", "༺思ゝ爷༻", "ℳ_子龙丶℘", "阡陌ั͡✿", "BooM☆*:.｡.", "❀＂怪叔 ღ", "✾͡千夏ೄ೨", "✿͡小雪怪", "❀﹏๓₯毒药", "๓҉ 北风寒", "萱萱✿ۣว", "❀ൢ柠萌ൢ❀", "ᖬིཊ风ཊᖪྀ", "༺―花痴―༻", "橙̶妹̶م", "小̸师̸妹̸", "冬ོ雨ོ", "南辞ꦿ゜এ", "এ᭄燕ོꦿృ༊", "ღ龙儿᭄ꦿ࿐", "梦ꦿ` ", "六道仙ོ人ꦿ", "枫叶⸙", "¸₋ 尐〣 ҉", "红้็颜ۣۖ", "IPhone8s☃☃", "ℳÇ҉丶樱桃", "国服路人王℡", "ζ❀汤圆圆ى", "ೄ冷೨胤๓", ":*☆言溪☆*:", "ζั͡✾情缘҉", "گق  鹿十", "三้็年ۣۖ", "依赖ღ҉", "❢星星点灯❣", "兔子 ҉", "✿•ᴥ•✿", "Ꮙ·思绪", "╰⋛默然⋚╯", "❦花璃༺", "ღ҉ ୨花秀୧❀", "玩ۚ味ۣۖ", "〆灬小妖精ゝ", "༽༾M神༿༼", "҈Ͽ风流倜傥 ೃ", "戰メ六月✿", "*☻宇哥☻*", "贝塔✿", "買酔℡浅唱", "⊱終極喫貨⊰", "☂ღ҉ 17歲", "凉城  ةم", "隼龙سً", "ღ゛5 殺 ❀", "༂芬༒奇༂℡", "、Mi❅小白ヅ", "你瞅啥✪", "ご啻耀★龙涎ぃ", "♚陪她终老❦", "҉   苏沐", "༺ༀ清风ༀ༻", "❀ 临风", "触手寂风ღ", ".ت‿逸ツ", "₰ ゝ老酒﷼", "￡死神的メ镰刀ぃ", "꧁༺强༻꧂ღ", "❀҉风走了", "๛๓㎖°乱神", "ζ͡✾帝❦岚", "₯ღ゛提笔⁶", "︻安▅▆▇◤", "ζั͡✿鴻ى", "♚_乔巴.ღ", "ゝ狂三ゞ", "❦酒༒客❦꧂", "╬魍魉็้๘", "༺棒༒锤༻", "༺☜千羽☞༻", "ご狂刀☞先生", "瓶装水ღ҉", "༺冷江月༻", "♪以梦为马☂", "*☻奈何☻*", "ず夜空下的流星ゞ", "Ꮙ·大宝剑", "✿..魂淡°", "ぴ懒癌晚期〆", "誓☪༺宝er༻", "D̶i̶e̶", "༺梦境缠绕༻", "₯๑  达浪و", "✿森屿༻ℳ", "๘苏妲己໑", "Ꮙ·朝暮", "웃 ღ 유", "夏目君がۣۖ", "肉肉  ړ₊" ],
        arrayFuhao: [ "枫叶⸙", "学妹²⁰¹⁹", "ζ❀梦ى", "红้็颜ۣۖ", "╰☆秋风oO", "南辞ꦿ゜এ", "℡渣男ヾ", "瞅啥✪", "✿大叔ღ", "依赖ღ҉", "ღ叶❧秋", "এ᭄燕ོꦿృ༊", "六道仙ོ人ꦿ", "︻安▅▆▇◤", "梦ꦿ`", "じ☆ve", "﹋", "﹌", "꧔ꦿ", "☂", "༺࿈༻", "❀༒❀", "༺༽༾ཊ࿈ཏ༿༼༻", "☄", "༊", "情ོོꦿ℘", "☯", "࿊", "ℳ", "✎", "✏", "✐", "ᨐ", "˙⚇˙", "☃", "囍", "♪", "♩", "♫", "♬", "⚢", "⚣", "✘", "㊣", "࿆", "♞", "♡", "♤", "☾", "☽", "☼", "✭", "✬", "✫", "✰", "✧", "✦", "⋆", "❀", "❋", "❃", "❁", "✿", "✾", "✽", "♜", "♛", "♚", "♕", "♔", "ʚɞ ", "ʚΐɞ ", "▒", "̈́͒", "₯", "҉", "ღ ", "ฬ ", "ะ ", "๏", "๛", "๗", "๓", "๑", "ჲ ", "ჯ ", "ტ ", "ლ ", "დ ", " ر ", "ε ", "з ", "﹅", "﹆", "★", "㍊", "㍍", "㍑", "㌫", "㌍", "㌫", "㌶", "❤", "♥", "删除线→", "̶", "上排数字： º¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼ ", "下排数字：₀₁₂₃₄₅₆₇₈₉₊₋₌ ", "上排： ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ", "上排： ᴬ ᴮ ᒼ ᴰ ᴱ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴼ̴ ᴿ ˢ ᵀ ᵁ ᵂ ˣ ᵞ ᙆ " ],
        examplePic: [ {
            pic_1: "../../images/rename/kbpic_1.jpg",
            pic_2: "../../images/rename/kbpic_2.jpg"
        }, {
            pic_1: "../../images/rename/cfpic_1.jpg",
            pic_2: "../../images/rename/cfpic_2.jpg"
        }, {
            pic_1: "../../images/rename/fhpic_1.jpg",
            pic_2: "../../images/rename/fhpic_2.jpg"
        } ],
        qas: [ "1、名字有限 先到先得", "2、进入游戏粘贴‘提示重复’，说明已被前人占用", "3、空白名、重复名每次随机生成，都不一样", "4、安卓苹果手机均完美显示", "5、空白名数量是有限的，且改且珍惜", "6、太火的重复名可能无法生成。如果你有耐心，不断去尝试生成，可以捡漏！" ],
        TabCur: 0
    },
    tabSelect: function(t) {
        this.setData({
            TabCur: t.currentTarget.dataset.id
        });
    },
    
    copyName: function(e){
        var type = e.currentTarget.dataset.type;
        if(type == 'kongbai'){
            this.konbaibut(); 
        } else if (type == 'chongfu'){
            this.chongfubut();
        } else if (type == 'random'){
            this.bindFhRandom(); 
        }
    },

    konbaibut: function() {
        for (var t = this.data.kongBaiData, a = "", o = 0; o < 6; o++) a += t[Math.floor(Math.random() * t.length)];
        wx.setClipboardData({
            data: a,
            fail: function() {
                wx.showToast({
                    title: "请求失败，网络异常",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    chongfuInput: function(t) {
        this.setData({
            shuruNu: t.detail.value
        });
    },
    chongfubut: function() {
        var t = this.data.shuruNu, a = this.data.cfm;
        if ("" == t) wx.showModal({
            content: "请输入昵称",
            showCancel: !1
        }); else if (t.length > 5) wx.showModal({
            content: "输入昵称最长长度不能大于5",
            showCancel: !1
        }); else {
            var o = "";
            if (1 == t.length) {
                for (var n = 0; n < 5; n++) o = a[Math.round(Math.random() * (a.length - 1))] + o;
                console.log(o);
            } else if (2 == t.length) {
                for (var e = 0; e < 4; e++) o = a[Math.round(Math.random() * (a.length - 1))] + o;
                console.log(o);
            } else if (3 == t.length) {
                for (var i = 0; i < 3; i++) o = a[Math.round(Math.random() * (a.length - 1))] + o;
                console.log(o);
            } else if (4 == t.length) {
                for (var s = 0; s < 2; s++) o = a[Math.round(Math.random() * (a.length - 1))] + o;
                console.log(o);
            } else o = a[Math.round(Math.random() * (a.length - 1))], console.log(o);
            var h = "";
            for (var l = this.data.shuruNu.split(""), r = Math.round(Math.random() * (l.length - 1)), c = 0; c < l.length; c++) r == c ? h = h + l[c] + o : h += l[c];
            console.log(h), wx.setClipboardData({
                data: h,
                fail: function() {
                    wx.showToast({
                        title: "请求失败，网络异常",
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    bindFhRandom: function() {
        var t = Math.round(Math.random() * (this.data.fhRandom.length - 1));
        this.setData({
            upFhRandom: this.data.fhRandom[t]
        });
    },
    longFhRandom: function(t) {
        this.data.upFhRandom ? wx.setClipboardData({
            data: this.data.upFhRandom,
            success: function(t) {
                wx.showToast({
                    title: "内容已复制",
                    icon: "success",
                    duration: 2000
                });
            }
        }) : wx.showModal({
            content: "请先随机生成",
            showCancel: !1
        });
    },
    longHotText: function(t) {
        console.log("点击", t.currentTarget.dataset.text), wx.setClipboardData({
            data: t.currentTarget.dataset.text,
            success: function(t) {
                wx.showToast({
                    title: "内容已复制",
                    icon: "success",
                    duration: 2000
                });
            }
        });
    },
    onLoad: function() {
        var appConfig = wx.getStorageSync('appConfig');
        this.setData({
          appConfig: appConfig
        });
    },
	onShareAppMessage: function () {
		var shareObj = {
			title: "王者重复名生成器",
			path: '/pages/rename/rename',
			imageUrl: '/images/share_rename.png'
		};
		return shareObj;
	}
});