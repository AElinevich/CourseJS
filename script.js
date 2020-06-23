let DomElement = function () {
    this.selector = "";
    this.height = 0;
    this.width = 0;
    this.backgroundColor = "";
    this.fontSize = 0;
};

DomElement.prototype.create = function (selector, height, width, backgroundColor, fontSize) {
    if(selector.indexOf('.') !== -1) {
            const classElem = document.createElement('div');
            classElem.className = selector;

                 classElem.style.cssText = 'height: ' + height + '; \
                    width: ' + width + '; \
                    background-color: ' + backgroundColor + '; \
                    font-size: ' + fontSize; 
                    classElem.textContent = 'Привет, я DIV элемент';
                    document.body.appendChild(classElem);
                }
        if(selector.indexOf('#') !== -1) {
            const idElem = document.createElement('p');
                idElem.id = selector;
                    idElem.style.cssText = 'height: ' + height + '; \
                    width: ' + width + '; \
                    background-color: ' + backgroundColor + '; \
                    font-size: ' + fontSize;
                    idElem.textContent = 'Привет, я P элемент';
                    document.body.appendChild(idElem); 
        }
        }    


        DomElement.prototype.create('#block', "90px", "800px", "red", "18px");
        DomElement.prototype.create('.block', "90px", "800px", "yellow", "18px");


const domElementNew = new DomElement();
console.log(domElementNew);
console.log(DomElement);



