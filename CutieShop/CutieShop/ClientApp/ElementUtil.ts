 export default class ElementUtil {
     static addScript(jsFile: string) {
         const element = document.createElement("script");
         element.src = `js/${jsFile}`;
         document.body.appendChild(element);
     }
}