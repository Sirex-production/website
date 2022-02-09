'use strict'

function showStudioContent()
{
    resetContent();
    document.getElementById('studio-content').style.display = 'block';
}

function showGamesContent()
{
    resetContent();
    document.getElementById('games-content').style.display = 'block';
    document.body.style.backgroundColor = 'black';
}

function showMediaContent()
{
    resetContent();
    document.getElementById('media-content').style.display = 'block';
}

function showBlogContent()
{
    resetContent();
    document.getElementById('blog-content').style.display = 'block';
}

function showContactsContent()
{
    resetContent();
    document.getElementById('contacts-content').style.display = 'block';
}

function resetContent()
{
    let content = document.getElementsByClassName('content')[0].children;
    document.body.style.backgroundColor = 'rgba(49, 40, 68)';
    // document.body.style.animation = 'gradient 8s ease infinite';

    for (let i = 0; i < content.length; i++)
    {
        let element = content[i];
        element.style.display = 'none';
    }
}