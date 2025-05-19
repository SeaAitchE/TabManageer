# 📌 Tab Manageer Chrome Extension

**Tab Manageer** is a lightweight Chrome Extension that lets you save the current tab, view your saved tabs in a list, and delete them when no longer needed. It stores everything locally using Chrome's storage API.

---

## 🚀 Features

- ✅ Save the currently active browser tab
- 📋 View a list of saved tabs
- 🔗 Click to reopen saved tabs in a new tab
- ❌ Delete individual tabs from the list
- 🔒 Automatically skips system pages like `chrome://` and `edge://`

---

## 📁 Project Structure

TabManageer/

├── manifest.json # Extension configuration

├── popup.html # HTML UI for the popup

├── popup.js # JavaScript logic

├── styles.css # (Optional) CSS styling

└── README.md # Project documentation




---

## 🧠 How It Works

1. Click the **Add Tab** button in the extension popup.
2. The extension checks if the tab is savable (non-system page).
3. If it's not already saved, it stores the tab's title and URL using `chrome.storage.local`.
4. The saved tab appears in a list with:
   - A clickable link to reopen it
   - A delete button to remove it from the list
5. All saved tabs are reloaded every time the popup is opened.

---

## 🛠️ Installation (For Development)

1. Clone or download this project folder.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** in the top-right corner.
4. Click **Load unpacked** and select the `TabManageer` folder.
5. The extension will now appear in your Chrome toolbar.

---

## 📜 Code Summary (`popup.js`)

- **Add Tab Button Listener**
  - Saves the currently active tab if it hasn’t been saved already.

- **`shouldSaveTab(url)`**
  - Prevents saving system tabs like `chrome://`.

- **`saveTab(tab)`**
  - Saves the tab title and URL locally if it's unique.

- **`removeTab(url)`**
  - Deletes a specific saved tab by URL.

- **`createList(title, url)`**
  - Dynamically adds a new list item with link and delete button.

- **`updateTabList()`**
  - Refreshes the list of saved tabs.

---

## 📦 Requirements

- Google Chrome browser
- Chrome Extension Manifest V3 support

---

## 📄 License

MIT License — free for personal or commercial use.

---

## ✨ Example Usage

![Tab Manageer Example Screenshot](https://via.placeholder.com/400x200?text=Tab+Manageer+UI)  
*(Replace with a real screenshot if desired)*

---

## 💡 Notes

- System and internal pages (like `chrome://settings`) cannot be saved due to Chrome security restrictions.
- Great for managing research, to-do reading lists, and keeping your workspace tidy.

---
---

## 🔮 Planned Features / Future Updates

- 🌐 **Cross-browser Support**
  - Ensure compatibility with Firefox and Edge using WebExtension APIs.
- 📦 **Export & Import Tabs**
  - Allow users to export their saved tabs to a JSON file and import them later.
- 🧹 **Auto-Cleanup Option**
  - Option to automatically remove tabs that haven’t been accessed in X days.
- 🗂️ **Tab Grouping**
  - Let users categorize or tag tabs (e.g. “Work”, “Reading”, “Later”).
- 🔁 **Sync Across Devices**
  - Use `chrome.storage.sync` for optional syncing with Chrome accounts.
- 🎨 **Dark Mode**
  - Add a toggleable dark theme for the popup UI.
