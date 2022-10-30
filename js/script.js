// sliderNav
let hiddenSlide = $(".hiddenSlide").outerWidth();

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

// api
let arr = [];
async function firstApi() {
  let req = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let result = await req.json();
  arr = result.meals;
  displayApi();
}

firstApi();

function displayApi() {
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    html += `
    <div class="col-md-3 la ">
              <div
              onclick='getDes(${arr[i].idMeal})'
                class="content  ab w-100 m-3 overflow-hidden rounded position-relative"
              >

                <div class="imagecontent ">
                <a href="">
                  <img src="${arr[i].strMealThumb}" class=" w-100" alt="" />
    
</a>
                </div>
                <div class="textcontent d-flex align-items-center">
                <h2><a href="">${arr[i].strMeal}</a></h2>

                </div>
              </div>
            </div>
    
    `;
    document.querySelector(".display").innerHTML = html;
  }
}
displayApi();

async function getDes(idMeal) {
  let req = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  let result = await req.json();
  arr = result.meals;
  displayDes();
}

function displayDes() {
  let des = "";
  for (let i = 0; i < arr.length; i++) {
    des += `
        
        <div class="col-md-4 text-white la">
              <div class="desImg text-center">
                <img src="${arr[i].strMealThumb}" class="w-100" alt="" />
                <h2 class="mt-4">${arr[i].strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8 text-white la">
              <div class="desText">
                <h3 class=''>Instrcation</h3>
                <p>
                  ${arr[i].strInstructions}
                </p>
                
                <h6 class='text-white'>area: <span> ${arr[i].strArea}</span></h6>
                <h6 class='mb-3'>category: <span>${arr[i].strCategory}</span></h6>
                <h6 class='as'>recipes:
                </h6>
                <div>
                <p class="bg-secondary rounded d-inline-block ms-2  p-1">${arr[i].strIngredient1}</p> 
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient2}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient3}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient4}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient5}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient6}</p>
        </div>
        <div>
                            <p class="bg-secondary d-inline-block ms-2 rounded p-1">${arr[i].strIngredient7}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient8}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient10}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient11}</p>
                    <p class="bg-secondary rounded d-inline-block ms-2 p-1">${arr[i].strIngredient12}</p>        
            </div>
                

                <h6>tags: </h6>
                <p class="bg-secondary rounded d-inline-block p-2">${arr[i].strTags}</p>
              </div>
              <p class="mt-5">
                <a href="${arr[i].strSource}" class="rounded bg-success p-2 me-2 text-white"
                  >source</a
                >
                <a href="${arr[i].strYoutube}" class="rounded bg-danger p-2 text-white">youtube</a>
              </p>
            </div>
        `;
    document.querySelector(".display").innerHTML = des;
  }
}
displayDes();
