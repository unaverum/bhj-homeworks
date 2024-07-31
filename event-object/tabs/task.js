const tabsList = Array.from(document.getElementsByClassName("tab"));
const tabsListContent = Array.from(document.getElementsByClassName("tab__content"));

function tabsChanger() {
    for (let activeTab of tabsList) {
        activeTab.className = "tab";
    };
    for (let activeTabContent of tabsListContent) {
        activeTabContent.className = "tab__content";
    };

    const index = tabsList.indexOf(this);
    tabsList[index].className = "tab tab_active";
    tabsListContent[index].className = "tab__content tab__content_active";
}

for (let tabIndex of tabsList) {
    tabIndex.onclick = tabsChanger;
}