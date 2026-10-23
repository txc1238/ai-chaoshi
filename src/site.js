(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var quizForm = document.querySelector("#quiz");
  var quizDataNode = document.querySelector("#quiz-data");
  var quizResult = document.querySelector("#quiz-result");
  if (quizForm && quizDataNode && quizResult) {
    var quizData = JSON.parse(quizDataNode.textContent);
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var need = quizForm.querySelector('input[name="need"]:checked');
      var budget = quizForm.querySelector('input[name="budget"]:checked');
      var chinese = quizForm.querySelector('input[name="chinese"]:checked');
      var level = quizForm.querySelector('input[name="level"]:checked');
      if (!need || !budget || !chinese || !level) return;
      var picked = recommend(quizData.tools, {
        need: need.value,
        budget: budget.value,
        chinese: chinese.value,
        level: level.value
      });
      quizResult.hidden = false;
      quizResult.innerHTML = renderPicks(picked, {
        need: need.value,
        budget: budget.value,
        chinese: chinese.value,
        level: level.value
      });
      quizResult.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  var chips = document.querySelectorAll("[data-filter]");
  if (!chips.length) return;
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var cat = chip.getAttribute("data-filter");
      chips.forEach(function (other) {
        other.setAttribute("aria-pressed", other === chip ? "true" : "false");
      });
      document.querySelectorAll("[data-shelf]").forEach(function (shelf) {
        var show = cat === "all" || shelf.getAttribute("data-shelf") === cat;
        shelf.hidden = !show;
      });
    });
  });

  function recommend(tools, answers) {
    var ranked = tools
      .filter(function (tool) {
        return tool.shelves.indexOf(answers.need) !== -1;
      })
      .map(function (tool) {
        var score = 1;
        if (tool.level === answers.level || tool.level === "both") score += 2;
        if (answers.chinese === "yes") {
          if (tool.chineseLevel === "yes") score += 4;
          else if (tool.chineseLevel === "partial") score += 2;
          else if (tool.chineseLevel === "no") score -= 3;
        }
        if (answers.budget === "free") {
          if (tool.freeKind === "yes") score += 4;
          else if (tool.freeKind === "trial") score += 1;
          else score -= 1;
        } else if (tool.monthlyCny == null) {
          score += 0;
        } else if (answers.budget === "low") {
          score += tool.monthlyCny <= 100 ? 3 : -2;
        } else if (answers.budget === "mid") {
          score += tool.monthlyCny > 80 && tool.monthlyCny <= 320 ? 3 : 0;
        } else if (tool.monthlyCny >= 200 || tool.level === "pro") {
          score += 2;
        }
        if (tool.promo && answers.budget === "low") score -= 1;
        return { tool: tool, score: score };
      })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return a.tool.name.localeCompare(b.tool.name, "zh");
      });
    return ranked.slice(0, 3).map(function (item) {
      return item.tool;
    });
  }

  function reasonFor(tool, answers) {
    var bits = [tool.who];
    if (answers.chinese === "yes" && tool.chineseLevel === "yes") {
      bits.push("它是中文产品，界面不用先换成英文。");
    } else if (answers.chinese === "yes" && tool.chineseLevel === "partial") {
      bits.push("可以处理中文，界面是不是中文要到产品里再确认。");
    } else if (answers.chinese === "yes") {
      bits.push("官网没写明中文界面。建议先用免费档或试用看一句中文。");
    }
    if (answers.budget === "free" && tool.freeKind === "yes") {
      bits.push("有免费档，适合先不付钱。");
    } else if (answers.budget === "free") {
      bits.push("免费档这次没看清，打开官网再确认能不能白用。");
    }
    if (tool.promo) bits.push("页面上的低价标了优惠，可能不是长期价格。");
    bits.push(tool.priceText + "。");
    return bits
      .map(function (bit) {
        return /[。！？]$/.test(bit) ? bit : bit + "。";
      })
      .join("");
  }

  function renderPicks(tools, answers) {
    if (!tools.length) {
      return "<p>这个货架上暂时没有对得上的工具。可以先去货架里自己看。</p>";
    }
    var cards = tools
      .map(function (tool) {
        return (
          '<article class="compare-card"><h3>' +
          escapeHtml(tool.name) +
          "</h3><p>" +
          escapeHtml(reasonFor(tool, answers)) +
          '</p><p class="cta-row"><a class="btn btn-primary" href="' +
          escapeHtml(tool.visit) +
          '" rel="' +
          escapeHtml(tool.rel) +
          '">去官网看看</a><a class="btn btn-secondary" href="' +
          escapeHtml(tool.pricing) +
          '" rel="noopener noreferrer">查看官方价格</a></p></article>'
        );
      })
      .join("");
    return "<h2>可以先看这几个</h2><p class=\"fine\">按你刚选的条件排序，不是排名，也不是试用结论。付款仍在厂商那里。</p>" + cards;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
