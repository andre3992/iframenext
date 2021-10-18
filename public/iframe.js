function makeFrame() {
  document
    .getElementById("endesaIframe")
    .setAttribute(
      "style",
      "display:block;width:300px;height:455px;border:0;scroll:hidden;position:fixed;right:0;top:100px;"
    );
  document.getElementById("iframeImg").setAttribute("style", "display:none;");
}

function makeDiv() {
  ifrm = document.createElement("img");
  ifrm.setAttribute("id", "iframeImg");
  ifrm.setAttribute(
    "style",
    "width:200px;height:130px;border:0;scroll:hidden;position: fixed;right:0;top:400px; cursor:pointer"
  );
  ifrm.setAttribute("src", "http://localhost:5066/c2c.png");
  ifrm.setAttribute("onclick", "makeFrame()");
  document.body.appendChild(ifrm);
  ifrm = document.createElement("IFRAME");
  ifrm.setAttribute("id", "endesaIframe");
  ifrm.setAttribute("style", "display:none;");
  document.body.appendChild(ifrm);
  ifrm.setAttribute("src", "http://localhost:5066");
}

function closeIframe() {
  //document.getElementById("endesaIframe").setAttribute("style", "display:none");
  document.getElementById("endesaIframe").style.display = "none";
  document
    .getElementById("iframeImg")
    .setAttribute(
      "style",
      "display:block;width:200px;height:130px;border:0;scroll:hidden;position: fixed;right:0;top:400px; cursor:pointer"
    );
}

window.addEventListener("message", function (e) {
  closeIframe();
  // makeDiv();
});
makeDiv();
