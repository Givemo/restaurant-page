let home = function () {
  const parentDiv = document.getElementById("content");
  function pricing() {
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
  }

  function menu() {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const imgArr = [
      "../src/images/box_img1.jpg",
      "../src/images/box_img2.jpg",
      "../src/images/box_img3.jpg",
      "../src/images/box_img4.jpg",
    ];
    for (let i = 0; i < 4; i++) {
      const div2 = document.createElement("div");
      div2.className = "flex-item";
      const img = document.createElement("img");
      const src = document.createAttribute("src");
      src.value = imgArr[i];
      img.setAttributeNode(src);
      div2.appendChild(img);
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
  }

  pricing();
  menu();
};

export { home };
