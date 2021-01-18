

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
var p =urlParams.get('id');
console.log(p);


function thuonghieu(load) {
    var leak ="";
    if (load.length>=1){
        leak ="<div class=\"container\">\n" +
            "        <div class=\"col-md-12 text-center\">\n" +
            "            <h1 class=\"fonchu\"> "+load[0].tenth+"</h1>\n" +
            "            <div class=\"text-ct-3\"><a class=\"text-ct-3-1\" href=\"Home-thanh.html\">Trang chủ</a> / <a class=\"text-ct-3-1\" href=\"Tu_chucnang.html\">Shop</a> / <a class=\"text-ct-3-1\" href=\"tu_thuonghieu.html\">Thương Hiệu</a> /  SALES </div>\n" +
            "            <p class=\"text-sl\">Thương hiệu thể hiện nét đặc trưng ở việc kết hợp các thảo mộc trong y học phương Đông với công nghệ khoa học hiện đại; sử dụng nguyên liệu sạch và tinh túy nhất, cung cấp dưỡng chất và chữa lành cho những làn da nhạy cảm.</p>\n" +
            "        </div>\n" +
            "        <div class=\"article\">\n" +
            "            <div class=\"\">\n" +
            "                <div class=\"row\">\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/rovectin_2.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Skin Essentials Barrier Repair Multi Oil\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">760.000₫</span> 450.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN2.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Clean Ocean Moistureeeeee Sunscreen SPF50+ PA++++\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">460.000₫</span> 368.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN4.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Hyaluronic Aqua Moisturizer\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">450.000₫</span> 360.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN6.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Vitamin Brightening Ampoule\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">520.000₫</span> 390.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN7.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Bamboo Hydrating Ampoule\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">500.000₫</span> 400.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN8.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Cicaful Ampoule\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">500.000₫</span> 400.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN_9.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Chamomile Balanced Lotion\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">450.000₫</span> 360.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/BEPLAIN_12.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    Chamomile Balanced Toner\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">450.000₫</span> 360.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/ROUNDLAB5.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    1025 Dokdo Sun Screen SPF 50+ PA++++\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">600.000₫</span> 540.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-2 sale\">\n" +
            "                        <div class=\"ct-2-1\">\n" +
            "                            <div class=\"\"><a href=\"review_use.html?id=7\">\n" +
            "                                <img src=\"imgs/ROUNDLAB6.jpg\"></a>\n" +
            "                                <div class=\"tem-2\">\n" +
            "                                    Sale!\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"bordersp\"></div>\n" +
            "                            <div class=\"text-ct-4\">\n" +
            "                                <a href=\"review_use.html?id=7\" class=\"text-ct-4-1\">\n" +
            "                                    <b>"+load[0].tenth+"</b>\n" +
            "                                    <br/>\n" +
            "                                    1025 Dokdo Mist\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"price\">\n" +
            "                                <a class=\"price-1\" href=\"review_use.html?id=7\" data-hover=\"Mua hàng\">\n" +
            "                                    <b><span class=\"op05\" style=\"text-decoration: line-through;\">420.000₫</span> 378.000<span class=\"price-icon\">₫</span></b>\n" +
            "                                </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"heart\">\n" +
            "                                <a class=\"heart-1\" href=\"review_use.html?id=7\"><i class=\"far fa-heart\"></i></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>"
    }
    return leak;
}



function loaddata() {
    var ld = new XMLHttpRequest();
    ld.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText;

            var load=JSON.parse(rs);
            //in ra
            var data = document.getElementById("thuong2hieu");
            data.innerHTML = thuonghieu(load);
        }
    }
    ld.open("GET","http://localhost:5000/thuonghieu?id="+p+"");
    ld.send();
}
loaddata();