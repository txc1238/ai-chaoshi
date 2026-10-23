import fs from "fs";
import path from "path";
import { categories, tools } from "./data/catalog.js";
import { aboutPage, contactPage, disclosurePage, payPage, privacyPage } from "./data/pages.js";

const config = JSON.parse(fs.readFileSync(new URL("./site.config.json", import.meta.url), "utf8"));
const linksFile = JSON.parse(fs.readFileSync(new URL("./data/links.json", import.meta.url), "utf8"));
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), ".");
const dist = path.join(root, "dist");

const base = config.basePath.replace(/\/$/, "");
const site = config.siteUrl.replace(/\/$/, "");
const byId = Object.fromEntries(tools.map((tool) => [tool.id, tool]));
const catById = Object.fromEntries(categories.map((cat) => [cat.id, cat]));

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function href(rel) {
  if (!rel || rel === "index.html") return `${base}/`;
  if (rel.endsWith("/index.html")) return `${base}/${rel.slice(0, -"index.html".length)}`;
  return `${base}/${rel.replace(/^\//, "")}`;
}

function canonical(rel) {
  if (!rel || rel === "index.html") return `${site}/`;
  if (rel.endsWith("/index.html")) return `${site}/${rel.slice(0, -"index.html".length)}`;
  return `${site}/${rel.replace(/^\//, "")}`;
}

function asset(file) {
  return `${base}/assets/${file}`;
}

function visitRel() {
  return linksFile.affiliateLinksActive ? "sponsored noopener noreferrer" : "noopener noreferrer";
}

function linkOf(id) {
  const row = linksFile.tools[id];
  if (!row?.visit || !row?.pricing) {
    throw new Error(`data/links.json 缺少 ${id} 的 visit 或 pricing`);
  }
  return row;
}

function paragraphs(items) {
  return items.map((item) => `<p>${esc(item)}</p>`).join("\n");
}

function bullets(items) {
  return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function layout({ title, description, rel, body, jsonLd }) {
  const url = canonical(rel);
  const image = `${site}/assets/og.png`;
  return `<!DOCTYPE html>
<html lang="${config.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${esc(url)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(config.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:locale" content="zh_CN">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${esc(image)}">
  <link rel="icon" href="${asset("favicon.svg")}" type="image/svg+xml">
  <link rel="stylesheet" href="${asset("site.css")}">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <a class="skip" href="#main">跳到正文</a>
  ${header(rel)}
  <main id="main">${body}</main>
  ${footer()}
  <script src="${asset("site.js")}"></script>
</body>
</html>
`;
}

function header(rel) {
  const items = [
    ["index.html", "首页"],
    ["tools/index.html", "工具目录"],
    ["pay.html", "付款指南"],
    ["disclosure.html", "佣金披露"],
    ["about.html", "关于"]
  ];
  const links = items
    .map(([file, label]) => {
      const current = file === rel ? ' aria-current="page"' : "";
      return `<a href="${href(file)}"${current}>${label}</a>`;
    })
    .join("");
  return `<header class="site-header">
    <div class="wrap header-bar">
      <a class="logo" href="${href("index.html")}">
        <span class="logo-mark" aria-hidden="true">超</span>
        <span>AI 超市<small>${esc(config.tagline)}</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">菜单</button>
      <nav id="site-nav" class="nav-links" aria-label="站内">${links}</nav>
    </div>
  </header>`;
}

function footer() {
  const links = [
    ["pay.html", "付款指南"],
    ["disclosure.html", "佣金披露"],
    ["about.html", "关于我们"],
    ["privacy.html", "隐私政策"],
    ["contact.html", "联系我们"]
  ];
  return `<footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <strong>AI 超市</strong>
        <p>中文 AI 工具测评与导购。价格整理自厂商公开页面，截至 ${esc(config.priceAsOf)}。我们不收款、不代付。</p>
      </div>
      <div class="footer-links">
        ${links.map(([file, label]) => `<a href="${href(file)}">${label}</a>`).join("")}
      </div>
      <div>
        <p><a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a></p>
        <p>「去官网看看」目前打开各工具的官方网站。付款在厂商那里完成，不经过我们。</p>
      </div>
    </div>
  </footer>`;
}

function pageLd(title, description, rel) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical(rel),
    inLanguage: "zh-Hans",
    isPartOf: { "@type": "WebSite", name: config.name, url: `${site}/` }
  };
}

