import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, d as each, e as escape, n as null_to_empty } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { a as addIcon } from "../../../../chunks/add.js";
import { p as personIcon } from "../../../../chunks/profile.js";
const channelIcon = "/_app/immutable/assets/channel.f120af62.svg";
const DmIcon = "/_app/immutable/assets/dm.e04355f7.svg";
const videoIcon = "/_app/immutable/assets/video.4b9724ea.svg";
const callIcon = "/_app/immutable/assets/call.35d9cb46.svg";
const sendIcon = "/_app/immutable/assets/send.dccd0b87.svg";
const addFillIcon = "/_app/immutable/assets/addFill.0f0cc2eb.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chat.svelte-1a4flls.svelte-1a4flls{height:100%;border-radius:0.3rem}.banner-text.svelte-1a4flls.svelte-1a4flls{height:100%;display:flex}.banner-text.svelte-1a4flls h6.svelte-1a4flls{font-size:24px;color:var(--color-banner-text-1);margin:0}.banner-text.svelte-1a4flls p.svelte-1a4flls{font-size:15px;color:var(--color-bg-1);margin:0}.chat-area.svelte-1a4flls.svelte-1a4flls{height:99%;width:99.4%;background-color:var(--side-nav-color);border-radius:0.5rem;padding:0.2rem;display:flex;flex-direction:column}.chat-list.svelte-1a4flls.svelte-1a4flls{width:98%;border-radius:0.5rem;background-color:var(--side-nav-color);max-height:97.5%;min-height:97.5%;padding:0.5rem 0;display:flex;flex-direction:column;align-items:center}.chat-list.svelte-1a4flls input.svelte-1a4flls{width:90%;background-color:var(--color-bg-4);border:none;border-radius:0.5rem;height:1.8rem;color:var(--color-bg-2);padding-left:0.5rem;margin-bottom:1rem}.channels.svelte-1a4flls.svelte-1a4flls{width:90%}.head.svelte-1a4flls.svelte-1a4flls{display:flex;justify-content:space-between;align-items:center;width:100%;padding-bottom:0.5rem;border-bottom:1px solid var(--color-text)}.head.svelte-1a4flls h6.svelte-1a4flls{font-size:20px;font-weight:600;color:var(--color-text)}.head.svelte-1a4flls img.svelte-1a4flls{width:12%;cursor:pointer}.channel-list.svelte-1a4flls.svelte-1a4flls{width:95%;margin-top:0.5rem}.channel-tab.svelte-1a4flls.svelte-1a4flls{cursor:pointer;margin-top:0.5rem;display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.5rem;width:95%;border-radius:0.2rem}.active.svelte-1a4flls.svelte-1a4flls{background-color:var(--color-bg-4);border-left:3px solid var(--color-text)}.channel-tab.svelte-1a4flls img.svelte-1a4flls{width:13%}.channel-tab.svelte-1a4flls p.svelte-1a4flls{color:var(--color-text);font-size:14px}.chat-head.svelte-1a4flls.svelte-1a4flls{display:flex;justify-content:space-between;width:98.5%;align-items:center;padding:0.8rem 0.5rem;background-color:var(--color-bg-4);border-radius:0.5rem}.chat-head.svelte-1a4flls .icon.svelte-1a4flls{width:12%}.chat-head.svelte-1a4flls .data.svelte-1a4flls,.chat-head.svelte-1a4flls .controls.svelte-1a4flls{display:flex;gap:0.8rem;align-items:center}.controls.svelte-1a4flls.svelte-1a4flls{justify-content:space-evenly;padding-right:1rem}.data.svelte-1a4flls h6.svelte-1a4flls{font-size:18px}.message-input.svelte-1a4flls.svelte-1a4flls{display:flex;justify-content:space-between;align-items:center;width:97.5%;background-color:var(--color-bg-4);padding:0.3rem 0.8rem;gap:0.5rem;border-radius:0.5rem}.message-input.svelte-1a4flls .add.svelte-1a4flls{width:2.5%}.message-input.svelte-1a4flls .send.svelte-1a4flls{width:1.5rem;height:1.5rem;padding:0.3rem;background-color:var(--color-bg-3);border-radius:50%}.message-input.svelte-1a4flls input.svelte-1a4flls{flex:1;background-color:var(--color-bg-3);border:none;height:1.8rem;padding:0.2rem 0.5rem;border-radius:10rem;color:var(--color-bg-1)}.chat-texts.svelte-1a4flls.svelte-1a4flls{flex:1;overflow-y:auto;margin:0.5rem 0}.text-box.svelte-1a4flls.svelte-1a4flls{width:100%}.chat-box.svelte-1a4flls.svelte-1a4flls{display:flex;gap:0.5rem;align-items:flex-start;max-width:60%;justify-content:flex-start}.chat-box.svelte-1a4flls p.svelte-1a4flls{background-color:var(--color-bg-3);padding:0.1rem 0.5rem;border-radius:0.5rem}.profile.svelte-1a4flls.svelte-1a4flls{padding:0.5rem;height:10px;width:10px;display:flex;justify-content:center;align-items:center;background-color:var(--color-bg-3);border-radius:50%}.profile.svelte-1a4flls img.svelte-1a4flls{width:95%}.popup-overlay.svelte-1a4flls.svelte-1a4flls{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.632);display:flex;justify-content:center;align-items:center}.popup.svelte-1a4flls.svelte-1a4flls{background-color:var(--color-bg-3);width:30%;height:auto;padding:2rem;border-radius:8px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1)}.popup.svelte-1a4flls form.svelte-1a4flls{display:grid;grid-template-columns:auto;grid-row-gap:10px}form.svelte-1a4flls input.svelte-1a4flls{background-color:var(--color-text);padding:0.8rem 0.8rem;border:none;margin-top:0.2rem;border-radius:0.5rem;color:var(--color-bg-4);font-size:1rem}form.svelte-1a4flls input.svelte-1a4flls::placeholder{color:var(--color-bg-4)}.popup.svelte-1a4flls h2.svelte-1a4flls{margin-top:0;color:var(--color-bg-0);font-size:25px}.form-button.svelte-1a4flls.svelte-1a4flls{width:100%;display:flex;justify-content:flex-end}form.svelte-1a4flls button.svelte-1a4flls{background-color:var(--color-banner-text-2);border:none;padding:0.8rem 2.5rem;margin-top:0.8rem;border-radius:0.3rem;color:var(--color-bg-1);font-weight:600;cursor:pointer}",
  map: null
};
let activeClass = "channel-tab active";
let nonActive = "channel-tab";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showpopup, $$unsubscribe_showpopup;
  const chats = [
    { id: 1, type: 1, title: "Channel Name 1" },
    { id: 2, type: 1, title: "Channel Name 2" },
    { id: 3, type: 1, title: "Channel Name 3" },
    { id: 4, type: 1, title: "Channel Name 4" },
    { id: 5, type: 1, title: "Channel Name 5" },
    { id: 6, type: 2, title: "Employ Name 1" },
    { id: 7, type: 2, title: "Employ Name 2" },
    { id: 8, type: 2, title: "Employ Name 3" }
  ];
  let selectedChat = chats.find((chat) => chat.id === 1);
  let searchText = "";
  let type1Chats = [];
  let type2Chats = [];
  const showpopup = writable({ visible: false });
  $$unsubscribe_showpopup = subscribe(showpopup, (value) => $showpopup = value);
  $$result.css.add(css);
  $$unsubscribe_showpopup();
  return `${$$result.head += `<!-- HEAD_svelte-zokvlm_START -->${$$result.title = `<title>Chat</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-zokvlm_END -->`, ""} <div class="chat svelte-1a4flls"> ${$showpopup.visible ? `    <div class="popup-overlay svelte-1a4flls"><div class="popup svelte-1a4flls"><h2 class="svelte-1a4flls" data-svelte-h="svelte-11cmftz">Create New Channel</h2> <form class="svelte-1a4flls" data-svelte-h="svelte-11eptya"><input type="text" name="title" placeholder="Enter Title" required class="svelte-1a4flls"> <div class="form-button svelte-1a4flls"><button type="submit" class="svelte-1a4flls">Create</button></div></form></div></div>` : ``} <div class="banner-text svelte-1a4flls">${validate_component(Grid, "Grid").$$render($$result, { xs: 2, md: 2, lg: 2 }, {}, {
    default: () => {
      return `<div class="chat-list svelte-1a4flls"><input type="text" placeholder="Search" class="search-bar svelte-1a4flls"${add_attribute("value", searchText, 0)}> <div class="channels svelte-1a4flls"> <div class="head svelte-1a4flls"><h6 class="svelte-1a4flls" data-svelte-h="svelte-ragmq">Channels</h6>  <img${add_attribute("src", addIcon, 0)} alt="icon" class="svelte-1a4flls"></div> <div class="channel-list svelte-1a4flls">${each(type1Chats, (chat) => {
        return `  <div class="${escape(null_to_empty(chat.id === selectedChat.id ? activeClass : nonActive), true) + " svelte-1a4flls"}"${add_attribute("key", chat.id, 0)}><img${add_attribute("src", channelIcon, 0)} alt="icon" class="svelte-1a4flls"> <p class="svelte-1a4flls">${escape(chat.title)}</p> </div>`;
      })}</div></div> <div class="channels svelte-1a4flls" style="margin-top: 0.5rem;"><div class="head svelte-1a4flls" data-svelte-h="svelte-1hdmlsv"><h6 class="svelte-1a4flls">DM&#39;s</h6></div> <div class="channel-list svelte-1a4flls">${each(type2Chats, (chat) => {
        return `  <div class="${escape(null_to_empty(chat.id === selectedChat.id ? activeClass : nonActive), true) + " svelte-1a4flls"}"${add_attribute("key", chat.id, 0)}><img${add_attribute("src", DmIcon, 0)} alt="icon" class="svelte-1a4flls"> <p class="svelte-1a4flls">${escape(chat.title)}</p> </div>`;
      })}</div></div></div>`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 10, md: 10, lg: 10 }, {}, {
    default: () => {
      return `<div class="chat-area svelte-1a4flls"><div class="chat-head svelte-1a4flls"><div class="data svelte-1a4flls"><img class="icon svelte-1a4flls"${add_attribute("src", selectedChat.type === 1 ? channelIcon : DmIcon, 0)} alt="icon"> <h6 class="svelte-1a4flls">${escape(selectedChat.title)}</h6></div> <div class="controls svelte-1a4flls" data-svelte-h="svelte-1gverrk"><img${add_attribute("src", videoIcon, 0)} alt="icon" width="18%" style="cursor: pointer;"> <img${add_attribute("src", callIcon, 0)} alt="icon" width="18%" style="cursor: pointer;"></div></div> <div class="chat-texts svelte-1a4flls" data-svelte-h="svelte-1xa37m8"><div class="text-box svelte-1a4flls"><div class="chat-box svelte-1a4flls"><div class="profile svelte-1a4flls"><img${add_attribute("src", personIcon, 0)} alt="icon" class="svelte-1a4flls"></div> <p class="svelte-1a4flls">chat here</p></div></div></div> <div class="message-input svelte-1a4flls">  <img${add_attribute("src", addFillIcon, 0)} alt="icon" class="add svelte-1a4flls" style="cursor: pointer;"> <input type="text" placeholder="Type your message here ..." class="svelte-1a4flls"> <img${add_attribute("src", sendIcon, 0)} alt="icon" class="send svelte-1a4flls"></div></div>`;
    }
  })}</div> </div>`;
});
export {
  Page as default
};
