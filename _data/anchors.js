// All icons are from https://fontawesome.com/icons?d=gallery
module.exports = [
  { text: "mission", link: "/#mission" },
  { text: "blog", icon: "fa-bullhorn", link: "/blog" },
  { text: "resources", icon: "fa-hammer", link:"/resources",
    children: [
      // { text: "6 Panther P's", icon: "fa-tools", link: "/#history-(who-we-are)" },
      { text: "5 Ingredients in the Poor Organizing the Poor", icon: "fa-mortar-pestle", link: "/resources/5-ingredients/" },
      // { text: "4 C's of Leadership", icon: "fa-anvils", link: "/winter-offensive" },

    ]
    },
  { text: "in the news", icon: "fa-newspaper", link: "/news" },
  { text: "About Us", 
    icon: "fa-info-circle",
    children: [
      { text: "history", icon: "fa-user", link: "/#history-(who-we-are)" },
      { text: "locals", icon: "fa-hands-helping", link: "/#locals" },
      { text: "winter-offensives", icon: "fa-snowflake", link: "/winter-offensive" },

    ]
    },

  { text: "donate", icon: "fa-donate", link: "/donate" },
  { text: "join us", icon: "fa-envelope", link: "/contact" }

];