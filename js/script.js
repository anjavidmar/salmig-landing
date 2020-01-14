var h = window.innerHeight;
var w = window.innerWidth;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

var textContainer = document.getElementsByClassName('text-container');
var textContainer0_h = textContainer[0].offsetHeight;

var h2 = document.getElementsByTagName('h2');

h2[0].style.fontSize = (textContainer0_h * 0.075) + 'px';

var video = document.getElementById('video');
var video_w = site_w;
var video_h = video_w * 0.5625;

if (site_w * 0.5625 < h) {
    video.width = video_w;
    video.height = video_h;
} else {
    video_h = h;
    video_w = video_h * (560 / 315);
    video.width = video_w;
    video.height = video_h;
}

var gifContainer = document.querySelector('.gif-container');
var bulletedContainer = document.querySelector('.non-bulleted-ul-container');
var bulletedContainer_w = bulletedContainer.offsetWidth;
var textContainer2_w = textContainer[2].offsetWidth;
var gifContainer_w = textContainer2_w - bulletedContainer_w - 30;

var ul_iconed = document.querySelector('.iconed');
var ul_iconed_w =  ul_iconed.offsetWidth;
var li_img = document.querySelector('.iconed img');
var li_img_w =  li_img.offsetWidth;
var li_span = document.querySelectorAll('.iconed span');
var li_span_w = ul_iconed_w - (li_img_w * 1.5)

li_span[0].style.width = li_span_w + 'px';

var featuresContainer = document.getElementById('features-container__inner');
var featureContainer = document.getElementsByClassName('feature-container__inner');

var featureContainerH4 = document.querySelectorAll('.feature-container h4');
var featureContainerH4_inner = document.querySelectorAll('.feature-container h4 span');
var featureContainerP = document.querySelectorAll('.feature-container p');
var featureContainerP_inner = document.querySelectorAll('.feature-container p span');

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

if (w > 749) {
    var header0_h = featureContainerH4_inner[0].offsetHeight;
    var header1_h = featureContainerH4_inner[1].offsetHeight;
    var header2_h = featureContainerH4_inner[2].offsetHeight;
    var header3_h = featureContainerH4_inner[3].offsetHeight;
    var p0_h = featureContainerP_inner[0].offsetHeight;
    var p1_h = featureContainerP_inner[1].offsetHeight;
    var p2_h = featureContainerP_inner[2].offsetHeight;
    var p3_h = featureContainerP_inner[3].offsetHeight;

    if (w < 1285) {
        featureContainerH4[0].style.height = header1_h + 'px';
        featureContainerP[0].style.height = p1_h + 'px';
        featureContainerH4[1].style.height = header1_h + 'px';
        featureContainerP[1].style.height = p1_h + 'px';
        featureContainerH4[2].style.height = header2_h + 'px';
        featureContainerP[2].style.height = p2_h + 'px';
        featureContainerH4[3].style.height = header2_h + 'px';
        featureContainerP[3].style.height = p2_h + 'px';
    } else {
        for (var i = 0; i < featureContainer.length; i++) {
            featureContainerH4[i].style.height = (header0_h * 3) + 'px';
            featureContainerP[i].style.height = p1_h + 'px';
        }
    }
}

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
var condensed_h = condensedHeight_h - 17.5;

for (var i = 0; i < condensed.length; i++) {
    condensed[i].style.height = condensed_h + 'px';
    condensed[i].style.transition = 'height 1s';
}

function expand(x) {
    feature[x].style.height = 17.5 + description_h[x] + 'px';
    readMore[x].innerHTML = 'Read less';
    readMore[x].setAttribute('onclick','condense(' + x + ')');
}

function condense(x) {
    feature[x].style.height = condensed_h + 'px';
    readMore[x].innerHTML = 'Read more';
    readMore[x].setAttribute('onclick','expand(' + x + ')');
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("resize", function() {
        h = window.innerHeight;
        w = window.innerWidth;

        site_h = site.offsetHeight;
        site_w = site.offsetWidth;

        if (site_w * 0.5625 < h) {
            video_w = site_w;
            video_h = video_w * 0.5625;
            video.width = video_w;
            video.height = video_h;
        } else {
            video_h = h * 0.9;
            video_w = video_h * (560 / 315);
            video.width = video_w;
            video.height = video_h;
        }

        textContainer_h = textContainer[0].offsetHeight;
        h2[0].style.fontSize = (textContainer_h * 0.075) + 'px';

        ul_iconed_w =  ul_iconed.offsetWidth;
        li_img_w =  li_img.offsetWidth;
        li_span_w = ul_iconed_w - (li_img_w * 1.75)

        li_span[0].style.width = li_span_w + 'px';

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

        if (w > 749) {
            header0_h = featureContainerH4_inner[0].offsetHeight;
            header1_h = featureContainerH4_inner[1].offsetHeight;
            header2_h = featureContainerH4_inner[2].offsetHeight;
            header3_h = featureContainerH4_inner[3].offsetHeight;
            p0_h = featureContainerP_inner[0].offsetHeight;
            p1_h = featureContainerP_inner[1].offsetHeight;
            p2_h = featureContainerP_inner[2].offsetHeight;
            p3_h = featureContainerP_inner[3].offsetHeight;

            if (w < 1285) {
                featureContainerH4[0].style.height = header1_h + 'px';
                featureContainerP[0].style.height = p1_h + 'px';
                featureContainerH4[1].style.height = header1_h + 'px';
                featureContainerP[1].style.height = p1_h + 'px';
                featureContainerH4[2].style.height = header2_h + 'px';
                featureContainerP[2].style.height = p2_h + 'px';
                featureContainerH4[3].style.height = header2_h + 'px';
                featureContainerP[3].style.height = p2_h + 'px';
            } else {
                for (var i = 0; i < featureContainer.length; i++) {
                    featureContainerH4[i].style.height = (header0_h * 3) + 'px';
                    featureContainerP[i].style.height = p1_h + 'px';
                }
            }
        } else {
            for (var i = 0; i < featureContainerH4.length; i++) {
                featureContainerH4[i].style.height = 'auto';
                featureContainerP[i].style.height = 'auto';
            }
        }

        condensedHeight_h = condensedHeight.offsetHeight;
        condensed_h = condensedHeight_h - 17.5;
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
            condensed[i].style.height = condensed_h + 'px';
        }

        for (var i = 0; i < readMore.length; i++) {
            readMore[i].innerHTML = 'Read more';
            readMore[i].setAttribute('onclick','expand(' + i + ')');
        }
    });
});