var id = null;
var active = false;
var changecourseX = 1;
var randomnumber;
var randomnumber2;
var changecourseY = 1;


document.addEventListener('DOMContentLoaded', function() {
    if (document.URL.includes("index.html"))
    {
        document.getElementById("bookback").style.zIndex = 1;
        document.getElementById("bookfront").style.zIndex = 1;
        document.getElementById("bookback2").style.display = "none";
        document.getElementById("bookfront2").style.display = "none";
        document.getElementById("bookback3").style.display = "none";
        document.getElementById("bookfront3").style.display = "none";
        document.getElementById("bookback4").style.display = "none";
        document.getElementById("bookfront4").style.display = "none";
        var kvalue = document.getElementById('kslider').value;
        const showvalue = document.getElementById('slidervalue');
        showvalue.innerHTML = kvalue;

        document.getElementById("bookback").style.height = document.getElementById("bookfront").offsetHeight - 20 + 'px';

        document.getElementById("SolarSys").addEventListener('click', function(){
            const eleb = document.getElementById("bookback");
            const elef = document.getElementById("bookfront");
            const bb = eleb.getBoundingClientRect();
            const bf = elef.getBoundingClientRect();
            const changethisbookf = document.getElementById('bookfront2');
            const changethisbookb = document.getElementById('bookback2');
            eleb.style.zIndex = "0";
            elef.style.zIndex = "0";
            document.getElementById("bookback3").style.display = "none";
            document.getElementById("bookfront3").style.display = "none";
            document.getElementById("bookback4").style.display = "none";
            document.getElementById("bookfront4").style.display = "none";
            changethisbookb.style.display = "block";
            changethisbookf.style.display = "block";
            changethisbookb.style.width = eleb.offsetWidth - 20 + 'px';
            changethisbookf.style.width = elef.offsetWidth - 20 + 'px';
            
            changethisbookb.style.height = eleb.offsetHeight - 20 + 'px';
            changethisbookf.style.height = elef.offsetHeight - 20 + 'px';
            
            changethisbookf.style.left = bf.left  + 'px';
            changethisbookb.style.left = bb.left  + 'px';
            }, false);
        
        document.getElementById("Galaxy").addEventListener("click",function (){
                const eleb = document.getElementById("bookback");
                const elef = document.getElementById("bookfront");
                const bb = eleb.getBoundingClientRect();
                const bf = elef.getBoundingClientRect();
                const changethisbookf = document.getElementById("bookfront3");
                const changethisbookb = document.getElementById("bookback3");
         
                eleb.style.zIndex = "0";
                elef.style.zIndex = "0";
                document.getElementById("bookback2").style.display = "none";
                document.getElementById("bookfront2").style.display = "none";
                document.getElementById("bookback4").style.display = "none";
                document.getElementById("bookfront4").style.display = "none";
                changethisbookb.style.display = "block";
                changethisbookf.style.display = "block";
         
                changethisbookb.style.width = eleb.offsetWidth - 20 + 'px';
                changethisbookf.style.width = elef.offsetWidth - 20 + 'px';
                changethisbookb.style.height = eleb.offsetHeight - 20 + 'px';
                changethisbookf.style.height = elef.offsetHeight - 20 + 'px';
             
                changethisbookf.style.left = bf.left  + 'px';
                changethisbookb.style.left = bb.left  + 'px';
            },false);
        
        document.getElementById("Universe").addEventListener("click",function (){
                const eleb = document.getElementById("bookback");
                const elef = document.getElementById("bookfront");
                const bb = eleb.getBoundingClientRect();
                const bf = elef.getBoundingClientRect();
                const changethisbookf = document.getElementById("bookfront4");
                const changethisbookb = document.getElementById("bookback4");
         
                eleb.style.zIndex = "0";
                elef.style.zIndex = "0";
                document.getElementById("bookback2").style.display = "none";
                document.getElementById("bookfront2").style.display = "none";
                document.getElementById("bookback3").style.display = "none";
                document.getElementById("bookfront3").style.display = "none";
                changethisbookf.style.display = "block";
                changethisbookb.style.display = "block";
         
                changethisbookb.style.width = eleb.offsetWidth - 20 + 'px';
                changethisbookf.style.width = elef.offsetWidth - 20 + 'px';
                changethisbookb.style.height = eleb.offsetHeight - 20 + 'px';
                changethisbookf.style.height = elef.offsetHeight - 20 + 'px';
             
                changethisbookf.style.left = bf.left  + 'px';
                changethisbookb.style.left = bb.left  + 'px';
            }, false);
        
        document.getElementById("sliderarea").addEventListener("input", function (){
                var kvalue = document.getElementById('kslider');
                const showvalue = document.getElementById('slidervalue');
                showvalue.innerHTML = kvalue.value;
                if (kvalue.value < 10)
                {
                    document.getElementById('civ').src = "image/";
                    document.getElementById('civ').style.width = "180px";
                    document.getElementById('civ').style.height = "180px";
                    document.getElementById('DescriptionContainer').textContent = ""
                }
                else if (kvalue.value < 20)
                {
                    document.getElementById('civ').src = "image/";
                    document.getElementById('civ').style.width = "180px";
                    document.getElementById('civ').style.height = "180px";
                    document.getElementById('DescriptionContainer').textContent = ""
                }
                else if (kvalue.value < 30)
                {
                    document.getElementById('civ').src = "image/";
                    document.getElementById('civ').style.width = "200px";
                    document.getElementById('civ').style.height = "200px";
                    document.getElementById('DescriptionContainer').textContent = ""
                }
                else if (kvalue.value < 40)
                {
                    document.getElementById('civ').src = "image/";
                    document.getElementById('civ').style.width = "300px";
                    document.getElementById('civ').style.height = "300px";
                    document.getElementById('DescriptionContainer').textContent = ""
                }
                else
                {
                    document.getElementById('civ').src = "image/";
                    document.getElementById('civ').style.width = "300px";
                    document.getElementById('civ').style.height = "300px";
                    document.getElementById('DescriptionContainer').textContent = ""
                }
            }, false);
    }
    else if (document.URL.includes("SolarSystem.html"))
    {
        document.getElementById("book1image2").style.backgroundColor = "black";
        document.getElementById("book1details2").style.backgroundColor = "black";
        if (window.innerHeight >= "640px")
        {
            document.getElementById("book1image2").style.gridRowStart = 2;
            document.getElementById("book1details2").style.gridRowStart = 2;
            document.getElementById("book1image2").style.gridRowEnd = 3;
            document.getElementById("book1details2").style.gridRowEnd = 3;
        }
        const rect = document.getElementById("book1details").getBoundingClientRect();
        const rect2 = document.getElementById("fermi").getBoundingClientRect();
        const height1 = rect.height - 50;
        const width1 = rect2.width - 50;
        document.getElementById("tbp").style.height = height1 + 'px';
        document.getElementById("tbp").style.width = height1 * 0.503 + 'px';
        document.getElementById("fermi").style.width = width1 + 'px';
        document.getElementById("fermi").style.height = (width1 * 0.2) + 'px';
        

        var classstuff = document.getElementById("BBera").getBoundingClientRect();
        for (var i = 0; i < 5; i++)
        {
            document.getElementsByClassName("dot")[i].style.left = classstuff.left - 30 + 'px';
            document.getElementsByClassName("dot")[i].style.gridRowStart = i + 1;
            document.getElementsByClassName("dot")[i].style.gridRowEnd = i + 2;
        }
    }
    else if (document.URL.includes("GalaxyBook.html"))
    {
        if (window.innerHeight >= "1495px")
        {
            document.getElementById("book1image2").style.gridRowStart = 2;
            document.getElementById("book1details2").style.gridRowStart = 2;
            document.getElementById("book1image2").style.gridRowEnd = 3;
            document.getElementById("book1details2").style.gridRowEnd = 3;

            document.getElementById("book1image2").style.gridRowStart = 3;
            document.getElementById("book1details2").style.gridRowStart = 3;
            document.getElementById("book1image2").style.gridRowEnd = 4;
            document.getElementById("book1details2").style.gridRowEnd = 4;
            const rect = document.getElementById("book2details").getBoundingClientRect();
            const height1 = rect.height - 50;
            document.getElementById("40k1").style.height = height1 + 'px';
            document.getElementById("40k1").style.width = height1 * 1.77619893428 + 'px';

            
            const rect2 = document.getElementById("book2details2").getBoundingClientRect();
            const height2 = rect2.height - 50;
            document.getElementById("40k2").style.height = height2 + 'px';
            document.getElementById("40k2").style.width = height2 * 2.39310344828 + 'px';

            const rect3 = document.getElementById("book2details3").getBoundingClientRect();
            const height3 = rect3.height - 50;
            document.getElementById("40k3").style.height = height3 + 'px';
            document.getElementById("40k3").style.width = height3 * 1.36961722488 + 'px';
            
        }
        else
        {
            const rect = document.getElementById("book2details").getBoundingClientRect();
            const width1 = rect.width - 50;
            document.getElementById("40k1").style.width = width1 + 'px';
            document.getElementById("40k1").style.height = width1 * 0.563 + 'px';
            
            const rect2 = document.getElementById("book2details2").getBoundingClientRect();
            const width2 = rect2.width - 50;
            document.getElementById("40k2").style.width = width2 + 'px';
            document.getElementById("40k2").style.height = width2 * 0.41786743515 + 'px';

            const rect3 = document.getElementById("book2details3").getBoundingClientRect();
            const width3 = rect3.width - 50;
            document.getElementById("40k3").style.width = width3 + 'px';
            document.getElementById("40k3").style.height = (width3 * 0.73013100436) + 'px';
        }
        
        document.getElementsByClassName("wh40kinner-grid")[1].style.gridRowStart = 2;
        document.getElementById("book2details3").style.backgroundColor = "rgb(153, 0, 0)";
        document.getElementById("book2details3").style.color = "rgb(238,218,184)";        
        document.getElementById("book2image3").style.backgroundColor = "rgb(153, 0, 0)";

        
        document.getElementById("40k1").style.position = "relative";
        document.getElementById("40k2").style.position = "relative";
        document.getElementById("40k3").style.position = "relative";
    }
    else if (document.URL.includes("Universe.html"))
    {
        const elem = document.getElementById("XeeleeNightFighter");
        document.getElementById("uniarea").style.height = window.innerHeight / 2 + 'px';
        if(window.innerHeight < window.innerWidth)
        {
            elem.style.height = window.innerHeight / 10 + 'px';
            elem.style.width = window.innerHeight / 10 + 'px';
        }
        else
        {
            elem.style.height = window.innerWidth / 10 + 'px';
            elem.style.width = window.innerWidth / 10 + 'px';
        }

        elem.style.position = "fixed";
        elem.style.left = "50%";

        const imageelem = document.getElementById("XeeleeSq");
        imageelem.style.height = imageelem.offsetWidth * 0.5625 + 'px';

        document.getElementById("XeeleeNightFighter").addEventListener('click', function(){
            const elem = document.getElementById("XeeleeNightFighter");
            if (elem.getAttribute('src')===("image/NightFighter.png"))
            {
                elem.src = "image/Explosion.png";
                var rectofelem = elem.getBoundingClientRect();
                var leftofelem = rectofelem.left;
                var topofelem = rectofelem.top;
                elem.style.top = topofelem;
                elem.style.left = leftofelem;
                function fade(element) {
                    var op = 1;  // initial opacity
                    var timer = setInterval(function () {
                        if (op <= 0.1){
                            clearInterval(timer);
                            element.style.display = 'none';
                        }
                        element.style.opacity = op;
                        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                        op -= op * 0.08;
                    }, 50);
                }
                fade(elem);
            }
        }, false);
    }
    
}, false);

