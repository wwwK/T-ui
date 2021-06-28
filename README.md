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
>width 宽度 string 默认:500px
>title 标题 string 默认:''
>titleColor 标题颜色 string 默认:black
>line 标题线 boolean 默认: true
>backgroundCard 背景色 string 默认:white
>border 边框+hover boolean 默认:true
>borderColor 