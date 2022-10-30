// sliderNav
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
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

let areaArr = [];
async function areaApi(list) {
  let areaReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=${list}`
  );
  let areaResult = await areaReq.json();
  areaArr = areaResult.meals;
  getArea();
}

areaApi();

function getArea() {
  let area = "";
  for (let i = 0; i < areaArr.length; i++) {
    area += `

        <div class="col-md-3 ">
              <div class="areatext mn  text-center text-white  m-3"
              onclick="areaList('${areaArr[i].strArea}')"
              >
                <img src="../area.png" class="w-75" alt="" srcset="" />
                <h2>${areaArr[i].strArea}</h2>
          </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".area").innerHTML = area;
}
getArea();

// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

async function areaList(a) {
  let areaReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`
  );
  let areaResult = await areaReq.json();
  areaArr = areaResult.meals;
  filterArea(areaArr);
}

function filterArea() {
  let area = "";
  for (let i = 0; i < areaArr.length; i++) {
    area += `

        <div class="col-md-3 ">
              <div class="areatext mn  text-center text-white   m-3"
              onclick="areaFilter('${areaArr[i].idMeal}')"
              
              >
                <img src="${areaArr[i].strMealThumb}" class="w-100 rounded-top" alt="" srcset="" />
                <h2>${areaArr[i].strMeal}</h2>
          </div>
              </div>
            </div>
        `;
  }
  document.querySelector(".area").innerHTML = area;
}
filterArea();

//
//
//
//
//
//
//
async function areaFilter(idMeal) {
  let areaReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let areaResult = await areaReq.json();
  areaArr = areaResult.meals;
  displaya();
}

function displaya() {
  let des = "";
  for (let i = 0; i < areaArr.length; i++) {
    des += `

        <div class="col-md-4 text-white">
              <div class="desImg text-center">
                <img src="${areaArr[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${areaArr[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-white">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${areaArr[i].strInstructions}
                </p>

                <h6 class='text-white'>area: <span> ${areaArr[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${areaArr[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${areaArr[i].strIngredient1}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${areaArr[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${areaArr[i].strIngredient12}</p>
            </div>

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${areaArr[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${areaArr[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${areaArr[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".area").innerHTML = des;
  }
}
displaya();
