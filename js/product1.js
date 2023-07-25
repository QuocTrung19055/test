var productApi = 'http://localhost:3000/product'; 

function start() {
    getProduct(renderProduct);
}
start();    

function getProduct(callBack) {
    fetch(productApi)
      .then(function(response) {
            return response.json();
        })
      .then(callBack);
}
// RENDER PRODUCT
function renderProduct(product) {
    var listCourses = document.querySelector('#banchay'); //Render
    var html = product.map(function(product) {
        return `
        <div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                <div sp-items-${product.id} class="card product p-2" styte="width:auto" >
                    <a><img class="proo card-img-top image" src="${product.img}" alt="..."></a>
                    <div class="card-title product-title text-center h5 name" ><a href="#"  class="proo">${product.name}</a></div>
                    <div class="card-title product-title text-center h5 price"><a href="#"  class="proo">${product.price}</a></div>
                    <span class="text-center add-to-cart add-cart btn btn-outline-warning"  onclick="buyProduct(this)">
                        <a>
                            <i class="fas fa-cart-plus"></i>
                        </a>
                    </span>
                </div>
            </div>
        `;
    });
    listCourses.innerHTML = html.join('');
}

async function addProduct() {
    const object = {
        "id": "SP10",
        "name": "Iphone 14 Plus",
        "img": "./img/4.png",
        "price": 564000
    };
    fetch(productApi, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(object)
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}
// EDIT SP
async function editPost(id) {
    const object = {
        "id": "SP10",
        "name": "Iphone 14 Plus",
        "img": "./img/4.png",
        "price": 564000
    };

    console.log(productApi + `/${id}`);
    fetch(productApi + `/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(object)
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })


}
// Xoa SP
async function deletePost(id) {
    let name = document.getElementById("name").value;
    const object = {
        "id": name,
        "name": "Iphone 14 Plus",
        "img": "./img/4.png",
        "price": 564000
    };

    console.log(productApi + `/${id}`);
    fetch(productApi + `/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "DELETE"
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

}





   
    

