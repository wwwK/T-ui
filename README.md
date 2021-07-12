# T-ui
 - 在使用T-ui库时，width,height,color为特殊说明时都可以使用任意单位及颜色。
 >列：
 > - width/height: px vh vw % calc()
 > - color : rgb() rgba() #FFF white

## 进度条 T-progressBar
Attributes :
>width 宽度 string  默认:100%
>height 高度 string 默认:10px
>progress 进度(1-100) number 默认:10
>progressColor 进度颜色(可使用渐变) string 默认:linear-gradient(to right, rgb(61, 137, 220), rgb(1, 254, 254))
>backgroundColor 进度条背景色(可使用渐变) string 默认:rgba(48, 69, 104, 0.2)
>textShow 是否显示进度文字 boolean 默认false


## 卡片 T-card
Attributes :
>width 宽度 string 默认: /
>title 标题 string 默认: /
>titleColor 标题颜色 string 默认:black
>line 标题线 boolean 默认: true
>backgroundCard 背景色 string 默认:white
>border 边框+圆角 boolean 默认:true
>shadow 阴影出现的时机 [always,hover,never] 默认: hover

## 提示框 T-alert
Attributes :
>width 宽度 string 默认: /
>title 标题 string 默认: /
>color 颜色 16进制颜色 默认: #5C9FFF

## 头像 T-avatar
<font color='red'>当设置了src时text，textColor不生效</font>
Attributes :
>size 宽高 string 默认: 50px
>radius 方圆 boolean 默认: true
>background 背景颜色(可使用渐变) string 默认: gray
>text 文本 string 默认: T
>textColor 文本颜色 string 默认: white
>src 图片路径 string 默认: / 

## 面包屑 T-breadcrumb
Attributes :
>items 列表 [{title:标题,url:地址}] 默认: [] 
>separator 分割符 String 默认: •
>activeColor 当前选中项的颜色 String 默认: rgb(31,116,255)

## 按钮 T-button
<font color='red'>fontColor只有在type='filled'时生效</font>
Attributes :
>type 按钮样式 [filled,border,flat] 默认: filled 
>color 按钮主题颜色 16进制颜色 默认: #1F74FF 
>fontColor 按钮文字颜色 String 默认: white
>disabled 禁用 Boolean 默认 false