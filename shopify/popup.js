let createApi = document.getElementById("createApi");

createApi.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enableCheckBoxs,
  });
});

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
    setTimeout(() => {}, 1000);
  });
  alert("Create API done, click OK to completed !!!");
}
