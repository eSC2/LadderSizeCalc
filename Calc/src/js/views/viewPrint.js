"use strict";

export const printResult = function (data) {
  const printArea = window.open();

  printArea.document.write("<title>Ladder Size Calculator</title>");
  printArea.document.write('<link rel="stylesheet" href="./styles/printStyle.css" />');
  printArea.document.write('<h2 class="subcontent-print_title">Rung Access Ladder</h2>');
  printArea.document.write(data.innerHTML);

  // Small delay before print in order to allow CSS finish loading.
  setTimeout(function () {
    printArea.print();
    printArea.close();
  }, 100);
};
