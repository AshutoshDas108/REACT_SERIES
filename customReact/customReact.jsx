// 2 things needed -- i-custom react elemnts  ii-custom render function

function customRender(reactElement, cointainer){
    const domEle=document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.childern;
    for(prop in reactElement.props){
        if (prop == 'childern') continue;
        domEle.setAttribute(prop, reactElement.props[prop]);
    }
    cointainer.append(domEle);
}


const customReactElement ={
    type: a,
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    childern: 'Click me to visit google.com'
}

const mainContainer = document.getElementById('root')

customRender(customReactElement, mainContainer)


