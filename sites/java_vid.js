function page()
{
    let pages = document.getElementById("num_page").value;
    let select = document.getElementById("movies");
    document.getElementById("num_page").value = "";

    let page1 = '';

    if(page == "Page 1")
    {
        select.innerHTML = page1;
    }
    else
    {
        select.innerHTML = "";
    }
}