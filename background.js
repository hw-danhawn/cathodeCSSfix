function reddenPage() {
  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  let iframes = document.querySelectorAll('iframe');
  let fontElm = document.querySelector('font');
  let desktopHeader = document.querySelector('.header-display-desktop');
  let brs = document.querySelectorAll('br');
  let bottom = document.getElementById('siteWrapper');

  desktopHeader.remove();
  fontElm.remove();
  brs.forEach((br) => br.remove())
  bottom.remove();

  iframes[0].style.width = "79%";
  iframes.forEach((iframe) => iframe.style.height = height + "px");
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});
