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
    document.body.style.background = 'fixed';
    document.body.style.backgroundColor = '#151515';
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
    document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
    document.body.style.backgroundSize = '300% 300%';
    document.body.style.animation = 'gradient 30s ease infinite';

    for (let i = 0; i < content.length; i++)
    {
        let element = content[i];
        element.style.display = 'none';
    }
}