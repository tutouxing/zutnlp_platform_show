(function() {
    let VueEditable = {
        install: function(Vue) {
            Vue.prototype.$editable = function(e,callback) {
                let target=e.target,value=target.innerText;
                target.innerHTML = "<input type='text' value='" + value + "' id='_editable' style='width:100%;box-sizing:border-box;background:transparent;font-size:13px;color:red;text-align:center'>";
                let input = document.getElementById('_editable');
                input.focus();
                let len = input.value.length;
                if (document.selection) {
                    let sel = input.createTextRange();
                    sel.moveStart('character', len);
                    sel.collapse();
                    sel.select();
                } else if (typeof input.selectionStart === 'number' && typeof input.selectionEnd === 'number') {
                    input.selectionStart = input.selectionEnd = len;
                }

                let action = function() {
                    if (value !== this.value && this.value !== '') {
                        target.innerHTML = this.value;
                        callback(this.value)
                    } else {
                        target.innerHTML = value;
                    }
                    input.removeEventListener("blur", action, false);
                };
                input.addEventListener("blur", action, false);
            }
        }
    }

    if (typeof exports === "object") {
        module.exports = VueEditable;
    } else if (typeof define === "function" && define.amd) {
        define([], function() {
            return VueEditable;
        });
    } else if (window.Vue) {
        window.VueEditable = VueEditable;
        Vue.use(VueEditable);
    };
})();