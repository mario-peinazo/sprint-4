// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map(directores => directores.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(directores => directores.director == director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const todasPelis = getMoviesFromDirector(array, director);

  let scoreTotal = todasPelis.map(peliculas => peliculas.score).reduce((valorAnt, valorAct) => valorAnt + valorAct);
  scoreTotal = scoreTotal / todasPelis.length;
  const result = parseFloat(scoreTotal.toFixed(2));
  
  console.log("EXERCICE 3 ->", result);
  return result; 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result =  array.map(peliculas => peliculas.title);
  result = result.sort().slice(0, 20);

  console.log("EXERCICE 4 ->", result);
  return result;  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const result = Array.from(array)

  result.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  console.log("EXERCICE 5 ->", result);
  return result;  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {
  const pelisMismoGen = array.filter(categorias => {

    let mismoGen = false;
    let valor2 = categoria.toLowerCase()

    categorias.genre.forEach(element => {
    
        let valor1 = element.toLowerCase() 

        if (valor1 === valor2) {
            mismoGen = true
        } 
    });

    if(mismoGen === true) {
        return true;
    } else {
        return false;
    }
  });

  let total = pelisMismoGen.length

  let scoreTotal = pelisMismoGen.map(peliculas => {
    
    if(peliculas.score === undefined || peliculas.score === '') {
        peliculas.score = 0;
        total -= 1;
    }
    return peliculas.score
  })
    
  scoreTotal = scoreTotal.reduce((valorAnt, valorAct) => valorAnt + valorAct);
  scoreTotal = scoreTotal / total;
  const result = parseFloat(scoreTotal.toFixed(2));

  console.log("EXERCICE 6 ->", result);
  return result; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const result = JSON.parse(JSON.stringify(array))

  result.map(times => {
  
    let tiempo = times.duration;

    if (!tiempo.includes('h')) {
      times.duration = parseFloat(tiempo)

    } else {
      let horas = parseFloat(tiempo.substring(0,1))
      let minutos = 0;

      if (tiempo.includes('m')) {
        minutos = parseFloat(tiempo.substring(2))
      }
      horas *= 60;
      times.duration = horas + minutos;
    }
    return times
  })

  console.log("EXERCICE 7 ->", result);
  return result; 
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let result = Array.from(array);
   
  result.filter(years => years.year == year);
  result.sort((a, b) => a.score - b.score).reverse();
  result.splice(1, result.length-1);

  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
