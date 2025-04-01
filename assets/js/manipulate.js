export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Big Boss Man's Portfolio"
    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "Big Boss Man"
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

     document.body.children[1].children[1].innerText = "I was the boss at my last job for 10 years. I left there after I inherited a business that I soley operate and own. Now I am learning to write software so I can update my buisness website and move forward by building new things."
    // document.body.children[1].children[2].innerText = '';
    // Your code here
}
