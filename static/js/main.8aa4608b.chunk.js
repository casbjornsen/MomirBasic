(this.webpackJsonpmomir_basic=this.webpackJsonpmomir_basic||[]).push([[0],{102:function(e,a,n){},103:function(e,a,n){"use strict";n.r(a);var t=n(2),r=n(21),c=n.n(r),o=(n(60),n(25)),i=n(7),l=(n(61),n(3)),s=n(17),d=n(20),u=n(14),b=n.n(u),m=n(33),j=n(51),p=n(52),O=n(34),f=n.n(O),h=function(){function e(){Object(j.a)(this,e)}return Object(p.a)(e,[{key:"getRandomCreature",value:function(){var e=Object(m.a)(b.a.mark((function e(a){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.scryfall.com/cards/random?q=cmc%3D".concat(a,"%20type%3Acreature"),e.next=3,f.a.get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"searchTokens",value:function(){var e=Object(m.a)(b.a.mark((function e(a,n,t,r){var c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.scryfall.com/cards/search?include_extras=true&q=".concat(a,"%20is%3Atoken"),void 0!==n&&c.concat("%20pow%3D".concat(n)),void 0!==t&&c.concat("%20tou%3D".concat(t)),void 0!==r&&c.concat("o%3A%22".concat(r,"%22")),e.next=6,f.a.get(c);case 6:return o=e.sent,e.abrupt("return",o.data);case 8:case"end":return e.stop()}}),e)})));return function(a,n,t,r){return e.apply(this,arguments)}}()}]),e}();h.plainsImage="https://c1.scryfall.com/file/scryfall-cards/large/front/c/c/cc3db531-3f21-49a2-8aeb-d98b7db94397.jpg?1597118248",h.islandImage="https://c1.scryfall.com/file/scryfall-cards/large/front/9/1/91595b00-6233-48be-a012-1e87bd704aca.jpg?1597115911",h.swampImage="https://c1.scryfall.com/file/scryfall-cards/large/front/8/e/8e5eef83-a3d4-44c7-a6cb-7f6803825b9e.jpg?1597116662",h.mountainImage="https://c1.scryfall.com/file/scryfall-cards/large/front/6/4/6418bc71-de29-410c-baf3-f63f5615eee2.jpg?1597117048",h.forestImage="https://c1.scryfall.com/file/scryfall-cards/large/front/1/4/146b803f-0455-497b-8362-03da2547070d.jpg?1597117694",h.wastesImage="https://c1.scryfall.com/file/scryfall-cards/large/front/6/9/69b215fe-0d97-4ca1-9490-174220fd454b.jpg?1562916234",h.cardBackImage="https://i.imgur.com/P7qYTcI.png",h.wSymbolImage="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTG_%28W%29.svg/512px-MTG_%28W%29.svg.png",h.uSymbolImage="https://www.pinclipart.com/picdir/big/218-2186106_big-image-mtg-blue-mana-symbol-clipart.png",h.bSymbolImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/MTG_%28B%29.svg/512px-MTG_%28B%29.svg.png",h.rSymbolImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MTG_%28R%29.svg/512px-MTG_%28R%29.svg.png",h.gSymbolImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/MTG_%28G%29.svg/512px-MTG_%28G%29.svg.png",h.cSymbolImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/MTG_%28C%29.svg/500px-MTG_%28C%29.svg.png",h.discardIcon="http://clipart-library.com/img1/678977.png",h.momirAvatarImage="https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f5ed5ad3-b970-4720-b23b-308a25f42887.jpg?1562953277";var y=n(0);var g=function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:e.imgSrc,alt:e.imgAlt,className:e.className}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:e.inputType,name:e.inputId,min:e.min,max:e.max,onChange:e.onChange})]})};var v=function(e){return Object(y.jsxs)("div",{className:e.className,children:[Object(y.jsx)("label",{htmlFor:e.labelId,children:e.labelText}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:e.inputType,name:e.labelId,onChange:e.onChange,value:e.inputValue})]})},x=n(6),C={playerName:"",creatures:[],land:[],lifeTotal:24,manaPool:{white:0,blue:0,black:0,red:0,green:0,colorless:0},library:[],graveyard:[],hand:[]},T=function(e){for(var a=[],n=0;n<e.plains;n++)a.push({name:"plains",image:"".concat(h.plainsImage),isTapped:!1});for(var t=0;t<e.islands;t++)a.push({name:"island",image:"".concat(h.islandImage),isTapped:!1});for(var r=0;r<e.swamps;r++)a.push({name:"swamp",image:"".concat(h.swampImage),isTapped:!1});for(var c=0;c<e.mountains;c++)a.push({name:"mountain",image:"".concat(h.mountainImage),isTapped:!1});for(var o=0;o<e.forests;o++)a.push({name:"forest",image:"".concat(h.forestImage),isTapped:!1});for(var i=0;i<e.wastes;i++)a.push({name:"wastes",image:"".concat(h.wastesImage),isTapped:!1});return a},w=function(e){for(var a,n,t=e.length;0!==t;)n=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[n],e[n]=a;return e},k=function(e,a){var n=e.splice(0,a);return{newLibrary:e,drawnCards:n}},I={reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INIT_PLAYER":var n=T(a.payload.landCount),t=w(n),r=k(t,7),c=Object(x.a)(r.drawnCards),o=[],i=[],s=[],d=a.payload.playerName;return Object(l.a)(Object(l.a)({},e),{},{library:Object(x.a)(r.newLibrary),hand:c,playerName:d,graveyard:o,creatures:i,land:s});case"PLAY_LAND_FROM_HAND":var u=e.hand[a.payload.index],b=[].concat(Object(x.a)(e.land),[u]),m=Object(x.a)(e.hand);return m.splice(a.payload.index,1),Object(l.a)(Object(l.a)({},e),{},{land:b,hand:m});case"DRAW_CARDS_FROM_LIBRARY":var j=Object(x.a)(e.library),p=k(j,a.payload),O=[].concat(Object(x.a)(e.hand),Object(x.a)(p.drawnCards));return Object(l.a)(Object(l.a)({},e),{},{library:p.newLibrary,hand:O});case"SHUFFLE_LIBRARY":var f=w(e.libary);return Object(l.a)(Object(l.a)({},e),{},{library:f});case"INCREMENT_LIFE":return Object(l.a)(Object(l.a)({},e),{},{lifeTotal:e.lifeTotal+1});case"DECREMENT_LIFE":return Object(l.a)(Object(l.a)({},e),{},{lifeTotal:e.lifeTotal-1});case"UPDATE_MANA":var h=Object(l.a)(Object(l.a)({},e.manaPool),a.payload);return Object(l.a)(Object(l.a)({},e),{},{manaPool:h});case"TOGGLE_TAP_CARD":switch(a.payload.zone){case"creatures":var y=Object(x.a)(e.creatures);return y[a.payload.index].isTapped=!y[a.payload.index].isTapped,Object(l.a)(Object(l.a)({},e),{},{creatures:y});case"land":var g=Object(x.a)(e.land);return g[a.payload.index].isTapped=!g[a.payload.index].isTapped,Object(l.a)(Object(l.a)({},e),{},{land:g});default:return e}case"SEND_CARD_TO_ZONE":switch(a.payload.fromZone){case"hand":var v=e.hand[a.payload.index],I=Object(x.a)(e.hand);switch(I.splice(a.payload.index,1),a.payload.toZone){case"graveyard":var N=[v].concat(Object(x.a)(e.graveyard));return Object(l.a)(Object(l.a)({},e),{},{graveyard:N,hand:I});case"land":var _=[].concat(Object(x.a)(e.land),[v]);return Object(l.a)(Object(l.a)({},e),{},{land:_,hand:I});case"librarytop":var E=[v].concat(Object(x.a)(e.library));return Object(l.a)(Object(l.a)({},e),{},{library:E,hand:I});case"librarybottom":var L=[].concat(Object(x.a)(e.library),[v]);return Object(l.a)(Object(l.a)({},e),{},{library:L,hand:I})}case"land":var A=e.land[a.payload.index],R=Object(x.a)(e.land);switch(R.splice(a.payload.index,1),a.payload.toZone){case"graveyard":var D=[A].concat(Object(x.a)(e.graveyard));return Object(l.a)(Object(l.a)({},e),{},{graveyard:D,land:R});case"hand":var S=[].concat(Object(x.a)(e.graveyard),[A]);return Object(l.a)(Object(l.a)({},e),{},{hand:S,land:R});case"librarytop":var M=[A].concat(Object(x.a)(e.library));return Object(l.a)(Object(l.a)({},e),{},{library:M,land:R});case"librarybottom":var P=[].concat(Object(x.a)(e.library),[A]);return Object(l.a)(Object(l.a)({},e),{},{library:P,land:R});default:return e}case"creatures":var F=Object(x.a)(e.creatures);return F.splice(a.payload.index,1),Object(l.a)(Object(l.a)({},e),{},{creatures:F});case"library":var B=e.library[a.payload.index],G=Object(x.a)(e.library);switch(G.splice(a.payload.index,1),a.payload.toZone){case"graveyard":var U=[B].concat(Object(x.a)(e.graveyard));return Object(l.a)(Object(l.a)({},e),{},{graveyard:U,library:G});case"hand":var Z=[].concat(Object(x.a)(e.graveyard),[B]);return Object(l.a)(Object(l.a)({},e),{},{hand:Z,library:G});case"land":var z=[B].concat(Object(x.a)(e.land));return Object(l.a)(Object(l.a)({},e),{},{library:G,land:z});default:return e}case"graveyard":var H=e.graveyard[a.payload.index],Y=Object(x.a)(e.graveyard);switch(Y.splice(a.payload.index,1),a.payload.toZone){case"librarytop":var W=[H].concat(Object(x.a)(e.library));return Object(l.a)(Object(l.a)({},e),{},{graveyard:Y,library:W});case"librarybottom":var K=[].concat(Object(x.a)(e.library),[H]);return Object(l.a)(Object(l.a)({},e),{},{graveyard:Y,library:K});case"hand":var q=[].concat(Object(x.a)(e.hand),[H]);return Object(l.a)(Object(l.a)({},e),{},{hand:q,graveyard:Y});case"land":var X=[].concat(Object(x.a)(e.land),[H]);return Object(l.a)(Object(l.a)({},e),{},{graveyard:Y,land:X});default:return e}}case"FETCH_CREATURE_TOKEN":return Object(l.a)(Object(l.a)({},e),{},{cmc:a.payload});case"ADD_CREATURE_TO_BATTLEFIELD":var J={name:a.payload.name,image:a.payload.image_uris.normal,isTapped:!1},V=[].concat(Object(x.a)(e.creatures),[J]);return Object(l.a)(Object(l.a)({},e),{},{creatures:V});default:return e}},initPlayer:function(e,a){return{type:"INIT_PLAYER",payload:{landCount:e,playerName:a}}},playLandFromHand:function(e){return{type:"PLAY_LAND_FROM_HAND",payload:{index:e}}},drawCardsFromLibrary:function(e){return{type:"DRAW_CARDS_FROM_LIBRARY",payload:e}},shuffleLibrary:function(){return{type:"SHUFFLE_LIBRARY"}},incrementLife:function(){return{type:"INCREMENT_LIFE"}},decrementLife:function(){return{type:"DECREMENT_LIFE"}},updateMana:function(e){return{type:"UPDATE_MANA",payload:e}},toggleTapCard:function(e,a){return{type:"TOGGLE_TAP_CARD",payload:{index:e,zone:a}}},sendCardToZone:function(e,a,n){return{type:"SEND_CARD_TO_ZONE",payload:{index:e,fromZone:a,toZone:n}}},fetchCreatureToken:function(e){return{type:"FETCH_CREATURE_TOKEN",payload:e}},addCreatureToBattlefield:function(e){return{type:"ADD_CREATURE_TO_BATTLEFIELD",payload:e}}};n(87);var N=Object(d.b)((function(e){return{}}),(function(e){return{onChange:function(a,n){return e(I.initPlayer(a,n))}}}))((function(e){var a=Object(t.useState)({plains:0,islands:0,swamps:0,mountains:0,forests:0,wastes:0}),n=Object(s.a)(a,2),r=n[0],c=n[1],i=Object(t.useState)(""),d=Object(s.a)(i,2),u=d[0],b=d[1],m=[{name:"Plains",image:h.wSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{plains:e.target.value}))}},{name:"Islands",image:h.uSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{islands:e.target.value}))}},{name:"Swamps",image:h.bSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{swamps:e.target.value}))}},{name:"Mountains",image:h.rSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{mountains:e.target.value}))}},{name:"Forests",image:h.gSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{forests:e.target.value}))}},{name:"Wastes",image:h.cSymbolImage,onChange:function(e){return c(Object(l.a)(Object(l.a)({},r),{},{wastes:e.target.value}))}}].map((function(e,a){return Object(y.jsx)(g,{imgSrc:e.image,imgAlt:e.name,inputType:"number",min:"0",max:"60",onChange:e.onChange,className:"mana-symbol"})}));return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"player-setup-header",children:"Please input your name and the number of lands you would like in your deck (60 total):"}),Object(y.jsxs)("div",{className:"player-setup",children:[Object(y.jsx)(v,{labelId:"playerName",labelText:"Player Name:",inputType:"text",onChange:function(e){return b(e.target.value)},className:"name-input"}),m]}),Object(y.jsx)(o.b,{to:"/play",children:Object(y.jsx)("button",{type:"button",onClick:function(){e.onChange(r,u)},children:"Start Game!"})})]})}));n(92);var _=function(e){return Object(y.jsxs)("div",{className:"home",children:[Object(y.jsx)("h2",{children:"Welcome to Momir Basic"}),Object(y.jsx)(N,{})]})},E=n(54),L=n.n(E);var A=function(e){return Object(y.jsx)("button",{className:"options-button",onClick:e.onClick,children:"..."})};var R=function(e){return Object(y.jsxs)("div",{className:"card"+(e.isTapped?" tapped":""),children:[Object(y.jsx)(A,{zone:e.zone,onClick:function(){e.onOptionsClick(e.index,e.zone)}}),Object(y.jsx)("img",{src:e.imgSrc,alt:e.name,onClick:function(){e.onCardClick(e.index,e.zone)}})]})};var D=function(e){var a=void 0;return e.contents.length>0&&(a=e.isTopRevealed?e.contents[0].image:h.cardBackImage),Object(y.jsx)("div",{children:Object(y.jsx)(R,{imgSrc:a,alt:e.name,zone:e.name,index:"0",name:e.contents.length>0?e.contents[0].name:"",onCardClick:e.contents.length>0?e.onClick:function(){},onOptionsClick:e.contents.length>0?e.onOptionsClick:function(){}})})};var S=function(e){return Object(y.jsx)("div",{className:"cardZone "+e.name,children:e.cards})};var M=function(e){return Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:"0 0 200 200",children:Object(y.jsx)("path",{d:"M65 29c-6-10-16-17-28-17C20 12 7 25 7 42c0 33 18 38 58 76 40-38 58-43 58-76 0-17-13-30-30-30-12 0-22 7-28 17z",fill:e.color})})};var P=function(e){return Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.color,viewBox:"0 0 481.72 481.721",children:Object(y.jsx)("path",{d:"M471.253 335.129L272.396 82.226c-17.417-30.533-45.661-30.533-63.078 0L10.473 335.098c-3.88 5.533-8.072 15.41-8.917 22.117-2.736 21.738-4.908 65.18 21.444 65.18h435.707c26.353 0 24.192-43.416 21.463-65.148-.844-6.714-5.031-16.579-8.917-22.118z"})})};var F=function(e){return Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.color,viewBox:"0 0 481.728 481.728",children:Object(y.jsx)("path",{d:"M10.467 146.592l198.857 252.903c17.417 30.532 45.661 30.532 63.085 0l198.839-252.867c3.886-5.532 8.072-15.41 8.923-22.118 2.735-21.738 4.908-65.178-21.444-65.178H23.013c-26.353 0-24.192 43.415-21.463 65.147.845 6.709 5.037 16.581 8.917 22.113z"})})};var B=function(e){return Object(y.jsxs)("div",{className:"life-tracker-container",children:[Object(y.jsxs)("div",{className:"life-display",children:[Object(y.jsx)(M,{width:"160",height:"160",color:"#ff0707"}),Object(y.jsx)("div",{className:"life-display-text",children:e.lifeTotal})]}),Object(y.jsxs)("div",{className:"life-button-container",children:[Object(y.jsx)("button",{onClick:e.onLifeIncrementClick,children:Object(y.jsx)(P,{width:"40",height:"40",color:"white"})}),Object(y.jsx)("button",{onClick:e.onLifeDecrementClick,children:Object(y.jsx)(F,{width:"40",height:"40",color:"white"})})]})]})};var G=function(e){return Object(y.jsxs)("div",{className:"mana-tracker-container",children:[Object(y.jsx)("button",{className:"mana-tracker-button",onClick:e.onIncrementClick,children:Object(y.jsx)(P,{width:"25",height:"25",color:"white"})}),Object(y.jsxs)("div",{className:"mana-count-container",children:[Object(y.jsx)("img",{src:e.manaIcon}),Object(y.jsx)("div",{className:"mana-count",children:e.manaCount})]}),Object(y.jsx)("button",{className:"mana-tracker-button",onClick:e.onDecrementClick,children:Object(y.jsx)(F,{width:"25",height:"25",color:"white"})})]})};var U=function(e){var a=function(a){var n={};n[a]=e[a]+1,e.onUpdateMana(n)},n=function(a){var n={};n[a]=Math.max(0,e[a]-1),e.onUpdateMana(n)};return Object(y.jsxs)("div",{className:"mana-pool-container",children:[Object(y.jsx)(G,{manaIcon:h.wSymbolImage,manaCount:e.white,onIncrementClick:function(){return a("white")},onDecrementClick:function(){return n("white")}}),Object(y.jsx)(G,{manaIcon:h.uSymbolImage,manaCount:e.blue,onIncrementClick:function(){return a("blue")},onDecrementClick:function(){return n("blue")}}),Object(y.jsx)(G,{manaIcon:h.bSymbolImage,manaCount:e.black,onIncrementClick:function(){return a("black")},onDecrementClick:function(){return n("black")}}),Object(y.jsx)(G,{manaIcon:h.rSymbolImage,manaCount:e.red,onIncrementClick:function(){return a("red")},onDecrementClick:function(){return n("red")}}),Object(y.jsx)(G,{manaIcon:h.gSymbolImage,manaCount:e.green,onIncrementClick:function(){return a("green")},onDecrementClick:function(){return n("green")}}),Object(y.jsx)(G,{manaIcon:h.cSymbolImage,manaCount:e.colorless,onIncrementClick:function(){return a("colorless")},onDecrementClick:function(){return n("colorless")}}),Object(y.jsx)("button",{onClick:function(){e.onUpdateMana({white:0,blue:0,black:0,red:0,green:0,colorless:0})},children:"CLEAR"})]})};n(102);var Z=Object(d.b)((function(e){return{playerName:e.player.playerName,hand:e.player.hand,library:e.player.library,graveyard:e.player.graveyard,creaturesInPlay:e.player.creatures,landInPlay:e.player.land,lifeTotal:e.player.lifeTotal,manaPool:e.player.manaPool}}),(function(e){return{onIncrementLife:function(){return e(I.incrementLife())},onDecrementLife:function(){return e(I.decrementLife())},onUpdateMana:function(a){return e(I.updateMana(a))},onPlayLand:function(a){return e(I.playLandFromHand(a))},onDrawCard:function(){return e(I.drawCardsFromLibrary(1))},onToggleTap:function(a,n){return e(I.toggleTapCard(a,n))},sendCardToZone:function(a,n,t){return e(I.sendCardToZone(a,n,t))},fetchCreatureToken:function(a){return e(I.fetchCreatureToken(a))}}}))((function(e){var a=Object(t.useState)(!1),n=Object(s.a)(a,2),r=n[0],c=n[1],o=Object(t.useState)(0),i=Object(s.a)(o,2),l=i[0],d=i[1],u=Object(t.useState)(""),b=Object(s.a)(u,2),m=b[0],j=b[1],p=Object(t.useState)(0),O=Object(s.a)(p,2),f=O[0],g=O[1],v=function(a){e.onPlayLand(a)},x=function(a,n){e.onToggleTap(a,n)},C=function(e,a){d(e),j(a),c(!0)},T=function(a){e.sendCardToZone(l,m,a),c(!1)},w=e.hand.map((function(e,a){if(void 0!==e)return Object(y.jsx)(R,{index:a,imgSrc:e.image,name:e.name,zone:"hand",onCardClick:v,isTapped:e.isTapped,onOptionsClick:C},a)})),k=e.creaturesInPlay.map((function(e,a){if(void 0!==e)return Object(y.jsx)(R,{index:a,imgSrc:e.image,name:e.name,zone:"creatures",onCardClick:x,isTapped:e.isTapped,onOptionsClick:C},a)})),I=e.landInPlay.map((function(e,a){if(void 0!==e)return Object(y.jsx)(R,{index:a,imgSrc:e.image,name:e.name,zone:"land",onCardClick:x,isTapped:e.isTapped,onOptionsClick:C},a)}));return Object(y.jsxs)("div",{id:"playerInterface",className:"playerInterface",children:[Object(y.jsx)(L.a,{isOpen:r,appElement:document.getElementById("playerInterface"),className:"card-options-modal",overlayClassName:"card-options-overlay",children:Object(y.jsxs)("div",{className:"modal-button-container",children:["Send card to...",Object(y.jsx)("button",{className:"graveyard"===m?"hidden":"",onClick:function(){return T("graveyard")},children:"Graveyard"}),Object(y.jsx)("button",{className:"hand"===m?"hidden":"",onClick:function(){return T("hand")},children:"Hand"}),Object(y.jsx)("button",{className:"library"===m?"hidden":"",onClick:function(){return T("librarytop")},children:"Top of Library"}),Object(y.jsx)("button",{className:"library"===m?"hidden":"",onClick:function(){return T("librarybottom")},children:"Bottom of Library"}),Object(y.jsx)("button",{className:"land"===m||"creatures"==m?"hidden":"",onClick:function(){return T("land")},children:" Battlefield"}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{onClick:function(){c(!1)},children:"Close"})]})}),Object(y.jsxs)("div",{className:"battlefield",children:[Object(y.jsx)(S,{cards:k,name:"battlefield-creatures"}),Object(y.jsxs)("div",{className:"land-row-container",children:[Object(y.jsxs)("div",{className:"card momir-container",children:[Object(y.jsx)("img",{src:h.momirAvatarImage}),Object(y.jsxs)("div",{className:"momir-input-container",children:[Object(y.jsxs)("div",{className:"momir-rules",children:[Object(y.jsx)("span",{children:"X, Discard a card:"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"Create a token that\u2019s a copy of a creature card with converted mana cost X chosen at random. Activate this ability only any time you could cast a sorcery and only once each turn."})]}),Object(y.jsxs)("div",{className:"momir-input",children:[Object(y.jsx)("span",{children:"X:"}),Object(y.jsx)("input",{type:"number",min:"0",onChange:function(e){return g(e.target.value)}}),Object(y.jsx)("button",{onClick:function(){e.fetchCreatureToken(f)},children:"Create Token!"})]})]})]}),Object(y.jsx)(S,{cards:I,name:"battlefield-land"})]})]}),Object(y.jsxs)("div",{className:"playerSpace",children:[Object(y.jsxs)("div",{className:"playerStats",children:[Object(y.jsx)(B,{lifeTotal:e.lifeTotal,onLifeIncrementClick:function(){e.onIncrementLife()},onLifeDecrementClick:function(){e.onDecrementLife()}}),Object(y.jsx)(U,{white:e.manaPool.white,blue:e.manaPool.blue,black:e.manaPool.black,red:e.manaPool.red,green:e.manaPool.green,colorless:e.manaPool.colorless,onUpdateMana:function(a){e.onUpdateMana(a)}})]}),Object(y.jsx)(S,{name:"hand",cards:w}),Object(y.jsx)(D,{name:"library",contents:e.library,isTopRevealed:!1,onClick:function(){e.onDrawCard()},onOptionsClick:C}),Object(y.jsx)(D,{name:"graveyard",contents:e.graveyard,isTopRevealed:!0,onClick:C,onOptionsClick:C})]})]})}));var z=function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(Z,{})})};var H=function(){return Object(y.jsx)("div",{id:"App",className:"App",children:Object(y.jsx)(o.a,{children:Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{path:"/play",children:Object(y.jsx)(z,{})}),Object(y.jsx)(i.a,{path:"/",children:Object(y.jsx)(_,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,c=a.getLCP,o=a.getTTFB;n(e),t(e),r(e),c(e),o(e)}))},W=n(16),K=n(55),q=n(26),X=b.a.mark(Q),J=b.a.mark($),V=new h;function Q(e){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(q.a)(V.getRandomCreature,e.payload);case 3:return a=n.sent,n.next=6,Object(q.b)({type:"ADD_CREATURE_TO_BATTLEFIELD",payload:a});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("ERROR FETCHING CREATURE TOKEN!!!");case 11:case"end":return n.stop()}}),X,null,[[0,8]])}function $(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.c)("FETCH_CREATURE_TOKEN",Q);case 2:case"end":return e.stop()}}),J)}var ee=$,ae=Object(K.a)(),ne=Object(W.e)(Object(W.c)({player:I.reducer}),Object(W.a)(ae));ae.run(ee);var te=ne;c.a.render(Object(y.jsx)(d.a,{store:te,children:Object(y.jsx)(H,{})}),document.getElementById("root")),Y()},60:function(e,a,n){},61:function(e,a,n){},87:function(e,a,n){},92:function(e,a,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.8aa4608b.chunk.js.map