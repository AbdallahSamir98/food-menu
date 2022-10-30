let cattArr = [];
async function cattApi() {
  let cattReq = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let cattResult = await cattReq.json();
  cattArr = cattResult.categories;
  getCatt();
}
cattApi();

function getCatt() {
  let catt = "";
  for (let i = 0; i < cattArr.length; i++) {
    catt += `

        <div class="col-md-3">
              <div
              onclick ="filterApi('${cattArr[i].strCategory}')"
                class="content w-100 m-3 overflow-hidden rounded position-relative"
              >
                <div class="imagecontent">
                  <img src="${cattArr[i].strCategoryThumb}" class="w-100" alt="" />
                </div>
                <div class="textcontent text-center text-black">
                  <h2>${cattArr[i].strCategory} </h2>
                  <p class="">
                        ${cattArr[i].strCategoryDescription}
                  </p>
                </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".catt").innerHTML = catt;
}
getCatt();
// ------------------------------------
var hiddenSlide = $(".hiddenSlide").innerWidth();
$(".open").click(function () {
  if ($(".slide").css("left") == "0px") {
    $(".hiddenSlide").animate({ left: "0%" }, 1000, function () {
      $(".list-unstyled").css("transform", "translateY(0%)");
    });

    $(".slide").animate({ left: hiddenSlide }, 1000);
    document.querySelector(".open").innerHTML = `
          <i class="fa-solid fa-xmark fa-2x"></i>

    `;
  } else {
    $(".hiddenSlide").animate({ left: -hiddenSlide }, 1000, function () {
      $(".list-unstyled").css("transform", "translateY(-100%)", 500);
    });
    $(".slide").animate({ left: 0 }, 1000);
    document.querySelector(".open").innerHTML = `
          <i class="fa-solid fa-bars fa-2x"></i>

    `;
  }
});

// loading page

$(document).ready(function () {
  $(".loadingLayer").fadeOut(1000, function () {
    $("document,body").css("overflowY", "visible");
  });
});

// ------------------------------------------

async function filterApi(a) {
  let cattReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${a}`
  );
  let cattResult = await cattReq.json();
  cattArr = cattResult.meals;
  getFilter();
}

function getFilter() {
  let catt = "";
  for (let i = 0; i < cattArr.length; i++) {
    catt += `

        <div class="col-md-3">
              <div
                class="content w-100 m-3 overflow-hidden rounded position-relative"
              onclick='cat("${cattArr[i].idMeal}")'

              >
                <div class="imagecontent">
                  <img src="${cattArr[i].strMealThumb}" class="w-100" alt="" />
                </div>
                <div class="textcontent text-center text-black">
                  <h2>${cattArr[i].strMeal} </h2>
                  <p class="">
                  </p>
                </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".catt").innerHTML = catt;
}
getFilter();

//  ----------------------------------------------------------
//
//
//
//
//
//
//
//
//
//
async function cat(idMeal) {
  let cattReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let cattResult = await cattReq.json();
  cattArr = cattResult.meals;
  displayc();
}

function displayc() {
  let des = "";
  for (let i = 0; i < cattArr.length; i++) {
    des += `

        <div class="col-md-4 text-white text-center">
              <div class="desImg text-center">
                <img src="${cattArr[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${cattArr[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-white">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${cattArr[i].strInstructions}
                </p>

                <h6 class='text-white'>area: <span> ${cattArr[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${cattArr[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${cattArr[i].strIngredient1}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${cattArr[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${cattArr[i].strIngredient12}</p>
            </div>

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${cattArr[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${cattArr[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${cattArr[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".catt").innerHTML = des;
  }
}
displayc();