window.addEventListener('resize', function() {
    if (document.URL.includes("index.html") )
    {
        const eleb = document.getElementById("bookback");
        const elef = document.getElementById("bookfront");
        const bb = eleb.getBoundingClientRect();
        const bf = elef.getBoundingClientRect();
        document.getElementById("bookback").style.height = elef.offsetHeight - 20 + 'px';

        var changethisbookf
        var changethisbookb
        if (document.getElementById('bookback2').style.display == "block")
        {
            changethisbookf = document.getElementById('bookfront2');
            changethisbookb = document.getElementById('bookback2');
            document.getElementById("bookback3").style.display = "none";
            document.getElementById("bookfront3").style.display = "none";
            document.getElementById("bookback4").style.display = "none";
            document.getElementById("bookfront4").style.display = "none";
        }
        else if (document.getElementById('bookback3').style.display == "block")
        {
            changethisbookf = document.getElementById('bookfront3');
            changethisbookb = document.getElementById('bookback3');
            document.getElementById("bookback2").style.display = "none";
            document.getElementById("bookfront2").style.display = "none";
            document.getElementById("bookback4").style.display = "none";
            document.getElementById("bookfront4").style.display = "none";
        }
        else
        {        
            changethisbookf = document.getElementById('bookfront4');
            changethisbookb = document.getElementById('bookback4');
            document.getElementById("bookback2").style.display = "none";
            document.getElementById("bookfront2").style.display = "none";
            document.getElementById("bookback3").style.display = "none";
            document.getElementById("bookfront3").style.display = "none";
        }

        changethisbookb.style.width = eleb.offsetWidth - 20 + 'px';
        changethisbookf.style.width = elef.offsetWidth - 20 + 'px';
        changethisbookb.style.height = eleb.offsetHeight - 20 + 'px';
        changethisbookf.style.height = elef.offsetHeight - 20 + 'px';
        
        changethisbookf.style.left = bf.left  + 'px';
        changethisbookb.style.left = bb.left  + 'px';
    }
    else if (document.URL.includes("SolarSystem.html"))
    {
        const rect = document.getElementById("book1details").getBoundingClientRect();
       
        const height1 = rect.height - 50;
        
        document.getElementById("tbp").style.height = height1 + 'px';
        document.getElementById("tbp").style.width = height1 * 0.503 + 'px';
        
        if (window.innerHeight >= "1495px")
        { 
            const rect2 = document.getElementById("book1details2").getBoundingClientRect();
            const width1 = rect2.width - 50;
            document.getElementById("fermi").style.width = width1 + 'px';
            document.getElementById("fermi").style.height = (width1 * 0.2) + 'px';
        }
        var classstuff = document.getElementById("BBera").getBoundingClientRect();

        for (var i = 0; i < 5; i++)
        {
            document.getElementsByClassName("dot")[i].style.left = classstuff.left - 30 + 'px';
            document.getElementsByClassName("dot")[i].style.gridRowStart = i + 1;
            document.getElementsByClassName("dot")[i].style.gridRowEnd = i + 2;
        }
    }
    else if (document.URL.includes("GalaxyBook.html"))
    {
        if (window.innerHeight >= "1495px")
        {
            const rect = document.getElementById("book2details").getBoundingClientRect();
            const height1 = rect.height - 50;
            document.getElementById("40k1").style.height = height1 + 'px';
            document.getElementById("40k1").style.width = height1 * 1.77619893428 + 'px';            
            
            const rect2 = document.getElementById("book2details2").getBoundingClientRect();
            const height2 = rect2.height - 50;
            document.getElementById("40k2").style.height = height2 + 'px';
            document.getElementById("40k2").style.width = height2 * 2.39310344828 + 'px';

            const rect3 = document.getElementById("book2details3").getBoundingClientRect();
            const height3 = rect3.height - 50;
            document.getElementById("40k3").style.height = height3 + 'px';
            document.getElementById("40k3").style.width = height3 * 1.36961722488 + 'px';
        }
        else
        {
            const rect = document.getElementById("book2details").getBoundingClientRect();
            const width1 = rect.width - 50;
            document.getElementById("40k1").style.width = width1 + 'px';
            document.getElementById("40k1").style.height = width1 * 0.563 + 'px';

            const rect2 = document.getElementById("book2details2").getBoundingClientRect();
            const width2 = rect2.width - 50;
            document.getElementById("40k2").style.width = width2 + 'px';
            document.getElementById("40k2").style.height = width2 * 0.41786743515 + 'px';

            const rect3 = document.getElementById("book2details3").getBoundingClientRect();
            const width3 = rect3.width - 50;
            document.getElementById("40k3").style.width = width3 + 'px';
            document.getElementById("40k3").style.height = width3 * 0.73013100436 + 'px';
        }
        
        document.getElementById("40k1").style.position = "relative";
        document.getElementById("40k2").style.position = "relative";
        document.getElementById("40k3").style.position = "relative";
        document.getElementById("40k1").style.top = "0%";
        document.getElementById("40k1").style.left = "0%";
        document.getElementById("40k2").style.top = "0%";
        document.getElementById("40k2").style.left = "0%";
        document.getElementById("40k3").style.top = "0%";
        document.getElementById("40k3").style.left = "0%";
        document.getElementById("40k1").style.zIndex = 0;
        document.getElementById("40k2").style.zIndex = 0;
        document.getElementById("40k3").style.zIndex = 0;
    }
    else if (document.URL.includes("Universe.html"))
    {
        document.getElementById("uniarea").style.height = window.innerHeight / 2 + 'px';
        if(window.innerHeight < window.innerWidth)
        {
            document.getElementById("XeeleeNightFighter").style.height = window.innerHeight / 10 + 'px';
            document.getElementById("XeeleeNightFighter").style.width = window.innerHeight / 10 + 'px';
        }
        else
        {
            document.getElementById("XeeleeNightFighter").style.height = window.innerWidth / 10 + 'px';
            document.getElementById("XeeleeNightFighter").style.width = window.innerWidth / 10 + 'px';
        }

        const imageelem = document.getElementById("XeeleeSq");
        imageelem.style.height = imageelem.offsetWidth * 0.5625 + 'px';        
    }

}, false);



