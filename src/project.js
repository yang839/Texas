require=function n(a,c,s){function p(o,e){if(!c[o]){if(!a[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(l)return l(o,!0);var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}var r=c[o]={exports:{}};a[o][0].call(r.exports,function(e){return p(a[o][1][e]||e)},r,r.exports,n,a,c,s)}return c[o].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)p(s[e]);return p}({clickAudio:[function(e,o,t){"use strict";cc._RF.push(o,"ce8cepoGwlLt4CeEIc71zmB","clickAudio"),Object.defineProperty(t,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,n=i.property,a=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.prototype.onLoad=function(){},o.prototype.backClick=function(){this.node.removeFromParent()},o.prototype.playBtnAudio=function(){"1"==(cc.sys.localStorage.getItem("gameSound")||"1")&&cc.audioEngine.play(this.btnAudio,!1,1)},o.prototype.playChipsAudio=function(){"1"==(cc.sys.localStorage.getItem("gameSound")||"1")&&cc.audioEngine.play(this.btnChipsAudio,!1,1)},__decorate([n(cc.AudioClip)],o.prototype,"btnAudio",void 0),__decorate([n(cc.AudioClip)],o.prototype,"btnChipsAudio",void 0),o=__decorate([r],o)}(cc.Component);t.default=a,cc._RF.pop()},{}],dezhouAlgorithm:[function(e,o,t){"use strict";cc._RF.push(o,"f1aaaV+g0NLCoJaR4wqk6yk","dezhouAlgorithm"),Object.defineProperty(t,"__esModule",{value:!0});var a,i,r=cc._decorator,n=r.ccclass;r.property;(i=a||(a={}))[i.TYPE_1_DANPAI=0]="TYPE_1_DANPAI",i[i.TYPE_2_YIDUI=1]="TYPE_2_YIDUI",i[i.TYPE_3_LIANGDUI=2]="TYPE_3_LIANGDUI",i[i.TYPE_4_SANTIAO=3]="TYPE_4_SANTIAO",i[i.TYPE_5_SHUNZI=4]="TYPE_5_SHUNZI",i[i.TYPE_6_TONGHUA=5]="TYPE_6_TONGHUA",i[i.TYPE_7_HULU=6]="TYPE_7_HULU",i[i.TYPE_8_SITIAO=7]="TYPE_8_SITIAO",i[i.TYPE_9_TONGHUASHUN=8]="TYPE_9_TONGHUASHUN",i[i.TYPE_10_MAXTONGHUASHUN=9]="TYPE_10_MAXTONGHUASHUN";var c=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.pokerMaxPoint=15,e.pokerMaxColor=4,e.colorNumberArr=[],e.pointNumberArr=[],e._playerPokerInfo={infoType:a.TYPE_1_DANPAI,infoPoint:[]},e}return __extends(e,o),e.prototype.getPokerSort=function(e,o){return e-o},e.prototype.getPokerPoint=function(e){return 255&e},e.prototype.getPokerColor=function(e){return e>>8},e.prototype.initPokerColorAndPoint=function(){this._playerPokerInfo={infoType:a.TYPE_1_DANPAI,infoPoint:[]},this.colorNumberArr=[];for(var e=0;e<this.pokerMaxColor;e++)this.colorNumberArr.push(0);this.pointNumberArr=[];for(e=0;e<this.pokerMaxPoint;e++)this.pointNumberArr.push(0)},e.prototype.getCurrPokerType=function(e){e.sort(this.getPokerSort);for(var o=[],t=[],i=0;i<e.length;i++){var r=e[i];o.push(this.getPokerPoint(r)),t.push(this.getPokerColor(r))}this.initPokerColorAndPoint();for(var n=0;n<t.length;n++)this.colorNumberArr[t[n]]++;for(var a=0;a<o.length;a++)this.pointNumberArr[o[a]]++;return this.judgementPokerType(o,t)},e.prototype.judgementPokerType=function(e,o){for(var t=!1,i=0,r=0;r<this.colorNumberArr.length;r++){5<=this.colorNumberArr[r]&&(i=r,t=!0)}if(t){var n=this.isTonghuaPoker(e,o,i);this.isTypeShunzi(n)?this._playerPokerInfo.infoPoint[0]==this.pokerMaxPoint?this._playerPokerInfo.infoType=a.TYPE_10_MAXTONGHUASHUN:this._playerPokerInfo.infoType=a.TYPE_9_TONGHUASHUN:this.isTypeDanpai(n)&&(this._playerPokerInfo.infoType=a.TYPE_6_TONGHUA)}else this.isTypeSitiao(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_8_SITIAO:this.isTypeHulu(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_7_HULU:this.isTypeShunzi(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_5_SHUNZI:this.isTypeSantiao(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_4_SANTIAO:this.isTypeLiangdui(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_3_LIANGDUI:this.isTypeYidui(this.pointNumberArr)?this._playerPokerInfo.infoType=a.TYPE_2_YIDUI:this.isTypeDanpai(this.pointNumberArr)&&(this._playerPokerInfo.infoType=a.TYPE_1_DANPAI);return this._playerPokerInfo},e.prototype.isTonghuaPoker=function(e,o,t){for(var i=[],r=0;r<o.length;r++){o[r]==t&&i.push(e[r])}return i},e.prototype.isTypeSitiao=function(e){for(var o=0,t=0;t<e.length;t++){4==e[t]&&(o=t)}return 0!=o&&(this._playerPokerInfo.infoPoint.push(o),this.getDanpaiNumber(e,2,1),!0)},e.prototype.isTypeHulu=function(e){for(var o=0,t=0,i=0;i<e.length;i++){var r=e[i];3==r&&(o=i),2==r&&(t=i)}return 0!=o&&0!=t&&(this._playerPokerInfo.infoPoint.push(o),this._playerPokerInfo.infoPoint.push(t),!0)},e.prototype.isTypeShunzi=function(e){for(var o=0,t=0,i=0;i<e.length;i++){var r=e[i];if(0!=r){if(4<=r)return!1;if(t=0,(o=i)<e.length-5){for(;0<e[o+1]&&o<e.length;)o++,t++;if(4<=t)return this._playerPokerInfo.infoPoint.push(o),!0}}}return!1},e.prototype.isTypeSantiao=function(e){for(var o=0,t=0;t<e.length;t++){3==e[t]&&(o=t)}return 0!=o&&(this.getDanpaiNumber(e,2,0),this._playerPokerInfo.infoPoint.push(o),this._playerPokerInfo.infoPoint.reverse(),!0)},e.prototype.isTypeLiangdui=function(e){for(var o=0,t=0;t<e.length;t++){2==e[t]&&(o++,2<=this._playerPokerInfo.infoPoint.length&&this._playerPokerInfo.infoPoint.splice(1,1),this._playerPokerInfo.infoPoint.push(t),this._playerPokerInfo.infoPoint.reverse())}return 2<=o?(this.getDanpaiNumber(e,3,2),!0):!(this._playerPokerInfo.infoPoint=[])},e.prototype.isTypeYidui=function(e){for(var o=0,t=0;t<e.length;t++){2==e[t]&&(o=t)}return 0!=o&&(this.getDanpaiNumber(e,3,0),this._playerPokerInfo.infoPoint.push(o),this._playerPokerInfo.infoPoint.reverse(),!0)},e.prototype.isTypeDanpai=function(e){return this.getDanpaiNumber(e,5,0),this._playerPokerInfo.infoPoint.reverse(),!0},e.prototype.getDanpaiNumber=function(e,o,t){for(var i=0;i<e.length;i++){1==e[i]&&(this._playerPokerInfo.infoPoint.length>=o&&this._playerPokerInfo.infoPoint.splice(t,1),this._playerPokerInfo.infoPoint.push(i))}},e.prototype.getPointSort=function(e,o){var t=255&e,i=255&o;return t===i?(e>>8)-(o>>8):t-i},e.prototype.gameBipaiCalculation=function(e,o){if(e.infoType<o.infoType)return 2;if(e.infoType==o.infoType){for(var t=0;t<e.infoPoint.length;t++){var i=e.infoPoint[t],r=o.infoPoint[t];if(i!=r)return i<r?2:1}return 0}return 1},e=__decorate([n],e)}(cc.Component);t.default=c,cc._RF.pop()},{}],gameScene:[function(e,o,t){"use strict";cc._RF.push(o,"b0bcdZ1/WpGeLsJftqeUqTe","gameScene"),Object.defineProperty(t,"__esModule",{value:!0});var i=e("./pkPrefab"),r=e("./dezhouAlgorithm"),s=e("./playAudio"),n=cc._decorator,a=n.ccclass,c=n.property,p=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.gameShowPopupNode=void 0,e.popupNodePrefab=void 0,e.userGoldLable=void 0,e.gameBetsChipsBtnNode=void 0,e.gameBetsChipsTotleLabel=void 0,e.gamePlayAudio=void 0,e.showPokerNode=[],e.showBetsChipsNode=void 0,e.gamePokerPrefab=void 0,e.chipsNodePrefab=void 0,e.gameTimeNode=void 0,e.gameFapaiBtnNode=void 0,e.showResultScoreNode=void 0,e.allPokerInfoArr=[],e.allotGamePokerArr=[[],[],[]],e.gameBetsChipsTotleNumber=0,e._pokersPrefab=void 0,e._dezhouAlgorithm=void 0,e._playAudio=void 0,e.gameCountTimeNumber=8,e.gameCurrTimeNumber=0,e}return __extends(e,o),e.prototype.onLoad=function(){this._dezhouAlgorithm=new r.default,this._pokersPrefab=cc.instantiate(this.gamePokerPrefab).getComponent("pkPrefab"),this._playAudio=cc.instantiate(this.gamePlayAudio).getComponent("playAudio"),this.setUserGoldShow(),this.gameStartGo(this.gameCountTimeNumber)},e.prototype.gameStartGo=function(e){var t=this;this._playAudio.playGameSound(s.playAudioFile.file_startBets),this.gameCurrTimeNumber=e,this.initGameInfo(),this.createAllPoker(),this.allotGamePokerArr.forEach(function(e,o){t.showAllotPoker(e,o)}),this.playPokerAni(),this.unschedule(this.gameSchedule),this.gameTimeNode.active=!0,this.schedule(this.gameSchedule,1)},e.prototype.gameSchedule=function(){this.gameCurrTimeNumber--,this.gameCurrTimeNumber<=0?(this.gameTimeNode.getChildByName("timeNumber").getComponent(cc.Label).string=this.gameCurrTimeNumber.toString(),this.gameTimeNode.active=!1,this.gameFapaiClick()):(this.gameCurrTimeNumber<=3&&this._playAudio.playGameSound(s.playAudioFile.file_time),this.gameTimeNode.getChildByName("timeNumber").getComponent(cc.Label).string=this.gameCurrTimeNumber.toString())},e.prototype.initGameInfo=function(){this.showResultScoreNode.active=!1,this.showResultScoreNode.setPosition(cc.v2(65,55)),this.refreshBetsChipsBtnState(!1),this.gameBetsChipsTotleNumber=0,this.refreshScoreInfo(0),this.showBetsChipsNode.removeAllChildren(!0),this.showPokerNode.forEach(function(e){e.removeAllChildren(!0)})},e.prototype.gameBtnClick=function(e,o){if("back"==o)cc.director.loadScene("hallScene");else if("fapai"==o)this.gameFapaiClick();else{var t=cc.instantiate(this.popupNodePrefab);t.getComponent("popupLayer").setPopupShowNode(o,"gameScene"),this.gameShowPopupNode.addChild(t)}},e.prototype.gameFapaiClick=function(){for(var e=function(e){var o=c.showPokerNode[2].children[e];if(!o.active){c.allotGamePokerArr[0].push(c.allotGamePokerArr[2][e]),c.allotGamePokerArr[1].push(c.allotGamePokerArr[2][e]);var t=c;c.unschedule(c.gameSchedule),c.gameTimeNode.active=!1,c.refreshBetsChipsBtnState(!1),o.active=!0;var i=o.getPosition();o.setPositionY(i.y+300);var r=cc.callFunc(function(){t.refreshBetsChipsBtnState(!0),4==e?(t._playAudio.playGameSound(s.playAudioFile.file_stopBets),t.scheduleOnce(t.gameSettlementInfo,2),t.refreshBetsChipsBtnState(!1)):(t.gameCurrTimeNumber=t.gameCountTimeNumber,t.gameTimeNode.getChildByName("timeNumber").getComponent(cc.Label).string=t.gameCurrTimeNumber.toString(),t.gameTimeNode.active=!0,t.schedule(t.gameSchedule,1))}),n=cc.spawn(cc.moveTo(.15,i),cc.rotateBy(.15,360)),a=cc.sequence(n,cc.delayTime(.1),r);return o.runAction(a),c._playAudio.playGameSound(s.playAudioFile.file_gameFapai),{value:void 0}}},c=this,o=0;o<this.showPokerNode[2].children.length;o++){var t=e(o);if("object"==typeof t)return t.value}},e.prototype.gameSettlementInfo=function(){var r=this,e="",o=Number(cc.sys.localStorage.getItem("userGold")),n=cc.v2(0,0);cc.log("this.allotGamePokerArr[0] = "+this.allotGamePokerArr[0]),cc.log("this.allotGamePokerArr[1] = "+this.allotGamePokerArr[1]);var t=this._dezhouAlgorithm.getCurrPokerType(this.allotGamePokerArr[0]);cc.log("myPokerType = "+JSON.stringify(t));var i=this._dezhouAlgorithm.getCurrPokerType(this.allotGamePokerArr[1]);cc.log("zPokerType = "+JSON.stringify(i));var a=this._dezhouAlgorithm.gameBipaiCalculation(t,i);1==a?(this._playAudio.playGameSound(s.playAudioFile.file_gameWin),o+=2*this.gameBetsChipsTotleNumber,n=cc.v2(-370,-245),e="+"+2*this.gameBetsChipsTotleNumber):2==a?(this._playAudio.playGameSound(s.playAudioFile.file_gameLose),n=cc.v2(0,270),e="-"+this.gameBetsChipsTotleNumber):(this._playAudio.playGameSound(s.playAudioFile.file_gameWin),o+=this.gameBetsChipsTotleNumber,e="+"+this.gameBetsChipsTotleNumber),this.showPokerNode[1].children.forEach(function(e,o){1==o&&(r._pokersPrefab.getCardBackAni(e),e.runAction(cc.scaleBy(.5,-1,1)))}),cc.sys.localStorage.setItem("userGold",o),this.setUserGoldShow(),this.showBetsChipsNode.children.forEach(function(e,o){0==o&&r._playAudio.playGameSound(s.playAudioFile.file_choumaJS);var t=cc.callFunc(function(){e.active=!1});if(0==a){var i=void 0;i=r.showBetsChipsNode.children.length/2>o?cc.sequence(cc.moveTo(.5,cc.v2(-370,-245)),t):cc.sequence(cc.moveTo(.5,cc.v2(0,270)),t),e.runAction(i)}else{i=cc.sequence(cc.moveTo(.5,n),t);e.runAction(i)}}),this.showResultScoreNode.getComponent(cc.Label).string=e,this.showResultScoreNode.active=!0,this.showResultScoreNode.scale=.2;var c=cc.spawn(cc.scaleTo(.5,1),cc.moveTo(.5,cc.v2(this.showResultScoreNode.getPositionX(),this.showResultScoreNode.getPositionY()+10)));this.showResultScoreNode.runAction(c),this.scheduleOnce(this.nextGame,4)},e.prototype.nextGame=function(){this.gameStartGo(this.gameCountTimeNumber)},e.prototype.changeBetsChipsClick=function(e,o){this.refreshScoreInfo(Number(o),e.target)},e.prototype.refreshBetsChipsBtnState=function(o,e){this.gameBetsChipsBtnNode.children.forEach(function(e){e.getComponent(cc.Button).interactable=o}),this.gameFapaiBtnNode.getComponent(cc.Button).interactable=o,e&&(e.getComponent(cc.Button).interactable=o)},e.prototype.createChipsShow=function(e){this._playAudio.playGameSound(s.playAudioFile.file_chouma);var o=cc.instantiate(this.chipsNodePrefab);o.getComponent(cc.Sprite).spriteFrame=e.getComponent(cc.Sprite).spriteFrame;var t=this.showBetsChipsNode.convertToNodeSpace(e.getPosition());o.setPosition(cc.v2(t.x+290+e.getContentSize().width,t.y)),o.active=!0,this.showBetsChipsNode.addChild(o);var i=Math.floor(Math.random()*(this.showBetsChipsNode.getContentSize().width/2))-40,r=Math.floor(Math.random()*(this.showBetsChipsNode.getContentSize().height/2))-20;i=10*Math.random()<5?i:-i,r=10*Math.random()<5?r:-r;var n=340*Math.random()+20,a=cc.spawn(cc.moveTo(.3,cc.v2(i,r)),cc.rotateTo(.3,n));o.runAction(a)},e.prototype.refreshScoreInfo=function(e,o){var t=Number(cc.sys.localStorage.getItem("userGold"));if(t<e){var i=cc.instantiate(this.popupNodePrefab);return i.getComponent("popupLayer").setPopupShowNode("4","gameScene","金币不足，请购买！"),void this.gameShowPopupNode.addChild(i)}var r=(t-e).toString();cc.sys.localStorage.setItem("userGold",r),this.userGoldLable.string=r,this.gameBetsChipsTotleNumber+=e,this.gameBetsChipsTotleLabel.string=this.gameBetsChipsTotleNumber.toString(),o&&this.createChipsShow(o)},e.prototype.setUserGoldShow=function(){this.userGoldLable.string=cc.sys.localStorage.getItem("userGold")},e.prototype.createAllPoker=function(){this.allPokerInfoArr=[];for(var e=i.pokerPoint.PK_POINT_2;e<=i.pokerPoint.PK_POINT_A;e++)for(var o=i.pokerColor.PK_COLOR_SPADES;o<=i.pokerColor.PK_COLOR_DIAMOND;o++){var t=this.definePokerInfo(o,e);this.allPokerInfoArr.push(t)}this.allotGamePoker()},e.prototype.definePokerInfo=function(e,o){return e<<8|o},e.prototype.allotGamePoker=function(){this.allotGamePokerArr=[[],[],[]];for(var e=[],o=0,t=this.allPokerInfoArr.length;o<t;o++){var i=Math.floor(Math.random()*this.allPokerInfoArr.length);e.push(this.allPokerInfoArr[i]),this.allPokerInfoArr.splice(i,1)}for(o=0;o<e.length;o++)o<2?this.allotGamePokerArr[0].push(e[o]):o<4?this.allotGamePokerArr[1].push(e[o]):o<9&&this.allotGamePokerArr[2].push(e[o])},e.prototype.showAllotPoker=function(e,o){e.sort(this._dezhouAlgorithm.getPointSort);for(var t=0;t<e.length;t++){var i=e[t],r=this._pokersPrefab.createPokerNode(i);2==o?r.active=!1:(r.scaleX=-1,this._pokersPrefab.setPokerBackShow(r,!0)),this.showPokerNode[o].addChild(r),this.showPokerNode[o].getComponent(cc.Layout).updateLayout()}},e.prototype.playPokerAni=function(){var t=this,e=this,o=cc.callFunc(function(){e.refreshBetsChipsBtnState(!0)});this.showPokerNode[0].children.forEach(function(e){t._pokersPrefab.getCardBackAni(e),e.runAction(cc.sequence(cc.scaleBy(.5,-1,1),o))}),this.showPokerNode[1].children.forEach(function(e,o){0==o&&(t._pokersPrefab.getCardBackAni(e),e.runAction(cc.scaleBy(.5,-1,1)))})},__decorate([c(cc.Node)],e.prototype,"gameShowPopupNode",void 0),__decorate([c(cc.Prefab)],e.prototype,"popupNodePrefab",void 0),__decorate([c(cc.Label)],e.prototype,"userGoldLable",void 0),__decorate([c(cc.Node)],e.prototype,"gameBetsChipsBtnNode",void 0),__decorate([c(cc.Label)],e.prototype,"gameBetsChipsTotleLabel",void 0),__decorate([c(cc.Prefab)],e.prototype,"gamePlayAudio",void 0),__decorate([c(cc.Node)],e.prototype,"showPokerNode",void 0),__decorate([c(cc.Node)],e.prototype,"showBetsChipsNode",void 0),__decorate([c(cc.Prefab)],e.prototype,"gamePokerPrefab",void 0),__decorate([c(cc.Node)],e.prototype,"chipsNodePrefab",void 0),__decorate([c(cc.Node)],e.prototype,"gameTimeNode",void 0),__decorate([c(cc.Node)],e.prototype,"gameFapaiBtnNode",void 0),__decorate([c(cc.Node)],e.prototype,"showResultScoreNode",void 0),e=__decorate([a],e)}(cc.Component);t.default=p,cc._RF.pop()},{"./dezhouAlgorithm":"dezhouAlgorithm","./pkPrefab":"pkPrefab","./playAudio":"playAudio"}],hallScene:[function(e,o,t){"use strict";cc._RF.push(o,"f2e58pv0yNFIKzEDrwxGWIF","hallScene"),Object.defineProperty(t,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,n=i.property,a=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.userGoldLable=void 0,e.hallShowPopupNode=void 0,e.popupLayerPrefab=void 0,e}return __extends(e,o),e.prototype.onLoad=function(){cc.sys.localStorage.setItem("userGold","100000")},e.prototype.gameTypeBtnClick=function(){cc.director.loadScene("gameScene")},e.prototype.hallBtnClick=function(e,o){var t=cc.instantiate(this.popupLayerPrefab);t.getComponent("popupLayer").setPopupShowNode(o,"hallScene"),this.hallShowPopupNode.addChild(t)},e.prototype.setUserGoldShow=function(){this.userGoldLable.string=cc.sys.localStorage.getItem("userGold")},__decorate([n(cc.Label)],e.prototype,"userGoldLable",void 0),__decorate([n(cc.Node)],e.prototype,"hallShowPopupNode",void 0),__decorate([n(cc.Prefab)],e.prototype,"popupLayerPrefab",void 0),e=__decorate([r],e)}(cc.Component);t.default=a,cc._RF.pop()},{}],loadingScene:[function(e,o,t){"use strict";cc._RF.push(o,"8bac6o4QqdN+rOEf2VWWbjE","loadingScene"),Object.defineProperty(t,"__esModule",{value:!0});var i=e("./playAudio"),r=cc._decorator,n=r.ccclass,a=r.property,c=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.sprLoading=void 0,e.btnDlNode=void 0,e.loadingAudioNode=void 0,e.loadingAnimation_1=void 0,e.loadingAnimation_2=void 0,e.loadingAnimation_3=void 0,e.loadingAnimation_4=void 0,e.isAnimation=!0,e}return __extends(e,o),e.prototype.onLoad=function(){this.btnDlNode.active=!1;var e=this,o=cc.callFunc(function(){e.sprLoading.active=!1,e.btnDlNode.active=!0});this.sprLoading.runAction(cc.sequence(cc.repeat(cc.rotateBy(.5,360),2),o)),this.loadingAudioNode.data.getComponent("playAudio").init(i.playAudioFile.file_bgm),this.schedule(this.animationSchedule,1)},e.prototype.animationSchedule=function(){if(1==this.isAnimation){this.isAnimation=!1;var e=this;if(this.loadingAnimation_1.getNumberOfRunningActions()<=0){var o=100+(10*Math.random()<5?-10:10),t=cc.moveTo(.5,cc.v2(this.loadingAnimation_1.getPositionX(),o)),i=cc.moveTo(.5,cc.v2(this.loadingAnimation_1.getPositionX(),100)),r=cc.delayTime(Math.floor(Math.random()+.3)),n=cc.callFunc(function(){e.isAnimation=!0}),a=cc.sequence(r,t,i,n);this.loadingAnimation_1.runAction(a)}if(this.loadingAnimation_2.getNumberOfRunningActions()<=0){o=(10*Math.random()<5?-10:10)-5,t=cc.moveTo(.5,cc.v2(this.loadingAnimation_2.getPositionX(),o)),i=cc.moveTo(.5,cc.v2(this.loadingAnimation_2.getPositionX(),-5)),r=cc.delayTime(Math.floor(Math.random()+.2)),n=cc.callFunc(function(){e.isAnimation=!0}),a=cc.sequence(r,t,i,n);this.loadingAnimation_2.runAction(a)}if(this.loadingAnimation_3.getNumberOfRunningActions()<=0){o=22+(10*Math.random()<5?-10:10),t=cc.moveTo(.5,cc.v2(this.loadingAnimation_3.getPositionX(),o)),i=cc.moveTo(.5,cc.v2(this.loadingAnimation_3.getPositionX(),22)),r=cc.delayTime(Math.floor(Math.random()+.4)),n=cc.callFunc(function(){e.isAnimation=!0}),a=cc.sequence(r,t,i,n);this.loadingAnimation_3.runAction(a)}if(this.loadingAnimation_4.getNumberOfRunningActions()<=0){o=240+(10*Math.random()<5?-10:10),t=cc.moveTo(.5,cc.v2(this.loadingAnimation_4.getPositionX(),o)),i=cc.moveTo(.5,cc.v2(this.loadingAnimation_4.getPositionX(),240)),r=cc.delayTime(Math.floor(Math.random()+.4)),n=cc.callFunc(function(){e.isAnimation=!0}),a=cc.sequence(r,t,i,n);this.loadingAnimation_4.runAction(a)}}},e.prototype.btnDlClick=function(){cc.director.loadScene("hallScene")},__decorate([a(cc.Node)],e.prototype,"sprLoading",void 0),__decorate([a(cc.Node)],e.prototype,"btnDlNode",void 0),__decorate([a(cc.Prefab)],e.prototype,"loadingAudioNode",void 0),__decorate([a(cc.Node)],e.prototype,"loadingAnimation_1",void 0),__decorate([a(cc.Node)],e.prototype,"loadingAnimation_2",void 0),__decorate([a(cc.Node)],e.prototype,"loadingAnimation_3",void 0),__decorate([a(cc.Node)],e.prototype,"loadingAnimation_4",void 0),e=__decorate([n],e)}(cc.Component);t.default=c,cc._RF.pop()},{"./playAudio":"playAudio"}],pkPrefab:[function(e,o,t){"use strict";var i,r;cc._RF.push(o,"80943nBEc5JJbq3iXQ3xyxw","pkPrefab"),Object.defineProperty(t,"__esModule",{value:!0}),(i=t.pokerPoint||(t.pokerPoint={}))[i.PK_POINT_2=2]="PK_POINT_2",i[i.PK_POINT_3=3]="PK_POINT_3",i[i.PK_POINT_4=4]="PK_POINT_4",i[i.PK_POINT_5=5]="PK_POINT_5",i[i.PK_POINT_6=6]="PK_POINT_6",i[i.PK_POINT_7=7]="PK_POINT_7",i[i.PK_POINT_8=8]="PK_POINT_8",i[i.PK_POINT_9=9]="PK_POINT_9",i[i.PK_POINT_10=10]="PK_POINT_10",i[i.PK_POINT_J=11]="PK_POINT_J",i[i.PK_POINT_Q=12]="PK_POINT_Q",i[i.PK_POINT_K=13]="PK_POINT_K",i[i.PK_POINT_A=14]="PK_POINT_A",(r=t.pokerColor||(t.pokerColor={}))[r.PK_COLOR_NULL=0]="PK_COLOR_NULL",r[r.PK_COLOR_SPADES=1]="PK_COLOR_SPADES",r[r.PK_COLOR_HEART=2]="PK_COLOR_HEART",r[r.PK_COLOR_PLUM=3]="PK_COLOR_PLUM",r[r.PK_COLOR_DIAMOND=4]="PK_COLOR_DIAMOND";var n=cc._decorator,a=n.ccclass,c=n.property,s=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.instantiateNode=void 0,e}return __extends(e,o),e.prototype.createPokerNode=function(e){var o=cc.instantiate(this.instantiateNode);return this.initPokerRes(o,e),o},e.prototype.setPokerBackShow=function(e,o){e.getChildByName("poker_bg_back").active=o},e.prototype.getCardBackAni=function(e){var o=e.getChildByName("poker_bg_back"),t=cc.callFunc(function(){o.active=!1}),i=cc.sequence(cc.fadeIn(.5),t);o.runAction(i)},e.prototype.initPokerRes=function(e,o){e.getChildByName("poker_bg_back").active=!1;var t=e.getChildByName("poker_bg_front"),i=255&o,r=t.getChildByName("icon_2"),n=o>>8,a=this.pkResources.getChildByName("color").getChildByName(n.toString());r&&this.setPokerSpriteFrame(a,r);var c,s=t.getChildByName("icon_3"),p=this.getPokerColor(n);14==i&&(i=1),c=i<11?a:this.pkResources.getChildByName("role_"+p).getChildByName(i.toString()),this.setPokerSpriteFrame(c,s);var l=t.getChildByName("icon_1"),u=this.pkResources.getChildByName("num_"+p).getChildByName(i.toString());this.setPokerSpriteFrame(u,l)},e.prototype.setPokerSpriteFrame=function(e,o){o.getComponent(cc.Sprite).spriteFrame=e.getComponent(cc.Sprite).spriteFrame},e.prototype.getPokerColor=function(e){if(e)return e%2==1?"black":"red"},__decorate([c(cc.Node)],e.prototype,"instantiateNode",void 0),__decorate([c(cc.Node)],e.prototype,"pkResources",void 0),e=__decorate([a],e)}(cc.Component);t.default=s,cc._RF.pop()},{}],playAudio:[function(e,o,t){"use strict";cc._RF.push(o,"4b3a6E9Q1lKX4aKf0y+DuUd","playAudio"),Object.defineProperty(t,"__esModule",{value:!0});var i,r=cc._decorator,n=r.ccclass,a=r.property;(i=t.playAudioFile||(t.playAudioFile={}))[i.file_bgm=0]="file_bgm",i[i.file_gameFapai=1]="file_gameFapai",i[i.file_gameWin=2]="file_gameWin",i[i.file_gameLose=3]="file_gameLose",i[i.file_startBets=4]="file_startBets",i[i.file_chouma=5]="file_chouma",i[i.file_time=6]="file_time",i[i.file_choumaJS=7]="file_choumaJS",i[i.file_stopBets=8]="file_stopBets";var c=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.audioClips=[],e.gameBGMusicIndex=void 0,e}return __extends(e,o),e.prototype.init=function(e){cc.audioEngine.stopAll(),this.playGameMusic(!0,e)},e.prototype.playGameSound=function(e,o){void 0===o&&(o=!1);var t=cc.sys.localStorage.getItem("gameSound")||"1";"1"==t&&cc.audioEngine.play(this.audioClips[e],o,Number(t))},e.prototype.playGameMusic=function(e,o){"0"!=(cc.sys.localStorage.getItem("gameMusic")||"1")&&(e?(this.stopPlayBGMusic(),this.gameBGMusicIndex=cc.audioEngine.play(this.audioClips[o],!0,Number(.2))):null==this.gameBGMusicIndex?this.gameBGMusicIndex=cc.audioEngine.play(this.audioClips[o],!0,Number(.2)):cc.audioEngine.resume(this.gameBGMusicIndex))},e.prototype.stopPlayBGMusic=function(){null!=this.gameBGMusicIndex&&cc.audioEngine.pause(this.gameBGMusicIndex)},__decorate([a(cc.AudioClip)],e.prototype,"audioClips",void 0),e=__decorate([n],e)}(cc.Component);t.default=c,cc._RF.pop()},{}],popupLayer:[function(e,o,t){"use strict";cc._RF.push(o,"bef4dEf2eBCNoA6UVQOZhCm","popupLayer"),Object.defineProperty(t,"__esModule",{value:!0});var i=e("./playAudio"),r=cc._decorator,n=r.ccclass,a=r.property,c=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.popupTileSprite=void 0,e.popupTileSpriteFrame=[],e.popupAudioPrefab=void 0,e.popupShowAllNode=[],e.popupSetMusicNode=void 0,e.popupSetSoundNode=void 0,e._nodeParentName="",e}return __extends(e,o),e.prototype.setPopupShowNode=function(e,o,t){this._nodeParentName=o,this.popupShowAllNode.forEach(function(e){e.active=!1}),this.popupShowAllNode[Number(e)-1].active=!0,this.popupTileSprite.spriteFrame=this.popupTileSpriteFrame[Number(e)-1],t&&(this.popupShowAllNode[Number(e)-1].getChildByName("content").getComponent(cc.Label).string=t),"3"==e&&(this.setMusicNodeShow(),this.setSoundNodeShow())},e.prototype.buyGoldBtnClick=function(e,o){var t=Number(cc.sys.localStorage.getItem("userGold"));cc.sys.localStorage.setItem("userGold",""+(1e3*Number(o)+t)),this.node.parent.parent.parent.getChildByName(this._nodeParentName).getComponent(this._nodeParentName).setUserGoldShow(),this.setPopupShowNode("4",this._nodeParentName,"金币购买成功: +"+1e3*Number(o))},e.prototype.musicOnAndOffClick=function(e,o){"on"==o?(cc.sys.localStorage.setItem("gameMusic","0"),this.stopBGMusic()):(cc.sys.localStorage.setItem("gameMusic","1"),this.playBGMusic()),this.setMusicNodeShow()},e.prototype.setMusicNodeShow=function(){var e=cc.sys.localStorage.getItem("gameMusic")||"1";this.popupSetMusicNode.getChildByName("musicOn").active="1"==e,this.popupSetMusicNode.getChildByName("musicOff").active="1"!=e},e.prototype.soundOnAndOffClick=function(e,o){"on"==o?cc.sys.localStorage.setItem("gameSound","0"):cc.sys.localStorage.setItem("gameSound","1"),this.setSoundNodeShow()},e.prototype.setSoundNodeShow=function(){var e=cc.sys.localStorage.getItem("gameSound")||"1";this.popupSetSoundNode.getChildByName("soundOn").active="1"==e,this.popupSetSoundNode.getChildByName("soundOff").active="1"!=e},e.prototype.playBGMusic=function(){this.popupAudioPrefab.data.getComponent("playAudio").playGameMusic(!1,i.playAudioFile.file_bgm)},e.prototype.stopBGMusic=function(){this.popupAudioPrefab.data.getComponent("playAudio").stopPlayBGMusic()},e.prototype.btnLoadingClick=function(){cc.director.loadScene("loadingScene")},__decorate([a(cc.Sprite)],e.prototype,"popupTileSprite",void 0),__decorate([a(cc.SpriteFrame)],e.prototype,"popupTileSpriteFrame",void 0),__decorate([a(cc.Prefab)],e.prototype,"popupAudioPrefab",void 0),__decorate([a(cc.Node)],e.prototype,"popupShowAllNode",void 0),__decorate([a(cc.Node)],e.prototype,"popupSetMusicNode",void 0),__decorate([a(cc.Node)],e.prototype,"popupSetSoundNode",void 0),e=__decorate([n],e)}(cc.Component);t.default=c,cc._RF.pop()},{"./playAudio":"playAudio"}]},{},["clickAudio","dezhouAlgorithm","gameScene","hallScene","loadingScene","pkPrefab","playAudio","popupLayer"]);