const buttontoaddtabs = document.querySelector("#addtabs");
const ul = document.querySelector("#ulist");

// Event listener for adding tabs when add button is clicked
buttontoaddtabs.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (shouldSaveTab(tab.url)) {
      saveTab(tab);
    }
  });
});

function shouldSaveTab(url) {
  const excludedUrls = [
    "chrome://",
    "edge://"
  ];
  
  return !excludedUrls.some(excludedUrl => url.startsWith(excludedUrl));
}

function saveTab(tab) {
  const newTab = { title: tab.title, url: tab.url };
  chrome.storage.local.get({ savedTabs: [] }, (data) => {
    const existingTab = data.savedTabs.find(savedTab => savedTab.url === tab.url);

    if (!existingTab) {
      const updatedTabs = [...data.savedTabs, newTab];

      // Save updated tabs to local storage
      chrome.storage.local.set({ savedTabs: updatedTabs }, () => {
        if (!chrome.runtime.lastError) {
          createList(newTab.title, newTab.url);
        }
      });
    }
  });
}

// Remove a specific tab from storage
function removeTab(urlToRemove) {
  chrome.storage.local.get({ savedTabs: [] }, (data) => {
    const updatedTabs = data.savedTabs.filter(tab => tab.url !== urlToRemove);

    chrome.storage.local.set({ savedTabs: updatedTabs }, () => {
      updateTabList();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get({ savedTabs: [] }, (data) => {
    data.savedTabs.forEach(tab => createList(tab.title, tab.url));
  });
});

function updateTabList() {
  chrome.storage.local.get({ savedTabs: [] }, (data) => {
    ul.innerHTML = "";  
    data.savedTabs.forEach(tab => createList(tab.title, tab.url)); 
  });
}

function createList(title, url) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = url;
  a.textContent = title;
  a.target = "_blank";  

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    removeTab(url); 
  });

  li.appendChild(a);
  li.appendChild(deleteButton);
  ul.insertBefore(li, ul.firstChild);
}