//changing of stuff based on element clicked
//placed it here and not above because it is easier to track like this
document.addEventListener('DOMContentLoaded', function()
{
    if (document.URL.includes("GalaxyBook.html"))
    {
        function increaseinsize(imageid){
            if (active == true)
            {
                if (document.getElementById(imageid).style.position == "relative")
                {
                    var variables;
                    if (imageid == "40k1")
                    {
                        variables = 0.563;
                    }
                    else if (imageid == "40k2")
                    {
                        variables = 0.41786743515;
                    }
                    else
                    {
                        variables = 0.72954924874;
                    }

                    document.getElementById(imageid).style.position = "fixed";
                    document.getElementById(imageid).style.width = "100%";
                    document.getElementById(imageid).style.height = document.getElementById(imageid).offsetWidth * variables + 'px';
                    var Acceptablewidth = document.getElementById(imageid).offsetWidth;
                    while (document.getElementById(imageid).offsetHeight > window.innerHeight)
                    {
                        Acceptablewidth--
                        document.getElementById(imageid).style.width = Acceptablewidth + 'px';
                        document.getElementById(imageid).style.height = document.getElementById(imageid).offsetWidth * variables + 'px';
                    }
                    document.getElementById(imageid).style.left = (window.innerWidth - document.getElementById(imageid).offsetWidth) / 2 + 'px';
                    document.getElementById(imageid).style.top = (window.innerHeight - document.getElementById(imageid).offsetHeight) / 2 + 'px';
                    document.getElementById(imageid).style.zIndex = 2;
                }
                else
                {
                    if (window.innerHeight >= "1495px")
                    {
                        const rect = document.getElementById("book2details").getBoundingClientRect();
                        const height1 = rect.height - 50;
                        document.getElementById("40k1").style.height = height1 + 'px';
                        document.getElementById("40k1").style.width = height1 * 1.77619893428 + 'px';            
                     
                        const rect2 = document.getElementById("book2details2").getBoundingClientRect();
                        const height2 = rect2.height - 50;
                        document.getElementById("40k2").style.height = height2 + 'px';
                        document.getElementById("40k2").style.width = height2 * 2.39310344828 + 'px';
            
                        const rect3 = document.getElementById("book2details3").getBoundingClientRect();
                        const height3 = rect3.height - 50;
                        document.getElementById("40k3").style.height = height3 + 'px';
                        document.getElementById("40k3").style.width = height3 * 1.36961722488 + 'px';
                    }
                    else
                    {
                        const rect = document.getElementById("book2details").getBoundingClientRect();
                        const width1 = rect.width - 50;
                        document.getElementById("40k1").style.width = width1 + 'px';
                        document.getElementById("40k1").style.height = width1 * 0.563 + 'px';
            
                        const rect2 = document.getElementById("book2details2").getBoundingClientRect();
                        const width2 = rect2.width - 50;
                        document.getElementById("40k2").style.width = width2 + 'px';
                        document.getElementById("40k2").style.height = width2 * 0.41786743515 + 'px';
            
                        const rect3 = document.getElementById("book2details3").getBoundingClientRect();
                        const width3 = rect3.width - 50;
                        document.getElementById("40k3").style.width = width3 + 'px';
                        document.getElementById("40k3").style.height = width3 * 0.73013100436 + 'px';
                    }
                 
                    document.getElementById(imageid).style.position = "relative";
                    document.getElementById(imageid).style.zIndex = 0;
                    document.getElementById(imageid).style.top = "0%";
                    document.getElementById(imageid).style.left = "0%";
                }
                active = false;
            }
        }
        
        document.getElementById("book2image3").addEventListener("click", function (){
            active = true;
            increaseinsize("40k3")
        }, false);

        document.getElementById("book2image2").addEventListener("click", function (){
            active = true;
            increaseinsize("40k2")
        }, false);

        document.getElementById("book2image").addEventListener("click", function (){
            active = true;
            increaseinsize("40k1")
        }, false);
    }
}, false);

