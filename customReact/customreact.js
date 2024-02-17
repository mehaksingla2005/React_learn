// function customRender(reactElement,container){
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)
// }

function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // for(const prop in props){
    //     if(prop=="children") continue;
    //     domElement.setAttribute(prop,reactElement.props[prop])

    // }

}

const reactElement = {
    type :"a",//element kis type ka hai
    props : {//properties props object hote hai usme hm properties pass krte hai
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}


const mainContainer = document.querySelector("#root")

customRender(reactElement , mainContainer)

