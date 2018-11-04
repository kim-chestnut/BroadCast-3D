;(function(){
        var root = (typeof self == 'object' && self.self == self && self) || (typeof global == 'object' && global.global == global && global) || this || {};

        function Broadcast(element,arrImg,radius,suspend){
            if(this instanceof Broadcast) {
                this.element = typeof element === 'string' ? document.querySelector(element) : element;
                this.arrImg =  Object.prototype.toString.call(arrImg).match(/^\[object (\w+)\]$/)[1] == 'Array' ? arrImg : [];
                this.radius = (typeof radius === "number" && radius) || 250;
                this.suspend = (typeof suspend === "number" && suspend) || 0;
                this.time = 1000 + (this.suspend *1000);
                this.len = this.arrImg.length;
                this.deg = 360 / this.len;
                this.timer = null;
                clearInterval(this.timer);
                this.init();
                
            } else {
                return new Broadcast(element,arrImg,radius,suspend);
            }
        };

        Broadcast.version = "1.0.0";
        
        Broadcast.prototype = {
            init : function(){
                this.initBoxStyle(this.element);
            },
            initBoxStyle : function(box){
                box.style = "position:relative;perspective: 800px;transform-style:preserve-3d;transform:rotateX(-10deg);"
                this.addBoxImg(box);
            },
            initImgStyle : function(imgArr){
                for(var i = 0; i < this.len ; i ++) {
                    imgArr[i].style = "position:absolute;top:0;left:0;right:0;bottom:0;margin: auto;width:100px;";

                }
            },  
            addBoxImg : function(box){
                var imgArr = this.createImgElement();
                var imglen = imgArr.length;
                for(var i = 0; i < imglen; i ++) {
                    box.appendChild(imgArr[i]);
                }
                for(var i = 0; i < imglen; i ++) {
                    imgArr[i].style.transform = " rotateY(" + this.deg * i + "deg)  translateZ("+ this.radius+"px)";
                    imgArr[i].style.transition = ' transform  1s ';
                }
                this.dragEvent();
            },
            createImgElement : function(){
                this.arrayImg = [];
                for(var i = 0; i < this.len; i ++) {
                    var img = document.createElement("img");
                    img.src = this.arrImg[i];
                    this.arrayImg.push(img);
                }
                this.initImgStyle(this.arrayImg);
                return this.arrayImg
            },
            dragEvent : function(){
                var _self = this;
                console.log(_self.time);
                var childImg = this.element.children;
                var childImgLen = childImg.length;
                var arr = [];
                for(var i = 0; i < childImgLen ; i ++) {
                    arr.push(childImg[i].style.transform.match(/(\d+)/g)[0]);
                }
                clearInterval(this.timer);
                this.timer = setInterval(function(){
                    arr = arr.map(function(item){
                        return (item - _self.deg);
                    });
                    for(var i = 0 ; i < childImgLen; i ++) {
                        childImg[i] .style.transform = " rotateY(" + arr[i] + "deg) translateZ("+ _self.radius+"px)"; 
                    }
                },_self.time);
            },
        }
        root.Broadcast = Broadcast;
    }());