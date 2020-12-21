function home(){
    return " <div className=\"container\">\n" +
        "        <div className=\"menu\">\n" +
        "          <ul>\n" +
        "            <a href=\"#\"><img src=\"imgsblog/Logo-theSoulmate.png\" height={85} width={290} /> </a>\n" +
        "            <li className=\"search\"><a href=\"#\"><i className=\"fas fa-search\" /></a></li>\n" +
        "            <li><a href=\"#\"><button className=\"button type4\">SEOULISTA TIPS</button></a></li>\n" +
        "            <li><a href=\"#\"><button className=\"button type4\">REVIEWS</button></a></li>\n" +
        "            <li><a href=\"#\"><button className=\"button type4\">LIFESTYLE</button></a></li>\n" +
        "            <li><a href=\"#\"><button className=\"button type4\">MAKEUP</button></a></li>\n" +
        "            <li><a href=\"#\"><button className=\"button type4\">SKINCARE</button></a></li>\n" +
        "          </ul>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    );\n" +
        "  }\n" +
        "});"
}
var hd = document.getElementById("home");
hd.innerHTML = home();