function disclosureBox() {
  return `<aside class="disclosure">
    <strong>佣金披露：</strong>本页根据厂商公开资料整理，不是亲手实测。「去官网看看」目前指向官方网站，日后可能改为联盟链接；你的付款发生在厂商那里。我们不收款、不代付。详见<a href="${href("disclosure.html")}">佣金披露</a>。
  </aside>`;
}

function actions(id) {
  const row = linkOf(id);
  return `<p class="cta-row">
    <a class="btn btn-primary" href="${esc(row.visit)}" rel="${visitRel()}">去官网看看</a>
    <a class="btn btn-secondary" href="${esc(row.pricing)}" rel="noopener noreferrer">查看官方价格</a>
  </p>
  <p class="fine">价格整理自公开页面，截至 ${esc(config.priceAsOf)}。下单前请再打开官方价格页核对。</p>`;
}

function altList(list) {
  return `<ul>${list
    .map((alt) => {
      const tool = byId[alt.id];
      if (!tool) throw new Error(`未知替代品 ${alt.id}`);
      const dest = tool.hasReview ? href(`reviews/${tool.id}.html`) : `${href("tools/index.html")}#${tool.id}`;
      return `<li><a href="${dest}">${esc(tool.name)}</a>：${esc(alt.text)}</li>`;
    })
    .join("")}</ul>`;
}

function reviewBody(tool) {
  const cat = catById[tool.category];
  return `<article class="wrap section">
    <p class="crumbs"><a href="${href("index.html")}">首页</a> / <a href="${href("tools/index.html")}">目录</a> / <a href="${href("tools/index.html")}#aisle-${cat.id}">${esc(cat.name)}</a> / ${esc(tool.name)}</p>
    <p class="kicker">${esc(cat.name)}</p>
    <h1>${esc(tool.name)} 测评</h1>
    <p class="lede">${esc(tool.oneLiner)}</p>
    <div class="meta">
      <span class="pill ${tool.freeKind === "yes" ? "pill-free" : "pill-no"}">${esc(tool.freeLabel)}</span>
      <span class="price-tag">${esc(tool.startingPrice)}</span>
    </div>
    ${tool.priceNote ? `<p class="price-note">${esc(tool.priceNote)}</p>` : ""}
    ${disclosureBox()}
    <section class="stack" style="margin-top:1rem">
      <section class="panel"><h2>一句话总结</h2><p>${esc(tool.summary)}</p></section>
      <section class="panel"><h2>适合谁</h2><p>${esc(tool.fit)}</p></section>
      <section class="panel"><h2>核心功能</h2>${bullets(tool.features)}</section>
      <section class="panel"><h2>价格方案</h2>${paragraphs(tool.pricing)}<p class="fine">截至 ${esc(config.priceAsOf)}。下单前请再打开官方价格页核对。</p></section>
      <section>
        <h2>优缺点</h2>
        <div class="split">
          <div class="good"><h3>写在公开资料里的优点</h3>${bullets(tool.pros)}</div>
          <div class="bad"><h3>下单前要知道的局限</h3>${bullets(tool.cons)}</div>
        </div>
      </section>
      <section class="panel"><h2>中文支持情况</h2><p>${esc(tool.chinese)}</p></section>
      <section class="panel"><h2>怎么付款</h2><p>${esc(tool.payment)}</p><p><a href="${href("pay.html")}">看整体付款指南</a></p></section>
      <section class="panel"><h2>替代品</h2>${altList(tool.alternatives)}</section>
      <section class="panel"><h2>官方链接</h2>${actions(tool.id)}</section>
      <section class="source-list"><h2>资料来源</h2><ul>${tool.sources
        .map((source) => `<li><a href="${esc(source.url)}" rel="noopener noreferrer">${esc(source.label)}</a></li>`)
        .join("")}</ul><p class="fine">文中的价格和功能来自下面这些厂商页面。页面上没有的数字，正文里就不写。</p></section>
    </section>
  </article>`;
}

function reviewLength(tool) {
  const chunks = [
    "一句话总结",
    tool.summary,
    "适合谁",
    tool.fit,
    "核心功能",
    ...tool.features,
    "价格方案",
    ...tool.pricing,
    "优缺点",
    ...tool.pros,
    ...tool.cons,
    "中文支持情况",
    tool.chinese,
    "怎么付款",
    tool.payment,
    "替代品",
    ...tool.alternatives.map((item) => item.text),
    "官方链接"
  ];
  return chunks.join("").replace(/\s+/g, "").length;
}

function homeBody() {
  const featured = tools.filter((tool) => tool.featured && tool.hasReview);
  const aisles = categories
    .map((cat) => {
      const count = tools.filter((tool) => tool.category === cat.id).length;
      return `<a class="aisle" href="${href("tools/index.html")}#aisle-${cat.id}">
        <span>货架</span>
        <h3>${esc(cat.name)}</h3>
        <p class="muted">${esc(cat.blurb)} · ${count} 款</p>
      </a>`;
    })
    .join("");
  const cards = featured
    .map((tool) => {
      return `<article class="card">
        <p class="kicker">${esc(catById[tool.category].name)}</p>
        <h3><a href="${href(`reviews/${tool.id}.html`)}">${esc(tool.name)}</a></h3>
        <p class="muted">${esc(tool.oneLiner)}</p>
        <div class="meta">
          <span class="pill ${tool.freeKind === "yes" ? "pill-free" : "pill-no"}">${esc(tool.freeLabel)}</span>
          <span class="price-tag">${esc(tool.startingPrice)}</span>
        </div>
      </article>`;
    })
    .join("");
  return `<section class="hero wrap">
      <p class="eyebrow">测评 + 导购</p>
      <h1>${esc(config.tagline)}</h1>
      <p class="lede">按货架看视频、配音、写作、设计和聊天助手。每篇测评都写明适合谁、免费档、价格来源和正当付款方式。不吹「最强」，也不替你下单。</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${href("tools/index.html")}">去货架上看</a>
        <a class="btn btn-secondary" href="${href("reviews/elevenlabs.html")}">先读一篇测评</a>
      </div>
      <ul class="trust-row">
        <li>价格截至 ${esc(config.priceAsOf)}</li>
        <li>每篇注明价格来源</li>
        <li>不代付、不卖账号</li>
      </ul>
    </section>
    <section class="section wrap">
      <div class="section-head"><h2>按货架挑</h2><a href="${href("tools/index.html")}">全部工具</a></div>
      <div class="aisle-grid">${aisles}</div>
    </section>
    <section class="section wrap">
      <div class="section-head"><h2>本批测评</h2><a href="${href("tools/index.html")}">目录里还有未写长文的大牌</a></div>
      <div class="card-grid">${cards}</div>
    </section>
    <section class="section wrap">
      <h2>优惠</h2>
      <div class="deal">
        <p class="eyebrow">即将上架</p>
        <h3>独家优惠还在申请</h3>
        <p>这里不会放来路不明的折扣码，也不会编一个「超市专属 8 折」。等厂商确认、我们也能在官网核对的活动，才会写上来。</p>
        <p class="fine">想在有可核对的优惠时收到一封邮件，用下面的按钮。信由你的邮箱发出，我们不会据此另建一份报名名单。</p>
        <p><a class="btn btn-primary" href="mailto:${esc(config.contactEmail)}?subject=${encodeURIComponent("请在有官方优惠时告诉我")}&body=${encodeURIComponent("我想知道 AI 超市之后核对过的官方优惠。我的邮箱就是这封信的发件人。")}">有优惠时邮件告诉我</a></p>
      </div>
    </section>
    <section class="section wrap">
      <div class="split">
        <div class="panel">
          <h2>价格怎么来的</h2>
          <p>数字来自厂商定价页或帮助中心，并注明是月付还是年付。两处官方说法不一致时，两句都留下。官网没写明的美元价，就标成「见官网」。</p>
        </div>
        <div class="panel">
          <h2>付款不经过我们</h2>
          <p>站内按钮现在打开官网。我们不收你的钱，也不提供代付。常见正当方式写在<a href="${href("pay.html")}">付款指南</a>。</p>
        </div>
      </div>
    </section>`;
}

function directoryBody() {
  const chips = [`<button type="button" data-filter="all" aria-pressed="true">全部</button>`]
    .concat(categories.map((cat) => `<button type="button" data-filter="${cat.id}" aria-pressed="false">${esc(cat.name)}</button>`))
    .join("");
  const shelves = categories
    .map((cat) => {
      const cards = tools
        .filter((tool) => tool.category === cat.id)
        .map((tool) => {
          const more = tool.hasReview
            ? `<a class="btn btn-secondary" href="${href(`reviews/${tool.id}.html`)}">阅读测评</a>`
            : `<span class="pill pill-no">尚无长测评</span>`;
          const row = linkOf(tool.id);
          return `<article class="product" id="${esc(tool.id)}">
            <h3>${tool.hasReview ? `<a href="${href(`reviews/${tool.id}.html`)}">${esc(tool.name)}</a>` : esc(tool.name)}</h3>
            <p class="one">${esc(tool.oneLiner)}</p>
            <div class="meta">
              <span class="pill ${tool.freeKind === "yes" ? "pill-free" : "pill-no"}">${esc(tool.freeLabel)}</span>
              <span class="price-tag">${esc(tool.startingPrice)}</span>
            </div>
            ${tool.priceNote ? `<p class="price-note">${esc(tool.priceNote)}</p>` : ""}
            <div class="product-actions">
              ${more}
              <a class="btn btn-primary" href="${esc(row.visit)}" rel="${visitRel()}">去官网看看</a>
            </div>
          </article>`;
        })
        .join("");
      return `<section class="shelf-block" id="aisle-${cat.id}" data-shelf="${cat.id}">
        <div class="shelf-label"><h2>${esc(cat.name)}</h2><p>${esc(cat.blurb)}</p></div>
        <div class="shelf-grid">${cards}</div>
      </section>`;
    })
    .join("");
  return `<section class="wrap section">
    <p class="crumbs"><a href="${href("index.html")}">首页</a> / 工具目录</p>
    <h1>工具目录</h1>
    <p class="lede">每一格都标了品类、一句话、有没有免费档，以及截至 ${esc(config.priceAsOf)} 能核对到的起步价。点进去的长测评目前有 ${tools.filter((tool) => tool.hasReview).length} 篇。</p>
    <div class="filters" role="toolbar" aria-label="按品类筛选">${chips}</div>
    ${shelves}
    <p class="fine">起步价旁边的小字用来说明年付、地区差价，或官方页面说法不一致的地方。</p>
  </section>`;
}

function simplePage(title, description, rel, inner) {
  return layout({
    title: `${title} | ${config.name}`,
    description,
    rel,
    body: `<article class="wrap section">${inner}</article>`,
    jsonLd: pageLd(title, description, rel)
  });
}

function writeFile(rel, html) {
  const file = path.join(dist, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function assertSafe(html, rel) {
  const banned = [/墨柱/, /mozhu/i, /fortune\s*&\s*flow/i, /fortuneandflow/i];
  for (const pattern of banned) {
    if (pattern.test(html)) throw new Error(`${rel} 含有不应出现的品牌字样 ${pattern}`);
  }
  const attrs = html.match(/(?:href|src)="([^"]+)"/g) || [];
  for (const attr of attrs) {
    const value = attr.slice(attr.indexOf("=") + 2, -1);
    if (value.startsWith("/") && !value.startsWith(`${base}/`) && value !== `${base}`) {
      throw new Error(`${rel} 有未加项目路径的绝对链接：${value}`);
    }
    if (value.startsWith("//")) throw new Error(`${rel} 有协议相对链接：${value}`);
  }
}

const pages = [];

function add(rel, html) {
  assertSafe(html, rel);
  writeFile(rel, html);
  pages.push(rel);
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "assets"), { recursive: true });
for (const file of ["site.css", "site.js", "favicon.svg", "og.png"]) {
  fs.copyFileSync(path.join(root, "src", file), path.join(dist, "assets", file));
}
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

const homeTitle = "AI 超市｜AI工具推荐、测评与购买指南";
const homeDesc = "中文 AI 工具推荐与导购：视频、配音、写作、设计建站、自动化和聊天助手。查看免费档、起步价和怎么付款。价格截至 2026年10月，整理自官网。";
add(
  "index.html",
  layout({
    title: homeTitle,
    description: homeDesc,
    rel: "index.html",
    body: homeBody(),
    jsonLd: pageLd(homeTitle, homeDesc, "index.html")
  })
);

const dirTitle = "AI 工具目录｜分类、免费档与起步价";
const dirDesc = "AI工具推荐目录：Framer、Make、Fliki、Runway、ElevenLabs、ChatGPT、Claude、Gemini 等。每款含一句话介绍、有没有免费档和起步价。";
add(
  "tools/index.html",
  layout({
    title: `${dirTitle} | ${config.name}`,
    description: dirDesc,
    rel: "tools/index.html",
    body: directoryBody(),
    jsonLd: pageLd(dirTitle, dirDesc, "tools/index.html")
  })
);

for (const tool of tools.filter((item) => item.hasReview)) {
  const length = reviewLength(tool);
  if (length < 800 || length > 1500) {
    throw new Error(`${tool.id} 正文约 ${length} 字，不在 800–1500`);
  }
  const rel = `reviews/${tool.id}.html`;
  add(
    rel,
    layout({
      title: `${tool.seoTitle} | ${config.name}`,
      description: tool.seoDescription,
      rel,
      body: reviewBody(tool),
      jsonLd: pageLd(tool.seoTitle, tool.seoDescription, rel)
    })
  );
  console.log(`${tool.id}\t${length}`);
}

const staticPages = [
  ["pay.html", "海外 AI 工具付款指南", "信用卡、PayPal、App Store、Google Play 和 Google 账号订阅 Gemini 的正当付款方式。AI 超市不代付、不代充。不是法律建议。", payPage()],
  ["disclosure.html", "佣金披露", "AI 超市的佣金披露：去官网的按钮目前打开官方网站。若以后变成联盟链接，你的付款仍在厂商那里完成。", disclosurePage()],
  ["about.html", "关于我们", "AI 超市是面向中文读者的 AI 工具测评与导购站。价格来自官网公开资料，不提供代付。", aboutPage()],
  ["privacy.html", "隐私政策", "AI 超市隐私政策：不用注册，没有访问统计。联系通过邮件。网站由 GitHub Pages 提供访问。", privacyPage()],
  ["contact.html", "联系我们", "联系 AI 超市：txcxdm@gmail.com。欢迎指出价格错误。不要发送银行卡或要求代付。", contactPage()]
];
for (const [rel, title, description, inner] of staticPages) add(rel, simplePage(title, description, rel, inner));

const notFoundTitle = "页面没有找到";
const notFoundDesc = "这个地址在 AI 超市里没有对应页面。回到首页或工具目录继续看。";
add(
  "404.html",
  layout({
    title: `${notFoundTitle} | ${config.name}`,
    description: notFoundDesc,
    rel: "404.html",
    body: `<section class="wrap section">
      <p class="eyebrow">404</p>
      <h1>这一格是空的</h1>
      <p class="lede">链接可能写错了，或者这篇测评还没上架。货架和已发布的测评都还在。</p>
      <p class="cta-row">
        <a class="btn btn-primary" href="${href("index.html")}">回首页</a>
        <a class="btn btn-secondary" href="${href("tools/index.html")}">去工具目录</a>
      </p>
    </section>`,
    jsonLd: pageLd(notFoundTitle, notFoundDesc, "404.html")
  })
);

const urls = pages
  .filter((rel) => rel !== "404.html")
  .map((rel) => `  <url><loc>${canonical(rel)}</loc><lastmod>2026-10-22</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`
);

const ids = new Set(tools.map((tool) => tool.id));
for (const id of Object.keys(linksFile.tools)) {
  if (!ids.has(id)) throw new Error(`links.json 有多余 id：${id}`);
}
console.log(`built ${pages.length} pages`);
