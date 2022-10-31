let searchName = document.querySelector(".searchName");
let searchLetter = document.querySelector(".searchLetter");
var hiddenSlide = $(".hiddenSlide").innerWidth();

let searchArr = [];

async function searchApi(sn) {
  let serchReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${sn}`
  );
  let searchResult = await serchReq.json();
  searchArr = searchResult.meals;
  displaySearchApi(sn);
}
searchName.addEventListener("keyup", function () {
  searchApi(this.value);
});

function displaySearchApi() {
  let sear = "";
  for (let i = 0; i < searchArr.length; i++) {
    sear += `
    <div class="col-md-3 wow fadeIn " data-wow-duration="1s"data-wow-delay="0s"">
              <div
              onclick='getDes(${searchArr[i].idMeal})'
                class="content w-100 m-3 overflow-hidden rounded position-relative"
              >
                <div class="imagecontent ">
                  <img src="${searchArr[i].strMealThumb}" class="w-100" alt="" />
                </div>
                <div class="textcontent d-flex align-items-center">
                  <h2>${searchArr[i].strMeal}</h2>
                </div>
              </div>
            </div>

    `;
    document.querySelector(".se").innerHTML = sear;
  }
}

displaySearchApi();

// search letter
let arrLetter = [];
async function letterApi(sl) {
  let letterReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${sl}`
  );
  let letterResult = await letterReq.json();
  arrLetter = letterResult.meals;
  displayLetterApi(sl);
}
searchLetter.addEventListener("keyup", function () {
  letterApi(this.value);
});

function displayLetterApi() {
  let lear = "";
  for (let i = 0; i < arrLetter.length; i++) {
    lear += `
    <div class="col-md-3 wow fadeIn " data-wow-duration=".5s"data-wow-delay=".1s"">
              <div
              onclick='getDes(${arrLetter[i].idMeal})'

                class="content w-100 m-3 overflow-hidden rounded position-relative"
              >
                <div class="imagecontent ">
                  <img src="${arrLetter[i].strMealThumb}" class="w-100" alt="" />
                </div>
                <div class="textcontent d-flex align-items-center">
                  <h2>${arrLetter[i].strMeal}</h2>
                </div>
              </div>
            </div>

    `;
    document.querySelector(".se").innerHTML = lear;
  }
}
displayLetterApi();

// ---------------------------------------
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

// ------------------------------------------------------------------------
async function getDes(idMeal) {
  let serchReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let searchResult = await serchReq.json();
  searchArr = searchResult.meals;
  displayDes();
}

function displayDes() {
  let des = "";
  for (let i = 0; i < searchArr.length; i++) {
    des += `
        
        <div class="col-md-4 text-white">
              <div class="desImg text-center ">
                <img src="${searchArr[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${searchArr[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-white">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${searchArr[i].strInstructions}
                </p>
                
                <h6 class='text-white'>area: <span> ${searchArr[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${searchArr[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${searchArr[i].strIngredient1}</p> 
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${searchArr[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${searchArr[i].strIngredient12}</p>        
            </div>
                

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${searchArr[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${searchArr[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${searchArr[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".se").innerHTML = des;
  }
}
displayDes();

// ---------------------------------------------------------------------------------
async function getDes(idMeal) {
  let letterReq = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let letterResult = await letterReq.json();
  arrLetter = letterResult.meals;
  displayDes();
}

function displayDes() {
  let des = "";
  for (let i = 0; i < arrLetter.length; i++) {
    des += `
        
        <div class="col-md-4 text-white wow slideInLeft " data-wow-duration="2s"data-wow-delay="0s"">
              <div class="desImg ">
                <img src="${arrLetter[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${arrLetter[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-start text-white wow slideInLeft " data-wow-duration="2s"data-wow-delay="0s"">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${arrLetter[i].strInstructions}
                </p>
                
                <h6 class='text-white'>area: <span> ${arrLetter[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${arrLetter[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${arrLetter[i].strIngredient1}</p> 
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${arrLetter[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arrLetter[i].strIngredient12}</p>        
            </div>
                

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${arrLetter[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${arrLetter[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${arrLetter[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".se").innerHTML = des;
  }
}
displayDes();
