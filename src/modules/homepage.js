let header = (function () {
  /* Creating the DOM & it's elements */
  const parentDiv = document.getElementById("content");
  function icons() {
    const header = document.createElement("header");
    const div = document.createElement("div");
    const childDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Fantasy Restaurant";
    const subTitle = document.createElement("h2");
    subTitle.className = "sub-title";
    subTitle.innerHTML = "Where taste is unreal";

    for (let i = 0; i < 4; i++) {
      const iconArr = [
        "fab fa-twitter",
        "fab fa-facebook",
        "fab fa-pinterest",
        "fab fa-google-plus",
      ];
      const link = document.createElement("a");
      const icon = document.createElement("i");
      childDiv.className = "social-icons";
      icon.className = iconArr[i];
      let hrefAtt = document.createAttribute("href");
      hrefAtt.value = "#";
      link.setAttributeNode(hrefAtt);
      link.appendChild(icon);
      childDiv.appendChild(link);
      div.appendChild(childDiv);
      header.appendChild(div);
      parentDiv.appendChild(header);
      for (let j = 0; j < 4; j++) {}
    }
    div.appendChild(title);
    div.appendChild(subTitle);
  }

  function humburger() {
    const div1 = document.createElement("div");
    div1.className = "menu-container";
    const div2 = document.createElement("div");
    div2.className = "menu-icon";

    div1.appendChild(div2);
    parentDiv.appendChild(div1);
    for (let i = 0; i < 3; i++) {
      const barArr = ["bar1", "bar2", "bar3"];
      const div3 = document.createElement("div");
      div2.appendChild(div3);
      div3.className = barArr[i];
    }

    /* Toogle functionality */
    const menuIcon = document.querySelector(".menu-icon");
    let menuOpen = false;
    let linksOpen = false;

    menuIcon.addEventListener("click", () => {
      const navLinks = document.querySelectorAll(".nav-bar li");
      if (!linksOpen) {
        navLinks.forEach((e) => {
          e.classList.remove("nav-open");
        });
        linksOpen = true;
      } else if (linksOpen) {
        navLinks.forEach((e) => {
          e.classList.add("nav-open");
        });
        linksOpen = false;
      }
      if (!menuOpen) {
        menuIcon.classList.add("change");
        menuOpen = true;
      } else {
        menuIcon.classList.remove("change");
        menuOpen = false;
      }
    });
  }

  function navigation() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    for (let i = 0; i < 6; i++) {
      const navArr = [
        "Home",
        "About",
        "Menu",
        "Blog",
        "Reservation",
        "Contacts",
      ];
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.innerHTML = navArr[i];
      li.appendChild(link);
      ul.appendChild(li);
      li.className = "nav-open";
    }
    nav.className = "nav-bar";
    nav.appendChild(ul);
    parentDiv.appendChild(nav);
  }

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

  icons();
  humburger();
  navigation();
  pricing();
})();

export { header };
