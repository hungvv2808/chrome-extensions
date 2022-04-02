let createApi = document.getElementById("createApi");

createApi.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: createApp,
  });
});

function createApp() {
  redirectToDevelopApp();
}

function sleep(seconds) {
  setTimeout(() => {}, seconds * 1000);
}

function redirectToDevelopApp() {
  var currentPath = location.href;
  var check = currentPath.includes("myshopify") ? true : false;
  if (check == false) {
    alert(
      "Look like you don't access to Shopify now, please redirect to Shopify to continue this app."
    );
  }
  var pathRedirect =
    currentPath +
    (currentPath.includes("admin") ? "" : "/admin") +
    "/apps/development";
  window.open(pathRedirect, "_self");
  sleep(1);
}

function enableCheckBoxs() {
  var checkBoxs = document.querySelectorAll(".Polaris-Checkbox__Input_30ock");
  if (checkBoxs.length == 0) {
    alert(
      "Cannot find the CheckBoxs, please redirect to Shopify -> Deverlop App"
    );
    return;
  }
  checkBoxs.forEach((check) => {
    if (check.checked == true) {
      return;
    }
    check.click();
    sleep(1000);
  });
  alert("Create API done, click OK to completed !!!");
}
