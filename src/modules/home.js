let home = (function () {
  const parentDiv = document.getElementById("content");
  (function pricing() {
    const div = document.createElement("div");
    div.className = "pricing";
    const imgArr = [
      "../src/images/blur_img1.jpg",
      "../src/images/blur_img2.jpg",
      "../src/images/blur_img3.jpg",
    ];
    const priceTag = ["25.99", "38.99", "50.99"];
    const priceArr = ["magna non nunc", "terto nomino", "metus feugiat"];
    for (let i = 0; i < 3; i++) {
      const link = document.createElement("a");
      link.className = "block1";
      const hrefAtt = document.createAttribute("href");
      hrefAtt.value = "#";
      link.setAttributeNode(hrefAtt);
      const img = document.createElement("img");
      const span1 = document.createElement("span");
      span1.className = "price";
      const span2 = document.createElement("span");
      const span3 = document.createElement("span");
      const small = document.createElement("small");
      small.innerHTML = "$";
      span2.innerHTML = priceArr[i];
      const src = document.createAttribute("src");
      const alt = document.createAttribute("alt");
      alt.value = " ";
      img.setAttributeNode(alt);
      src.value = imgArr[i];
      img.setAttributeNode(src);
      span3.innerHTML = priceTag[i];
      span3.appendChild(small);
      span1.appendChild(span2);
      span1.appendChild(span3);
      link.appendChild(img);
      link.appendChild(span1);
      div.appendChild(link);
    }
    parentDiv.appendChild(div);
  })();

  (function menu() {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const imgArr = [
      "../src/images/box_img1.jpg",
      "../src/images/box_img2.jpg",
      "../src/images/box_img3.jpg",
      "../src/images/box_img4.jpg",
    ];
    const titleArr = [
      "Lorem Ipsum",
      "Aliquamh ante",
      "Ulum volutpat",
      "Vestibulum volu"
    ];
    const contentArr = [
      "Integer convallis orci vel mi nelaoreet, at ornare lorem consequat. Phasellus era nisl auctor vel veliterol.",
      "Benteger convallis orci veli elaoreet, at ornare loremo konsequat. Phasellus era nisl auctor vel veliterut.",
      "Hrtolieger convallis omi tem aore, at ornare loren coate. Pasellus era nisl auctor vel veliterolsed pharetra.",
      "Convallis orci vel mi oreet, at kotornare lorem consequat. Sellus era nisl auctor."
    ]
    for (let i = 0; i < 4; i++) {
      const div2 = document.createElement("div");
      div2.className = "flex-item";
      const div3 = document.createElement("div");
      div3.className = "flex-title";
      const div4 = document.createElement("div");
      div4.className = "flex-content";
      const img = document.createElement("img");
      const src = document.createAttribute("src");
      const href = document.createAttribute("href");
      const moreInfo = document.createElement('a')
      src.value = imgArr[i];
      div3.innerHTML = titleArr[i]
      div4.innerHTML = contentArr[i]
      moreInfo.innerHTML = "More Info"
      img.setAttributeNode(src);
      div2.appendChild(img);
      div2.appendChild(div3);
      div2.appendChild(div4)
      div2.appendChild(moreInfo)
      div1.appendChild(div2);
    
    }
    div.className = "container-NinM";
    div1.className = "flex-container";
    const title = document.createElement("h3");
    title.className = "NinM-header";
    title.innerHTML = "New in Menu";
    div.appendChild(title);
    div.appendChild(div1);
    parentDiv.appendChild(div);
  })();
})();

export { home };
