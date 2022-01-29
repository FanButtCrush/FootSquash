function page()
{
    let pages = document.getElementById("num_page").value;
    let select = document.getElementById("gallery");
    document.getElementById("num_page").value = "";

    let page1 = "<div id='name_page'>Page: 1</div>"+
    "<div id='pic1' class='pic'><a href='../pics/FootSquash1.png' target='_blank'><img class='img_small' src='../pics/FootSquash1.png'></a><br><br>Photomontage 1 - Foot Squash.</div>"+
    "<div id='pic2' class='pic'><a href='../pics/Foot Squash2.png' target='_blank'><img class='img_small' src='../pics/FootSquash2.png'></a><br><br>Photomontage 2 - Foot Squash.</div>"+
    "<div id='pic3' class='pic'><a href='../pics/Foot Squash3.png' target='_blank'><img class='img_small' src='../pics/FootSquash3.png'></a><br><br>Photomontage 3 - Foot Squash.</div>"+
    "<div id='pic4' class='pic'><a href='../pics/Foot Squash4.png' target='_blank'><img class='img_small' src='../pics/FootSquash4.png'></a><br><br>Photomontage 4 - Foot Squash.</div>"+
    "<div id='pic5' class='pic'><a href='../pics/Foot Squash5.png' target='_blank'><img class='img_small' src='../pics/FootSquash5.png'></a><br><br>Photomontage 5 - Foot Squash.</div>"+
    "<div id='pic6' class='pic'><a href='../pics/Foot Squash6.png' target='_blank'><img class='img_small' src='../pics/FootSquash6.png'></a><br><br>Photomontage 6 - Foot Squash.</div>"+
    "<div id='pic7' class='pic'><a href='../pics/Foot Squash7.png' target='_blank'><img class='img_small' src='../pics/FootSquash7.png'></a><br><br>Photomontage 7 - Foot Squash.</div>"+
    "<div id='pic8' class='pic'><a href='../pics/Foot Squash8.png' target='_blank'><img class='img_small' src='../pics/FootSquash8.png'></a><br><br>Photomontage 8 - Foot Squash.</div>";

    let page2 = "<div id='name_page'>Page: 2</div>"+
    "<div id='pic1' class='pic'><a href='../pics/FootSquash9.png' target='_blank'><img class='img_small' src='../pics/FootSquash9.png'></a><br><br>Photomontage 9 - Foot Squash.</div>"+
    "<div id='pic2' class='pic'><a href='../pics/FootSquash10.png' target='_blank'><img class='img_small' src='../pics/FootSquash10.png'></a><br><br>Photomontage 10 - Foot Squash.</div>"+
    "<div id='pic3' class='pic'><a href='../pics/FootSquash11.png' target='_blank'><img class='img_small' src='../pics/FootSquash11.png'></a><br><br>Squashed under my foot - Foot Squash.</div>"+
    "<div id='pic4' class='pic'><a href='../pics/FootSquash12.png' target='_blank'><img class='img_small' src='../pics/FootSquash12.png'></a><br><br>Crush by my toe - Foot Squash.</div>"+
    "<div id='pic5' class='pic'><a href='../pics/FootSquash13.png' target='_blank'><img class='img_small' src='../pics/FootSquash13.png'></a><br><br>Catching by my foot! - Foot Squash.</div>"+
    "<div id='pic6' class='pic'><a href='../pics/FootSquash14.png' target='_blank'><img class='img_small' src='../pics/FootSquash14.png'></a><br><br>Can I sit here? - Foot Squash.</div>"+
    "<div id='pic7' class='pic'><a href='../pics/FootSquash15.png' target='_blank'><img class='img_small' src='../pics/FootSquash15.png'></a><br><br>Stomping - Foot Squash.</div>"+
    "<div id='pic8' class='pic'><a href='../pics/FootSquash16.png' target='_blank'><img class='img_small' src='../pics/FootSquash16.png'></a><br><br>Putting on my foot - Foot Squash.</div>";

    let page3 = "<div id='name_page'>Page: 3</div>"+
    "<div id='pic1' class='pic'><a href='../pics/FootSquash17.png' target='_blank'><img class='img_small' src='../pics/FootSquash17.png'></a><br><br>Hide to my navel - Foot Squash.</div>"+
    "<div id='pic2' class='pic'><a href='../pics/FootSquash18.png' target='_blank'><img class='img_small' src='../pics/FootSquash18.png'></a><br><br>Stomping 2 - Foot Squash.</div>"+
    "<div id='pic3' class='pic'><a href='../pics/FootSquash19.png' target='_blank'><img class='img_small' src='../pics/FootSquash19.png'></a><br><br>Throwing to my pocket - Foot Squash.</div>"+
    "<div id='pic4' class='pic'><a href='../pics/FootSquash20.png' target='_blank'><img class='img_small' src='../pics/FootSquash20.png'></a><br><br>Clue to my butt - Foot Squash.</div>"+
    "<div id='pic5' class='pic'><a href='../pics/FootSquash21.png' target='_blank'><img class='img_small' src='../pics/FootSquash21.png'></a><br><br>Clue to my toe - Foot Squash.</div>"+
    "<div id='pic6' class='pic'><a href='../pics/FootSquash23.png' target='_blank'><img class='img_small' src='../pics/FootSquash23.png'></a><br><br>Tiny climbs on my foot - Foot Squash.</div>"+
    "<div id='pic7' class='pic'><a href='../pics/FootSquash24.jpg' target='_blank'><img class='img_small' src='../pics/FootSquash24.jpg'></a><br><br>Entrance to jeans - Foot Squash.</div>"+
    "<div id='pic8' class='pic'><a href='../pics/FootSquash25.png' target='_blank'><img class='img_small' src='../pics/FootSquash25.png'></a><br><br>Fun has begun - Foot Squash.</div>"

    let page4 = "<div id='name_page'>Page: 4</div>"+
    "<div id='pic1' class='pic'><a href='../pics/FootSquash26.jpg' target='_blank'><img class='img_small' src='../pics/FootSquash26.jpg'></a><br><br>Fun has begun(Stomping ending) - Foot Squash.</div>"+
    "<div id='pic2' class='pic'><a href='../pics/FootSquash28.jpg' target='_blank'><img class='img_small' src='../pics/FootSquash28.jpg'></a><br><br>Fun has begun(Sitting ending) - Foot Squash.</div>";

    if(pages == "Page 1")
    {
        select.innerHTML = page1;
    }
    else if(pages == "Page 2")
    {
        select.innerHTML = page2;
    }
    else if(pages == "Page 3")
    {
        select.innerHTML = page3;
    }
    else if(pages == "Page 4")
    {
        select.innerHTML = page4;
    }
    else
    {
        select.innerHTML = "";
    }
}
