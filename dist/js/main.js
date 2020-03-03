"use strict";

var accordion = document.querySelectorAll('.accordion');

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  };
}
"use strict";
//# sourceMappingURL=main.js.map
