"use strict";

// Print content
export const _printResult = function (data) {
  const printArea = window.open();

  printArea.document.write("<title>Ladder Size Calculator</title>");
  printArea.document.write('<link rel="stylesheet" href="./styles/printStyle.css" />');
  printArea.document.write('<h2 class="subcontent-print_title">Access Ladder/Stair</h2>');
  printArea.document.write(data.innerHTML);

  const printData = printArea.document.querySelectorAll(".subcontent-sub-info");
  printData.forEach((el) => (el.style.display = "none"));

  // Small delay before print in order to allow CSS finish loading.
  setTimeout(function () {
    printArea.print();
    printArea.close();
  }, 100);
};
