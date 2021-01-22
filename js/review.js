

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
var p =urlParams.get('id');
console.log(p);

function review(riviews){
    var revi = "";

    if(riviews.length>=0){
        revi = "<div class=\"container\">\n" +
            "    <div class=\"row\">\n" +
            "        <div class=\"col-md-6\">\n" +
            "            <div class=\"col-md-3\"></div>\n" +
            "            <div class=\"col-md-2\">\n" +
            "                <div class=\"indexing\">\n" +
            "                    <p class=\"indexing1 active\" onclick=\"active1(0)\">\n" +
            "\n" +
            "                        <img  src=\""+riviews[0].photo+"\" height=\"71\" width=\"47\"/>\n" +
            "                    </p>\n" +
            "                    <p class=\"indexing1\"onclick=\"active1(1)\">\n" +
            "\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-1\"></div>\n" +
            "            <div class=\"col-md-5\">\n" +
            "                <div class=\"photograp\">\n" +
            "                    <img style=\"display: block;\" class=\"photograp1\" src=\""+riviews[0].photo+"\" height=\"714\" width=\"470\"/>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-1\"></div>\n" +
            "        </div>\n" +
            "        <div class=\"col-md-6\">\n" +
            "            <div class=\"col-md-12\">\n" +
            "                <div class=\"thanhmenu\">\n" +
            "                    <ul>\n" +
            "                        <li><a class=\"thanhmenu1\" href=\"Home-thanh.html\">TRANG CHỦ</a></li>\n" +
            "                        <li><a class=\"thanhmenu1\" href=\"#\">/</a></li>\n" +
            "                        <li><a class=\"thanhmenu1\" href=\"Tu_chucnang.html\">SHOP</a></li>\n" +
            "                        <li><a class=\"thanhmenu1\" href=\"#\">/</a></li>\n" +
            "                        <li><a class=\"thanhmenu1\" href=\"Tu_chamsocda.html\">CHĂM SÓC </a> </li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "                <p class=\"cach\"></p>\n" +
            "                <p class=\"cach\"></p>\n" +
            "                <div class=\"name\">\n" +
            "                    <b>"+riviews[0].tenth+"</b>\n" +
            "                </div>\n" +
            "                <div class=\"tenphu\">\n" +
            "                    "+riviews[0].tensp+"\n" +
            "                </div>\n"
        // sửa giá
        if(riviews[0].giam==0){
            revi +="                <p class=\"cach\"></p>\n" +
                "                <span class=\"price-2\">"+riviews[0].gia+".000₫</span>\n" +
                "                <p class=\"cach\"></p>\n"
        }else{
            revi+="<p class=\"cach\"></p>\n" +
                "                    <span class=\"price-1\">"+riviews[0].giam+".000 ₫</span>\n" +
                "                    <span class=\"price-2\">"+riviews[0].gia+".000 ₫</span>\n" +
                "                    <p class=\"cach\"></p>"
        }



        revi+= "                <ul class=\"uses\">\n" +
            "                    <li>Kem chống nắng hóa học</li>\n" +
            "                    <li>SPF 50+ PA ++++ giúp chống nắng tối đa</li>\n" +
            "                    <li>50ML</li>\n" +
            "                    <li>Kết cấu mỏng nhẹ, dễ dàng hấp thụ trên da</li>\n" +
            "                    <li>Phù hợp với mọi loại da.</li>\n" +
            "                </ul>\n" +
            "                <p class=\"cach\"></p>\n"
        // khu vực số lượng
        if(riviews[0].soluong>0){
            revi += "<div class=\"demsoluong\">\n" +
                "                        <span class=\"word\"><a class=\"word-1\" href=\"#\"><b>-</b></a></span>\n" +
                "                        <span class=\"number \">1</span>\n" +
                "                        <span class=\"cong\"><a class=\"cong1\" href=\"#\"><b>+</b></a></span>\n" +
                "                        <button class=\"muahang\">Mua Hàng </button>\n" +
                "                    </div>"
        }else{
            revi += "                <div class=\"demsoluong\">\n" +
                "                    <div class=\"no-sale \"> Hết Hàng</div>\n" +
                "                </div>\n"
        }

        revi +=     "                <p class=\"cach\"></p>\n" +
            "                <div class=\"duoimuahang\">\n" +
            "                        <span class=\"duoimuahang1\">\n" +
            "                            <i class=\"far fa-heart\"></i>\n" +
            "                        </span>\n" +
            "                    <span class=\"duoimuahang2\">\n" +
            "                            ADD TO WISHLIST\n" +
            "                        </span>\n" +
            "                </div>\n" +
            "                <p class=\"cach\"></p>\n" +
            "                <div class=\"gachngan\">\n" +
            "                </div>\n" +
            "                <p class=\"cach\"></p>\n" +
            "                <div class=\"tukhoa\">\n" +
            "                    DANH MỤC: "+riviews[0].tendm+"\n" +
            "                </div>\n" +
            "                <div class=\"tukhoa\">\n" +
            "                    TỪ KHÓA: sữa rửa mặt,  tẩy trang\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"abc\" style=\"\">\n" +
            "            <span class=\"pointer active\" onclick=\"active(0)\">\n" +
            "                MÔ TẢ\n" +
            "            </span>\n" +
            "        <span class=\"pointer\" onclick=\"active(1)\">\n" +
            "                THÔNG TIN BỔ SUNG\n" +
            "            </span>\n" +
            "        <span class=\"pointer\" onclick=\"active(2)\">\n" +
            "                ĐÁNH GIÁ             </span>\n" +
            "    </div>\n" +
            "    <div class=\"showoutout-container\">\n" +
            "        <div class=\"output fade1\" style=\"display: block;\">\n" +
            "            <div class=\"col-md-2\"></div>\n" +
            "            <div class=\"col-md-8\">\n" +
            "                <p>Kem chống nắng acwell dermild fresh sun control essence</p>\n" +
            "\n" +
            "                <p>Kem chống nắng acwell Dermild Fresh Sun Control Essence SPF50 với kết cấu mỏng nhẹ, dễ dàng hấp thụ trên da hơn. Từ đó khả năng chống lại ánh nắng mặt trời hiệu quả hơn. Đồng thời kem chống nắng acwell còn giúp da giữ được độ ẩm.</p>\n" +
            "\n" +
            "                <p>Với chiết xuất rau sam, rau mát và dầu hạt đào, tinh chất chống nắng giúp da kháng khuẩn, chống oxy hóa, đồng thời làm giảm nếp nhăn, phục hồi da yếu.</p>\n" +
            "\n" +
            "                <p>Acwell Dermild Fresh Sun Control Essence SPF50 phù hợp với mọi loại da.</p>\n" +
            "\n" +
            "                <p>Tham khảo thêm kem chống nắng dạng gel cho da dầu Acwell Aqua Capsule Sun Control Gel</p>\n" +
            "\n" +
            "                <p>Tham khảo thêm cách lựa chọn kem chống nắng đúng tại đây.</p>\n" +
            "\n" +
            "                <h3>Cách sử dụng:</h3>\n" +
            "                <p>Sử dụng ở bước cuối cùng của quy trình dưỡng da. Lấy một lượng sản phẩm vừa đủ rồi chấm nhẹ lên các vết thâm, sẹo mụn. Vỗ nhẹ để sản phẩm thấm vào da.</p>\n" +
            "\n" +
            "                <h3>Lưu ý</h3>\n" +
            "                <p>1. Không sử dụng trên vùng da hở hoặc tổn thương.</p>\n" +
            "\n" +
            "                <p>2. Ngừng sử dụng và hỏi ý kiến bác sĩ/chuyên gia nếu có bất kỳ triệu chứng bất thường hoặc tác dụng phụ như mẩn đỏ, phát ban và ngứa.</p>\n" +
            "\n" +
            "                <p> 3. Khi sử dụng sản phẩm này, tránh tiếp xúc vớ mắt. Khi sản phẩm dính vào mắt, rửa thật kĩ với nước.</p>\n" +
            "\n" +
            "                <p>4. Để xa tầm với của trẻ em.</p>\n" +
            "\n" +
            "                <p>5. Nếu nuốt phải sản phẩm, xin trợ giúp y tế hoặc liên hệ với Cơ sở y tế gần nhất.</p>\n" +
            "\n" +
            "                <p>6. Bảo quản nơi khô ráo, thoáng mát và tránh ánh sáng trực tiếp chiếu vào sản phẩm.</p>\n" +
            "\n" +
            "\n" +
            "\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"output fade1\">\n" +
            "            <div class=\"range \">\n" +
            "                <div class=\"col-md-2\"></div>\n" +
            "                <div class=\"col-md-9\">\n" +
            "                    <div class=\"col-md-3\">Thương hiệu</div>\n" +
            "                    <div class=\"col-md-9\">\n" +
            "                        <p>"+riviews[0].tenth+"</p>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-3\">Loại da</div>\n" +
            "                    <div class=\"col-md-9\">\n" +
            "                        <p>Mọi loại da</p>\n" +
            "                        <p>Caprylic/capric triglyceride, caprylic/capric/succinic triglyceride, helianthus annuus (sunflower) seed oil, squalane, citrus aurantium amara (bitter orange) flower oil, anthemis nobilis flower oil, citrus</p>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-md-3\">Bảng thành phần  </div>\n" +
            "                    <div class=\"col-lg-9\">\n" +
            "                        Water, Ethanolamine, Ethylhexyl Salicylate, Homosalate, Cyclopentasiloxane, Dibutyl Adipate, Dipropylene Glycol, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Niacinamide, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Polysilicone-15, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Butylene Glycol, Methyl Methacrylate Crosspolymer, Malt Extract, Vanilla Planifolia (Vanilla) Extract, Sea Cucumber Extract, Peucedanum Graveolens (Dill) Extract, Rosmarinus Officinalis (Rosemary) Extract, Asparagus Lucidus Root Extract, Hedera Helix (Ivy) Extract, Rehmannia Chinensis Root Extract, Carthamus Tinctorius (Safflower) Flower Extract, Solidago Virgaurea (Goldenrod) Extract, Astragalus Sinicus Extract, Glycyrrhiza Glabra (Licorice) Leaf Extract, Pueraria Lobata Root Extract, Ulmus Campestris (Elm) Extract, Oenothera Biennis (Evening Primrose) Root Extract, Peat Extract, Styrene/Acrylates Copolymer, Ceteth-10, Tromethamine, Decyl Glucoside, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Carbomer, Propanediol, Pentylene Glycol, Dimethicone/Vinyl Dimethicone Crosspolymer, PEG-10 Dimethicone, Propylene Glycol, Xanthan Gum, Hexylglycerin, Fragrance, Phenoxyethanol\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"output fade1\">\n" +
            "            <div class=\"row\">\n" +
            "                <div class=\"col-md-2\"></div>\n" +
            "                <div class=\"col-md-9\">\n" +
            "                    <h4 >Đánh giá </h4>\n" +
            "                    <p>Chưa có đánh giá </p>\n" +
            "                    <h3>\n" +
            "                        Hãy là người đầu tiên nhận xét “"+riviews[0].tensp+"”\n" +
            "                    </h3>\n" +
            "                    <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>\n" +
            "                    <p>Đánh giá của  *</p>\n" +
            "                    <div class=\"stars\">\n" +
            "                        <form action=\"\">\n" +
            "                            <input class=\"star star-5\" id=\"star-5\" type=\"radio\" name=\"star\"/>\n" +
            "                            <label class=\"star star-5\" for=\"star-5\"></label>\n" +
            "                            <input class=\"star star-4\" id=\"star-4\" type=\"radio\" name=\"star\"/>\n" +
            "                            <label class=\"star star-4\" for=\"star-4\"></label>\n" +
            "                            <input class=\"star star-3\" id=\"star-3\" type=\"radio\" name=\"star\"/>\n" +
            "                            <label class=\"star star-3\" for=\"star-3\"></label>\n" +
            "                            <input class=\"star star-2\" id=\"star-2\" type=\"radio\" name=\"star\"/>\n" +
            "                            <label class=\"star star-2\" for=\"star-2\"></label>\n" +
            "                            <input class=\"star star-1\" id=\"star-1\" type=\"radio\" name=\"star\"/>\n" +
            "                            <label class=\"star star-1\" for=\"star-1\"></label>\n" +
            "                        </form>\n" +
            "                    </div>\n" +
            "                    <form action='#' method='get'>" +
            "                    <p>  ĐÁNH GIÁ CỦA BẠN *</p>\n" +
            "                    <p class=\"form-floating\">\n" +
            "                        <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextarea2\" style=\"height: 100px\" required></textarea>\n" +
            "                    </p>\n" +
            "                    <p>TÊN*</p>\n" +
            "                    <p class=\"col\">\n" +
            "                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" aria-label=\"First name\" required>\n" +
            "                    </p>\n" +
            "                    <p>EMAIL*</p>\n" +
            "                    <div>\n" +
            "                        <input type=\"email\" class=\"form-control\" placeholder=\"Email \" id=\"inputEmail4\" required>\n" +
            "                    </div>\n" +
            "                    <div class=\"Submit \">\n" +
            "                        <button type=\"submit\" class=\"btn btn-primary\">Gửi đi  </button>\n" +
            "                    </div>\n" +
            "                    </form>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>\n"

    }else {
        revi = "    <div class=\"section\">\n" +
            "        <div class=\"container text-center\">\n" +
            "            <div class=\" fontchu\">\n" +
            "                <h1>Lỗi tìm kiếm</h1>\n" +
            "            </div>\n" +
            "            <div class=\"fontchunho\">\n" +
            "                <i class=\"far fa-10x fa-sad-tear\"></i>\n" +
            "                <p style=\"padding-top: 50px\">Không tìm thấy sản phẩm.</p>\n" +
            "                <a href=\"Home-thanh.html\"><p class=\"return\">Quay trở lại trang chủ</p></a>\n" +
            "\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n"


    }


    return revi;
}

function loaddata() {
    var ld = new XMLHttpRequest();
    ld.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText;

            var load=JSON.parse(rs);
            //in ra
            var data = document.getElementById("review");
            data.innerHTML = review(load);
        }
    }
    ld.open("GET","http://t2008m04.herokuapp.com/allsearch?id="+p+"");
    ld.send();
}
loaddata();
