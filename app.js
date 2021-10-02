const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL = "https://www.rahmatagungjulians.tech";

async function getData(url) {
  const { data } = await axios.get(url);
  const datas = cheerio.load(await data);
  return datas;
}

async function getInformation() {
  const $ = await getData(BASE_URL);

  // data
  const data = {
    title: $("title").text(),
    description: $("meta[name='description']").attr("content"),
    keywords: $("meta[name='keywords']").attr("content"),

    // meta
    meta: {
      charset: $("meta[charset]").attr("charset"),
      content: $("meta[content]").attr("content"),
      name: $("meta[name]").attr("name"),
      httpEquiv: $("meta[http-equiv]").attr("http-equiv"),
      property: $("meta[property]").attr("property"),
      scheme: $("meta[scheme]").attr("scheme"),
      itemProp: $("meta[itemprop]").attr("itemprop"),
      itemScope: $("meta[itemscope]").attr("itemscope"),
      itemType: $("meta[itemtype]").attr("itemtype"),
      lang: $("meta[lang]").attr("lang"),
      dir: $("meta[dir]").attr("dir"),
      contentType: $("meta[content-type]").attr("content-type"),
      refresh: $("meta[refresh]").attr("refresh"),
      viewport: $("meta[viewport]").attr("viewport"),
      generator: $("meta[generator]").attr("generator"),

      // microdata
      itemId: $("meta[itemid]").attr("itemid"),
      itemRef: $("meta[itemref]").attr("itemref"),
      itemScope: $("meta[itemscope]").attr("itemscope"),
      itemType: $("meta[itemtype]").attr("itemtype"),
      itemProp: $("meta[itemprop]").attr("itemprop"),
      itemRef: $("meta[itemref]").attr("itemref"),

      // twitter
      card: $("meta[card]").attr("card"),
      site: $("meta[site]").attr("site"),
      title: $("meta[title]").attr("title"),
      description: $("meta[description]").attr("description"),
      image: $("meta[image]").attr("image"),
      creator: $("meta[creator]").attr("creator"),
      url: $("meta[url]").attr("url"),
      domain: $("meta[domain]").attr("domain"),
      appId: $("meta[appid]").attr("appid"),
      appName: $("meta[appname]").attr("appname"),
      appVersion: $("meta[appversion]").attr("appversion"),
      appIOS: $("meta[appios]").attr("appios"),
      appIOSIpad: $("meta[appiosipad]").attr("appiosipad"),
      appIOSIphone: $("meta[appiosiphone]").attr("appiosiphone"),
    },
    // links
    links: {
      canonical: $("link[rel='canonical']").attr("href"),
      alternate: $("link[rel='alternate']").attr("href"),
    },
    // scripts
    scripts: {
      src: $("script[src]").attr("src"),
      type: $("script[type]").attr("type"),
      async: $("script[async]").attr("async"),
      defer: $("script[defer]").attr("defer"),
      crossorigin: $("script[crossorigin]").attr("crossorigin"),
      integrity: $("script[integrity]").attr("integrity"),
    },
    // styles
    styles: {
      href: $("link[href]").attr("href"),
      rel: $("link[rel]").attr("rel"),
      type: $("link[type]").attr("type"),
      media: $("link[media]").attr("media"),
      title: $("link[title]").attr("title"),
      charset: $("link[charset]").attr("charset"),
      crossorigin: $("link[crossorigin]").attr("crossorigin"),
      integrity: $("link[integrity]").attr("integrity"),
    },
    // images
    images: {
      src: $("img[src]").attr("src"),
      alt: $("img[alt]").attr("alt"),
      title: $("img[title]").attr("title"),
      width: $("img[width]").attr("width"),
      height: $("img[height]").attr("height"),
      sizes: $("img[sizes]").attr("sizes"),
      srcset: $("img[srcset]").attr("srcset"),
      usemap: $("img[usemap]").attr("usemap"),
      ismap: $("img[ismap]").attr("ismap"),
      referrerpolicy: $("img[referrerpolicy]").attr("referrerpolicy"),
    },
    // videos
    videos: {
      src: $("video[src]").attr("src"),
      poster: $("video[poster]").attr("poster"),
      width: $("video[width]").attr("width"),
      height: $("video[height]").attr("height"),
      preload: $("video[preload]").attr("preload"),
      autoplay: $("video[autoplay]").attr("autoplay"),
      mediagroup: $("video[mediagroup]").attr("mediagroup"),
      loop: $("video[loop]").attr("loop"),
      muted: $("video[muted]").attr("muted"),
      controls: $("video[controls]").attr("controls"),
    },
    // audio
    audio: {
      src: $("audio[src]").attr("src"),
      preload: $("audio[preload]").attr("preload"),
      autoplay: $("audio[autoplay]").attr("autoplay"),
      mediagroup: $("audio[mediagroup]").attr("mediagroup"),
      loop: $("audio[loop]").attr("loop"),
      muted: $("audio[muted]").attr("muted"),
      controls: $("audio[controls]").attr("controls"),
    },
    // iframes
    iframes: {
      src: $("iframe[src]").attr("src"),
      srcdoc: $("iframe[srcdoc]").attr("srcdoc"),
      name: $("iframe[name]").attr("name"),
      width: $("iframe[width]").attr("width"),
      height: $("iframe[height]").attr("height"),
      sandbox: $("iframe[sandbox]").attr("sandbox"),
      seamless: $("iframe[seamless]").attr("seamless"),
      allowfullscreen: $("iframe[allowfullscreen]").attr("allowfullscreen"),
    },
    // embeds
    embeds: {
      src: $("embed[src]").attr("src"),
      type: $("embed[type]").attr("type"),
      width: $("embed[width]").attr("width"),
      height: $("embed[height]").attr("height"),
      allowfullscreen: $("embed[allowfullscreen]").attr("allowfullscreen"),
    },
    // objects
    objects: {
      data: $("object[data]").attr("data"),
      type: $("object[type]").attr("type"),
      width: $("object[width]").attr("width"),
      height: $("object[height]").attr("height"),
      usemap: $("object[usemap]").attr("usemap"),
      name: $("object[name]").attr("name"),
      form: $("object[form]").attr("form"),
      classid: $("object[classid]").attr("classid"),
      codebase: $("object[codebase]").attr("codebase"),
      codetype: $("object[codetype]").attr("codetype"),
      archive: $("object[archive]").attr("archive"),
      standby: $("object[standby]").attr("standby"),
      declare: $("object[declare]").attr("declare"),
      class: $("object[class]").attr("class"),
      align: $("object[align]").attr("align"),
      border: $("object[border]").attr("border"),
      hspace: $("object[hspace]").attr("hspace"),
      vspace: $("object[vspace]").attr("vspace"),
    },
  };

  console.log(data);
}

console.log("Starting...");
getInformation();