if (document.URL.includes("Universe.html"))
{
    setInterval(() => {
        const elem = document.getElementById("XeeleeNightFighter");
        if (elem.getAttribute('src')===("image/NightFighter.png"))
        {
            var rectofelem = elem.getBoundingClientRect();
            var prevleft = rectofelem.left;
            var prevtop = rectofelem.top;
            const border = document.getElementById("uniarea").getBoundingClientRect();
            elem.style.position = "fixed";

            if (changecourseX < 0)
            {
                elem.style.left = rectofelem.left + 1 + 'px';            
            }
            else
            {
                elem.style.left = rectofelem.left - 1 + 'px';            
            }
            
            if (changecourseY < 0)
            {
                elem.style.top = rectofelem.top + 1 + 'px';
            }
            else
            {
                elem.style.top = rectofelem.top - 1 + 'px';
            }

            if (rectofelem.right > border.right)
            {
                changecourseX = 1;
            }
            else if (rectofelem.left < border.left)
            {
                changecourseX = -1;
            }

            if (rectofelem.bottom > border.bottom)
            {
                changecourseY = 1;
            }
            else if (rectofelem.top < border.top)
            {
                changecourseY = -1;
            }

            rectofelem = elem.getBoundingClientRect();

            if (prevleft < rectofelem.left && prevtop < rectofelem.top)
            {
                elem.style.transform = "rotate(0deg)";
            }
            else if (prevleft > rectofelem.left && prevtop > rectofelem.top)
            {
                elem.style.transform = "rotate(180deg)";
            }
            else if (prevleft < rectofelem.left && prevtop > rectofelem.top)
            {
                elem.style.transform = "rotate(-90deg)";
            }
            else if (prevleft > rectofelem.left && prevtop < rectofelem.top)
            {
                elem.style.transform = "rotate(90deg)";
            }
        }        
    }, 5);
}