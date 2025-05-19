document.getElementById("form-ej6").addEventListener("submit", function (e) {
  e.preventDefault();
  let z = parseFloat(document.getElementById("z-ej6").value);
  let resultado1 = 0.4 * z ** 4 + 3.1 * z ** 2 - 162.3 * z - 80.7;
  let resultado2 = (z ** 3 - 23) / Math.cbrt(z ** 2 + 17.5);
  document.getElementById("resultado-ej6").innerText = `a) ${resultado1.toFixed(2)} | b) ${resultado2.toFixed(2)}`;
});

document.getElementById("form-ej7").addEventListener("submit", function (e) {
  e.preventDefault();
  let t = parseFloat(document.getElementById("t-ej7").value);
  let resultado1 = 0.5 * Math.exp(2 * t) - 3.81 * t ** t;
  let resultado2 = (6 * t ** 2 + 6 * t - 2) / (t ** 2 - 1);
  document.getElementById("resultado-ej7").innerText = `a) ${resultado1.toFixed(2)} | b) ${resultado2.toFixed(2)}`;
});

document.getElementById("form-ej8").addEventListener("submit", function (e) {
  e.preventDefault();
  let x = parseFloat(document.getElementById("x-ej8").value);
  let y = parseFloat(document.getElementById("y-ej8").value);
  let resultado1 = Math.pow(x ** 2 + y ** 2, 2 / 3) + (x * y) / (y - x);
  let resultado2 = Math.sqrt(x + y) / ((x - y) ** 2) + 2 * x ** 2 - x * y ** 2;
  document.getElementById("resultado-ej8").innerText = `a) ${resultado1.toFixed(2)} | b) ${resultado2.toFixed(2)}`;
});

document.getElementById("form-ej9").addEventListener("submit", function (e) {
  e.preventDefault();
  let c = parseFloat(document.getElementById("c-ej9").value);
  let d = parseFloat(document.getElementById("d-ej9").value);
  let a = c * d ** 2;
  let b = (c + a) / (c - d);
  let resultado1 = Math.exp(d - b) + Math.cbrt(c + a - (c * a) ** d);
  let resultado2 = d / c + ((c * d / b) ** 2) - c ** d - a / b;
  document.getElementById("resultado-ej9").innerText = `a) ${resultado1.toFixed(2)} | b) ${resultado2.toFixed(2)}`;
});

document.getElementById("form-ej10").addEventListener("submit", function (e) {
  e.preventDefault();
  let x = parseFloat(document.getElementById("x-ej10").value);
  let izquierdo1 = Math.cos(x) ** 2 - Math.sin(x) ** 2;
  let derecho1 = 1 - 2 * Math.sin(x) ** 2;
  let izquierdo2 = Math.tan(x) / (Math.sin(x) - 2 * Math.tan(x));
  let derecho2 = 1 / Math.cos(x - 2);
  document.getElementById("resultado-ej10").innerText =
    `a) Izq: ${izquierdo1.toFixed(4)} | Der: ${derecho1.toFixed(4)}\n` +
    `b) Izq: ${izquierdo2.toFixed(4)} | Der: ${derecho2.toFixed(4)}`;
});