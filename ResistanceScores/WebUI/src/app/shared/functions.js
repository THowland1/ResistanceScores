"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copy all classes and styles on the DOM element to "classes" and "styles" properties on the component
 * @param element
 * an Angular component with an "elRef" property (type:ElementRef) and a "classes" property (type:string).
 */
function copyClassesAndStyles(element) {
    var classStr = 'class';
    var styleStr = 'style';
    element.classes = element.elRef.nativeElement.getAttribute(classStr);
    element.styles = element.elRef.nativeElement.getAttribute(styleStr);
    var observer = new MutationObserver(function (mutations) {
        mutations
            .forEach(function (_) {
            element.classes = element.elRef.nativeElement.getAttribute(classStr);
            var stylesAsString = element.elRef.nativeElement.getAttribute(styleStr);
            console.log("{" + stylesAsString + "}");
            element.styles = JSON.parse("{" + stylesAsString + "}");
            console.log(element.styles);
        });
    });
    var config = {
        attributes: true,
        childList: false,
        characterData: false,
        attributeFilter: [classStr, styleStr]
    };
    observer.observe(element.elRef.nativeElement, config);
}
exports.copyClassesAndStyles = copyClassesAndStyles;
function isNullOrUndefined(value) {
    if (value === null || value === undefined) {
        return true;
    }
    return false;
}
exports.isNullOrUndefined = isNullOrUndefined;
///**
// * Copy all styles on the DOM element to a "classes" property on the component
// * @param element
// * an Angular component with an "elRef" property (type:ElementRef) and a "classes" property (type:string).
// */
//export function copyStyles<T extends { elRef: ElementRef, styles: string }>(element: T): void {
//  element.classes = element.elRef.nativeElement.classList.value;
//  const observer = new MutationObserver(mutations => {
//    mutations
//      .forEach(mutation => {
//        console.log(mutation.target, mutation.addedNodes, mutation.attributeName, mutation.attributeNamespace);
//        element.classes = (mutation.target as HTMLElement).sty.classList.value;
//      });
//  });
//  const config = { attributes: true, childList: false, characterData: false, attributeFilter: ['class'] };
//  observer.observe(element.elRef.nativeElement, config);
//}
//# sourceMappingURL=functions.js.map