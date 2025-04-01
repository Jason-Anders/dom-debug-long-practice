export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`




    return document.getElementById(id);
    // Your code here
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

const tags = document.getElementsByTagName(tag);
return tags[0];
return goThruDOM(document.body.children)
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
const clss = document.getElementsByClassName(cls);
return clss[0];
    // Your code here
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
const tags = document.getElementsByTagName(tag);
return tags;
    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
return document.getElementsByClassName(cls);
    // Your code here
}
