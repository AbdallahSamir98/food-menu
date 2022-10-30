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

//
//
//
//
//
//
//
//
//

let ingredArr = [];
async function ingredApi() {
  let ingredReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let ingredResult = await ingredReq.json();
  ingredArr = ingredResult.meals;
  getingred();
}

ingredApi();

function getingred() {
  let ingred = "";
  for (let i = 0; i < ingredArr.length; i++) {
    ingred += `

        <div class="col-md-3 ">
              <div class="areatext mn  px-2  rounded  text-center  text-white  m-3
              "
                onclick='filtApi("${ingredArr[i].strIngredient}")'

              >
                    <img src="../js/balanced-diet.png" class="w-100 rounded" alt="logo" srcset="" />
                <h2 class='text-success'>${ingredArr[i].strIngredient}</h2>
                <p class='ten-chars text-muted' >${ingredArr[i].strDescription}</p>
          </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".ingred").innerHTML = ingred;
}
getingred();
//
//
//
//
//
//
//
//

async function filtApi(a) {
  let ingredReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${a}`
  );
  let ingredResult = await ingredReq.json();
  ingredArr = ingredResult.meals;
  getFilter();
}

function getFilter() {
  let ingred = "";
  for (let i = 0; i < ingredArr.length; i++) {
    ingred += `

        <div class="col-md-3 ">
              <div class="areatext mn rounded  text-center  text-white  m-3"
              onclick='ingFilter("${ingredArr[i].idMeal}")'
              >

                <img src="${ingredArr[i].strMealThumb}" class="w-100  rounded-top" alt="" srcset="" />
                <h2 class='mt-3'>${ingredArr[i].strMeal}</h2>
          </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".ingred").innerHTML = ingred;
}
getFilter();

//
//
//
//
//

async function ingFilter(idMeal) {
  let ingredReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let ingredResult = await ingredReq.json();
  ingredArr = ingredResult.meals;
  displayIng();
}

function displayIng() {
  let des = "";
  for (let i = 0; i < ingredArr.length; i++) {
    des += `

        <div class="col-md-4 text-white ">
              <div class="desImg text-center">
                <img src="${ingredArr[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${ingredArr[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-white ">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${ingredArr[i].strInstructions}
                </p>

                <h6 class='text-white'>area: <span> ${ingredArr[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${ingredArr[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${ingredArr[i].strIngredient1}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${ingredArr[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${ingredArr[i].strIngredient12}</p>
            </div>

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${ingredArr[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${ingredArr[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${ingredArr[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".ingred").innerHTML = des;
  }
}
displayIng();
