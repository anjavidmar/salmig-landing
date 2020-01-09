var a = 'hello world'
console.log(a);

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

var textContainer = document.getElementsByClassName('text-container');
console.log(textContainer);

var textContainer0_h = textContainer[0].offsetHeight;

var h2 = document.getElementsByTagName('h2');
console.log(h2);

h2[0].style.fontSize = (textContainer0_h * 0.075) + 'px';

var gifContainer = document.querySelector('.gif-container');
var bulletedContainer = document.querySelector('.non-bulleted-ul-container');
var bulletedContainer_w = bulletedContainer.offsetWidth;
var textContainer2_w = textContainer[2].offsetWidth;
var gifContainer_w = textContainer2_w - bulletedContainer_w - 30;

console.log(gifContainer, bulletedContainer, bulletedContainer_w, textContainer2_w, gifContainer_w);

// if ( w > 749 ) {
//     // gifContainer.classList.add()
//     // gifContainer.style.float = 'right';
//     gifContainer.style.width = gifContainer_w + 'px';
// }




// iconed ul sizing

var ul_iconed = document.querySelector('.iconed');
var ul_iconed_w =  ul_iconed.offsetWidth;
var li_img = document.querySelector('.iconed img');
var li_img_w =  li_img.offsetWidth;
var li_span = document.querySelectorAll('.iconed span');
var li_span_w = ul_iconed_w - (li_img_w * 1.5)
// var program = document.querySelectorAll('.program');

li_span[0].style.width = li_span_w + 'px';

// for (var i = 0; i < li_span.length; i++) {
//     li_span[i].style.width = li_span_w + 'px';
// }

//main features

var featuresContainer = document.getElementById('features-container__inner');

var featureContainer = document.getElementsByClassName('feature-container__inner');

console.log(featuresContainer);
console.log(featureContainer);


if (w > 509) {
    featuresContainer.classList.add('text-container');
    for (var i = 0; i < featureContainer.length; i++) {
        featureContainer[i].classList.add('padded');
        featureContainer[i].classList.remove('text-container');
    }
} else {
    featuresContainer.classList.remove('text-container');
    for (var i = 0; i < featureContainer.length; i++) {
        featureContainer[i].classList.add('text-container');
        featureContainer[i].classList.remove('padded');
    }
}

//bottom features

// var condensedHeight = document.getElementById('condensed-height');
// var condensedHeight_h = condensedHeight.offsetHeight;
// console.log(condensedHeight, condensedHeight_h);
// condensed_h = condensedHeight_h - 17 + 'px';
// console.log(condensed_h);

var feature = document.getElementsByClassName('feature-text');
var condensed = document.getElementsByClassName('condensed');
var description = document.querySelectorAll('.feature-text > p');
var description_h = [
    description[0].offsetHeight, 
    description[1].offsetHeight, 
    description[2].offsetHeight, 
    description[3].offsetHeight, 
    description[4].offsetHeight, 
    description[5].offsetHeight, 
    description[6].offsetHeight, 
    description[7].offsetHeight, 
];
var readMore = document.getElementsByClassName('read-more');
var condensedHeight = document.getElementById('condensed-height');
var condensedHeight_h = condensedHeight.offsetHeight;
var condensed_h = condensedHeight_h - 15;

for (var i = 0; i < condensed.length; i++) {
    condensed[i].style.height = condensed_h + 'px';
    condensed[i].style.transition = 'height 1s';
}
console.log(feature, description, description_h, condensed, readMore, condensedHeight, condensedHeight_h, condensed_h);

function expand(x) {
    feature[x].style.height = 17.5 + description_h[x] + 'px';
    // feature[x].style.transition: 'height 3s';
    console.log(17.5 + description_h[x] + 'px');
    readMore[x].innerHTML = 'Close';
    readMore[x].setAttribute('onclick','condense(' + x + ')');
}

function condense(x) {
    feature[x].style.height = condensed_h;
    // feature[x].style.transition: 'height 3s';
    console.log(condensed_h);
    readMore[x].innerHTML = 'Read more';
    readMore[x].setAttribute('onclick','expand(' + x + ')');
}


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("resize", function() {
        h = window.innerHeight;
        w = window.innerWidth;

        site_h = site.offsetHeight;
        site_w = site.offsetWidth;

        console.log('site height = ' + site_h, 'site width = ' + site_w);

        textContainer_h = textContainer[0].offsetHeight;
        h2[0].style.fontSize = (textContainer_h * 0.075) + 'px';

        ul_iconed_w =  ul_iconed.offsetWidth;
        li_img_w =  li_img.offsetWidth;
        li_span_w = ul_iconed_w - (li_img_w * 1.75)

        li_span[0].style.width = li_span_w + 'px';

        // for (var i = 0; i < li_span.length; i++) {
        //     li_span[i].style.width = li_span_w + 'px';
        // }

        if (w > 510) {
            featuresContainer.classList.add('text-container');
            for (var i = 0; i < featureContainer.length; i++) {
                featureContainer[i].classList.add('padded');
                featureContainer[i].classList.remove('text-container');
            }
        } else {
            featuresContainer.classList.remove('text-container');
            for (var i = 0; i < featureContainer.length; i++) {
                featureContainer[i].classList.add('text-container');
                featureContainer[i].classList.remove('padded');
            }
        }

        // var condensedHeight = document.getElementById('condensed-height');
        condensedHeight_h = condensedHeight.offsetHeight;
        console.log(condensedHeight, condensedHeight_h);
        // condensed_h = condensedHeight_h - 17 + 'px';
        // console.log(condensed_h);
        // style[0].innerHTML = cssSnippetOne + condensedHeight_h + cssSnippetTwo;
        condensed_h = condensedHeight_h - 17.5 + 'px';
        description_h = [
            description[0].offsetHeight, 
            description[1].offsetHeight, 
            description[2].offsetHeight, 
            description[3].offsetHeight, 
            description[4].offsetHeight, 
            description[5].offsetHeight, 
            description[6].offsetHeight, 
            description[7].offsetHeight, 
        ];

        for (var i = 0; i < condensed.length; i++) {
            condensed[i].style.height = condensed_h;
            console.log('hello');
        }
        console.log(description_h);
        
    });
});