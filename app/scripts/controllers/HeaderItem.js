/**
 * Created by Olivier CALLENS on 26/01/2016.
 */
var HeaderItem = (function () {
    /* constructor(ligneCraNumber: number, label: string, data: string, size: number, nomClass: string, hasBeenToggle: boolean, hasOnClick: boolean, onClick: boolean, disabled: boolean) {
         this.ligneCraNumber = ligneCraNumber;
                 this.label = label;
                 this.data = data;
                 this.size = size;
                 this.width = 10;
                 this.bgColor = "#FFFFFF";
                 this.type = "";
                 this.className = nomClass;
                 this.hasBeenToggle = hasBeenToggle;
                 this.hasOnClick = hasOnClick;
                 this.onClick = onClick;
                 this.disabled = disabled;
     } */
    function HeaderItem(ligneCraNumber, label, data, size, width, bgColor, type, nomClass, hasBeenToggle, hasOnClick, onClick, disabled) {
        this.ligneCraNumber = ligneCraNumber;
        this.label = label;
        this.data = data;
        this.size = "1";
        this.width = 10;
        this.bgColor = bgColor;
        this.type = type;
        this.className = nomClass;
        this.hasBeenToggle = hasBeenToggle;
        this.hasOnClick = hasOnClick;
        this.onClick = onClick;
        this.disabled = disabled;
    }
    HeaderItem.prototype.showClassName = function () {
        return " I m " + this.className;
    };
    return HeaderItem;
})();
