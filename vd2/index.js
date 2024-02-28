var man = [
    {
        id: 1,
        name: "Quần tây nam",
        code: "TC01345",
        price: "250.000",
        image: "https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-vai-nam-10f21pfo001cr1_black_1__2.jpg",
    },
    {
        id: 2,
        name: "Quần babi",
        code: "TC013442",
        price: "550.000",
        image: "https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-vai-nam-10f21pfo001cr1_black_1__2.jpg",
    },
    {
        id: 3,
        name: "Quan short",
        code: "TC0134342",
        price: "130.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-short-nam-4-10s24psh029-black-_1__1_jpg.webp",
    },
    {
        id: 4,
        name: "Quần Tây",
        code: "TC013324",
        price: "250.000",
        image: "https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-vai-nam-10f21pfo001cr1_black_1__2.jpg",
    },
];

var woment = [
    {
        id: 1,
        name: "Váy nữ sinh",
        code: "TC0334545",
        price: "120.000",
        image: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
    },
    {
        id:2,
        name: "Quần jean nữ",
        code: "TC013672",
        price: "520.000",
        image: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
    },
    {
        id:3,
        name: "Đầm âu nữ  ",
        code: "TC01343580",
        price: "230.000",
        image: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
        },
    {
        id:4,
        name: "Quần jean dài ống rộng",
        code: "TC013324",
        price: "250.000",
        image: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
    },
];

function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}