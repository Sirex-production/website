'use strict'

function showStudioContent()
{
    turnOffContent();
    document.getElementById('studio-content').style.display = 'block';
}

function showGamesContent()
{
    turnOffContent();
    document.getElementById('games-content').style.display = 'block';
}

function showMediaContent()
{
    turnOffContent();
    document.getElementById('media-content').style.display = 'block';
}

function showBlogContent()
{
    turnOffContent();
    document.getElementById('blog-content').style.display = 'block';
}

function showContactsContent()
{
    turnOffContent();
    document.getElementById('contacts-content').style.display = 'block';
}

function turnOffContent()
{
    let content = document.getElementsByClassName('content')[0].children;
    

    for (let i = 0; i < content.length; i++)
    {
        let element = content[i];
        element.style.display = 'none';
    }
}