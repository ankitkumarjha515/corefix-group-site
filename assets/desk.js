(function () {
  var threads = [
    {
      id: "website",
      name: "Asha Voss",
      org: "Harbour Letterpress",
      ask: "Website",
      time: "9:14 AM",
      hue: "#3dbea0",
      initials: "AV",
      messages: [
        { from: "them", text: "We need a website for the press. The one we have is a template, and it hides the editions." },
        { from: "bot", text: "Who should land on it, and what should they do next?" },
        { from: "them", text: "Collectors and shops. They should see what is on the bench and book a viewing." },
        { from: "bot", text: "We will build it around the work, not a theme. I can send a one-page scope today." }
      ]
    },
    {
      id: "software",
      name: "Callum Reid",
      org: "Mallee Grain",
      ask: "Custom software",
      time: "11:02 AM",
      hue: "#f0a05a",
      initials: "CR",
      messages: [
        { from: "them", text: "The weighbridge, the shed, and the invoices do not talk to each other. We need software that does." },
        { from: "bot", text: "Where does the work break first: the ticket at the bridge, or the invoice after?" },
        { from: "them", text: "The ticket. Drivers wait while someone retypes it." },
        { from: "bot", text: "Then we start there. One screen for the bridge, and the invoice follows the ticket." }
      ]
    },
    {
      id: "crm",
      name: "Lena Okonkwo",
      org: "Northline Advisory",
      ask: "CRM",
      time: "1:40 PM",
      hue: "#7c6cf0",
      initials: "LO",
      messages: [
        { from: "them", text: "We keep clients in three spreadsheets and a shared inbox. We need a CRM the partners will actually open." },
        { from: "bot", text: "What has to be on the record the moment a call ends?" },
        { from: "them", text: "The matter, who owns it, and the next date. Nothing else." },
        { from: "bot", text: "A short record, not a database with forty fields. I will sketch that, and we can throw out whatever the partners will not touch." }
      ]
    },
    {
      id: "dashboard",
      name: "Hugo March",
      org: "Kiln Studio",
      ask: "Custom dashboard",
      time: "4:18 PM",
      hue: "#4c8dff",
      initials: "HM",
      messages: [
        { from: "them", text: "I need one dashboard for the studio. Hours, jobs, and what is late. Not another tool with its own login maze." },
        { from: "bot", text: "Who looks at it, and what decision do they make from it?" },
        { from: "them", text: "Me, on Monday. Who is over capacity before I take a new job." },
        { from: "bot", text: "Then the first screen is capacity, not a wall of charts. We will pull hours from the tools you already use." }
      ]
    }
  ];

  var active = "website";
  var dockOpen = false;
  var query = "";

  function threadById(id) {
    for (var i = 0; i < threads.length; i++) if (threads[i].id === id) return threads[i];
    return threads[0];
  }

  function replyFor(thread, text) {
    var lower = text.toLowerCase();
    if (thread.id === "website") return "Noted. I will treat that as part of the viewing flow, and reply with a scope by the next business day.";
    if (thread.id === "software") return "I have that against the bridge ticket. If you want, we can walk the shed process on a call before anything is built.";
    if (thread.id === "crm") return "I will keep the record to those three fields unless you name a fourth the partners already use.";
    if (lower.indexOf("monday") !== -1) return "Monday capacity stays the first screen. Send the tool the hours live in and we will read from that.";
    return "Got it. I will fold that into the first version and send the shape back within one business day.";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function matches(thread) {
    if (!query) return true;
    var preview = thread.messages[thread.messages.length - 1].text;
    var hay = (thread.name + " " + thread.org + " " + thread.ask + " " + preview).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function rowHtml(thread) {
    var preview = thread.messages[thread.messages.length - 1].text;
    return (
      '<button type="button" class="cf-row' + (thread.id === active ? " is-active" : "") + '" data-open="' + thread.id + '">' +
        '<span class="cf-avatar" style="background:' + thread.hue + '">' + thread.initials + "</span>" +
        "<span class=\"cf-row__copy\">" +
          '<span class="cf-row__top"><span class="cf-row__name">' + escapeHtml(thread.name) + '</span><span class="cf-row__time">' + thread.time + "</span></span>" +
          '<span class="cf-row__ask">' + escapeHtml(thread.ask + " · " + preview) + "</span>" +
        "</span>" +
      "</button>"
    );
  }

  function bubbles(thread) {
    return thread.messages.map(function (message) {
      var kind = message.from === "bot" ? "in" : "out";
      return '<div class="cf-bubble cf-bubble--' + kind + '">' + escapeHtml(message.text) + "</div>";
    }).join("");
  }

  function inboxHtml(mode) {
    var thread = threadById(active);
    var dock = mode === "dock";
    var visible = threads.filter(matches);
    var picks = threads.map(function (item) {
      return '<button type="button" class="cf-pick' + (item.id === active ? " is-active" : "") + '" data-open="' + item.id + '">' + escapeHtml(item.ask) + "</button>";
    }).join("");
    var rows = visible.map(rowHtml).join("");
    if (!rows) rows = '<p class="cf-empty">No matching conversation</p>';
    return (
      '<div class="cf-inbox' + (dock ? " cf-inbox--dock" : "") + '" data-ui="inbox">' +
        (dock ? "" :
          '<aside class="cf-side">' +
            '<div class="cf-side__top">' +
              '<span class="cf-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
            "</div>" +
            '<label class="cf-search">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
              '<input type="search" value="' + escapeHtml(query) + '" placeholder="Search" aria-label="Search conversations">' +
            "</label>" +
            '<div class="cf-list" role="tablist">' + rows + "</div>" +
          "</aside>"
        ) +
        '<section class="cf-main" aria-label="Conversation with ' + escapeHtml(thread.name) + '">' +
          (dock ? '<div class="cf-picks">' + picks + "</div>" : "") +
          '<div class="cf-main__bar">' +
            '<span class="cf-avatar" style="background:' + thread.hue + '">' + thread.initials + "</span>" +
            "<div><div class=\"cf-main__who\">" + escapeHtml(thread.ask) + "</div>" +
            '<div class="cf-main__sub">' + escapeHtml(thread.name) + " · " + escapeHtml(thread.org) + "</div></div>" +
          "</div>" +
          '<div class="cf-thread">' +
            '<div class="cf-when">' + thread.time + "</div>" +
            bubbles(thread) +
          "</div>" +
          '<form class="cf-compose">' +
            '<input name="note" type="text" autocomplete="off" placeholder="Message" aria-label="Message">' +
            "<button type=\"submit\">Send</button>" +
          "</form>" +
        "</section>" +
      "</div>"
    );
  }

  function cardInView() {
    var card = document.getElementById("desk-card");
    if (!card) return false;
    var rect = card.getBoundingClientRect();
    return rect.bottom > 80 && rect.top < window.innerHeight * 0.85;
  }

  function paint() {
    var card = document.getElementById("desk-card");
    var dock = document.getElementById("desk-dock");
    var search = card ? card.querySelector(".cf-search input") : null;
    var restoreSearch = search && document.activeElement === search;
    var caret = restoreSearch ? search.selectionStart : null;
    if (card) card.innerHTML = inboxHtml("hero");
    if (dock) {
      dock.hidden = !dockOpen;
      dock.innerHTML = dockOpen ? inboxHtml("dock") : "";
    }
    var launcher = document.getElementById("desk-launcher");
    if (launcher) {
      var hide = cardInView();
      launcher.hidden = hide;
      if (hide && dockOpen) {
        dockOpen = false;
        if (dock) {
          dock.hidden = true;
          dock.innerHTML = "";
        }
      }
      launcher.setAttribute("aria-expanded", dockOpen ? "true" : "false");
      launcher.setAttribute("aria-label", dockOpen ? "Close chat" : "Open chat");
    }
    var thread = document.querySelector("#desk-card .cf-thread");
    if (thread) thread.scrollTop = thread.scrollHeight;
    var dockThread = document.querySelector("#desk-dock .cf-thread");
    if (dockThread) dockThread.scrollTop = dockThread.scrollHeight;
    if (restoreSearch && card) {
      var next = card.querySelector(".cf-search input");
      if (next) {
        next.focus();
        if (caret !== null) next.setSelectionRange(caret, caret);
      }
    }
  }

  function onClick(event) {
    var opener = event.target.closest("[data-open]");
    if (opener) {
      active = opener.getAttribute("data-open");
      paint();
      return;
    }
    if (event.target.closest("#desk-launcher")) {
      dockOpen = !dockOpen;
      paint();
    }
  }

  function onSubmit(event) {
    var form = event.target.closest(".cf-compose");
    if (!form) return;
    event.preventDefault();
    var input = form.querySelector("input");
    var text = (input.value || "").trim();
    if (!text) return;
    var thread = threadById(active);
    thread.messages.push({ from: "them", text: text });
    thread.messages.push({ from: "bot", text: replyFor(thread, text) });
    thread.time = "Now";
    paint();
  }

  document.addEventListener("click", onClick);
  document.addEventListener("submit", onSubmit);
  document.addEventListener("input", function (event) {
    var field = event.target.closest(".cf-search input");
    if (!field) return;
    query = field.value.trim().toLowerCase();
    paint();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && dockOpen) {
      dockOpen = false;
      paint();
    }
  });
  window.addEventListener("scroll", function () {
    var launcher = document.getElementById("desk-launcher");
    if (!launcher) return;
    var hide = cardInView();
    if (launcher.hidden === hide && !(hide && dockOpen)) return;
    paint();
  }, { passive: true });

  paint();
})();
